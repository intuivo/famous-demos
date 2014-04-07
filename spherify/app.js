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
    var FM = require('famous/Matrix');
    var Modifier = require('famous/Modifier');        
    var Interface = require('core/Interface');
    var GLScene = require('famous-scene/GLScene');    
    var Utils = require('famous-utils/Utils'); 
    var Timer = require('famous-animation/Timer');     
    var Animation = require('famous-animation/Animation'); 
    var AnimationEngine = require('famous-animation/AnimationEngine');     
    var Easing = require('famous-animation/Easing');     
    var ColorPalettes = require('famous-color/ColorPalettes');     
    var ColorPalette = require('famous-color/ColorPalette');     
    var Color = require('famous-color/Color');         
    var Vector = require('famous-math/Vector'); 
    var Quaternion = require('famous-math/Quaternion'); 
    var Camera = require('famous-gl/Camera');      
    var Scene = require('famous-gl/Scene'); 
    var Renderer = require('famous-gl/Renderer');    
    var Primitive = require('famous-gl/Primitive'); 
    var Material = require('famous-gl/Material');     
    var Texture = require('famous-gl/Texture');     
    var Light = require('famous-gl/Light'); 
    var Geometry = require('famous-gl/Geometry'); 
    var Mesh = require('famous-gl/Mesh'); 
    var BoxPrimitive = require('famous-gl/Primitives/BoxPrimitive'); 
    var RegisterEasing = require('famous-animation/RegisterEasing');      
 
    
    
    function ArtScene(options) 
    {
        GLScene.apply(this, arguments);     
        
        this.timer = new Timer(); 
        var cam = new Camera();  
        cam.setDistance(-2000.0); 
        cam.setSensitivityZoom(20.0);
        cam.setDamping(0.99); 
        cam.setFlipY(true);     
        this.cam = cam; 
        this.palettes = ColorPalettes; 
        this.paletteIndex = 4.0; 
        this.palette = this.palettes.getPalette(this.paletteIndex);         
        
        this.pointSize = 1.25; 
        this.meshOpacity = 0.10; 
        this.pointOpacity = 0.50; 
        this.time = { value: 0.0 };  
        this.spherify = { value: 0.0 };
        this.freq = { value: Math.PI*.25 };
        this.radius = { value: 1200.0 }; 
        this.speed = { value: 0.0025 };         
        this.color0 = { value: this.palette.getColor(0).toNormalizeColorArray() }; 
        this.color1 = { value: this.palette.getColor(1).toNormalizeColorArray() }; 
        this.color2 = { value: this.palette.getColor(2).toNormalizeColorArray() }; 
        this.color3 = { value: this.palette.getColor(3).toNormalizeColorArray() }; 
        
        this.initUI();
        this.parentUI = new Interface();        
        Engine.pipe( this.parentUI );
        
    }
    ArtScene.prototype = Object.create(GLScene.prototype);
	ArtScene.prototype.constructor = ArtScene;        
    ArtScene.DEFAULT_OPTIONS = {};     
    
    ArtScene.prototype.initUI = function() 
    {
        this.autoUI = [
        {
            type: 'label',
            uiOptions: { 
                content: 'SPHERIFY: A BOX INTO A SPHERE'
            }
        }, 
        {
            type: 'toggle',                 
            callback: this.toggleAnimation.bind(this), 
            uiOptions: {
                defaultValue: true,                     
                name: 'Animate'
            } 
        },
        {
            type: 'slider',
            option: 'value',                    
            callback: (function(arg){ this.spherify.value = arg; }).bind(this), 
            uiOptions: {
                defaultValue: this.spherify.value, 
                range: [0.0, 2.0],
                name: 'Spherify'
            }
        },
        {
            type: 'slider',
            option: 'value',                    
            callback: (function(arg){ this.freq.value = arg; }).bind(this), 
            uiOptions: {
                defaultValue: this.freq.value, 
                range: [Math.PI*.25, 20.0],
                name: 'Freq'
            }
        },
        {
            type: 'slider',
            option: 'value',                    
            callback: (function(arg){ 
                this.speed.value = arg; 
            }).bind(this), 
            uiOptions: {
                defaultValue: this.speed.value, 
                range: [0.001, 0.01],
                name: 'Speed'
            }
        },
        {
            type: 'slider',
            option: 'value',                    
            callback: this.setPalette.bind(this), 
            uiOptions: {
                defaultValue: this.paletteIndex, 
                range: [0.0, this.palettes.getCount()],
                name: 'Palette'
            }
        },  
        {
            type: 'slider',
            option: 'value',                    
            callback: this.setMeshOpacity.bind(this), 
            uiOptions: {
                defaultValue: this.meshOpacity, 
                range: [0.0, 1.0],
                name: 'Mesh Opacity'
            }
        },  
        {
            type: 'slider',
            option: 'value',                    
            callback: this.setPointOpacity.bind(this), 
            uiOptions: {
                defaultValue: this.pointOpacity, 
                range: [0.0, 1.0],
                name: 'Point Opacity'
            }
        },  
        {
            type: 'slider',
            option: 'value',                    
            callback: this.setPointSize.bind(this), 
            uiOptions: {
                defaultValue: this.pointSize, 
                range: [0.0, 10.0],
                name: 'Point Size'
            }
        }];     
    }; 
    ArtScene.prototype.setup = function(gl)
    {                                
        this.renderer = new Renderer({                                  //Renders a scene with the proper camera, etc
            context: gl
        });
        this.renderer.enableAdditiveBlending(); 
        this.renderer.setDepthTesting(false); 
        this.renderer.setPointSize(this.pointSize);         
        this.scene = new Scene();
        var box = new BoxPrimitive({
            width: this.radius.value*2.0, 
            height: this.radius.value*2.0, 
            depth: this.radius.value*2.0, 
            resolution: 25, 
            drawMode: Primitive.TRIANGLES
        }); 
        var box2 = new BoxPrimitive({
            width: this.radius.value*2.0, 
            height: this.radius.value*2.0, 
            depth: this.radius.value*2.0, 
            resolution: 50, 
            drawMode: Primitive.POINTS
        });         
        var vertexUniforms = {            
            radius: this.radius, 
            spherify: this.spherify, 
            time: this.time,      
            speed: this.speed,            
        }; 
        var vertexChunk = [   
            'vec3 npos = normalize(pos.xyz);',
            'v_normal = mix(a_normal, npos, spherify);',
            'npos*=radius;',                     
            'pos = vec4(mix(pos.xyz, npos, spherify), 1.0);'
        ]; 
        var fragmentDefines = [
            'float amplitude(float x, float offset) {',                
            '\treturn max(cos(x*3.0*HALF_PI - HALF_PI*offset), 0.0);', 
            '}',
        ]; 
        var fragmentChunk = [
            'float value = max(cos(v_texcoord.y*freq*PI + v_time*v_speed + offset*PI*freq)*atan(v_texcoord.x*freq*PI + v_time*v_speed + offset*PI*freq), 0.0);',
            'if(value < 0.5) { color.a = 0.0; }',       
            'float dist = length(value*v_pos)/(v_radius);',
            'vec3 colorRamp[4];',
            'colorRamp[0] = color0.rgb;',
            'colorRamp[1] = color1.rgb;',
            'colorRamp[2] = color2.rgb;',
            'colorRamp[3] = color3.rgb;',
            'vec3 sum = vec3(0.0, 0.0, 0.0);', 
            'float of = 0.0;', 
            'for(int i = 0; i < 4; i++) {',
                'sum+=colorRamp[i]*amplitude(dist+v_time*v_speed*0.01, of);',                
                'of+=1.0;',
            '}',   
            'color.rgb = sum;'
        ];          
        var geo = new Geometry({
            primitive: box
        }); 
        var geo2 = new Geometry({
            primitive: box2             
        }); 
        this.triMeshes = []; 
        this.pntMeshes = [];                 
        var refMat; 
        var total = 8;         
        for(var i = 1; i <= total; i++)
        {
            var scale = .25+.75*Easing.inOutQuadNorm(i/total); 
            var scaleMtx = FM.scale(scale, scale, scale); 
                        
            var mat = new Material({        
                reference: refMat, 
                vertexUniforms: vertexUniforms,
                fragmentUniforms: {
                    freq: this.freq, 
                    offset: { value: Math.random() },
                    color0: this.color0, 
                    color1: this.color1, 
                    color2: this.color2, 
                    color3: this.color3, 
                },
                vertexChunk: vertexChunk,                 
                fragmentDefines: fragmentDefines, 
                fragmentChunk: fragmentChunk 
            });          
            var triMesh = new Mesh({
                geometry: geo, 
                material: mat,             
                modifier: new Modifier({
                    transform: scaleMtx,
                    opacity: this.meshOpacity
                })      
            }); 
            var pntMesh = new Mesh({
                geometry: geo2, 
                material: mat,             
                modifier: new Modifier({
                    transform: scaleMtx,
                    opacity: this.pointOpacity
                })      
            }); 
            this.scene.add(triMesh); 
            this.scene.add(pntMesh);                     
            this.triMeshes.push(triMesh); 
            this.pntMeshes.push(pntMesh); 
            if(refMat === undefined)
            {
                refMat = mat; 
            }
        }        
        this.setupAnimation(); 
        this.parentUI.setCurrentObject( this );
    };     
    ArtScene.prototype.setupAnimation = function() 
    {
        var engine = new AnimationEngine(); 
        var options = {                    
            name: 'spherify',
            engine: engine,                                        
            duration: 1000.0,         
            loop: true,         
            reverseUponLoop: true         
        };             
        var animation = new Animation(options); 
            
        this.quat = new Quaternion(); 
        this.quat.makeFromAngleAndAxis(Math.PI*0.0025, new Vector(1.0, -1.0, 1.0)); 
        animation.update = (function(animation)
        {                   
            this.cam.applyQuaternionRotation(this.quat); 
            this.spherify.value = Easing.inOutBackNorm(animation.getTime()); 
            var index0 = this.paletteIndex, index1 = this.paletteIndex+1; 
            if(animation.reverse){                              
                index0 = index1; index1 = this.paletteIndex; 
            }
            this.palette = this.palettes.getPalette(index0);    
            var nextPalette = this.palettes.getPalette(index1);    
        
            var color0 = this.palette.getColor(0); 
            var color1 = this.palette.getColor(1); 
            var color2 = this.palette.getColor(2); 
            var color3 = this.palette.getColor(3); 
            var pcolor0 = nextPalette.getColor(0); 
            var pcolor1 = nextPalette.getColor(1); 
            var pcolor2 = nextPalette.getColor(2); 
            var pcolor3 = nextPalette.getColor(3); 
            var value = Easing.inOutBackNorm(animation.getTime()); 
            this.color0.value = color0.lerp(pcolor0, value).toNormalizeColorArray();
            this.color1.value = color1.lerp(pcolor1, value).toNormalizeColorArray();
            this.color2.value = color2.lerp(pcolor2, value).toNormalizeColorArray();
            this.color3.value = color3.lerp(pcolor3, value).toNormalizeColorArray();
        }).bind(this, animation); 
        animation.setActivateCallback((function()
        {       
            this.paletteIndex++;                              
            this.paletteIndex%=(this.palettes.getCount()-1);          
            if(animation.reverse){                               
                animation.setDuration(Math.random()*1000.0+750.0);             
                
            }
        }).bind(this, animation)); 
        engine.addAnimation(animation); 
        animation.start(); 
        this.animation = animation; 
    };
    ArtScene.prototype.update = function(gl)
    {                                           
        this.time.value = this.timer.getTime(); 
    }; 
    ArtScene.prototype.draw = function(gl){                                        
        this.renderer.render({                
            scene: this.scene, 
            camera: this.cam
        });             
    }; 
    ArtScene.prototype.setPalette = function(arg)
    {
        this.paletteIndex = arg; 
        this.palette = this.palettes.getPalette(this.paletteIndex);         
        this.color0.value = this.palette.getColor(0).toNormalizeColorArray(); 
        this.color1.value = this.palette.getColor(1).toNormalizeColorArray(); 
        this.color2.value = this.palette.getColor(2).toNormalizeColorArray(); 
        this.color3.value = this.palette.getColor(3).toNormalizeColorArray(); 
    }; 
    ArtScene.prototype.setMeshOpacity = function(arg)
    {
        this.meshOpacity = arg; 
        var meshes = this.triMeshes; 
        for(var i = 0, len = meshes.length; i < len; i++)
        {
            meshes[i].setOpacity(arg); 
        }   
    }; 
    ArtScene.prototype.setPointOpacity = function(arg)
    {
        this.pointOpacity = arg; 
        var meshes = this.pntMeshes; 
        for(var i = 0, len = meshes.length; i < len; i++)
        {
            meshes[i].setOpacity(arg); 
        }   
    }; 
    ArtScene.prototype.setPointSize = function(arg)
    {
        this.pointSize = arg; 
        this.renderer.setPointSize(arg); 
    }; 
    ArtScene.prototype.toggleAnimation = function(arg) 
    {
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