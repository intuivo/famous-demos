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
    var RegisterEasing = require('famous-animation/RegisterEasing');      
    
    function ArtScene(options) 
    { 
        GLScene.apply(this, arguments);                
        
        var cam = new Camera();  
        cam.setDistance(-2000.0); 
        cam.setSensitivityZoom(20.0);
        cam.setDamping(0.99); 
        cam.setFlipY(true);     
        this.cam = cam; 
        this.palettes = ColorPalettes; 
        this.palette = this.palettes.getPalette(10); 
        this.initUI();
        this.parentUI = new Interface();
        this.parentUI.setCurrentObject( this );
        Engine.pipe( this.parentUI );
        this.node.add( this.parentUI );        
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
                    content: 'Art Scene'
                }
            }
        ]; 
    }; 
    ArtScene.prototype.setup = function(gl)
    {                                
        this.renderer = new Renderer({                                  //Renders a scene with the proper camera, etc
            context: gl
        });
        this.renderer.enableAdditiveBlending(); 
        this.renderer.setDepthTesting(false); 
        this.renderer.setLineWidth(2); 
        this.renderer.setPointSize(2); 
        
        this.scene = new Scene();          
    };     
    ArtScene.prototype.draw = function(gl){                                        
        this.renderer.render({
            scene: this.scene, 
            camera: this.cam
        });             
    }; 
    
    var mainCtx = Engine.createContext();
    mainCtx.setPerspective( 1000 );
    
    mainCtx.add( new ArtScene() ); 
});