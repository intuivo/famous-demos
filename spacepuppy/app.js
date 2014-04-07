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
    var KeyCodes = require('famous-utils/KeyCodes'); 
    var Timer = require('famous-animation/Timer');     
    var Easing = require('famous-animation/Easing'); 
    var ColorPalettes = require('famous-color/ColorPalettes');     
    var ColorPalette = require('famous-color/ColorPalette');     
    var Color = require('famous-color/Color');         
    var Vector = require('famous-math/Vector'); 
    var Camera = require('famous-gl/Camera');      
    var Scene = require('famous-gl/Scene'); 
    var Renderer = require('famous-gl/Renderer');    
    var Primitive = require('famous-gl/Primitive');     
    var Material = require('famous-gl/Material');     
    var Texture = require('famous-gl/Texture');     
    var Light = require('famous-gl/Light'); 
    var Geometry = require('famous-gl/Geometry'); 
    var Mesh = require('famous-gl/Mesh'); 
    var Fbo = require('famous-gl/Fbo'); 
    var PlanePrimitive = require('famous-gl/Primitives/PlanePrimitive');         
    var IcoSpherePrimitive = require('famous-gl/Primitives/IcoSpherePrimitive');         
    var Noise2D = require('famous-gl/ShaderFunctions/Noise2D'); 
    var Noise3D = require('famous-gl/ShaderFunctions/Noise3D'); 
    var Noise4D = require('famous-gl/ShaderFunctions/Noise4D'); 
    var ExposureEffect = require('famous-gl/Effects/ExposureEffect');     
    var VignetteEffect = require('famous-gl/Effects/VignetteEffect'); 
    var RegisterEasing = require('famous-animation/RegisterEasing');      
    
    
    function ArtScene(options) 
    {
        GLScene.apply(this, arguments);     
        this.timer = new Timer(); 
        var cam = new Camera();  
        cam.setDistance(-1750.0); 
        cam.setSensitivityZoom(20.0);
        cam.setDamping(0.9); 
        cam.setFlipY(true);     
        this.cam = cam; 
        
        this.palettes = ColorPalettes; 
        this.paletteIndex = 44; 
        this.palette = this.palettes.getPalette(this.paletteIndex);         
        this.scale = { value: 1.0 }; 
        this.time = { value: 0.0 }; 
        this.radius = { value: 300.0 }; 
        this.speed = { value: 0.0005 }; 
        this.alpha = { value: 1.0 }; 
        this.colorScale = { value: 0.35 };
        this.colorPower = { value: 0.0 }; 
        this.bgColor = 0.25; 
        this.color0 = { value: this.palette.getColor(0).toNormalizeColorArray() };
        this.color1 = { value: this.palette.getColor(1).toNormalizeColorArray() }; 
        this.color2 = { value: this.palette.getColor(2).toNormalizeColorArray() }; 
        this.color3 = { value: this.palette.getColor(3).toNormalizeColorArray() };     
        this.exposure = new ExposureEffect(); 
        this.vignette = new VignetteEffect();
        this.vignetteAmount = this.vignette.getUniform('vignette');
        this.exposureExposure = this.exposure.getUniform('exposure');         
        this.vignetteAmount.value = 3.5; 
        this.exposureExposure.value = 0.15;         
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
                    content: 'SPACE PUPPY'
                }
            },
            {
                type: 'slider',
                option: 'value',                    
                callback: (function(arg){ this.scale.value = arg; }).bind(this), 
                uiOptions: {
                    defaultValue: this.scale.value, 
                    range: [0.0, 2.0],
                    name: 'SCALE'
                }
            },
            {
                type: 'slider',
                option: 'value',                    
                callback: (function(arg){ this.speed.value = arg; }).bind(this), 
                uiOptions: {
                    defaultValue: this.speed.value, 
                    range: [0.0, 0.001],
                    name: 'SPEED'
                }
            },
            {
                type: 'slider',
                option: 'value',                    
                callback: (function(arg){ this.radius.value = arg; }).bind(this), 
                uiOptions: {
                    defaultValue: this.radius.value, 
                    range: [0.0, 500.0],
                    name: 'RADIUS'
                }
            },
            {
                type: 'slider',
                option: 'value',                    
                callback: (function(arg){ 
                    this.setPalette(arg); 
                }).bind(this), 
                uiOptions: {
                    defaultValue: this.paletteIndex, 
                    range: [0.0, this.palettes.getCount()],
                    name: 'PALETTE'
                }
            },
            {
                type: 'slider',
                option: 'value',                    
                callback: (function(arg){ this.colorPower.value = arg; }).bind(this), 
                uiOptions: {
                    defaultValue: this.colorPower.value, 
                    range: [0.0, 2.0],
                    name: 'COLOR POWER'
                }
            },
            {
                type: 'slider',
                option: 'value',                    
                callback: (function(arg){ this.colorScale.value = arg; }).bind(this), 
                uiOptions: {
                    defaultValue: this.colorScale.value, 
                    range: [0.0, 10.0],
                    name: 'COLOR SCALE'
                }
            }, 
            {
                type: 'slider',
                option: 'value',                    
                callback: (function(arg){ this.vignetteAmount.value = arg; }).bind(this), 
                uiOptions: {
                    defaultValue: this.vignetteAmount.value, 
                    range: [0.0, 10.0],
                    name: 'VIGNETTE POWER'
                }
            },         
            {
                type: 'slider',
                option: 'value',                    
                callback: (function(arg){ this.exposureExposure.value = arg; }).bind(this), 
                uiOptions: {
                    defaultValue: this.exposureExposure.value, 
                    range: [0.0, 0.25],
                    name: 'EXPOSURE'
                }
            }, 
            {
                type: 'slider',
                option: 'value',                    
                callback: (function(arg){ this.bgColor = arg; this.renderer.setBackgroundColor(this.bgColor, 1);  }).bind(this), 
                uiOptions: {
                    defaultValue: this.bgColor, 
                    range: [0.0, 1.0],
                    name: 'BACKGROUND'
                }
            }, 
        ];                 
    }; 
    
    ArtScene.prototype.setup = function(gl)
    {                                
        this.renderer = new Renderer({                                  //Renders a scene with the proper camera, etc
            context: gl
        });
        this.fbo = new Fbo({
            size: [gl.viewportWidth, gl.viewportHeight] 
        });      
        this.renderer.setBackgroundColor(this.bgColor, 1); 
        this.renderer.enableAlphaBlending();     
        this.renderer.setDepthTesting(true); 
        this.renderer.setLineWidth(3); 
        this.renderer.setPointSize(3); 
        
        this.setupScene1(gl); 
        this.setupScene2(gl); 
        this.parentUI.setCurrentObject( this );
    };        
    ArtScene.prototype.setupScene1 = function(gl)
    {        
        this.scene = new Scene();      
        var res = Utils.isMobile() ? 5 : 6; 
        var icosphere = new IcoSpherePrimitive({                 
            radius: 900,   
            resolution: res, 
            drawMode: Primitive.TRIANGLES
        }); 
        var icosphere2 = new IcoSpherePrimitive({                 
            radius: 900,   
            resolution: res,          
            drawMode: Primitive.LINES
        }); 
       
        var vertexDefines = [
                Noise4D, 
                'varying float v_extrude;',
            ]; 
        var vertexUniforms = {
                scale: this.scale, 
                time: this.time, 
                radius: this.radius, 
                speed: this.speed,                
            }; 
        var fragmentDefines = [
                'varying float v_extrude;',
                '',
                 'float amplitude(float x, float offset) {',                
                '\treturn max(cos(x*3.0*HALF_PI - HALF_PI*offset), 0.0);', 
                '}', 
            ]; 
        var fragmentUniforms = {
                colorScale: this.colorScale, 
                colorPower: this.colorPower, 
                alpha: this.alpha,
                color0: this.color0, 
                color1: this.color1, 
                color2: this.color2, 
                color3: this.color3, 
            }; 
        var vertexChunk = [
                'v_extrude = snoise(vec4(a_normal.x*scale, a_normal.y*scale, a_normal.z*scale, time*speed));',
                'pos.xyz += a_normal*v_extrude*radius;', 
                ]; 
        var fragmentChunk = [     
                'vec3 colorRamp[4];',
                'colorRamp[0] = color0.rgb;',
                'colorRamp[1] = color1.rgb;',
                'colorRamp[2] = color2.rgb;',
                'colorRamp[3] = color3.rgb;',                
                'vec3 sum = vec3(0.0, 0.0, 0.0);', 
                'float offset = 0.0;', 
                'for(int i = 0; i < 4; i++) {',
                    'sum+=colorRamp[i]*amplitude(v_extrude*colorScale, offset);',
                    'offset+=1.0;',
                '}',               
            ]; 
        var mat = new Material({       
            vertexDefines: vertexDefines,           
            vertexUniforms: vertexUniforms, 
            fragmentDefines: fragmentDefines, 
            fragmentUniforms: fragmentUniforms,
            vertexChunk: vertexChunk,         
            fragmentChunk: fragmentChunk.concat('color = vec4(sum*pow(v_extrude, colorPower), alpha);')             
        });  
        var mat2 = new Material({       
            vertexDefines: vertexDefines,           
            vertexUniforms: vertexUniforms, 
            fragmentDefines: fragmentDefines, 
            fragmentUniforms: fragmentUniforms,
            vertexChunk: vertexChunk,         
            fragmentChunk: fragmentChunk.concat('color = vec4(sum*pow(abs(-1.0*v_extrude), colorPower), max(-1.0*v_extrude, 0.0)*alpha);')                      
        });             
        
        var geo = new Geometry({            
            primitive: icosphere,             
        }); 
        var geo2 = new Geometry({            
            primitive: icosphere2,            
        }); 
        this.modifier = new Modifier({
            transform: FM.translate(0, 0, 0)
        }); 
        
        var mesh = new Mesh({                                   //Creates a GL Geometry + GL Shader/Material Pair                    
            geometry: geo, 
            material: mat, 
            transform: new Modifier({
                transform: FM.identity, 
                opacity: 1.0, 
            })
        });           
         var mesh2 = new Mesh({                                   //Creates a GL Geometry + GL Shader/Material Pair                    
            geometry: geo2, 
            material: mat2, 
            transform: new Modifier({
                transform: FM.identity, 
                opacity: 1.0, 
            })
        });                            
        this.scene.add(mesh);            
        this.scene.add(mesh2); 
    };
    ArtScene.prototype.setupScene2 = function(gl)
    {        
        this.scene2 = new Scene();  
        
        var pri = new PlanePrimitive({
            width: gl.viewportWidth, 
            height: gl.viewportHeight, 
            resolution: 1, 
            flipY: true, 
            drawMode: Primitive.TRIANGLES, 
        });         
        this.pri = pri; 
        var geo = new Geometry({
            primitive: pri
        }); 
        this.geo = geo;         
        
        var mesh = new Mesh({
            geometry: geo, 
            material: new Material({
                context: gl,
                texture: this.fbo.getTexture(),            
                effects: [this.exposure, this.vignette]
            }),            
        }); 
        this.scene2.add(mesh);   
    }; 
    ArtScene.prototype.update = function(gl)
    {                                        
        this.time.value = this.timer.getTime(); 
    };
    ArtScene.prototype.draw = function(gl)
    {                                            
        this.renderer.setPerspective(); 
        this.renderer.render({            
            scene: this.scene, 
            camera: this.cam,
            framebuffer: this.fbo,            
        });  
        
        this.renderer.setOrthographic(); 
        this.renderer.render({
            view: FM.identity, 
            scene: this.scene2,           
        }); 
    }; 
    ArtScene.prototype.resize = function(event)
    {                
        if(gl)
        {
            var gl = this.gl; 
            var size = [gl.viewportWidth, gl.viewportHeight];                 
            this.fbo.setSize(size);
            this.pri.setSize(size);                     
        }        
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
    ArtScene.prototype.keypress = function(event)
    {
        if(event.keyCode === KeyCodes.l)
        {
            this.paletteIndex++; 
            this.paletteIndex %= this.palettes.getCount();
            this.setPalette(this.paletteIndex); 
        }
        else if(event.keyCode === KeyCodes.k)
        {
            this.paletteIndex--; 
            if(this.paletteIndex < 0)
            {
                this.paletteIndex = this.palettes.getCount();
            }
            this.setPalette(this.paletteIndex); 
        }
    }; 
    
    var artscene = new ArtScene(); 
    var mainCtx = Engine.createContext();
    mainCtx.setPerspective(1000);
    Engine.pipe(artscene); 
    mainCtx.add(artscene); 
});