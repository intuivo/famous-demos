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
    var RegisterEasing = require('famous-animation/RegisterEasing');      
  	
 
    
    function ArtScene() 
    {
        Scene.apply(this);
        
        this.palettes = ColorPalettes;   
        this.paletteIndex = 74; 
        this.palette = this.palettes.getPalette(this.paletteIndex);                    
        
        this.cam = new Camera(); 
        this.cam.setDistance(100); 
        //PARAMS
        this.opacity = 1.0; 
        this.rotation = .025; 
        this.spacing = 10.0 
        this.speed = .01; 
        this.value = 0; 
        this.theta = 0; 
        this.borderRadius = 60.0; 
        this.borderWidth = 15.0; 
        this.surfaces = [];    
        this.modifiers = [];                
        this.scene = new RenderNode(); 
        var numOfSquares = 40; 
        var dimensions = [256,256];        
        for(var i = 0; i < numOfSquares; i++) 
        {                   
            var color = this.palette.getColor(i); 
            var surface = new FamousSurface({size:dimensions});
            var modifier = new Modifier({
                origin: [0.5, 0.5]
            }); 
            surface.setProperties(Utils.backfaceVisible(true));                                 
            surface.setProperties(Utils.borderStyle('solid'));                                 
            surface.setProperties(Utils.borderColor(color.r, color.g, color.b, color.a));                     
            surface.setProperties(Utils.borderWidth(this.borderWidth));    
            surface.setProperties(Utils.borderRadius(this.borderRadius));    
            this.scene.add(modifier).link(surface); 
            this.surfaces.push(surface); 
            this.modifiers.push(modifier); 
        }                
        this.initUI();
        this.parentUI = new Interface();
        this.parentUI.setCurrentObject( this );        
        Engine.pipe( this.parentUI );
        var ui = this.parentUI.getUI(); 
        var autoUI = ui.getUI(); 
        this.uiElementsMap = autoUI.getUIElementsMap();      
        this.playAnimation = true; 
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
                    content: 'DOM TUNNEL'
                }
            }, 
            {
                type: 'toggle',                 
                callback: this.toggleAnimation.bind(this), 
                uiOptions: {
                    defaultValue: this.playAnimation,                     
                    name: 'ANIMATE'
                } 
            },
            {
                type: 'slider',
                option: 'value',                    
                callback: this.setBorderWidth.bind(this), 
                uiOptions: {
                    defaultValue: this.borderWidth, 
                    range: [1.0, 50.0],
                    name: 'LINE WIDTH'
                }
            },
            {
                type: 'slider',
                option: 'value',                    
                callback: this.setBorderRadius.bind(this), 
                uiOptions: {
                    defaultValue: this.borderRadius, 
                    range: [1.0, 200.0],
                    name: 'BORDER RADIUS'
                }
            },
            {
                type: 'slider',
                option: 'value',                    
                callback: (function(arg){ this.speed = arg; }).bind(this), 
                uiOptions: {
                    defaultValue: this.speed, 
                    range: [0.0, 0.10],
                    name: 'ROTATION SPEED'
                }
            },
            {
                type: 'slider',
                option: 'value',                    
                callback: (function(arg){ this.opacity = arg; }).bind(this), 
                uiOptions: {
                    defaultValue: this.opacity, 
                    range: [0.0, 1.0],
                    name: 'OPACITY'
                }
            },
            {   
                type: 'slider',
                option: 'value',                    
                callback: this.setColorPalette.bind(this), 
                uiOptions: {
                    defaultValue: this.paletteIndex, 
                    range: [0.0, this.palettes.getCount()-1],
                    name: 'COLOR PALETTE'
                }
            },
            {   
                type: 'slider',
                option: 'value',                    
                callback: (function(arg){ this.spacing = arg; }).bind(this),
                uiOptions: {
                    defaultValue: this.spacing, 
                    range: [0.0, 100.0],
                    name: 'SLICE SPACING'
                }
            },
            {   
                type: 'slider',
                option: 'value',                    
                callback: (function(arg){ this.rotation = arg; }).bind(this),
                uiOptions: {
                    defaultValue: this.rotation, 
                    range: [-Math.PI*.25, Math.PI*.25],
                    name: 'SLICE ROTATION'
                }
            }
        ]; 
    };
    ArtScene.prototype.initAnimation = function()
    {
        var rSlider = this.uiElementsMap['SLICE ROTATION']; 
        var sSlider = this.uiElementsMap['SLICE SPACING']; 
        
        var engine = new AnimationEngine();         
        var animation = new Animation({                    
            engine: engine,                                        
            duration: 3000.0,             
            loop: true, 
            reverseUponLoop: true
        }); 
        animation.update = function() {                    
            rSlider.set(Easing.inOutCubic(this.getTime(), -.05, .1, 1.0));                     
            sSlider.set(Easing.inOutQuad(this.getTime(), 5, 15, 1.0)); 
        };         
        engine.addAnimation(animation); 
        animation.start(); 
        this.animation = animation; 
    }; 
    ArtScene.prototype.update = function() 
    {    
        if(this.playAnimation)
        {
            this.theta -= this.speed; 
            this.value = Math.cos(this.theta); 
        }
        var total =  this.surfaces.length; 
        for (var i = 0; i < total; i++) 
        {
            this.modifiers[i].setTransform(FM.multiply(FM.rotate(0.0, 0.0, this.theta+i*this.rotation), FM.translate(0.0, 0.0, (-total*.5+i)*this.spacing)));                        
        }    
    }; 
    ArtScene.prototype.render = function()
    {
        return [{
            origin: this.cam.origin, 
            transform: this.cam.getMatrix(), 
            opacity: this.opacity, 
            target: this.scene.render() 
        }, this.node.render()]; 
    }; 
       
    ArtScene.prototype.setColorPalette = function(value)
    {
        this.paletteIndex = value; 
        this.palette = this.palettes.getPalette(this.paletteIndex);                            
        var total =  this.surfaces.length; 
        for(var i = 0; i < total; i++) 
        {                   
            var color = this.palette.getColor(i); 
            var surface = this.surfaces[i];         
            surface.setProperties(Utils.borderColor(color.r, color.g, color.b, color.a));                     
        }   
    }; 
    
    ArtScene.prototype.setBorderWidth = function(value)
    {
        this.borderWidth = value; 
        var total =  this.surfaces.length; 
        for(var i = 0; i < total; i++) 
        {                   
            var surface = this.surfaces[i];         
            surface.setProperties(Utils.borderWidth(value)); 
        }; 
    }; 
    ArtScene.prototype.setBorderRadius = function(value)
    {
        this.borderRadius = value; 
        var total =  this.surfaces.length; 
        for(var i = 0; i < total; i++) 
        {                   
            var surface = this.surfaces[i];         
            surface.setProperties(Utils.borderRadius(value)); 
        };    
    }; 
    ArtScene.prototype.toggleAnimation = function(arg) 
    {
        this.playAnimation = arg; 
        if(arg)
        {
            this.animation.continueAnimation(); 
        }
        else
        {
            this.animation.halt();             
        }
    };
    
    var artscene = new ArtScene(); 
    var mainCtx = Engine.createContext();
    mainCtx.setPerspective(1000);
    Engine.pipe(artscene); 
    mainCtx.add(artscene); 
});