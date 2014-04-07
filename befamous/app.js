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
    var Surface = require('famous/Surface');
    var FM = require('famous/Matrix');
    var Modifier = require('famous/Modifier');        
    var Interface = require('core/Interface');
    var GLScene = require('famous-scene/GLScene');    
    var Utils = require('famous-utils/Utils'); 
    var KeyCodes = require('famous-utils/KeyCodes'); 
    var Timer = require('famous-animation/Timer');     
    var Animation = require('famous-animation/Animation'); 
    var AnimationEngine = require('famous-animation/AnimationEngine');     
    var Easing = require('famous-animation/Easing');     
    var ColorPalettes = require('famous-color/ColorPalettes');     
    var ColorPalette = require('famous-color/ColorPalette');     
    var Color = require('famous-color/Color');         
    var Vector = require('famous-math/Vector'); 
    var SoundPlayer = require('famous-audio/SoundPlayer'); 
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
    var EllipsePrimitive = require('famous-gl/Primitives/EllipsePrimitive'); 
    var BoxPrimitive = require('famous-gl/Primitives/BoxPrimitive'); 
    var SpherePrimitive = require('famous-gl/Primitives/SpherePrimitive');     
    var ArcPrimitive = require('famous-gl/Primitives/ArcPrimitive'); 
    var CylinderPrimitive = require('famous-gl/Primitives/CylinderPrimitive');     
    var TorusPrimitive = require('famous-gl/Primitives/TorusPrimitive');
    var ConePrimitive = require('famous-gl/Primitives/ConePrimitive');    
    var IcoSpherePrimitive = require('famous-gl/Primitives/IcoSpherePrimitive');             
    var Noise2D = require('famous-gl/ShaderFunctions/Noise2D'); 
    var Noise3D = require('famous-gl/ShaderFunctions/Noise3D'); 
    var Noise4D = require('famous-gl/ShaderFunctions/Noise4D'); 
    var Map = require('famous-gl/ShaderFunctions/Map'); 
    var RegisterEasing = require('famous-animation/RegisterEasing');      
    //MATH
    //AUDIO
    //GL
    //Audio 
    var context;
    var source;
    var analyser;
    var buffer;
    var audioBuffer;
    var response;     
    var mediaStreamSource; 
    function ArtScene(options) 
    {
        GLScene.apply(this, arguments);     
        this.glSurface.setProperties({
            'cursor': 'crosshair'
        }); 
    
        this.soundBtns = []; 
        this.soundBtnMods = []; 
        this.updateAudio = false; 
        this.timer = new Timer();     
        this.palettes = ColorPalettes; 
        this.paletteIndex = 201.0; 
        this.palette = this.palettes.getPalette(this.paletteIndex);         
        this.colorPower = { value: 1.0 }; 
        this.colorScale = { value: 0.50 }; 
        this.audioInfluence = { value: 1.0 }; 
        this.amplitude = { value: 5000.0 }; 
        this.time = { value: 0.0 }; 
        this.noiseScale = { value: 2.0 }; 
        this.lowest = { value: 0.45 }; 
        this.highest = { value: 0.65 };
        this.volume = { value: 0.0 };  
        
        this.pointMeshOpacity = 0.75; 
        this.lineMeshOpacity = 0.75; 
        this.volumeDecay = 0.75; 
        this.pointSize = 2.0; 
        this.lineWidth = 1.5; 
        this.smoothing = 0.75; 
        this.bufferSize = 1024; 
        this.planeScaleX = 0.0; 
        this.planeScaleY = 2.0; 
        this.lineModifier = new Modifier({ 
            transform: FM.scale(this.planeScaleX, this.planeScaleY, 1.0), 
            opacity: this.lineMeshOpacity 
        });         
        
        this.pointModifier = new Modifier({ 
            transform: FM.scale(this.planeScaleX, this.planeScaleY, 1.0), 
            opacity: this.pointMeshOpacity 
        }); 
        this.color0 = { value: this.palette.getColor(0).toNormalizeColorArray() }; 
        this.color1 = { value: this.palette.getColor(1).toNormalizeColorArray() };         
        this.color2 = { value: this.palette.getColor(2).toNormalizeColorArray() }; 
        this.color3 = { value: this.palette.getColor(3).toNormalizeColorArray() };         
        this.initUI();
        this.parentUI = new Interface();        
        Engine.pipe( this.parentUI );
        
        var ui = this.parentUI.getUI(); 
        var autoUI = ui.getUI(); 
        this.uiElementsMap = autoUI.getUIElementsMap();              
    }
    ArtScene.prototype = Object.create(GLScene.prototype);
	ArtScene.prototype.constructor = ArtScene;        
    ArtScene.DEFAULT_OPTIONS = {};     
    
    ArtScene.prototype.initAudio = function()
    {                
        this.soundPlayer = new SoundPlayer([
            './data/coin-sfx.wav', 
            './data/cowbell.wav',            
            './data/dubstep.wav', 
            './data/wobble.wav',
            './data/wobble2.wav'
            ], (function(){
                this.showSoundBtns(true); 
            }).bind(this));    
        context = this.soundPlayer.getContext();
        analyser = context.createAnalyser();
        analyser.fftSize = this.bufferSize;             
        this.soundPlayer.addNode(analyser); 
    }; 
    ArtScene.prototype.initUI = function()
    {
        this.autoUI = [
            {
                type: 'label',
                uiOptions: { 
                    content: 'BE FAMOUS'
                }
            },                   
            {
                type: 'slider',
                option: 'value',                    
                callback: (function(arg){ this.noiseScale.value = arg; }).bind(this), 
                uiOptions: {
                    defaultValue: this.noiseScale.value, 
                    range: [0.0, 10.0],
                    name: 'NOISE SCALE'
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
                    range: [0.0, 1.0],
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
                callback: (function(arg){ 
                    this.pointMeshOpacity = arg; 
                    this.pointMesh.setOpacity(this.pointMeshOpacity); 
                }).bind(this), 
                uiOptions: {
                    defaultValue: this.pointMeshOpacity, 
                    range: [0.0, 1.0],
                    name: 'POINT ALPHA'
                }
            },
            {
                type: 'slider',
                option: 'value',                    
                callback: (function(arg){ 
                    this.lineMeshOpacity = arg; 
                    this.lineMesh.setOpacity(this.lineMeshOpacity); 
                }).bind(this), 
                uiOptions: {
                    defaultValue: this.lineMeshOpacity, 
                    range: [0.0, 1.0],
                    name: 'LINE ALPHA'
                }
            },            
            {
                type: 'slider',
                option: 'value',                    
                callback: (function(arg){ 
                    this.lineWidth = arg;
                    this.renderer.setLineWidth(this.lineWidth);  
                }).bind(this), 
                uiOptions: {
                    defaultValue: this.lineWidth, 
                    range: [0.0, 10.0],
                    name: 'LINE WIDTH'
                }
            },
            {
                type: 'slider',
                option: 'value',                    
                callback: (function(arg){ 
                    this.pointSize = arg;
                    this.renderer.setPointSize(this.pointSize);  
                }).bind(this), 
                uiOptions: {
                    defaultValue: this.pointSize, 
                    range: [0.0, 10.0],
                    name: 'POINT SIZE'
                }
            }            
        ];  
    }; 
    ArtScene.prototype.setup = function(gl)
    {                        
        this.setupUI();         
        this.setupScene(gl);         
        this.setupAnimationSequence(); 
        this.parentUI.setCurrentObject( this );
        this.initAudio(); 
        if(Utils.isMobile())
        {
            ui.getButton().on('open', this.hideSoundBtns.bind(this)); 
            ui.getButton().on('close', this.showSoundBtns.bind(this));     
        }           
    };     
    ArtScene.prototype.setupScene = function(gl)
    {        
        this.defaultDistance = Utils.isMobile() ? 2500000.0 : 5000000.0; 
        this.cameraDistance = -this.defaultDistance/(gl.viewportWidth);
        this.fov = 125.0; 
        this.cam = new Camera();  
        this.cam.setDistance(this.cameraDistance); 
        this.cam.setSensitivityZoom(50.0);
        this.cam.setDamping(0.99); 
        this.cam.setFlipY(true);             
        this.renderer = new Renderer({ context: gl });    
        this.renderer.setPerspective(this.fov); 
        this.renderer.enableAdditiveBlending(); 
        this.renderer.setDepthTesting(false); 
        this.renderer.setLineWidth(this.lineWidth);         
        this.renderer.setPointSize(this.pointSize); 
        
        this.scene = new Scene();
    
        this.freqData = new Uint8Array(this.bufferSize/2.0);         
        this.ampData = new Uint8Array(this.bufferSize);                 
        
        this.audioTexture = new Texture({
            size: [this.bufferSize/2.0, 1],
            format: gl.ALPHA,
            type: this.floatArrays ? gl.FLOAT : gl.UNSIGNED_BYTE, 
            data: this.freqData, 
            flip: false,
            magFilter: gl.NEAREST,
            minFilter: gl.NEAREST,
            mipmap: false, 
        });             
        this.ftex0 = new Texture({ src: './data/famous-glow.png' }); 
        var gridSize = 5120*4; 
        var gridRes = gridSize/320; 
        var res = Utils.isMobile() ? 256 : 512; 
        var plane = new PlanePrimitive({                 
            width: gridSize,
            height: gridSize,         
            resolutionX: res, 
            resolutionY: res, 
            drawMode: Primitive.POINTS,         
            vertical: true,    
        });         
       
        var mat = new Material({
            vertexDefines: [
                Noise3D, 
                Map, 
                'varying float v_noiseValue;'
            ],           
            vertexUniforms:
            {           
                volume: this.volume,
                lowest: this.lowest, 
                highest: this.highest,                 
                vtex0: {
                    value: this.ftex0
                },   
                vaudioTexture: {
                    value: this.audioTexture,
                },            
                audioInfluence: this.audioInfluence,          
                amplitude: this.amplitude, 
                time: this.time,  
                noiseScale: this.noiseScale,
            },         
            fragmentDefines: [            
                 'float amplitude(float x, float offset) {',                
                '\treturn max(cos(x*3.0*HALF_PI - HALF_PI*offset), 0.0);', 
                '}', 
                Map,
                'varying float v_noiseValue;', 
            ],       
            fragmentUniforms: 
            {
                ftex0: {
                    value: this.ftex0
                },   
                faudioTexture: {
                    value: this.audioTexture,
                },                            
                colorPower: this.colorPower, 
                colorScale: this.colorScale, 
                color0: this.color0, 
                color1: this.color1, 
                color2: this.color2, 
                color3: this.color3, 
            },            
            vertexChunk: [                   
                'float dist = distance(a_texcoord, vec2(0.5, 0.5));', 
                'vec4 tex0 = texture2D(vtex0, v_texcoord);',
                'float nValue = length(tex0)*snoise(vec3(a_texcoord.x*noiseScale, a_texcoord.y*noiseScale, dist+time));',                                 
                'v_noiseValue = abs(nValue);',                 
                'float audioAmp = texture2D(vaudioTexture, vec2(v_texcoord.x*v_noiseValue, 0.0)).a;',
                'audioAmp = map(audioAmp, lowest, highest, 0.0, 1.0);',            
                'pos.z += (audioAmp*volume*audioInfluence + 0.125)*amplitude*nValue;'
            ],        
            fragmentChunk: [
                'vec4 tex0 = texture2D(ftex0, v_texcoord);',                
                'color.rgb = tex0.rgb;', 
                'vec3 colorRamp[4];',
                'colorRamp[0] = color0.rgb;',
                'colorRamp[1] = color1.rgb;',
                'colorRamp[2] = color2.rgb;',
                'colorRamp[3] = color3.rgb;',
                'vec3 sum = vec3(0.0, 0.0, 0.0);', 
                'float offset = 0.0;', 
                'for(int i = 0; i < 4; i++) {',
                    'sum+=colorRamp[i]*amplitude(pow(v_noiseValue, 2.0)*colorScale, offset);',
                    'offset+=1.0;',
                '}',   
                'color.rgb *= mix(color.rgb, sum, colorPower);', 
                ] 
        });             
        
        var geo = new Geometry({ primitive: plane }); 
        var mesh = new Mesh({     
            geometry: geo, 
            material: mat, 
            modifier: this.pointModifier, 
        });                                   
        var plane2 = new PlanePrimitive({                 
            width: gridSize,
            height: gridSize,         
            resolutionX: res/4., 
            resolutionY: res/4, 
            drawMode: Primitive.LINES,         
            vertical: false,    
        }); 
        var geo2 = new Geometry({ primitive: plane2 }); 
        var mesh2 = new Mesh({                       
            geometry: geo2, 
            material: mat, 
            modifier: this.lineModifier, 
        });                  
        this.pointMesh = mesh;                  
        this.scene.add(mesh);
        this.lineMesh = mesh2; 
        this.scene.add(mesh2); 
    };     
    ArtScene.prototype.setupAnimationSequence = function()
    {            
        var engine = new AnimationEngine();         
        var animation1 = new Animation({ engine: engine, duration: 333.0, delay: 666.0});                     
        animation1.setActivateCallback((function(animation) {                                                     
            var planeScaleXStart = this.planeScaleX; 
            var planeScaleYStart = this.planeScaleY; 
            animation.update = (function(animation) {                           
                var time = animation.getTime(); 
                var value = Easing.inOutExpoNorm(time);             
                this.planeScaleX = Utils.map(value, 0, 1, planeScaleXStart, 1.0);                                                     
                this.planeScaleY = Utils.map(value, 0, 1, planeScaleYStart, 1.0);                                                                   
                this.pointModifier.setTransform(FM.scale(this.planeScaleX, this.planeScaleY, 1.0)); 
                this.lineModifier.setTransform(FM.scale(this.planeScaleX, this.planeScaleY, 1.0));                     
            }).bind(this, animation); 
        }).bind(this, animation1));         
        animation1.start(); 
    };
    ArtScene.prototype.update = function(gl)
    {                                                
        if(analyser && this.updateAudio)
        {                                    
            analyser.smoothingTimeConstant = this.smoothing;
            analyser.getByteFrequencyData(this.freqData);      
            analyser.getByteTimeDomainData(this.ampData);                      
            
            var vol = 0; 
            for(var i = 0, len = this.bufferSize; i < len; i++)
            {
                vol+=Math.abs(this.ampData[i]-127);               
            }
            vol /= 100.0*this.bufferSize;       
            if(vol > this.volume.value)
            {
                this.volume.value = vol; 
            }
            else
            {
                this.volume.value *= this.volumeDecay; 
            }
            this.audioTexture.setData(this.freqData);              
        }
        this.time.value = this.timer.getTime()*0.001; 
    };
    ArtScene.prototype.draw = function(gl){                                                                        
        this.renderer.render({                
            scene: this.scene, 
            camera: this.cam,
        });  
    }; 
    ArtScene.prototype.resize = function(event)
    {    
        this.cameraDistance = -this.defaultDistance/this.gl.viewportWidth;         
        this.cam.setDistance(this.cameraDistance);
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
    ArtScene.prototype.playSound = function(arg)
    {            
        this.soundBtnMods[arg].halt();        
        this.soundBtnMods[arg].setOpacity(1.0);         
        if(arg === 5){                    
            if(Utils.hasUserMedia()){
                if(mediaStreamSource) { mediaStreamSource.disconnect(); }
                navigator.getUserMedia = Utils.getUserMedia();
                if(navigator.getUserMedia)
                {
                    navigator.getUserMedia({ video: false, audio: true }, (function(stream)
                    {
                        mediaStreamSource = context.createMediaStreamSource( stream );                    
                        mediaStreamSource.connect(analyser);
                        analyser.disconnect(); 
                    }).bind(this), function(){
                        console.log('errored out'); 
                    });
                    this.updateAudio = true;      
                }                
            }        
        }
        else {            
            this.unhighlightBtn(5, true); 
            this.updateAudio = true;  
            if(mediaStreamSource) { mediaStreamSource.disconnect(); }
            this.soundPlayer.playSound(arg, 0.50, (function(){                
                if(!this.soundPlayer.isPlaying())
                {
                    this.clearAudioTexture(); 
                }
                this.unhighlightBtn(arg, true); 
            }).bind(this)); 
        }
    }; 
    ArtScene.prototype.setupUI = function()
    {
        this.btnSize = [40, 40]; 
        this.offset = [20, 20];         
        this.addSoundButton('playNote.svg', 0);   
        this.addSoundButton('playNote.svg', 1);   
        this.addSoundButton('playNote.svg', 2); 
        this.addSoundButton('playNote.svg', 3); 
        this.addSoundButton('playNote.svg', 4); 
        if(Utils.hasUserMedia())
        {
            this.addSoundButton('mic.svg', 5);       
        }          
        Engine.on('resize', Utils.debounce(this.showSoundBtns.bind(this, true), 333));                      
        this.hideSoundBtns();         
    }; 
    ArtScene.prototype.addSoundButton = function(type, arg)
    {        
        var soundBtn = new Surface({
            size: this.btnSize,
            content: '<img draggable="false" class="no-user-select" src="img/'+type+'" height="'+this.btnSize[0]+'"></img>',            
        }); 
        soundBtn.on('click', this.playSound.bind(this, arg)); 
        var soundBtnModifier = new Modifier({
            transform: FM.translate( 0, Utils.getHeight()+this.offset[1], 0), 
            opacity: 0.50,
        }); 
        this.node.add(soundBtnModifier).link(soundBtn); 
        this.soundBtns.push(soundBtn); 
        this.soundBtnMods.push(soundBtnModifier);                 
    };    
    ArtScene.prototype.hideSoundBtns = function(animate)
    {   
        var w = this.width;
        var h = this.height;
        var len = this.soundBtnMods.length;
        var mods = this.soundBtnMods;        
        var tw = this.btnSize[0]*len + this.offset[0]*(len-1);    
        var xOffset = tw*0.5; 
        for(var i = 0; i < len; i++)
        {
            var mtx = FM.translate(
                    i*this.btnSize[0]+w/2.0-xOffset+this.offset[0]*i, 
                    h+this.offset[1], 
                    0); 
            mods[i].setTransform(mtx, animate ? { curve: Easing.inOutCubicNorm, duration: 400+i*60 } : undefined);             
        }
    };
    ArtScene.prototype.unhighlightBtns = function(animate)
    {            
        var len = this.soundBtnMods.length;
        var mods = this.soundBtnMods;        
        for(var i = 0; i < len; i++)
        {
            mods[i].setOpacity(0.5, animate ? { curve: Easing.inOutCubicNorm, duration: 400} : undefined);             
        }
    }
    ArtScene.prototype.unhighlightBtn = function(index, animate)
    {            
        this.soundBtnMods[index].setOpacity(0.5, animate ? { curve: Easing.inOutCubicNorm, duration: 400} : undefined);             
    }
    ArtScene.prototype.showSoundBtns = function(animate)
    {   
        var w = this.width;
        var h = this.height;
        var len = this.soundBtnMods.length;
        var mods = this.soundBtnMods;        
        var tw = this.btnSize[0]*len + this.offset[0]*(len-1);    
        var xOffset = tw*0.5; 
        for(var i = 0; i < len; i++)
        {
            var mtx = FM.translate(
                    i*this.btnSize[0]+w/2.0-xOffset+this.offset[0]*i, 
                    h-this.btnSize[1]-this.offset[1], 
                    0); 
            mods[i].setTransform(mtx, animate ? { curve: Easing.inOutCubicNorm, duration: 400+i*60 } : undefined);             
        }
    }; 
    ArtScene.prototype.clearAudioTexture = function()    
    {
        this.freqData = 
        this.volume.value = 0;         
        var buffer = []; 
        var len = this.bufferSize/2.0; 
        for(var i = 0; i < len; i++)
        {
            buffer[i] = 0; 
        }         
        this.freqData = new Uint8Array(buffer);         
        this.audioTexture.setData(this.freqData);       
        this.updateAudio = false;   
    }; 
    
    var artscene = new ArtScene(); 
    var mainCtx = Engine.createContext();
    mainCtx.setPerspective(1000);
    Engine.pipe(artscene); 
    mainCtx.add(artscene); 
});