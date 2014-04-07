//  CodePen Evaluation License
//  
//  Copyright (c) 2013 Famous Industries, Inc.
//  
//  Non-sublicensable permission is hereby granted, free of charge, to any person obtaining a 
//  copy of this software and associated documentation files directly from codepen.io (the 
//  "Software"), solely to internally make and internally use copies of the Software to test, 
//  explore, and evaluate the Software solely in such personâ€™s non-commercial, non-
//  production environments, provided that the above copyright notice and this permission 
//  notice shall be included in all copies or substantial portions of the Software. 
//  
//  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, 
//  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF 
//  MERCHANTABILITY, FITNESS FOR A ARTICULAR PURPOSE AND 
//  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT 
//  HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER 
//  IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR 
//  IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE 
//  SOFTWARE.
//

Famous(function(require, exports, module)
{      
    var Engine = require('famous/Engine');        
    var FamousSurface = require('famous/Surface'); 
    var Modifier = require('famous/Modifier'); 
    var FM = require('famous/Matrix');
    var RenderNode = require('famous/RenderNode');
    var Interface = require('core/Interface');
    var Scene = require('famous-scene/Scene');  
    var Camera = require('famous-gl/Camera'); 
    var Animation = require('famous-animation/Animation'); 
    var AnimationEngine = require('famous-animation/AnimationEngine');     
    var Easing = require('famous-animation/Easing');     
    var ColorPalettes = require('famous-color/ColorPalettes');     
    var ColorPalette = require('famous-color/ColorPalette');     
    var Color = require('famous-color/Color');     
    var Utils = require('famous-utils/Utils');     
    var Box = require('famous-generative/Box'); 
    var RegisterEasing = require('famous-animation/RegisterEasing');      
     
 
    function ArtScene(camera) 
    {
        Scene.apply(this);
        this.cam = new Camera();
        this.cam.setDistance(-600); 
        
        this.twoPI = Math.PI*2.0; 
        this.thetaCamera = 0.0; 
        this.speedCamera = 0.01; 
        this.doCameraRotation = true; 
        this.resetCamera = false; 
        
        this.alpha = .95; 
        this.number = 2.0;         
        if(Utils.isMobile())
        {
            this.number = 1.0; 
        }
        this.scaling = .6; 
        this.size = 200.0; 
        this.boxes = []; 
        this.palettes = ColorPalettes;   
        this.paletteIndex = 29; 
        this.palette = this.palettes.getPalette(this.paletteIndex);                    
        this.colorIndex = 0; 
        this.center = []; 
        this.top = []; 
        this.bottom = []; 
        this.front = []; 
        this.back = []; 
        this.right = []; 
        this.left = []; 
        this.modifiers = [];         
        this.osc = 0.0; 
        this.theta = 0.0;
        this.center = new Box(this.size,this.size,this.size); 
        this.setBoxColor(this.center);
        this.boxes.push(this.center);         
        this.top = this.addBoxes(this.number); 
        this.bottom = this.addBoxes(this.number); 
        this.front = this.addBoxes(this.number); 
        this.back = this.addBoxes(this.number); 
        this.right = this.addBoxes(this.number); 
        this.left = this.addBoxes(this.number);         
        this.size = 300.0; 
        
        this.offsetRight = 275.0; 
        this.offsetLeft = 275.0; 
        this.offsetTop = 275.0; 
        this.offsetBottom = 275.0; 
        this.offsetFront = 275.0; 
        this.offsetBack = 275.0; 
        this.initUI();
        this.parentUI = new Interface();
        this.parentUI.setCurrentObject( this );
        Engine.pipe( this.parentUI );
        
        var ui = this.parentUI.getUI(); 
        var autoUI = ui.getUI(); 
        this.uiElementsMap = autoUI.getUIElementsMap();      
        
        this.initAnimation(); 
    }
    ArtScene.prototype = Object.create(Scene.prototype);
    ArtScene.prototype.constructor = ArtScene;        
    ArtScene.DEFAULT_OPTIONS = {};     
    
    ArtScene.prototype.initUI = function()
    {
        this.autoUI = [
            {
                type: 'label',
                uiOptions: { 
                    content: 'TENTACLES: LOOK MOM NO WEBGL!'
                }
            }, 
            {
                type: 'toggle',                 
                callback: this.animate.bind(this), 
                uiOptions: {
                    defaultValue: true,                     
                    name: 'ANIMATE'
                } 
            },
        ];
        var originalOffset = this.size; 
        var bounds = [0.0, originalOffset*2.0]; 
        this.addSlider(bounds, this.offsetFront, 'OFFSET FRONT', (function(arg) { this.offsetFront = arg; }).bind(this)); 
        this.addSlider(bounds, this.offsetBack, 'OFFSET BACK', (function(arg) { this.offsetBack = arg; }).bind(this)); 
        this.addSlider(bounds, this.offsetLeft, 'OFFSET LEFT', (function(arg) { this.offsetLeft = arg; }).bind(this)); 
        this.addSlider(bounds, this.offsetRight, 'OFFSET RIGHT', (function(arg) { this.offsetRight = arg; }).bind(this)); 
        this.addSlider(bounds, this.offsetTop, 'OFFSET TOP', (function(arg) { this.offsetTop = arg; }).bind(this)); 
        this.addSlider(bounds, this.offsetBottom, 'OFFSET BOTTOM', (function(arg) { this.offsetBottom = arg; }).bind(this)); 
        this.addSlider([-Math.PI,Math.PI], this.osc, 'ROTATION', (function(arg) { this.osc = arg; }).bind(this)); 
        this.addSlider([0.0,1.0], this.scaling, 'SCALE', (function(arg) { this.scaling = arg; }).bind(this)); 
        this.addSlider([0.0,this.palettes.getCount()], this.colorIndex, "COLOR PALETTE", (function(arg) { this.setColorPalette(Math.floor(arg)); }).bind(this)); 
        this.addSlider([0.0,1.0], this.alpha, 'ALPHA', (function(arg) { this.alpha = arg; }).bind(this)); 
        this.addSlider([0.0,.075], this.speedCamera, 'SPEED', (function(arg) {
            this.speedCamera = arg; 
            if(this.speedCamera < 0.0001) {
                this.doCameraRotation = false; 
                this.resetCamera = true; 
            }
            else {
                this.doCameraRotation = true; 
            }
        }).bind(this)); 
    }; 
    ArtScene.prototype.addSlider = function(range, value, name, callback)
    {
        this.autoUI.push({
            type: 'slider',
            option: 'value',                    
            callback: callback, 
            uiOptions: {
                defaultValue: value,  
                range: range,
                name: name,
            }
        }); 
    }; 
    
    ArtScene.prototype.initAnimation = function()
    {
        var originalOffset = this.size; 
        var bounds = [0.0, originalOffset*2.0]; 
        var offsetTop = this.uiElementsMap['OFFSET TOP']; 
        var offsetBottom = this.uiElementsMap['OFFSET BOTTOM']; 
        var offsetLeft = this.uiElementsMap['OFFSET LEFT']; 
        var offsetRight = this.uiElementsMap['OFFSET RIGHT']; 
        
        var offsetFront = this.uiElementsMap['OFFSET FRONT']; 
        var offsetBack = this.uiElementsMap['OFFSET BACK']; 
        var osc = this.uiElementsMap['ROTATION']; 
        var engine = new AnimationEngine(); 
        var options = {                    
            name: 'circle',
            engine: engine,                                        
            duration: 200.0, 
            delay: 0.0, 
            loop: false,         
            reverseUponLoop: true
        }; 
        var easingFn = Easing.inOutQuadNorm; 
        var extrudeDistance = 200.0; 
        var animationTop = new Animation(options);     
        var animationBottom = new Animation(options); 
        var animationLeft = new Animation(options); 
        var animationRight = new Animation(options); 
        var animationFront = new Animation(options); 
        var animationBack = new Animation(options); 
        animationTop.setNext(animationBottom); 
        animationBottom.setNext(animationLeft);
        animationLeft.setNext(animationRight);
        animationRight.setNext(animationFront); 
        animationFront.setNext(animationBack); 
        animationBack.setNext(animationTop);   
        animationTop.update = function() {     
            offsetTop.set(originalOffset + easingFn(this.getTime())*extrudeDistance);             
        }
        animationBottom.update = function() {                       
            offsetBottom.set(originalOffset + easingFn(this.getTime())*extrudeDistance);        
        }
        animationLeft.update = function() {                   
            offsetLeft.set(originalOffset + easingFn(this.getTime())*extrudeDistance);        
        }
        animationRight.update = function() {               
            offsetRight.set(originalOffset + easingFn(this.getTime())*extrudeDistance);       
        }
        animationFront.update = function() {               
            offsetFront.set(originalOffset + easingFn(this.getTime())*extrudeDistance);        
        }
        animationBack.update = function() {                       
            offsetBack.set(originalOffset + easingFn(this.getTime())*extrudeDistance);        
        }
        options.duration = 2400.0; 
        options.loop = true;
        options.reverseUponLoop = true;      
        var animationRotation = new Animation(options);
        animationRotation.update = function() {                       
            osc.set(Easing.inOutCubic(this.getTime(), 0, Math.PI*.5, 1.0)); 
        }
        animationTop.start();   
        animationRotation.start(); 
        this.animations = []; 
        this.animations.push(
            animationTop, 
            animationBottom, 
            animationBack, 
            animationFront, 
            animationRight, 
            animationLeft, 
            animationRotation);             
    }; 
    ArtScene.prototype.addBoxes = function(num)
    {
        var result = []; 
        for(var i = 0; i < num; i++)
        {
            var box = new Box(this.size,this.size,this.size);                           
            this.setBoxColor(box);          
            this.boxes.push(box);    
            result[i] = box;                         
        }
        return result; 
    }; 
    ArtScene.prototype.setColorPalette = function(index)
    {        
        this.paletteIndex = index; 
        this.palette = this.palettes.getPalette(this.paletteIndex);                    
        this.colorIndex = 0; 
        for(var i = 0; i < this.boxes.length; i++)
        {
            this.setBoxColor(this.boxes[i]); 
        }
    }; 
    ArtScene.prototype.setBoxColor = function(box)
    {        
        var clr = this.palette.getColor(this.colorIndex++); 
        box.setFrontColor(clr.r, clr.g, clr.b, 1.0); 
        clr = this.palette.getColor(this.colorIndex++); 
        box.setBackColor(clr.r, clr.g, clr.b, 1.0);             
        clr = this.palette.getColor(this.colorIndex++); 
        box.setTopColor(clr.r, clr.g, clr.b, 1.0); 
        clr = this.palette.getColor(this.colorIndex++); 
        box.setBottomColor(clr.r, clr.g, clr.b, 1.0); 
        clr = this.palette.getColor(this.colorIndex++); 
        box.setLeftColor(clr.r, clr.g, clr.b, 1.0); 
        clr = this.palette.getColor(this.colorIndex++); 
        box.setRightColor(clr.r, clr.g, clr.b, 1.0); 
    }; 
    ArtScene.prototype.update = function()
    {                
        if(this.doCameraRotation)
        {
            this.thetaCamera+=this.speedCamera; 
            if(this.thetaCamera > this.twoPI)
            {
                this.thetaCamera -= this.twoPI;                 
            }
            this.cam.applyEulerRotation(this.thetaCamera, -this.thetaCamera, -this.thetaCamera*2.0); 
        }
        else if(this.resetCamera)
        {
            this.thetaCamera*=.9; 
            this.cam.applyEulerRotation(this.thetaCamera, -this.thetaCamera, -this.thetaCamera*2.0); 
            if(this.thetaCamera < 0.0001)
            {
                this.resetCamera = false;     
            }            
        }
    }; 
    ArtScene.prototype.render = function() 
    {                    
        var result = [];     
        result.push({
            transform: FM.multiply(FM.identity, FM.rotate(this.osc, this.osc, 0.0)), 
            opacity: this.alpha, 
            target: this.center.render()
        });  
    
        this.renderRight(result); 
        this.renderLeft(result); 
        this.renderTop(result); 
        this.renderBottom(result); 
        this.renderFront(result); 
        this.renderBack(result); 
        return [{
            origin: [0.5, 0.5],             
            transform: this.cam.getMatrix(), 
            opacity: 1.0, 
            target: result
        }, this.node.render()];
    }; 
    ArtScene.prototype.renderRight = function(result)
    {
        var mtx = FM.identity;          
        for (var i = 0; i < this.right.length; i++) 
        {        
            mtx = FM.move(mtx, [this.offsetRight, 0, 0]);  
            mtx = FM.multiply(mtx, FM.rotate(this.osc, this.osc, 0.0)); 
            mtx = FM.multiply(mtx, FM.scale(this.scaling, this.scaling, this.scaling));         
            result.push({
                transform: mtx, 
                opacity: this.alpha, 
                target: this.right[i].render()
            });  
        }        
    }; 
    ArtScene.prototype.renderLeft = function(result)
    {
        var mtx = FM.identity;          
        for (var i = 0; i < this.left.length; i++) 
        {        
            mtx = FM.move(mtx, [-this.offsetLeft, 0, 0]);  
            mtx = FM.multiply(mtx, FM.rotate(this.osc, this.osc, 0.0)); 
            mtx = FM.multiply(mtx, FM.scale(this.scaling, this.scaling, this.scaling)); 
            result.push({
                transform: mtx, 
                opacity: this.alpha, 
                target: this.left[i].render()
            });  
        }        
    }; 
    ArtScene.prototype.renderTop = function(result)
    {
        var mtx = FM.identity;          
        for (var i = 0; i < this.top.length; i++) 
        {        
            mtx = FM.move(mtx, [0.0, -this.offsetTop, 0]);  
            mtx = FM.multiply(mtx, FM.rotate(this.osc, this.osc, 0.0)); 
            mtx = FM.multiply(mtx, FM.scale(this.scaling, this.scaling, this.scaling)); 
            result.push({
                transform: mtx, 
                opacity: this.alpha, 
                target: this.top[i].render()
            });  
        } 
    }; 
    ArtScene.prototype.renderBottom = function(result)
    {
        var mtx = FM.identity;          
        for (var i = 0; i < this.bottom.length; i++) 
        {        
            mtx = FM.move(mtx, [0.0, this.offsetBottom, 0]);  
            mtx = FM.multiply(mtx, FM.rotate(this.osc, this.osc, 0.0)); 
            mtx = FM.multiply(mtx, FM.scale(this.scaling, this.scaling, this.scaling)); 
            result.push({
                transform: mtx, 
                opacity: this.alpha, 
                target: this.bottom[i].render()
            });  
        }
    }; 
    ArtScene.prototype.renderFront = function(result)
    {
        var mtx = FM.identity;               
        for (var i = 0; i < this.front.length; i++) 
        {        
            mtx = FM.move(mtx, [0.0, 0.0, this.offsetFront]);  
            mtx = FM.multiply(mtx, FM.rotate(this.osc, this.osc, 0.0)); 
            mtx = FM.multiply(mtx, FM.scale(this.scaling, this.scaling, this.scaling)); 
            result.push({
                transform: mtx, 
                opacity: this.alpha, 
                target: this.front[i].render()
            });  
        }        
    }; 
    ArtScene.prototype.renderBack = function(result)
    {
        var mtx = FM.identity;               
        for (var i = 0; i < this.back.length; i++) 
        {        
            mtx = FM.move(mtx, [0.0, 0.0, -this.offsetBack]);  
            mtx = FM.multiply(mtx, FM.rotate(this.osc, this.osc, 0.0)); 
            mtx = FM.multiply(mtx, FM.scale(this.scaling, this.scaling, this.scaling)); 
            result.push({
                transform: mtx, 
                opacity: this.alpha, 
                target: this.back[i].render()
            });  
        }
    }; 
    ArtScene.prototype.animate = function(value)
    {   
        var len = this.animations.length; 
        var ani = this.animations; 
        for(var i = 0; i < len; i++)
        {
            if(value)
            {   
                ani[i].continueAnimation(); 
            }
            else
            {
                ani[i].halt();    
            }
        }
    }; 
    
    
    var artscene = new ArtScene(); 
    var mainCtx = Engine.createContext();
    mainCtx.setPerspective(1000);
    Engine.pipe(artscene); 
    mainCtx.add(artscene); 
});