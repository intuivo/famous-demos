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
    var Vector = require('famous-math/Vector');  
    var SimplexNoise = require('famous-generative/SimplexNoise');     
    var SoundPlayer = require('famous-audio/SoundPlayer'); 
    var Utils = require('famous-utils/Utils');                  
    var RegisterEasing = require('famous-animation/RegisterEasing');      
 
    //Audio 
    var context;
    var source;
    var analyser;
    var buffer;
    var audioBuffer;
    var response; 
    //Noise 
    var noise = new SimplexNoise();     
    
    function ArtScene() 
    {        
        Scene.apply(this);
        this.cam = new Camera(); 
        this.cam.setDistance(-1000); 
        this.velLimit = 10.0;
        this.accLimit = 2.0; 
        this.damperStrength = 0.25;
        this.repulsionStrength = 1.0;
        this.sphereAttractionStrength = 1.0; 
        this.noiseForceStrength = 75.0; 
        this.noiseForceStrengthPrevious = this.noiseForceStrength; 
        this.noiseScalar = 0.0675;
        this.resolution = 75; 
        
        this.sphereRadius = 512; 
        this.radius = 256;
        this.halfRadius = this.radius*0.5;
        this.surfaces = []; 
        this.modifiers = []; 
        this.scene = new RenderNode(); 
        this.radi = []; 
        this.pos = []; 
        this.vel = []; 
        this.acc = []; 
        
        for (var i = 0; i < this.resolution; i++) 
        {
            var centerX = this.radius*Math.random() - this.radius*0.5; 
            var centerY = this.radius*Math.random() - this.radius*0.5; 
            var centerZ = this.radius*Math.random() - this.radius*0.5; 
            var surface = new FamousSurface({size: [this.radius,this.radius]}); 
            surface.addClass('particle');             
            surface.addClass('particle-'+i%5);          
            var modifier = new Modifier({
                origin: [0.5, 0.5]
            }); 
            this.surfaces.push(surface);        
            this.modifiers.push(modifier); 
            this.scene.add(modifier).link(surface); 
            this.pos.push(new Vector(centerX, centerY, centerZ)); 
            this.vel.push(new Vector(0, 0, 0)); 
            this.acc.push(new Vector(0, 0, 0));             
            this.radi.push(0.0); 
        }
        this.initUI();        
        this.parentUI = new Interface();
        this.parentUI.setCurrentObject( this );
        Engine.pipe( this.parentUI );
        
        var ui = this.parentUI.getUI(); 
        var autoUI = ui.getUI(); 
        this.uiElementsMap = autoUI.getUIElementsMap();      
        this.initAudio();         
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
                    content: 'AUDIO SPHERE'
                }
            },
            {
                type: 'toggle',                 
                callback: this.setPlay.bind(this), 
                uiOptions: {
                    defaultValue: true,                     
                    name: 'PLAY/PAUSE'
                } 
            },
            {
                type: 'slider',
                option: 'value',                    
                callback: (function(arg){ this.velLimit = arg; }).bind(this),
                uiOptions: {
                    defaultValue: this.velLimit, 
                    range: [0.0, 20.0],
                    name: 'VELOCITY LIMIT'
                }
            },
            {
                type: 'slider',
                option: 'value',                    
                callback: (function(arg){ this.accLimit = arg; }).bind(this),
                uiOptions: {
                    defaultValue: this.accLimit, 
                    range: [0.0, 10.0],
                    name: 'ACCELERATION LIMIT'
                }
            },
            {
                type: 'slider',
                option: 'value',                    
                callback: (function(arg){ this.damperStrength = arg; }).bind(this),
                uiOptions: {
                    defaultValue: this.damperStrength, 
                    range: [0.0, 1.0], 
                    name: 'DAMPER'
                }
            },
            {
                type: 'slider',
                option: 'value',                    
                callback: (function(arg){ this.repulsionStrength = arg; }).bind(this),
                uiOptions: {
                    defaultValue: this.repulsionStrength, 
                    range: [0.0, 1.0], 
                    name: 'REPULSION'
                }
            },
            {
                type: 'slider',
                option: 'value',                    
                callback: (function(arg){ this.sphereAttractionStrength = arg; }).bind(this),
                uiOptions: {
                    defaultValue: this.sphereAttractionStrength, 
                    range: [0.0, 1.0], 
                    name: 'SPHERICAL'
                }
            },
            {
                type: 'slider',
                option: 'value',                    
                callback: (function(arg){ this.noiseForceStrength = arg; }).bind(this),
                uiOptions: {
                    defaultValue: this.noiseForceStrength, 
                    range: [0.0, 100.0], 
                    name: 'NOISE'
                }
            },
            {
                type: 'slider',
                option: 'value',                    
                callback: (function(arg){ this.noiseScalar = arg; }).bind(this),
                uiOptions: {
                    defaultValue: this.noiseScalar, 
                    range: [0.0, 0.1], 
                    name: 'NOISE SCALE'
                }
            }
        ]; 
    };
    ArtScene.prototype.initAudio = function()
    {
        this.soundPlayer = new SoundPlayer([
            './data/FamousV2Short.mp3'            
        ], (function(){ this.setPlay(true); }).bind(this)); 
        context = this.soundPlayer.getContext();
        analyser = context.createAnalyser();
        analyser.fftSize = 1024;             
        this.soundPlayer.addNode(analyser); 
    }; 
    ArtScene.prototype.setPlay = function(v)
    {
        if(v)
        {            
            this.noiseForceStrength = this.noiseForceStrengthPrevious;             
            this.soundPlayer.playSound(0, 1.0);
        }
        else
        {
            this.noiseForceStrengthPrevious = this.noiseForceStrength;
            this.noiseForceStrength = 0.0;  
            this.soundPlayer.stopPlaying(0, 1.0);        
        }
    }; 
    ArtScene.prototype.update = function()
    {           
        if(analyser)
        {            
            var camInvRotMtx = FM.inverse(this.cam.getRotationMatrix());         
            analyser.smoothingTimeConstant = 0.1;
            var freqByteData = new Uint8Array(analyser.frequencyBinCount);
            var ampByteData = new Uint8Array(analyser.frequencyBinCount);
            analyser.getByteFrequencyData(freqByteData);
            analyser.getByteTimeDomainData(ampByteData);
            
            this.sphereRadius *= 0.1;
            var blen = ampByteData.length; 
            for(var i = 0; i < blen; i++)
            {
                this.sphereRadius += Math.abs((ampByteData[i]-128))/25.0; 
            }        
            var len = this.surfaces.length; 
            var perParticle = Math.floor(freqByteData.length/len);             
            
            var sphereTarget = new Vector(); 
            var sphereForce = new Vector(); 
            var repulseForce = new Vector();
            var force = new Vector(); 
            var damperForce = new Vector(); 
            var ppDelta = new Vector(); 
            var ppForce = new Vector(); 
            var noiseForce = new Vector();   
            for (var i = 0; i < len; i++) 
            {            
                sphereTarget.clear(); 
                sphereForce.clear(); 
                repulseForce.clear(); 
                force.clear(); 
                damperForce.clear(); 
                ppDelta.clear(); 
                ppForce.clear(); 
                noiseForce.clear();             
                var rad = this.radi[i]; 
                var pos = this.pos[i]; 
                var vel = this.vel[i]; 
                var acc = this.acc[i]; 
                var opa = this.modifiers[i].getOpacity(); 
                for(var j = 0; j <= perParticle; j++)
                {
                    var val = freqByteData[i*perParticle+j]/256.0; 
                    rad += val; 
                    opa += val; 
                }
                rad /= perParticle*0.25; 
                opa /= perParticle*0.125;        
                
                rad *= 0.5; 
                opa *= 0.95; 
                
                this.radi[i] = rad; 
                this.modifiers[i].setOpacity(opa); 
                                    
                //Noise
                noiseForce.setXYZ(
                    noise.noise2D(pos.z, i*this.noiseScalar),
                    noise.noise2D(pos.y, i*this.noiseScalar),
                    noise.noise2D(pos.x, i*this.noiseScalar));
                noiseForce.mult(this.noiseForceStrength, noiseForce); 
                force.add(noiseForce, force);                 
                //Spherical Attractor  
                pos.normalize(this.sphereRadius, sphereTarget);                 
                sphereTarget.sub(pos, sphereForce);                
                sphereForce.mult(this.sphereAttractionStrength, sphereForce);                                 
                force.add(sphereForce, force);                                             
                //ElectroStatic Repulsion 
                for (var j = 0; j < len; j++) 
                {                    
                    if(j != i)
                    {                                 
                        var otherPos = this.pos[j]; 
                        var power = this.radi[j]*rad; 
                        otherPos.sub(pos, ppDelta);     
                        var distance = ppDelta.norm(); 
                        ppDelta.mult(power/distance, ppDelta); 
                        repulseForce.sub(ppDelta, repulseForce); 
                    }                
                }   
                repulseForce.mult(this.repulsionStrength, repulseForce); 
                force.add(repulseForce, force); 
                //Damper 
                vel.mult(-this.damperStrength, damperForce); 
                force.add(damperForce, force); 
                
                acc.mult(0.0, acc); 
                acc.add(force, acc); 
                acc.cap(this.accLimit);                 
                vel.add(acc, vel); 
                vel.cap(this.velLimit);                 
                pos.add(vel, pos);                            
                
                this.modifiers[i].setTransform(FM.multiply(FM.scale(rad, rad, 1.0), camInvRotMtx, FM.translate(pos.x, pos.y, pos.z))); 
            }        
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
    
    var artscene = new ArtScene(); 
    var mainCtx = Engine.createContext();
    mainCtx.setPerspective(1000);
    Engine.pipe(artscene); 
    mainCtx.add(artscene); 
});