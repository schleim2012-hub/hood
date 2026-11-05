(()=>{var nn=(i,t)=>()=>(i&&(t=i(i=0)),t);var Of=(i,t)=>()=>(t||i((t={exports:{}}).exports,t),t.exports);function Xs(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_n[i&255]+_n[i>>8&255]+_n[i>>16&255]+_n[i>>24&255]+"-"+_n[t&255]+_n[t>>8&255]+"-"+_n[t>>16&15|64]+_n[t>>24&255]+"-"+_n[e&63|128]+_n[e>>8&255]+"-"+_n[e>>16&255]+_n[e>>24&255]+_n[n&255]+_n[n>>8&255]+_n[n>>16&255]+_n[n>>24&255]).toLowerCase()}function mn(i,t,e){return Math.max(t,Math.min(e,i))}function _d(i,t){return(i%t+t)%t}function oa(i,t,e){return(1-e)*i+e*t}function Qs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Cn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}function du(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function lo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function yd(){let i=lo("canvas");return i.style.display="block",i}function rr(i){i in th||(th[i]=!0,console.warn(i))}function vd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Md(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function bd(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}function vi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Us(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}function la(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?bl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function ha(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){qi.fromArray(i,r);let a=s.x*Math.abs(qi.x)+s.y*Math.abs(qi.y)+s.z*Math.abs(qi.z),l=t.dot(qi),c=e.dot(qi),h=n.dot(qi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}function Sa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}function Ud(i,t,e,n,s,r,o,a){let l;if(t.side===Pn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Fi,a),l===null)return null;Wr.copy(a),Wr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Wr);return c<e.near||c>e.far?null:{distance:c,point:Wr.clone(),object:i}}function Xr(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,kr),i.getVertexPosition(l,Hr),i.getVertexPosition(c,Vr);let h=Ud(i,t,e,n,kr,Hr,Vr,xh);if(h){let p=new H;ji.getBarycoord(xh,kr,Hr,Vr,p),s&&(h.uv=ji.getInterpolatedAttribute(s,a,l,c,p,new xt)),r&&(h.uv1=ji.getInterpolatedAttribute(r,a,l,c,p,new xt)),o&&(h.normal=ji.getInterpolatedAttribute(o,a,l,c,p,new H),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new H,materialIndex:0};ji.getNormal(kr,Hr,Vr,u.normal),h.face=u,h.barycoord=p}return h}function Hs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Sn(i){let t={};for(let e=0;e<i.length;e++){let n=Hs(i[e]);for(let s in n)t[s]=n[s]}return t}function Nd(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function mu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ie.workingColorSpace}function gu(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function kd(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,p=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:p}}function n(a,l,c){let h=l.array,p=l.updateRanges;if(i.bindBuffer(c,a),p.length===0)i.bufferSubData(c,0,h);else{p.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<p.length;f++){let g=p[u],_=p[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,p[u]=_)}p.length=u+1;for(let f=0,g=p.length;f<g;f++){let _=p[f];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}function M0(i,t,e,n,s,r,o){let a=new ne(0),l=r===!0?0:1,c,h,p=null,u=0,f=null;function g(M){let b=M.isScene===!0?M.background:null;return b&&b.isTexture&&(b=(M.backgroundBlurriness>0?e:t).get(b)),b}function _(M){let b=!1,v=g(M);v===null?d(a,l):v&&v.isColor&&(d(v,1),b=!0);let N=i.xr.getEnvironmentBlendMode();N==="additive"?n.buffers.color.setClear(0,0,0,1,o):N==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,b){let v=g(b);v&&(v.isCubeTexture||v.mapping===No)?(h===void 0&&(h=new ie(new We(1,1,1),new an({name:"BackgroundCubeMaterial",uniforms:Hs(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(N,P,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),$i.copy(b.backgroundRotation),$i.x*=-1,$i.y*=-1,$i.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(v0.makeRotationFromEuler($i)),h.material.toneMapped=Ie.getTransfer(v.colorSpace)!==Oe,(p!==v||u!==v.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,p=v,u=v.version,f=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new ie(new Tn(2,2),new an({name:"BackgroundMaterial",uniforms:Hs(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:Fi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=Ie.getTransfer(v.colorSpace)!==Oe,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(p!==v||u!==v.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,p=v,u=v.version,f=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function d(M,b){M.getRGB(Yr,mu(i)),n.buffers.color.setClear(Yr.r,Yr.g,Yr.b,b,o)}return{getClearColor:function(){return a},setClearColor:function(M,b=1){a.set(M),l=b,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,d(a,l)},render:_,addToRenderList:m}}function b0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(E,w,$,Z,Q){let et=!1,Y=p(Z,$,w);r!==Y&&(r=Y,c(r.object)),et=f(E,Z,$,Q),et&&g(E,Z,$,Q),Q!==null&&t.update(Q,i.ELEMENT_ARRAY_BUFFER),(et||o)&&(o=!1,v(E,w,$,Z),Q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer))}function l(){return i.createVertexArray()}function c(E){return i.bindVertexArray(E)}function h(E){return i.deleteVertexArray(E)}function p(E,w,$){let Z=$.wireframe===!0,Q=n[E.id];Q===void 0&&(Q={},n[E.id]=Q);let et=Q[w.id];et===void 0&&(et={},Q[w.id]=et);let Y=et[Z];return Y===void 0&&(Y=u(l()),et[Z]=Y),Y}function u(E){let w=[],$=[],Z=[];for(let Q=0;Q<e;Q++)w[Q]=0,$[Q]=0,Z[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:$,attributeDivisors:Z,object:E,attributes:{},index:null}}function f(E,w,$,Z){let Q=r.attributes,et=w.attributes,Y=0,ot=$.getAttributes();for(let tt in ot)if(ot[tt].location>=0){let It=Q[tt],Ut=et[tt];if(Ut===void 0&&(tt==="instanceMatrix"&&E.instanceMatrix&&(Ut=E.instanceMatrix),tt==="instanceColor"&&E.instanceColor&&(Ut=E.instanceColor)),It===void 0||It.attribute!==Ut||Ut&&It.data!==Ut.data)return!0;Y++}return r.attributesNum!==Y||r.index!==Z}function g(E,w,$,Z){let Q={},et=w.attributes,Y=0,ot=$.getAttributes();for(let tt in ot)if(ot[tt].location>=0){let It=et[tt];It===void 0&&(tt==="instanceMatrix"&&E.instanceMatrix&&(It=E.instanceMatrix),tt==="instanceColor"&&E.instanceColor&&(It=E.instanceColor));let Ut={};Ut.attribute=It,It&&It.data&&(Ut.data=It.data),Q[tt]=Ut,Y++}r.attributes=Q,r.attributesNum=Y,r.index=Z}function _(){let E=r.newAttributes;for(let w=0,$=E.length;w<$;w++)E[w]=0}function m(E){d(E,0)}function d(E,w){let $=r.newAttributes,Z=r.enabledAttributes,Q=r.attributeDivisors;$[E]=1,Z[E]===0&&(i.enableVertexAttribArray(E),Z[E]=1),Q[E]!==w&&(i.vertexAttribDivisor(E,w),Q[E]=w)}function M(){let E=r.newAttributes,w=r.enabledAttributes;for(let $=0,Z=w.length;$<Z;$++)w[$]!==E[$]&&(i.disableVertexAttribArray($),w[$]=0)}function b(E,w,$,Z,Q,et,Y){Y===!0?i.vertexAttribIPointer(E,w,$,Q,et):i.vertexAttribPointer(E,w,$,Z,Q,et)}function v(E,w,$,Z){_();let Q=Z.attributes,et=$.getAttributes(),Y=w.defaultAttributeValues;for(let ot in et){let tt=et[ot];if(tt.location>=0){let Tt=Q[ot];if(Tt===void 0&&(ot==="instanceMatrix"&&E.instanceMatrix&&(Tt=E.instanceMatrix),ot==="instanceColor"&&E.instanceColor&&(Tt=E.instanceColor)),Tt!==void 0){let It=Tt.normalized,Ut=Tt.itemSize,Qt=t.get(Tt);if(Qt===void 0)continue;let fe=Qt.buffer,ct=Qt.type,bt=Qt.bytesPerElement,Ht=ct===i.INT||ct===i.UNSIGNED_INT||Tt.gpuType===pc;if(Tt.isInterleavedBufferAttribute){let St=Tt.data,Gt=St.stride,te=Tt.offset;if(St.isInstancedInterleavedBuffer){for(let jt=0;jt<tt.locationSize;jt++)d(tt.location+jt,St.meshPerAttribute);E.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let jt=0;jt<tt.locationSize;jt++)m(tt.location+jt);i.bindBuffer(i.ARRAY_BUFFER,fe);for(let jt=0;jt<tt.locationSize;jt++)b(tt.location+jt,Ut/tt.locationSize,ct,It,Gt*bt,(te+Ut/tt.locationSize*jt)*bt,Ht)}else{if(Tt.isInstancedBufferAttribute){for(let St=0;St<tt.locationSize;St++)d(tt.location+St,Tt.meshPerAttribute);E.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Tt.meshPerAttribute*Tt.count)}else for(let St=0;St<tt.locationSize;St++)m(tt.location+St);i.bindBuffer(i.ARRAY_BUFFER,fe);for(let St=0;St<tt.locationSize;St++)b(tt.location+St,Ut/tt.locationSize,ct,It,Ut*bt,Ut/tt.locationSize*St*bt,Ht)}}else if(Y!==void 0){let It=Y[ot];if(It!==void 0)switch(It.length){case 2:i.vertexAttrib2fv(tt.location,It);break;case 3:i.vertexAttrib3fv(tt.location,It);break;case 4:i.vertexAttrib4fv(tt.location,It);break;default:i.vertexAttrib1fv(tt.location,It)}}}}M()}function N(){z();for(let E in n){let w=n[E];for(let $ in w){let Z=w[$];for(let Q in Z)h(Z[Q].object),delete Z[Q];delete w[$]}delete n[E]}}function P(E){if(n[E.id]===void 0)return;let w=n[E.id];for(let $ in w){let Z=w[$];for(let Q in Z)h(Z[Q].object),delete Z[Q];delete w[$]}delete n[E.id]}function D(E){for(let w in n){let $=n[w];if($[E.id]===void 0)continue;let Z=$[E.id];for(let Q in Z)h(Z[Q].object),delete Z[Q];delete $[E.id]}}function z(){A(),o=!0,r!==s&&(r=s,c(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:z,resetDefaultState:A,dispose:N,releaseStatesOfGeometry:P,releaseStatesOfProgram:D,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function S0(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,p){p!==0&&(i.drawArraysInstanced(n,c,h,p),e.update(h,n,p))}function a(c,h,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,p);let f=0;for(let g=0;g<p;g++)f+=h[g];e.update(f,n,1)}function l(c,h,p,u){if(p===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,p);let g=0;for(let _=0;_<p;_++)g+=h[_]*u[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function E0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let D=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(D){return!(D!==jn&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){let z=D===ni&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(D!==Mi&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==ai&&!z)}function l(D){if(D==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let p=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),N=g>0,P=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:p,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:M,maxVaryings:b,maxFragmentUniforms:v,vertexTextures:N,maxSamples:P}}function w0(i){let t=this,e=null,n=0,s=!1,r=!1,o=new _i,a=new xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){let f=p.length!==0||u||n!==0||s;return s=u,n=p.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,u){e=h(p,u,0)},this.setState=function(p,u,f){let g=p.clippingPlanes,_=p.clipIntersection,m=p.clipShadows,d=i.get(p);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let M=r?0:n,b=M*4,v=d.clippingState||null;l.value=v,v=h(g,u,b,f);for(let N=0;N!==b;++N)v[N]=e[N];d.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(p,u,f,g){let _=p!==null?p.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let d=f+_*4,M=u.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<d)&&(m=new Float32Array(d));for(let b=0,v=f;b!==_;++b,v+=4)o.copy(p[b]).applyMatrix4(M,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function T0(i){let t=new WeakMap;function e(o,a){return a===Xa?o.mapping=Os:a===qa&&(o.mapping=Bs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Xa||a===qa)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Al(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}function A0(i){let t=[],e=[],n=[],s=i,r=i-Is+1+vh.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Is?l=vh[o-i+Is-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,p=1+c,u=[h,h,p,h,p,p,h,h,p,p,h,p],f=6,g=6,_=3,m=2,d=1,M=new Float32Array(_*g*f),b=new Float32Array(m*g*f),v=new Float32Array(d*g*f);for(let P=0;P<f;P++){let D=P%3*2/3-1,z=P>2?0:-1,A=[D,z,0,D+2/3,z,0,D+2/3,z+1,0,D,z,0,D+2/3,z+1,0,D,z+1,0];M.set(A,_*g*P),b.set(u,m*g*P);let E=[P,P,P,P,P,P];v.set(E,d*g*P)}let N=new on;N.setAttribute("position",new rn(M,_)),N.setAttribute("uv",new rn(b,m)),N.setAttribute("faceIndex",new rn(v,d)),t.push(N),s>Is&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Sh(i,t,e){let n=new wn(i,t,e);return n.texture.mapping=No,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Zr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function R0(i,t,e){let n=new Float32Array(ts),s=new H(0,1,0);return new an({name:"SphericalGaussianBlur",defines:{n:ts,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Mc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function Eh(){return new an({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function wh(){return new an({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function Mc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function C0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Xa||l===qa,h=l===Os||l===Bs;if(c||h){let p=t.get(a),u=p!==void 0?p.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new xo(i)),p=c?e.fromEquirectangular(a,p):e.fromCubemap(a,p),p.texture.pmremVersion=a.pmremVersion,t.set(a,p),p.texture;if(p!==void 0)return p.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new xo(i)),p=c?e.fromEquirectangular(a):e.fromCubemap(a),p.texture.pmremVersion=a.pmremVersion,t.set(a,p),a.addEventListener("dispose",r),p.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function I0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&rr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function P0(i,t,e,n){let s={},r=new WeakMap;function o(p){let u=p.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);for(let g in u.morphAttributes){let _=u.morphAttributes[g];for(let m=0,d=_.length;m<d;m++)t.remove(_[m])}u.removeEventListener("dispose",o),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(p,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(p){let u=p.attributes;for(let g in u)t.update(u[g],i.ARRAY_BUFFER);let f=p.morphAttributes;for(let g in f){let _=f[g];for(let m=0,d=_.length;m<d;m++)t.update(_[m],i.ARRAY_BUFFER)}}function c(p){let u=[],f=p.index,g=p.attributes.position,_=0;if(f!==null){let M=f.array;_=f.version;for(let b=0,v=M.length;b<v;b+=3){let N=M[b+0],P=M[b+1],D=M[b+2];u.push(N,P,P,D,D,N)}}else if(g!==void 0){let M=g.array;_=g.version;for(let b=0,v=M.length/3-1;b<v;b+=3){let N=b+0,P=b+1,D=b+2;u.push(N,P,P,D,D,N)}}else return;let m=new(du(u)?po:fo)(u,1);m.version=_;let d=r.get(p);d&&t.remove(d),r.set(p,m)}function h(p){let u=r.get(p);if(u){let f=p.index;f!==null&&u.version<f.version&&c(p)}else c(p);return r.get(p)}return{get:a,update:l,getWireframeAttribute:h}}function L0(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,f){i.drawElements(n,f,r,u*o),e.update(f,n,1)}function c(u,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,u*o,g),e.update(f,n,g))}function h(u,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,g);let m=0;for(let d=0;d<g;d++)m+=f[d];e.update(m,n,1)}function p(u,f,g,_){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<u.length;d++)c(u[d]/o,f[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,u,0,_,0,g);let d=0;for(let M=0;M<g;M++)d+=f[M]*_[M];e.update(d,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function D0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function U0(i,t,e){let n=new WeakMap,s=new Ke;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==p){let A=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",A)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],b=0;f===!0&&(b=1),g===!0&&(b=2),_===!0&&(b=3);let v=a.attributes.position.count*b,N=1;v>t.maxTextureSize&&(N=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let P=new Float32Array(v*N*4*p),D=new ho(P,v,N,p);D.type=ai,D.needsUpdate=!0;let z=b*4;for(let E=0;E<p;E++){let w=m[E],$=d[E],Z=M[E],Q=v*N*4*E;for(let et=0;et<w.count;et++){let Y=et*z;f===!0&&(s.fromBufferAttribute(w,et),P[Q+Y+0]=s.x,P[Q+Y+1]=s.y,P[Q+Y+2]=s.z,P[Q+Y+3]=0),g===!0&&(s.fromBufferAttribute($,et),P[Q+Y+4]=s.x,P[Q+Y+5]=s.y,P[Q+Y+6]=s.z,P[Q+Y+7]=0),_===!0&&(s.fromBufferAttribute(Z,et),P[Q+Y+8]=s.x,P[Q+Y+9]=s.y,P[Q+Y+10]=s.z,P[Q+Y+11]=Z.itemSize===4?s.w:1)}}u={count:p,texture:D,size:new xt(v,N)},n.set(a,u),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function N0(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,p=t.get(l,h);if(s.get(p)!==c&&(t.update(p),s.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return p}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}function qs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Ah[s];if(r===void 0&&(r=new Float32Array(s),Ah[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function ln(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function cn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Oo(i,t){let e=Rh[t];e===void 0&&(e=new Int32Array(t),Rh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function F0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function O0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ln(e,t))return;i.uniform2fv(this.addr,t),cn(e,t)}}function B0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ln(e,t))return;i.uniform3fv(this.addr,t),cn(e,t)}}function z0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ln(e,t))return;i.uniform4fv(this.addr,t),cn(e,t)}}function k0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ln(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),cn(e,t)}else{if(ln(e,n))return;Ph.set(n),i.uniformMatrix2fv(this.addr,!1,Ph),cn(e,n)}}function H0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ln(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),cn(e,t)}else{if(ln(e,n))return;Ih.set(n),i.uniformMatrix3fv(this.addr,!1,Ih),cn(e,n)}}function V0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ln(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),cn(e,t)}else{if(ln(e,n))return;Ch.set(n),i.uniformMatrix4fv(this.addr,!1,Ch),cn(e,n)}}function G0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function W0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ln(e,t))return;i.uniform2iv(this.addr,t),cn(e,t)}}function X0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ln(e,t))return;i.uniform3iv(this.addr,t),cn(e,t)}}function q0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ln(e,t))return;i.uniform4iv(this.addr,t),cn(e,t)}}function Y0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Z0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ln(e,t))return;i.uniform2uiv(this.addr,t),cn(e,t)}}function $0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ln(e,t))return;i.uniform3uiv(this.addr,t),cn(e,t)}}function K0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ln(e,t))return;i.uniform4uiv(this.addr,t),cn(e,t)}}function J0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Th.compareFunction=fu,r=Th):r=xu,e.setTexture2D(t||r,s)}function Q0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||yu,s)}function j0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||vu,s)}function tg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||_u,s)}function eg(i){switch(i){case 5126:return F0;case 35664:return O0;case 35665:return B0;case 35666:return z0;case 35674:return k0;case 35675:return H0;case 35676:return V0;case 5124:case 35670:return G0;case 35667:case 35671:return W0;case 35668:case 35672:return X0;case 35669:case 35673:return q0;case 5125:return Y0;case 36294:return Z0;case 36295:return $0;case 36296:return K0;case 35678:case 36198:case 36298:case 36306:case 35682:return J0;case 35679:case 36299:case 36307:return Q0;case 35680:case 36300:case 36308:case 36293:return j0;case 36289:case 36303:case 36311:case 36292:return tg}}function ng(i,t){i.uniform1fv(this.addr,t)}function ig(i,t){let e=qs(t,this.size,2);i.uniform2fv(this.addr,e)}function sg(i,t){let e=qs(t,this.size,3);i.uniform3fv(this.addr,e)}function rg(i,t){let e=qs(t,this.size,4);i.uniform4fv(this.addr,e)}function og(i,t){let e=qs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function ag(i,t){let e=qs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function lg(i,t){let e=qs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function cg(i,t){i.uniform1iv(this.addr,t)}function hg(i,t){i.uniform2iv(this.addr,t)}function ug(i,t){i.uniform3iv(this.addr,t)}function fg(i,t){i.uniform4iv(this.addr,t)}function dg(i,t){i.uniform1uiv(this.addr,t)}function pg(i,t){i.uniform2uiv(this.addr,t)}function mg(i,t){i.uniform3uiv(this.addr,t)}function gg(i,t){i.uniform4uiv(this.addr,t)}function xg(i,t,e){let n=this.cache,s=t.length,r=Oo(e,s);ln(n,r)||(i.uniform1iv(this.addr,r),cn(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||xu,r[o])}function _g(i,t,e){let n=this.cache,s=t.length,r=Oo(e,s);ln(n,r)||(i.uniform1iv(this.addr,r),cn(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||yu,r[o])}function yg(i,t,e){let n=this.cache,s=t.length,r=Oo(e,s);ln(n,r)||(i.uniform1iv(this.addr,r),cn(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||vu,r[o])}function vg(i,t,e){let n=this.cache,s=t.length,r=Oo(e,s);ln(n,r)||(i.uniform1iv(this.addr,r),cn(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||_u,r[o])}function Mg(i){switch(i){case 5126:return ng;case 35664:return ig;case 35665:return sg;case 35666:return rg;case 35674:return og;case 35675:return ag;case 35676:return lg;case 5124:case 35670:return cg;case 35667:case 35671:return hg;case 35668:case 35672:return ug;case 35669:case 35673:return fg;case 5125:return dg;case 36294:return pg;case 36295:return mg;case 36296:return gg;case 35678:case 36198:case 36298:case 36306:case 35682:return xg;case 35679:case 36299:case 36307:return _g;case 35680:case 36300:case 36308:case 36293:return yg;case 36289:case 36303:case 36311:case 36292:return vg}}function Lh(i,t){i.seq.push(t),i.map[t.id]=t}function bg(i,t,e){let n=i.name,s=n.length;for(La.lastIndex=0;;){let r=La.exec(n),o=La.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Lh(e,c===void 0?new Rl(a,i,t):new Cl(a,i,t));break}else{let p=e.map[a];p===void 0&&(p=new Il(a),Lh(e,p)),e=p}}}function Dh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}function wg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Tg(i){Ie._getMatrix(Uh,Ie.workingColorSpace,i);let t=`mat3( ${Uh.elements.map(e=>e.toFixed(4))} )`;switch(Ie.getTransfer(i)){case Fo:return[t,"LinearTransferOETF"];case Oe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Nh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+wg(i.getShaderSource(t),o)}else return s}function Ag(i,t){let e=Tg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Rg(i,t){let e;switch(t){case cc:e="Linear";break;case hc:e="Reinhard";break;case uc:e="Cineon";break;case Mr:e="ACESFilmic";break;case fc:e="AgX";break;case dc:e="Neutral";break;case od:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Cg(){Ie.getLuminanceCoefficients($r);let i=$r.x.toFixed(4),t=$r.y.toFixed(4),e=$r.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ig(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(or).join(`
`)}function Pg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Lg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function or(i){return i!==""}function Fh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Oh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}function Pl(i){return i.replace(Dg,Ng)}function Ng(i,t){let e=ve[t];if(e===void 0){let n=Ug.get(t);if(n!==void 0)e=ve[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Pl(e)}function Bh(i){return i.replace(Fg,Og)}function Og(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function zh(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Bg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===jh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===lc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===xi&&(t="SHADOWMAP_TYPE_VSM"),t}function zg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Os:case Bs:t="ENVMAP_TYPE_CUBE";break;case No:t="ENVMAP_TYPE_CUBE_UV";break}return t}function kg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Bs:t="ENVMAP_MODE_REFRACTION";break}return t}function Hg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case tu:t="ENVMAP_BLENDING_MULTIPLY";break;case sd:t="ENVMAP_BLENDING_MIX";break;case rd:t="ENVMAP_BLENDING_ADD";break}return t}function Vg(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Gg(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Bg(e),c=zg(e),h=kg(e),p=Hg(e),u=Vg(e),f=Ig(e),g=Pg(r),_=s.createProgram(),m,d,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(or).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(or).join(`
`),d.length>0&&(d+=`
`)):(m=[zh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(or).join(`
`),d=[zh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ui?"#define TONE_MAPPING":"",e.toneMapping!==Ui?ve.tonemapping_pars_fragment:"",e.toneMapping!==Ui?Rg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ve.colorspace_pars_fragment,Ag("linearToOutputTexel",e.outputColorSpace),Cg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(or).join(`
`)),o=Pl(o),o=Fh(o,e),o=Oh(o,e),a=Pl(a),a=Fh(a,e),a=Oh(a,e),o=Bh(o),a=Bh(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===jc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===jc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let b=M+m+o,v=M+d+a,N=Dh(s,s.VERTEX_SHADER,b),P=Dh(s,s.FRAGMENT_SHADER,v);s.attachShader(_,N),s.attachShader(_,P),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function D(w){if(i.debug.checkShaderErrors){let $=s.getProgramInfoLog(_).trim(),Z=s.getShaderInfoLog(N).trim(),Q=s.getShaderInfoLog(P).trim(),et=!0,Y=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(et=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,N,P);else{let ot=Nh(s,N,"vertex"),tt=Nh(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+$+`
`+ot+`
`+tt)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(Z===""||Q==="")&&(Y=!1);Y&&(w.diagnostics={runnable:et,programLog:$,vertexShader:{log:Z,prefix:m},fragmentShader:{log:Q,prefix:d}})}s.deleteShader(N),s.deleteShader(P),z=new Ns(s,_),A=Lg(s,_)}let z;this.getUniforms=function(){return z===void 0&&D(this),z};let A;this.getAttributes=function(){return A===void 0&&D(this),A};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(_,Sg)),E},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Eg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=N,this.fragmentShader=P,this}function Xg(i,t,e,n,s,r,o){let a=new uo,l=new Ll,c=new Set,h=[],p=s.logarithmicDepthBuffer,u=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(A){return c.add(A),A===0?"uv":`uv${A}`}function m(A,E,w,$,Z){let Q=$.fog,et=Z.geometry,Y=A.isMeshStandardMaterial?$.environment:null,ot=(A.isMeshStandardMaterial?e:t).get(A.envMap||Y),tt=ot&&ot.mapping===No?ot.image.height:null,Tt=g[A.type];A.precision!==null&&(f=s.getMaxPrecision(A.precision),f!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",f,"instead."));let It=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,Ut=It!==void 0?It.length:0,Qt=0;et.morphAttributes.position!==void 0&&(Qt=1),et.morphAttributes.normal!==void 0&&(Qt=2),et.morphAttributes.color!==void 0&&(Qt=3);let fe,ct,bt,Ht;if(Tt){let pe=ri[Tt];fe=pe.vertexShader,ct=pe.fragmentShader}else fe=A.vertexShader,ct=A.fragmentShader,l.update(A),bt=l.getVertexShaderID(A),Ht=l.getFragmentShaderID(A);let St=i.getRenderTarget(),Gt=i.state.buffers.depth.getReversed(),te=Z.isInstancedMesh===!0,jt=Z.isBatchedMesh===!0,he=!!A.map,ut=!!A.matcap,_t=!!ot,F=!!A.aoMap,zt=!!A.lightMap,pt=!!A.bumpMap,At=!!A.normalMap,yt=!!A.displacementMap,$t=!!A.emissiveMap,Bt=!!A.metalnessMap,I=!!A.roughnessMap,S=A.anisotropy>0,X=A.clearcoat>0,at=A.dispersion>0,ht=A.iridescence>0,rt=A.sheen>0,Vt=A.transmission>0,Et=S&&!!A.anisotropyMap,Ft=X&&!!A.clearcoatMap,Ot=X&&!!A.clearcoatNormalMap,gt=X&&!!A.clearcoatRoughnessMap,Pt=ht&&!!A.iridescenceMap,Yt=ht&&!!A.iridescenceThicknessMap,Kt=rt&&!!A.sheenColorMap,vt=rt&&!!A.sheenRoughnessMap,de=!!A.specularMap,ae=!!A.specularColorMap,Ue=!!A.specularIntensityMap,G=Vt&&!!A.transmissionMap,Ct=Vt&&!!A.thicknessMap,K=!!A.gradientMap,dt=!!A.alphaMap,Dt=A.alphaTest>0,Lt=!!A.alphaHash,se=!!A.extensions,De=Ui;A.toneMapped&&(St===null||St.isXRRenderTarget===!0)&&(De=i.toneMapping);let ce={shaderID:Tt,shaderType:A.type,shaderName:A.name,vertexShader:fe,fragmentShader:ct,defines:A.defines,customVertexShaderID:bt,customFragmentShaderID:Ht,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:f,batching:jt,batchingColor:jt&&Z._colorsTexture!==null,instancing:te,instancingColor:te&&Z.instanceColor!==null,instancingMorph:te&&Z.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:St===null?i.outputColorSpace:St.isXRRenderTarget===!0?St.texture.colorSpace:Ws,alphaToCoverage:!!A.alphaToCoverage,map:he,matcap:ut,envMap:_t,envMapMode:_t&&ot.mapping,envMapCubeUVHeight:tt,aoMap:F,lightMap:zt,bumpMap:pt,normalMap:At,displacementMap:u&&yt,emissiveMap:$t,normalMapObjectSpace:At&&A.normalMapType===hd,normalMapTangentSpace:At&&A.normalMapType===uu,metalnessMap:Bt,roughnessMap:I,anisotropy:S,anisotropyMap:Et,clearcoat:X,clearcoatMap:Ft,clearcoatNormalMap:Ot,clearcoatRoughnessMap:gt,dispersion:at,iridescence:ht,iridescenceMap:Pt,iridescenceThicknessMap:Yt,sheen:rt,sheenColorMap:Kt,sheenRoughnessMap:vt,specularMap:de,specularColorMap:ae,specularIntensityMap:Ue,transmission:Vt,transmissionMap:G,thicknessMap:Ct,gradientMap:K,opaque:A.transparent===!1&&A.blending===Ls&&A.alphaToCoverage===!1,alphaMap:dt,alphaTest:Dt,alphaHash:Lt,combine:A.combine,mapUv:he&&_(A.map.channel),aoMapUv:F&&_(A.aoMap.channel),lightMapUv:zt&&_(A.lightMap.channel),bumpMapUv:pt&&_(A.bumpMap.channel),normalMapUv:At&&_(A.normalMap.channel),displacementMapUv:yt&&_(A.displacementMap.channel),emissiveMapUv:$t&&_(A.emissiveMap.channel),metalnessMapUv:Bt&&_(A.metalnessMap.channel),roughnessMapUv:I&&_(A.roughnessMap.channel),anisotropyMapUv:Et&&_(A.anisotropyMap.channel),clearcoatMapUv:Ft&&_(A.clearcoatMap.channel),clearcoatNormalMapUv:Ot&&_(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:gt&&_(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Pt&&_(A.iridescenceMap.channel),iridescenceThicknessMapUv:Yt&&_(A.iridescenceThicknessMap.channel),sheenColorMapUv:Kt&&_(A.sheenColorMap.channel),sheenRoughnessMapUv:vt&&_(A.sheenRoughnessMap.channel),specularMapUv:de&&_(A.specularMap.channel),specularColorMapUv:ae&&_(A.specularColorMap.channel),specularIntensityMapUv:Ue&&_(A.specularIntensityMap.channel),transmissionMapUv:G&&_(A.transmissionMap.channel),thicknessMapUv:Ct&&_(A.thicknessMap.channel),alphaMapUv:dt&&_(A.alphaMap.channel),vertexTangents:!!et.attributes.tangent&&(At||S),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!et.attributes.uv&&(he||dt),fog:!!Q,useFog:A.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:p,reverseDepthBuffer:Gt,skinning:Z.isSkinnedMesh===!0,morphTargets:et.morphAttributes.position!==void 0,morphNormals:et.morphAttributes.normal!==void 0,morphColors:et.morphAttributes.color!==void 0,morphTargetsCount:Ut,morphTextureStride:Qt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:A.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:De,decodeVideoTexture:he&&A.map.isVideoTexture===!0&&Ie.getTransfer(A.map.colorSpace)===Oe,decodeVideoTextureEmissive:$t&&A.emissiveMap.isVideoTexture===!0&&Ie.getTransfer(A.emissiveMap.colorSpace)===Oe,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===En,flipSided:A.side===Pn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:se&&A.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&A.extensions.multiDraw===!0||jt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return ce.vertexUv1s=c.has(1),ce.vertexUv2s=c.has(2),ce.vertexUv3s=c.has(3),c.clear(),ce}function d(A){let E=[];if(A.shaderID?E.push(A.shaderID):(E.push(A.customVertexShaderID),E.push(A.customFragmentShaderID)),A.defines!==void 0)for(let w in A.defines)E.push(w),E.push(A.defines[w]);return A.isRawShaderMaterial===!1&&(M(E,A),b(E,A),E.push(i.outputColorSpace)),E.push(A.customProgramCacheKey),E.join()}function M(A,E){A.push(E.precision),A.push(E.outputColorSpace),A.push(E.envMapMode),A.push(E.envMapCubeUVHeight),A.push(E.mapUv),A.push(E.alphaMapUv),A.push(E.lightMapUv),A.push(E.aoMapUv),A.push(E.bumpMapUv),A.push(E.normalMapUv),A.push(E.displacementMapUv),A.push(E.emissiveMapUv),A.push(E.metalnessMapUv),A.push(E.roughnessMapUv),A.push(E.anisotropyMapUv),A.push(E.clearcoatMapUv),A.push(E.clearcoatNormalMapUv),A.push(E.clearcoatRoughnessMapUv),A.push(E.iridescenceMapUv),A.push(E.iridescenceThicknessMapUv),A.push(E.sheenColorMapUv),A.push(E.sheenRoughnessMapUv),A.push(E.specularMapUv),A.push(E.specularColorMapUv),A.push(E.specularIntensityMapUv),A.push(E.transmissionMapUv),A.push(E.thicknessMapUv),A.push(E.combine),A.push(E.fogExp2),A.push(E.sizeAttenuation),A.push(E.morphTargetsCount),A.push(E.morphAttributeCount),A.push(E.numDirLights),A.push(E.numPointLights),A.push(E.numSpotLights),A.push(E.numSpotLightMaps),A.push(E.numHemiLights),A.push(E.numRectAreaLights),A.push(E.numDirLightShadows),A.push(E.numPointLightShadows),A.push(E.numSpotLightShadows),A.push(E.numSpotLightShadowsWithMaps),A.push(E.numLightProbes),A.push(E.shadowMapType),A.push(E.toneMapping),A.push(E.numClippingPlanes),A.push(E.numClipIntersection),A.push(E.depthPacking)}function b(A,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),A.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),A.push(a.mask)}function v(A){let E=g[A.type],w;if(E){let $=ri[E];w=ki.clone($.uniforms)}else w=A.uniforms;return w}function N(A,E){let w;for(let $=0,Z=h.length;$<Z;$++){let Q=h[$];if(Q.cacheKey===E){w=Q,++w.usedTimes;break}}return w===void 0&&(w=new Gg(i,E,A,r),h.push(w)),w}function P(A){if(--A.usedTimes===0){let E=h.indexOf(A);h[E]=h[h.length-1],h.pop(),A.destroy()}}function D(A){l.remove(A)}function z(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:v,acquireProgram:N,releaseProgram:P,releaseShaderCache:D,programs:h,dispose:z}}function qg(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Yg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function kh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Hh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(p,u,f,g,_,m){let d=i[t];return d===void 0?(d={id:p.id,object:p,geometry:u,material:f,groupOrder:g,renderOrder:p.renderOrder,z:_,group:m},i[t]=d):(d.id=p.id,d.object=p,d.geometry=u,d.material=f,d.groupOrder=g,d.renderOrder=p.renderOrder,d.z=_,d.group=m),t++,d}function a(p,u,f,g,_,m){let d=o(p,u,f,g,_,m);f.transmission>0?n.push(d):f.transparent===!0?s.push(d):e.push(d)}function l(p,u,f,g,_,m){let d=o(p,u,f,g,_,m);f.transmission>0?n.unshift(d):f.transparent===!0?s.unshift(d):e.unshift(d)}function c(p,u){e.length>1&&e.sort(p||Yg),n.length>1&&n.sort(u||kh),s.length>1&&s.sort(u||kh)}function h(){for(let p=t,u=i.length;p<u;p++){let f=i[p];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Zg(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Hh,i.set(n,[o])):s>=r.length?(o=new Hh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function $g(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new H,color:new ne};break;case"SpotLight":e={position:new H,direction:new H,color:new ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new H,color:new ne,distance:0,decay:0};break;case"HemisphereLight":e={direction:new H,skyColor:new ne,groundColor:new ne};break;case"RectAreaLight":e={color:new ne,position:new H,halfWidth:new H,halfHeight:new H};break}return i[t.id]=e,e}}}function Kg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}function Qg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function jg(i){let t=new $g,e=Kg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new H);let s=new H,r=new Be,o=new Be;function a(c){let h=0,p=0,u=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let f=0,g=0,_=0,m=0,d=0,M=0,b=0,v=0,N=0,P=0,D=0;c.sort(Qg);for(let A=0,E=c.length;A<E;A++){let w=c[A],$=w.color,Z=w.intensity,Q=w.distance,et=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=$.r*Z,p+=$.g*Z,u+=$.b*Z;else if(w.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(w.sh.coefficients[Y],Z);D++}else if(w.isDirectionalLight){let Y=t.get(w);if(Y.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let ot=w.shadow,tt=e.get(w);tt.shadowIntensity=ot.intensity,tt.shadowBias=ot.bias,tt.shadowNormalBias=ot.normalBias,tt.shadowRadius=ot.radius,tt.shadowMapSize=ot.mapSize,n.directionalShadow[f]=tt,n.directionalShadowMap[f]=et,n.directionalShadowMatrix[f]=w.shadow.matrix,M++}n.directional[f]=Y,f++}else if(w.isSpotLight){let Y=t.get(w);Y.position.setFromMatrixPosition(w.matrixWorld),Y.color.copy($).multiplyScalar(Z),Y.distance=Q,Y.coneCos=Math.cos(w.angle),Y.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),Y.decay=w.decay,n.spot[_]=Y;let ot=w.shadow;if(w.map&&(n.spotLightMap[N]=w.map,N++,ot.updateMatrices(w),w.castShadow&&P++),n.spotLightMatrix[_]=ot.matrix,w.castShadow){let tt=e.get(w);tt.shadowIntensity=ot.intensity,tt.shadowBias=ot.bias,tt.shadowNormalBias=ot.normalBias,tt.shadowRadius=ot.radius,tt.shadowMapSize=ot.mapSize,n.spotShadow[_]=tt,n.spotShadowMap[_]=et,v++}_++}else if(w.isRectAreaLight){let Y=t.get(w);Y.color.copy($).multiplyScalar(Z),Y.halfWidth.set(w.width*.5,0,0),Y.halfHeight.set(0,w.height*.5,0),n.rectArea[m]=Y,m++}else if(w.isPointLight){let Y=t.get(w);if(Y.color.copy(w.color).multiplyScalar(w.intensity),Y.distance=w.distance,Y.decay=w.decay,w.castShadow){let ot=w.shadow,tt=e.get(w);tt.shadowIntensity=ot.intensity,tt.shadowBias=ot.bias,tt.shadowNormalBias=ot.normalBias,tt.shadowRadius=ot.radius,tt.shadowMapSize=ot.mapSize,tt.shadowCameraNear=ot.camera.near,tt.shadowCameraFar=ot.camera.far,n.pointShadow[g]=tt,n.pointShadowMap[g]=et,n.pointShadowMatrix[g]=w.shadow.matrix,b++}n.point[g]=Y,g++}else if(w.isHemisphereLight){let Y=t.get(w);Y.skyColor.copy(w.color).multiplyScalar(Z),Y.groundColor.copy(w.groundColor).multiplyScalar(Z),n.hemi[d]=Y,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Nt.LTC_FLOAT_1,n.rectAreaLTC2=Nt.LTC_FLOAT_2):(n.rectAreaLTC1=Nt.LTC_HALF_1,n.rectAreaLTC2=Nt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=p,n.ambient[2]=u;let z=n.hash;(z.directionalLength!==f||z.pointLength!==g||z.spotLength!==_||z.rectAreaLength!==m||z.hemiLength!==d||z.numDirectionalShadows!==M||z.numPointShadows!==b||z.numSpotShadows!==v||z.numSpotMaps!==N||z.numLightProbes!==D)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=v+N-P,n.spotLightMap.length=N,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=D,z.directionalLength=f,z.pointLength=g,z.spotLength=_,z.rectAreaLength=m,z.hemiLength=d,z.numDirectionalShadows=M,z.numPointShadows=b,z.numSpotShadows=v,z.numSpotMaps=N,z.numLightProbes=D,n.version=Jg++)}function l(c,h){let p=0,u=0,f=0,g=0,_=0,m=h.matrixWorldInverse;for(let d=0,M=c.length;d<M;d++){let b=c[d];if(b.isDirectionalLight){let v=n.directional[p];v.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),p++}else if(b.isSpotLight){let v=n.spot[f];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(b.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(b.width*.5,0,0),v.halfHeight.set(0,b.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){let v=n.point[u];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),u++}else if(b.isHemisphereLight){let v=n.hemi[_];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function Vh(i){let t=new jg(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function tx(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Vh(i),t.set(s,[a])):r>=o.length?(a=new Vh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function ix(i,t,e){let n=new dr,s=new xt,r=new xt,o=new Ke,a=new Ul({depthPacking:cd}),l=new Nl,c={},h=e.maxTextureSize,p={[Fi]:Pn,[Pn]:Fi,[En]:En},u=new an({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:ex,fragmentShader:nx}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new on;g.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ie(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jh;let d=this.type;this.render=function(P,D,z){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;let A=i.getRenderTarget(),E=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),$=i.state;$.setBlending(li),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);let Z=d!==xi&&this.type===xi,Q=d===xi&&this.type!==xi;for(let et=0,Y=P.length;et<Y;et++){let ot=P[et],tt=ot.shadow;if(tt===void 0){console.warn("THREE.WebGLShadowMap:",ot,"has no shadow.");continue}if(tt.autoUpdate===!1&&tt.needsUpdate===!1)continue;s.copy(tt.mapSize);let Tt=tt.getFrameExtents();if(s.multiply(Tt),r.copy(tt.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Tt.x),s.x=r.x*Tt.x,tt.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Tt.y),s.y=r.y*Tt.y,tt.mapSize.y=r.y)),tt.map===null||Z===!0||Q===!0){let Ut=this.type!==xi?{minFilter:Hn,magFilter:Hn}:{};tt.map!==null&&tt.map.dispose(),tt.map=new wn(s.x,s.y,Ut),tt.map.texture.name=ot.name+".shadowMap",tt.camera.updateProjectionMatrix()}i.setRenderTarget(tt.map),i.clear();let It=tt.getViewportCount();for(let Ut=0;Ut<It;Ut++){let Qt=tt.getViewport(Ut);o.set(r.x*Qt.x,r.y*Qt.y,r.x*Qt.z,r.y*Qt.w),$.viewport(o),tt.updateMatrices(ot,Ut),n=tt.getFrustum(),v(D,z,tt.camera,ot,this.type)}tt.isPointLightShadow!==!0&&this.type===xi&&M(tt,z),tt.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(A,E,w)};function M(P,D){let z=t.update(_);u.defines.VSM_SAMPLES!==P.blurSamples&&(u.defines.VSM_SAMPLES=P.blurSamples,f.defines.VSM_SAMPLES=P.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new wn(s.x,s.y)),u.uniforms.shadow_pass.value=P.map.texture,u.uniforms.resolution.value=P.mapSize,u.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(D,null,z,u,_,null),f.uniforms.shadow_pass.value=P.mapPass.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(D,null,z,f,_,null)}function b(P,D,z,A){let E=null,w=z.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(w!==void 0)E=w;else if(E=z.isPointLight===!0?l:a,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){let $=E.uuid,Z=D.uuid,Q=c[$];Q===void 0&&(Q={},c[$]=Q);let et=Q[Z];et===void 0&&(et=E.clone(),Q[Z]=et,D.addEventListener("dispose",N)),E=et}if(E.visible=D.visible,E.wireframe=D.wireframe,A===xi?E.side=D.shadowSide!==null?D.shadowSide:D.side:E.side=D.shadowSide!==null?D.shadowSide:p[D.side],E.alphaMap=D.alphaMap,E.alphaTest=D.alphaTest,E.map=D.map,E.clipShadows=D.clipShadows,E.clippingPlanes=D.clippingPlanes,E.clipIntersection=D.clipIntersection,E.displacementMap=D.displacementMap,E.displacementScale=D.displacementScale,E.displacementBias=D.displacementBias,E.wireframeLinewidth=D.wireframeLinewidth,E.linewidth=D.linewidth,z.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let $=i.properties.get(E);$.light=z}return E}function v(P,D,z,A,E){if(P.visible===!1)return;if(P.layers.test(D.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&E===xi)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,P.matrixWorld);let Z=t.update(P),Q=P.material;if(Array.isArray(Q)){let et=Z.groups;for(let Y=0,ot=et.length;Y<ot;Y++){let tt=et[Y],Tt=Q[tt.materialIndex];if(Tt&&Tt.visible){let It=b(P,Tt,A,E);P.onBeforeShadow(i,P,D,z,Z,It,tt),i.renderBufferDirect(z,null,Z,It,P,tt),P.onAfterShadow(i,P,D,z,Z,It,tt)}}}else if(Q.visible){let et=b(P,Q,A,E);P.onBeforeShadow(i,P,D,z,Z,et,null),i.renderBufferDirect(z,null,Z,et,P,null),P.onAfterShadow(i,P,D,z,Z,et,null)}}let $=P.children;for(let Z=0,Q=$.length;Z<Q;Z++)v($[Z],D,z,A,E)}function N(P){P.target.removeEventListener("dispose",N);for(let z in c){let A=c[z],E=P.target.uuid;E in A&&(A[E].dispose(),delete A[E])}}}function rx(i,t){function e(){let G=!1,Ct=new Ke,K=null,dt=new Ke(0,0,0,0);return{setMask:function(Dt){K!==Dt&&!G&&(i.colorMask(Dt,Dt,Dt,Dt),K=Dt)},setLocked:function(Dt){G=Dt},setClear:function(Dt,Lt,se,De,ce){ce===!0&&(Dt*=De,Lt*=De,se*=De),Ct.set(Dt,Lt,se,De),dt.equals(Ct)===!1&&(i.clearColor(Dt,Lt,se,De),dt.copy(Ct))},reset:function(){G=!1,K=null,dt.set(-1,0,0,0)}}}function n(){let G=!1,Ct=!1,K=null,dt=null,Dt=null;return{setReversed:function(Lt){if(Ct!==Lt){let se=t.get("EXT_clip_control");Ct?se.clipControlEXT(se.LOWER_LEFT_EXT,se.ZERO_TO_ONE_EXT):se.clipControlEXT(se.LOWER_LEFT_EXT,se.NEGATIVE_ONE_TO_ONE_EXT);let De=Dt;Dt=null,this.setClear(De)}Ct=Lt},getReversed:function(){return Ct},setTest:function(Lt){Lt?St(i.DEPTH_TEST):Gt(i.DEPTH_TEST)},setMask:function(Lt){K!==Lt&&!G&&(i.depthMask(Lt),K=Lt)},setFunc:function(Lt){if(Ct&&(Lt=sx[Lt]),dt!==Lt){switch(Lt){case za:i.depthFunc(i.NEVER);break;case ka:i.depthFunc(i.ALWAYS);break;case Ha:i.depthFunc(i.LESS);break;case Fs:i.depthFunc(i.LEQUAL);break;case Va:i.depthFunc(i.EQUAL);break;case Ga:i.depthFunc(i.GEQUAL);break;case hr:i.depthFunc(i.GREATER);break;case Wa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}dt=Lt}},setLocked:function(Lt){G=Lt},setClear:function(Lt){Dt!==Lt&&(Ct&&(Lt=1-Lt),i.clearDepth(Lt),Dt=Lt)},reset:function(){G=!1,K=null,dt=null,Dt=null,Ct=!1}}}function s(){let G=!1,Ct=null,K=null,dt=null,Dt=null,Lt=null,se=null,De=null,ce=null;return{setTest:function(pe){G||(pe?St(i.STENCIL_TEST):Gt(i.STENCIL_TEST))},setMask:function(pe){Ct!==pe&&!G&&(i.stencilMask(pe),Ct=pe)},setFunc:function(pe,un,Mn){(K!==pe||dt!==un||Dt!==Mn)&&(i.stencilFunc(pe,un,Mn),K=pe,dt=un,Dt=Mn)},setOp:function(pe,un,Mn){(Lt!==pe||se!==un||De!==Mn)&&(i.stencilOp(pe,un,Mn),Lt=pe,se=un,De=Mn)},setLocked:function(pe){G=pe},setClear:function(pe){ce!==pe&&(i.clearStencil(pe),ce=pe)},reset:function(){G=!1,Ct=null,K=null,dt=null,Dt=null,Lt=null,se=null,De=null,ce=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},p={},u=new WeakMap,f=[],g=null,_=!1,m=null,d=null,M=null,b=null,v=null,N=null,P=null,D=new ne(0,0,0),z=0,A=!1,E=null,w=null,$=null,Z=null,Q=null,et=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,ot=0,tt=i.getParameter(i.VERSION);tt.indexOf("WebGL")!==-1?(ot=parseFloat(/^WebGL (\d)/.exec(tt)[1]),Y=ot>=1):tt.indexOf("OpenGL ES")!==-1&&(ot=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),Y=ot>=2);let Tt=null,It={},Ut=i.getParameter(i.SCISSOR_BOX),Qt=i.getParameter(i.VIEWPORT),fe=new Ke().fromArray(Ut),ct=new Ke().fromArray(Qt);function bt(G,Ct,K,dt){let Dt=new Uint8Array(4),Lt=i.createTexture();i.bindTexture(G,Lt),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let se=0;se<K;se++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(Ct,0,i.RGBA,1,1,dt,0,i.RGBA,i.UNSIGNED_BYTE,Dt):i.texImage2D(Ct+se,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Dt);return Lt}let Ht={};Ht[i.TEXTURE_2D]=bt(i.TEXTURE_2D,i.TEXTURE_2D,1),Ht[i.TEXTURE_CUBE_MAP]=bt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ht[i.TEXTURE_2D_ARRAY]=bt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ht[i.TEXTURE_3D]=bt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),St(i.DEPTH_TEST),o.setFunc(Fs),pt(!1),At(Xc),St(i.CULL_FACE),F(li);function St(G){h[G]!==!0&&(i.enable(G),h[G]=!0)}function Gt(G){h[G]!==!1&&(i.disable(G),h[G]=!1)}function te(G,Ct){return p[G]!==Ct?(i.bindFramebuffer(G,Ct),p[G]=Ct,G===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=Ct),G===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=Ct),!0):!1}function jt(G,Ct){let K=f,dt=!1;if(G){K=u.get(Ct),K===void 0&&(K=[],u.set(Ct,K));let Dt=G.textures;if(K.length!==Dt.length||K[0]!==i.COLOR_ATTACHMENT0){for(let Lt=0,se=Dt.length;Lt<se;Lt++)K[Lt]=i.COLOR_ATTACHMENT0+Lt;K.length=Dt.length,dt=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,dt=!0);dt&&i.drawBuffers(K)}function he(G){return g!==G?(i.useProgram(G),g=G,!0):!1}let ut={[Qi]:i.FUNC_ADD,[Hf]:i.FUNC_SUBTRACT,[Vf]:i.FUNC_REVERSE_SUBTRACT};ut[Gf]=i.MIN,ut[Wf]=i.MAX;let _t={[Xf]:i.ZERO,[qf]:i.ONE,[Yf]:i.SRC_COLOR,[Oa]:i.SRC_ALPHA,[jf]:i.SRC_ALPHA_SATURATE,[Jf]:i.DST_COLOR,[$f]:i.DST_ALPHA,[Zf]:i.ONE_MINUS_SRC_COLOR,[Ba]:i.ONE_MINUS_SRC_ALPHA,[Qf]:i.ONE_MINUS_DST_COLOR,[Kf]:i.ONE_MINUS_DST_ALPHA,[td]:i.CONSTANT_COLOR,[ed]:i.ONE_MINUS_CONSTANT_COLOR,[nd]:i.CONSTANT_ALPHA,[id]:i.ONE_MINUS_CONSTANT_ALPHA};function F(G,Ct,K,dt,Dt,Lt,se,De,ce,pe){if(G===li){_===!0&&(Gt(i.BLEND),_=!1);return}if(_===!1&&(St(i.BLEND),_=!0),G!==kf){if(G!==m||pe!==A){if((d!==Qi||v!==Qi)&&(i.blendEquation(i.FUNC_ADD),d=Qi,v=Qi),pe)switch(G){case Ls:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ci:i.blendFunc(i.ONE,i.ONE);break;case qc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Yc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Ls:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ci:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case qc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Yc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}M=null,b=null,N=null,P=null,D.set(0,0,0),z=0,m=G,A=pe}return}Dt=Dt||Ct,Lt=Lt||K,se=se||dt,(Ct!==d||Dt!==v)&&(i.blendEquationSeparate(ut[Ct],ut[Dt]),d=Ct,v=Dt),(K!==M||dt!==b||Lt!==N||se!==P)&&(i.blendFuncSeparate(_t[K],_t[dt],_t[Lt],_t[se]),M=K,b=dt,N=Lt,P=se),(De.equals(D)===!1||ce!==z)&&(i.blendColor(De.r,De.g,De.b,ce),D.copy(De),z=ce),m=G,A=!1}function zt(G,Ct){G.side===En?Gt(i.CULL_FACE):St(i.CULL_FACE);let K=G.side===Pn;Ct&&(K=!K),pt(K),G.blending===Ls&&G.transparent===!1?F(li):F(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),r.setMask(G.colorWrite);let dt=G.stencilWrite;a.setTest(dt),dt&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),$t(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?St(i.SAMPLE_ALPHA_TO_COVERAGE):Gt(i.SAMPLE_ALPHA_TO_COVERAGE)}function pt(G){E!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),E=G)}function At(G){G!==Bf?(St(i.CULL_FACE),G!==w&&(G===Xc?i.cullFace(i.BACK):G===zf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Gt(i.CULL_FACE),w=G}function yt(G){G!==$&&(Y&&i.lineWidth(G),$=G)}function $t(G,Ct,K){G?(St(i.POLYGON_OFFSET_FILL),(Z!==Ct||Q!==K)&&(i.polygonOffset(Ct,K),Z=Ct,Q=K)):Gt(i.POLYGON_OFFSET_FILL)}function Bt(G){G?St(i.SCISSOR_TEST):Gt(i.SCISSOR_TEST)}function I(G){G===void 0&&(G=i.TEXTURE0+et-1),Tt!==G&&(i.activeTexture(G),Tt=G)}function S(G,Ct,K){K===void 0&&(Tt===null?K=i.TEXTURE0+et-1:K=Tt);let dt=It[K];dt===void 0&&(dt={type:void 0,texture:void 0},It[K]=dt),(dt.type!==G||dt.texture!==Ct)&&(Tt!==K&&(i.activeTexture(K),Tt=K),i.bindTexture(G,Ct||Ht[G]),dt.type=G,dt.texture=Ct)}function X(){let G=It[Tt];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function at(){try{i.compressedTexImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ht(){try{i.compressedTexImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function rt(){try{i.texSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Vt(){try{i.texSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Et(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ft(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ot(){try{i.texStorage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function gt(){try{i.texStorage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Pt(){try{i.texImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Yt(){try{i.texImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Kt(G){fe.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),fe.copy(G))}function vt(G){ct.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),ct.copy(G))}function de(G,Ct){let K=c.get(Ct);K===void 0&&(K=new WeakMap,c.set(Ct,K));let dt=K.get(G);dt===void 0&&(dt=i.getUniformBlockIndex(Ct,G.name),K.set(G,dt))}function ae(G,Ct){let dt=c.get(Ct).get(G);l.get(Ct)!==dt&&(i.uniformBlockBinding(Ct,dt,G.__bindingPointIndex),l.set(Ct,dt))}function Ue(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},Tt=null,It={},p={},u=new WeakMap,f=[],g=null,_=!1,m=null,d=null,M=null,b=null,v=null,N=null,P=null,D=new ne(0,0,0),z=0,A=!1,E=null,w=null,$=null,Z=null,Q=null,fe.set(0,0,i.canvas.width,i.canvas.height),ct.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:St,disable:Gt,bindFramebuffer:te,drawBuffers:jt,useProgram:he,setBlending:F,setMaterial:zt,setFlipSided:pt,setCullFace:At,setLineWidth:yt,setPolygonOffset:$t,setScissorTest:Bt,activeTexture:I,bindTexture:S,unbindTexture:X,compressedTexImage2D:at,compressedTexImage3D:ht,texImage2D:Pt,texImage3D:Yt,updateUBOMapping:de,uniformBlockBinding:ae,texStorage2D:Ot,texStorage3D:gt,texSubImage2D:rt,texSubImage3D:Vt,compressedTexSubImage2D:Et,compressedTexSubImage3D:Ft,scissor:Kt,viewport:vt,reset:Ue}}function Gh(i,t,e,n){let s=ox(n);switch(e){case ru:return i*t;case au:return i*t;case lu:return i*t*2;case xc:return i*t/s.components*s.byteLength;case _c:return i*t/s.components*s.byteLength;case cu:return i*t*2/s.components*s.byteLength;case yc:return i*t*2/s.components*s.byteLength;case ou:return i*t*3/s.components*s.byteLength;case jn:return i*t*4/s.components*s.byteLength;case vc:return i*t*4/s.components*s.byteLength;case eo:case no:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case io:case so:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $a:case Ja:return Math.max(i,16)*Math.max(t,8)/4;case Za:case Ka:return Math.max(i,8)*Math.max(t,8)/2;case Qa:case ja:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case tl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case el:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case nl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case il:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case sl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case rl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ol:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case al:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ll:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case cl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case hl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ul:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case fl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case dl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case pl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ro:case ml:case gl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case hu:case xl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case _l:case yl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ox(i){switch(i){case Mi:case nu:return{byteLength:1,components:1};case fr:case iu:case ni:return{byteLength:2,components:1};case mc:case gc:return{byteLength:2,components:4};case is:case pc:case ai:return{byteLength:4,components:1};case su:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function ax(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new xt,h=new WeakMap,p,u=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,S){return f?new OffscreenCanvas(I,S):lo("canvas")}function _(I,S,X){let at=1,ht=Bt(I);if((ht.width>X||ht.height>X)&&(at=X/Math.max(ht.width,ht.height)),at<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let rt=Math.floor(at*ht.width),Vt=Math.floor(at*ht.height);p===void 0&&(p=g(rt,Vt));let Et=S?g(rt,Vt):p;return Et.width=rt,Et.height=Vt,Et.getContext("2d").drawImage(I,0,0,rt,Vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ht.width+"x"+ht.height+") to ("+rt+"x"+Vt+")."),Et}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ht.width+"x"+ht.height+")."),I;return I}function m(I){return I.generateMipmaps}function d(I){i.generateMipmap(I)}function M(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(I,S,X,at,ht=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let rt=S;if(S===i.RED&&(X===i.FLOAT&&(rt=i.R32F),X===i.HALF_FLOAT&&(rt=i.R16F),X===i.UNSIGNED_BYTE&&(rt=i.R8)),S===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(rt=i.R8UI),X===i.UNSIGNED_SHORT&&(rt=i.R16UI),X===i.UNSIGNED_INT&&(rt=i.R32UI),X===i.BYTE&&(rt=i.R8I),X===i.SHORT&&(rt=i.R16I),X===i.INT&&(rt=i.R32I)),S===i.RG&&(X===i.FLOAT&&(rt=i.RG32F),X===i.HALF_FLOAT&&(rt=i.RG16F),X===i.UNSIGNED_BYTE&&(rt=i.RG8)),S===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(rt=i.RG8UI),X===i.UNSIGNED_SHORT&&(rt=i.RG16UI),X===i.UNSIGNED_INT&&(rt=i.RG32UI),X===i.BYTE&&(rt=i.RG8I),X===i.SHORT&&(rt=i.RG16I),X===i.INT&&(rt=i.RG32I)),S===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(rt=i.RGB8UI),X===i.UNSIGNED_SHORT&&(rt=i.RGB16UI),X===i.UNSIGNED_INT&&(rt=i.RGB32UI),X===i.BYTE&&(rt=i.RGB8I),X===i.SHORT&&(rt=i.RGB16I),X===i.INT&&(rt=i.RGB32I)),S===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(rt=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(rt=i.RGBA16UI),X===i.UNSIGNED_INT&&(rt=i.RGBA32UI),X===i.BYTE&&(rt=i.RGBA8I),X===i.SHORT&&(rt=i.RGBA16I),X===i.INT&&(rt=i.RGBA32I)),S===i.RGB&&X===i.UNSIGNED_INT_5_9_9_9_REV&&(rt=i.RGB9_E5),S===i.RGBA){let Vt=ht?Fo:Ie.getTransfer(at);X===i.FLOAT&&(rt=i.RGBA32F),X===i.HALF_FLOAT&&(rt=i.RGBA16F),X===i.UNSIGNED_BYTE&&(rt=Vt===Oe?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(rt=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(rt=i.RGB5_A1)}return(rt===i.R16F||rt===i.R32F||rt===i.RG16F||rt===i.RG32F||rt===i.RGBA16F||rt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function v(I,S){let X;return I?S===null||S===is||S===zs?X=i.DEPTH24_STENCIL8:S===ai?X=i.DEPTH32F_STENCIL8:S===fr&&(X=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===is||S===zs?X=i.DEPTH_COMPONENT24:S===ai?X=i.DEPTH_COMPONENT32F:S===fr&&(X=i.DEPTH_COMPONENT16),X}function N(I,S){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==Hn&&I.minFilter!==oi?Math.log2(Math.max(S.width,S.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?S.mipmaps.length:1}function P(I){let S=I.target;S.removeEventListener("dispose",P),z(S),S.isVideoTexture&&h.delete(S)}function D(I){let S=I.target;S.removeEventListener("dispose",D),E(S)}function z(I){let S=n.get(I);if(S.__webglInit===void 0)return;let X=I.source,at=u.get(X);if(at){let ht=at[S.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&A(I),Object.keys(at).length===0&&u.delete(X)}n.remove(I)}function A(I){let S=n.get(I);i.deleteTexture(S.__webglTexture);let X=I.source,at=u.get(X);delete at[S.__cacheKey],o.memory.textures--}function E(I){let S=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let at=0;at<6;at++){if(Array.isArray(S.__webglFramebuffer[at]))for(let ht=0;ht<S.__webglFramebuffer[at].length;ht++)i.deleteFramebuffer(S.__webglFramebuffer[at][ht]);else i.deleteFramebuffer(S.__webglFramebuffer[at]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[at])}else{if(Array.isArray(S.__webglFramebuffer))for(let at=0;at<S.__webglFramebuffer.length;at++)i.deleteFramebuffer(S.__webglFramebuffer[at]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let at=0;at<S.__webglColorRenderbuffer.length;at++)S.__webglColorRenderbuffer[at]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[at]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let X=I.textures;for(let at=0,ht=X.length;at<ht;at++){let rt=n.get(X[at]);rt.__webglTexture&&(i.deleteTexture(rt.__webglTexture),o.memory.textures--),n.remove(X[at])}n.remove(I)}let w=0;function $(){w=0}function Z(){let I=w;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),w+=1,I}function Q(I){let S=[];return S.push(I.wrapS),S.push(I.wrapT),S.push(I.wrapR||0),S.push(I.magFilter),S.push(I.minFilter),S.push(I.anisotropy),S.push(I.internalFormat),S.push(I.format),S.push(I.type),S.push(I.generateMipmaps),S.push(I.premultiplyAlpha),S.push(I.flipY),S.push(I.unpackAlignment),S.push(I.colorSpace),S.join()}function et(I,S){let X=n.get(I);if(I.isVideoTexture&&yt(I),I.isRenderTargetTexture===!1&&I.version>0&&X.__version!==I.version){let at=I.image;if(at===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(at.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ct(X,I,S);return}}e.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+S)}function Y(I,S){let X=n.get(I);if(I.version>0&&X.__version!==I.version){ct(X,I,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+S)}function ot(I,S){let X=n.get(I);if(I.version>0&&X.__version!==I.version){ct(X,I,S);return}e.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+S)}function tt(I,S){let X=n.get(I);if(I.version>0&&X.__version!==I.version){bt(X,I,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+S)}let Tt={[ur]:i.REPEAT,[es]:i.CLAMP_TO_EDGE,[Ya]:i.MIRRORED_REPEAT},It={[Hn]:i.NEAREST,[ad]:i.NEAREST_MIPMAP_NEAREST,[Cr]:i.NEAREST_MIPMAP_LINEAR,[oi]:i.LINEAR,[ia]:i.LINEAR_MIPMAP_NEAREST,[ns]:i.LINEAR_MIPMAP_LINEAR},Ut={[ud]:i.NEVER,[xd]:i.ALWAYS,[fd]:i.LESS,[fu]:i.LEQUAL,[dd]:i.EQUAL,[gd]:i.GEQUAL,[pd]:i.GREATER,[md]:i.NOTEQUAL};function Qt(I,S){if(S.type===ai&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===oi||S.magFilter===ia||S.magFilter===Cr||S.magFilter===ns||S.minFilter===oi||S.minFilter===ia||S.minFilter===Cr||S.minFilter===ns)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,Tt[S.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,Tt[S.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,Tt[S.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,It[S.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,It[S.minFilter]),S.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,Ut[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Hn||S.minFilter!==Cr&&S.minFilter!==ns||S.type===ai&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let X=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function fe(I,S){let X=!1;I.__webglInit===void 0&&(I.__webglInit=!0,S.addEventListener("dispose",P));let at=S.source,ht=u.get(at);ht===void 0&&(ht={},u.set(at,ht));let rt=Q(S);if(rt!==I.__cacheKey){ht[rt]===void 0&&(ht[rt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,X=!0),ht[rt].usedTimes++;let Vt=ht[I.__cacheKey];Vt!==void 0&&(ht[I.__cacheKey].usedTimes--,Vt.usedTimes===0&&A(S)),I.__cacheKey=rt,I.__webglTexture=ht[rt].texture}return X}function ct(I,S,X){let at=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(at=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(at=i.TEXTURE_3D);let ht=fe(I,S),rt=S.source;e.bindTexture(at,I.__webglTexture,i.TEXTURE0+X);let Vt=n.get(rt);if(rt.version!==Vt.__version||ht===!0){e.activeTexture(i.TEXTURE0+X);let Et=Ie.getPrimaries(Ie.workingColorSpace),Ft=S.colorSpace===Di?null:Ie.getPrimaries(S.colorSpace),Ot=S.colorSpace===Di||Et===Ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ot);let gt=_(S.image,!1,s.maxTextureSize);gt=$t(S,gt);let Pt=r.convert(S.format,S.colorSpace),Yt=r.convert(S.type),Kt=b(S.internalFormat,Pt,Yt,S.colorSpace,S.isVideoTexture);Qt(at,S);let vt,de=S.mipmaps,ae=S.isVideoTexture!==!0,Ue=Vt.__version===void 0||ht===!0,G=rt.dataReady,Ct=N(S,gt);if(S.isDepthTexture)Kt=v(S.format===ks,S.type),Ue&&(ae?e.texStorage2D(i.TEXTURE_2D,1,Kt,gt.width,gt.height):e.texImage2D(i.TEXTURE_2D,0,Kt,gt.width,gt.height,0,Pt,Yt,null));else if(S.isDataTexture)if(de.length>0){ae&&Ue&&e.texStorage2D(i.TEXTURE_2D,Ct,Kt,de[0].width,de[0].height);for(let K=0,dt=de.length;K<dt;K++)vt=de[K],ae?G&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,vt.width,vt.height,Pt,Yt,vt.data):e.texImage2D(i.TEXTURE_2D,K,Kt,vt.width,vt.height,0,Pt,Yt,vt.data);S.generateMipmaps=!1}else ae?(Ue&&e.texStorage2D(i.TEXTURE_2D,Ct,Kt,gt.width,gt.height),G&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,gt.width,gt.height,Pt,Yt,gt.data)):e.texImage2D(i.TEXTURE_2D,0,Kt,gt.width,gt.height,0,Pt,Yt,gt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ae&&Ue&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ct,Kt,de[0].width,de[0].height,gt.depth);for(let K=0,dt=de.length;K<dt;K++)if(vt=de[K],S.format!==jn)if(Pt!==null)if(ae){if(G)if(S.layerUpdates.size>0){let Dt=Gh(vt.width,vt.height,S.format,S.type);for(let Lt of S.layerUpdates){let se=vt.data.subarray(Lt*Dt/vt.data.BYTES_PER_ELEMENT,(Lt+1)*Dt/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,Lt,vt.width,vt.height,1,Pt,se)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,vt.width,vt.height,gt.depth,Pt,vt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,Kt,vt.width,vt.height,gt.depth,0,vt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ae?G&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,vt.width,vt.height,gt.depth,Pt,Yt,vt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,K,Kt,vt.width,vt.height,gt.depth,0,Pt,Yt,vt.data)}else{ae&&Ue&&e.texStorage2D(i.TEXTURE_2D,Ct,Kt,de[0].width,de[0].height);for(let K=0,dt=de.length;K<dt;K++)vt=de[K],S.format!==jn?Pt!==null?ae?G&&e.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,vt.width,vt.height,Pt,vt.data):e.compressedTexImage2D(i.TEXTURE_2D,K,Kt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?G&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,vt.width,vt.height,Pt,Yt,vt.data):e.texImage2D(i.TEXTURE_2D,K,Kt,vt.width,vt.height,0,Pt,Yt,vt.data)}else if(S.isDataArrayTexture)if(ae){if(Ue&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ct,Kt,gt.width,gt.height,gt.depth),G)if(S.layerUpdates.size>0){let K=Gh(gt.width,gt.height,S.format,S.type);for(let dt of S.layerUpdates){let Dt=gt.data.subarray(dt*K/gt.data.BYTES_PER_ELEMENT,(dt+1)*K/gt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,dt,gt.width,gt.height,1,Pt,Yt,Dt)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,gt.width,gt.height,gt.depth,Pt,Yt,gt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Kt,gt.width,gt.height,gt.depth,0,Pt,Yt,gt.data);else if(S.isData3DTexture)ae?(Ue&&e.texStorage3D(i.TEXTURE_3D,Ct,Kt,gt.width,gt.height,gt.depth),G&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,gt.width,gt.height,gt.depth,Pt,Yt,gt.data)):e.texImage3D(i.TEXTURE_3D,0,Kt,gt.width,gt.height,gt.depth,0,Pt,Yt,gt.data);else if(S.isFramebufferTexture){if(Ue)if(ae)e.texStorage2D(i.TEXTURE_2D,Ct,Kt,gt.width,gt.height);else{let K=gt.width,dt=gt.height;for(let Dt=0;Dt<Ct;Dt++)e.texImage2D(i.TEXTURE_2D,Dt,Kt,K,dt,0,Pt,Yt,null),K>>=1,dt>>=1}}else if(de.length>0){if(ae&&Ue){let K=Bt(de[0]);e.texStorage2D(i.TEXTURE_2D,Ct,Kt,K.width,K.height)}for(let K=0,dt=de.length;K<dt;K++)vt=de[K],ae?G&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,Pt,Yt,vt):e.texImage2D(i.TEXTURE_2D,K,Kt,Pt,Yt,vt);S.generateMipmaps=!1}else if(ae){if(Ue){let K=Bt(gt);e.texStorage2D(i.TEXTURE_2D,Ct,Kt,K.width,K.height)}G&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Pt,Yt,gt)}else e.texImage2D(i.TEXTURE_2D,0,Kt,Pt,Yt,gt);m(S)&&d(at),Vt.__version=rt.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function bt(I,S,X){if(S.image.length!==6)return;let at=fe(I,S),ht=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+X);let rt=n.get(ht);if(ht.version!==rt.__version||at===!0){e.activeTexture(i.TEXTURE0+X);let Vt=Ie.getPrimaries(Ie.workingColorSpace),Et=S.colorSpace===Di?null:Ie.getPrimaries(S.colorSpace),Ft=S.colorSpace===Di||Vt===Et?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft);let Ot=S.isCompressedTexture||S.image[0].isCompressedTexture,gt=S.image[0]&&S.image[0].isDataTexture,Pt=[];for(let dt=0;dt<6;dt++)!Ot&&!gt?Pt[dt]=_(S.image[dt],!0,s.maxCubemapSize):Pt[dt]=gt?S.image[dt].image:S.image[dt],Pt[dt]=$t(S,Pt[dt]);let Yt=Pt[0],Kt=r.convert(S.format,S.colorSpace),vt=r.convert(S.type),de=b(S.internalFormat,Kt,vt,S.colorSpace),ae=S.isVideoTexture!==!0,Ue=rt.__version===void 0||at===!0,G=ht.dataReady,Ct=N(S,Yt);Qt(i.TEXTURE_CUBE_MAP,S);let K;if(Ot){ae&&Ue&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ct,de,Yt.width,Yt.height);for(let dt=0;dt<6;dt++){K=Pt[dt].mipmaps;for(let Dt=0;Dt<K.length;Dt++){let Lt=K[Dt];S.format!==jn?Kt!==null?ae?G&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Dt,0,0,Lt.width,Lt.height,Kt,Lt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Dt,de,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ae?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Dt,0,0,Lt.width,Lt.height,Kt,vt,Lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Dt,de,Lt.width,Lt.height,0,Kt,vt,Lt.data)}}}else{if(K=S.mipmaps,ae&&Ue){K.length>0&&Ct++;let dt=Bt(Pt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ct,de,dt.width,dt.height)}for(let dt=0;dt<6;dt++)if(gt){ae?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,Pt[dt].width,Pt[dt].height,Kt,vt,Pt[dt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,de,Pt[dt].width,Pt[dt].height,0,Kt,vt,Pt[dt].data);for(let Dt=0;Dt<K.length;Dt++){let se=K[Dt].image[dt].image;ae?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Dt+1,0,0,se.width,se.height,Kt,vt,se.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Dt+1,de,se.width,se.height,0,Kt,vt,se.data)}}else{ae?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,Kt,vt,Pt[dt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,de,Kt,vt,Pt[dt]);for(let Dt=0;Dt<K.length;Dt++){let Lt=K[Dt];ae?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Dt+1,0,0,Kt,vt,Lt.image[dt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Dt+1,de,Kt,vt,Lt.image[dt])}}}m(S)&&d(i.TEXTURE_CUBE_MAP),rt.__version=ht.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function Ht(I,S,X,at,ht,rt){let Vt=r.convert(X.format,X.colorSpace),Et=r.convert(X.type),Ft=b(X.internalFormat,Vt,Et,X.colorSpace),Ot=n.get(S),gt=n.get(X);if(gt.__renderTarget=S,!Ot.__hasExternalTextures){let Pt=Math.max(1,S.width>>rt),Yt=Math.max(1,S.height>>rt);ht===i.TEXTURE_3D||ht===i.TEXTURE_2D_ARRAY?e.texImage3D(ht,rt,Ft,Pt,Yt,S.depth,0,Vt,Et,null):e.texImage2D(ht,rt,Ft,Pt,Yt,0,Vt,Et,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),At(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,ht,gt.__webglTexture,0,pt(S)):(ht===i.TEXTURE_2D||ht>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,at,ht,gt.__webglTexture,rt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function St(I,S,X){if(i.bindRenderbuffer(i.RENDERBUFFER,I),S.depthBuffer){let at=S.depthTexture,ht=at&&at.isDepthTexture?at.type:null,rt=v(S.stencilBuffer,ht),Vt=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=pt(S);At(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Et,rt,S.width,S.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,Et,rt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,rt,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Vt,i.RENDERBUFFER,I)}else{let at=S.textures;for(let ht=0;ht<at.length;ht++){let rt=at[ht],Vt=r.convert(rt.format,rt.colorSpace),Et=r.convert(rt.type),Ft=b(rt.internalFormat,Vt,Et,rt.colorSpace),Ot=pt(S);X&&At(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ot,Ft,S.width,S.height):At(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ot,Ft,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Ft,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Gt(I,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let at=n.get(S.depthTexture);at.__renderTarget=S,(!at.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),et(S.depthTexture,0);let ht=at.__webglTexture,rt=pt(S);if(S.depthTexture.format===Ds)At(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ht,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ht,0);else if(S.depthTexture.format===ks)At(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ht,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ht,0);else throw new Error("Unknown depthTexture format")}function te(I){let S=n.get(I),X=I.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==I.depthTexture){let at=I.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),at){let ht=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,at.removeEventListener("dispose",ht)};at.addEventListener("dispose",ht),S.__depthDisposeCallback=ht}S.__boundDepthTexture=at}if(I.depthTexture&&!S.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");Gt(S.__webglFramebuffer,I)}else if(X){S.__webglDepthbuffer=[];for(let at=0;at<6;at++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[at]),S.__webglDepthbuffer[at]===void 0)S.__webglDepthbuffer[at]=i.createRenderbuffer(),St(S.__webglDepthbuffer[at],I,!1);else{let ht=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=S.__webglDepthbuffer[at];i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,rt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),St(S.__webglDepthbuffer,I,!1);else{let at=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ht),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,ht)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function jt(I,S,X){let at=n.get(I);S!==void 0&&Ht(at.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&te(I)}function he(I){let S=I.texture,X=n.get(I),at=n.get(S);I.addEventListener("dispose",D);let ht=I.textures,rt=I.isWebGLCubeRenderTarget===!0,Vt=ht.length>1;if(Vt||(at.__webglTexture===void 0&&(at.__webglTexture=i.createTexture()),at.__version=S.version,o.memory.textures++),rt){X.__webglFramebuffer=[];for(let Et=0;Et<6;Et++)if(S.mipmaps&&S.mipmaps.length>0){X.__webglFramebuffer[Et]=[];for(let Ft=0;Ft<S.mipmaps.length;Ft++)X.__webglFramebuffer[Et][Ft]=i.createFramebuffer()}else X.__webglFramebuffer[Et]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){X.__webglFramebuffer=[];for(let Et=0;Et<S.mipmaps.length;Et++)X.__webglFramebuffer[Et]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(Vt)for(let Et=0,Ft=ht.length;Et<Ft;Et++){let Ot=n.get(ht[Et]);Ot.__webglTexture===void 0&&(Ot.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&At(I)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let Et=0;Et<ht.length;Et++){let Ft=ht[Et];X.__webglColorRenderbuffer[Et]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[Et]);let Ot=r.convert(Ft.format,Ft.colorSpace),gt=r.convert(Ft.type),Pt=b(Ft.internalFormat,Ot,gt,Ft.colorSpace,I.isXRRenderTarget===!0),Yt=pt(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Yt,Pt,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,X.__webglColorRenderbuffer[Et])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),St(X.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(rt){e.bindTexture(i.TEXTURE_CUBE_MAP,at.__webglTexture),Qt(i.TEXTURE_CUBE_MAP,S);for(let Et=0;Et<6;Et++)if(S.mipmaps&&S.mipmaps.length>0)for(let Ft=0;Ft<S.mipmaps.length;Ft++)Ht(X.__webglFramebuffer[Et][Ft],I,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Ft);else Ht(X.__webglFramebuffer[Et],I,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0);m(S)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Vt){for(let Et=0,Ft=ht.length;Et<Ft;Et++){let Ot=ht[Et],gt=n.get(Ot);e.bindTexture(i.TEXTURE_2D,gt.__webglTexture),Qt(i.TEXTURE_2D,Ot),Ht(X.__webglFramebuffer,I,Ot,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,0),m(Ot)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let Et=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Et=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Et,at.__webglTexture),Qt(Et,S),S.mipmaps&&S.mipmaps.length>0)for(let Ft=0;Ft<S.mipmaps.length;Ft++)Ht(X.__webglFramebuffer[Ft],I,S,i.COLOR_ATTACHMENT0,Et,Ft);else Ht(X.__webglFramebuffer,I,S,i.COLOR_ATTACHMENT0,Et,0);m(S)&&d(Et),e.unbindTexture()}I.depthBuffer&&te(I)}function ut(I){let S=I.textures;for(let X=0,at=S.length;X<at;X++){let ht=S[X];if(m(ht)){let rt=M(I),Vt=n.get(ht).__webglTexture;e.bindTexture(rt,Vt),d(rt),e.unbindTexture()}}}let _t=[],F=[];function zt(I){if(I.samples>0){if(At(I)===!1){let S=I.textures,X=I.width,at=I.height,ht=i.COLOR_BUFFER_BIT,rt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Vt=n.get(I),Et=S.length>1;if(Et)for(let Ft=0;Ft<S.length;Ft++)e.bindFramebuffer(i.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer);for(let Ft=0;Ft<S.length;Ft++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ht|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ht|=i.STENCIL_BUFFER_BIT)),Et){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Vt.__webglColorRenderbuffer[Ft]);let Ot=n.get(S[Ft]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ot,0)}i.blitFramebuffer(0,0,X,at,0,0,X,at,ht,i.NEAREST),l===!0&&(_t.length=0,F.length=0,_t.push(i.COLOR_ATTACHMENT0+Ft),I.depthBuffer&&I.resolveDepthBuffer===!1&&(_t.push(rt),F.push(rt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,F)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,_t))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Et)for(let Ft=0;Ft<S.length;Ft++){e.bindFramebuffer(i.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.RENDERBUFFER,Vt.__webglColorRenderbuffer[Ft]);let Ot=n.get(S[Ft]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.TEXTURE_2D,Ot,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){let S=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function pt(I){return Math.min(s.maxSamples,I.samples)}function At(I){let S=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function yt(I){let S=o.render.frame;h.get(I)!==S&&(h.set(I,S),I.update())}function $t(I,S){let X=I.colorSpace,at=I.format,ht=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||X!==Ws&&X!==Di&&(Ie.getTransfer(X)===Oe?(at!==jn||ht!==Mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),S}function Bt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=Z,this.resetTextureUnits=$,this.setTexture2D=et,this.setTexture2DArray=Y,this.setTexture3D=ot,this.setTextureCube=tt,this.rebindTextures=jt,this.setupRenderTarget=he,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=zt,this.setupDepthRenderbuffer=te,this.setupFrameBufferTexture=Ht,this.useMultisampledRTT=At}function lx(i,t){function e(n,s=Di){let r,o=Ie.getTransfer(s);if(n===Mi)return i.UNSIGNED_BYTE;if(n===mc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===gc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===su)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===nu)return i.BYTE;if(n===iu)return i.SHORT;if(n===fr)return i.UNSIGNED_SHORT;if(n===pc)return i.INT;if(n===is)return i.UNSIGNED_INT;if(n===ai)return i.FLOAT;if(n===ni)return i.HALF_FLOAT;if(n===ru)return i.ALPHA;if(n===ou)return i.RGB;if(n===jn)return i.RGBA;if(n===au)return i.LUMINANCE;if(n===lu)return i.LUMINANCE_ALPHA;if(n===Ds)return i.DEPTH_COMPONENT;if(n===ks)return i.DEPTH_STENCIL;if(n===xc)return i.RED;if(n===_c)return i.RED_INTEGER;if(n===cu)return i.RG;if(n===yc)return i.RG_INTEGER;if(n===vc)return i.RGBA_INTEGER;if(n===eo||n===no||n===io||n===so)if(o===Oe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===eo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===no)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===so)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===eo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===no)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===io)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===so)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Za||n===$a||n===Ka||n===Ja)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Za)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===$a)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ka)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ja)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Qa||n===ja||n===tl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Qa||n===ja)return o===Oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===tl)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===el||n===nl||n===il||n===sl||n===rl||n===ol||n===al||n===ll||n===cl||n===hl||n===ul||n===fl||n===dl||n===pl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===el)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===nl)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===il)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===sl)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===rl)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ol)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===al)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ll)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===cl)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===hl)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ul)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===fl)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===dl)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===pl)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ro||n===ml||n===gl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ro)return o===Oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ml)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===gl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===hu||n===xl||n===_l||n===yl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ro)return r.COMPRESSED_RED_RGTC1_EXT;if(n===xl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_l)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===yl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===zs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}function dx(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,mu(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,M,b,v){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),p(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),u(m,d),d.isMeshPhysicalMaterial&&f(m,d,v)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),_(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,M,b):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Pn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Pn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let M=t.get(d),b=M.envMap,v=M.envMapRotation;b&&(m.envMap.value=b,Ki.copy(v),Ki.x*=-1,Ki.y*=-1,Ki.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ki.y*=-1,Ki.z*=-1),m.envMapRotation.value.setFromMatrix4(fx.makeRotationFromEuler(Ki)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,M,b){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*M,m.scale.value=b*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function p(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function u(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function f(m,d,M){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Pn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){let M=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function px(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,b){let v=b.program;n.uniformBlockBinding(M,v)}function c(M,b){let v=s[M.id];v===void 0&&(g(M),v=h(M),s[M.id]=v,M.addEventListener("dispose",m));let N=b.program;n.updateUBOMapping(M,N);let P=t.render.frame;r[M.id]!==P&&(u(M),r[M.id]=P)}function h(M){let b=p();M.__bindingPointIndex=b;let v=i.createBuffer(),N=M.__size,P=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,N,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,v),v}function p(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){let b=s[M.id],v=M.uniforms,N=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let P=0,D=v.length;P<D;P++){let z=Array.isArray(v[P])?v[P]:[v[P]];for(let A=0,E=z.length;A<E;A++){let w=z[A];if(f(w,P,A,N)===!0){let $=w.__offset,Z=Array.isArray(w.value)?w.value:[w.value],Q=0;for(let et=0;et<Z.length;et++){let Y=Z[et],ot=_(Y);typeof Y=="number"||typeof Y=="boolean"?(w.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,$+Q,w.__data)):Y.isMatrix3?(w.__data[0]=Y.elements[0],w.__data[1]=Y.elements[1],w.__data[2]=Y.elements[2],w.__data[3]=0,w.__data[4]=Y.elements[3],w.__data[5]=Y.elements[4],w.__data[6]=Y.elements[5],w.__data[7]=0,w.__data[8]=Y.elements[6],w.__data[9]=Y.elements[7],w.__data[10]=Y.elements[8],w.__data[11]=0):(Y.toArray(w.__data,Q),Q+=ot.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,$,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(M,b,v,N){let P=M.value,D=b+"_"+v;if(N[D]===void 0)return typeof P=="number"||typeof P=="boolean"?N[D]=P:N[D]=P.clone(),!0;{let z=N[D];if(typeof P=="number"||typeof P=="boolean"){if(z!==P)return N[D]=P,!0}else if(z.equals(P)===!1)return z.copy(P),!0}return!1}function g(M){let b=M.uniforms,v=0,N=16;for(let D=0,z=b.length;D<z;D++){let A=Array.isArray(b[D])?b[D]:[b[D]];for(let E=0,w=A.length;E<w;E++){let $=A[E],Z=Array.isArray($.value)?$.value:[$.value];for(let Q=0,et=Z.length;Q<et;Q++){let Y=Z[Q],ot=_(Y),tt=v%N,Tt=tt%ot.boundary,It=tt+Tt;v+=Tt,It!==0&&N-It<ot.storage&&(v+=N-It),$.__data=new Float32Array(ot.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=v,v+=ot.storage}}}let P=v%N;return P>0&&(v+=N-P),M.__size=v,M.__cache={},this}function _(M){let b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),b}function m(M){let b=M.target;b.removeEventListener("dispose",m);let v=o.indexOf(b.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function d(){for(let M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}function bc(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,p){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+p)+(l-a)/p;u*=h,f*=h,s(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}function qh(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function gx(i,t){let e=1-i;return e*e*t}function xx(i,t){return 2*(1-i)*i*t}function _x(i,t){return i*i*t}function lr(i,t,e,n){return gx(i,t)+xx(i,e)+_x(i,n)}function yx(i,t){let e=1-i;return e*e*e*t}function vx(i,t){let e=1-i;return 3*e*e*i*t}function Mx(i,t){return 3*(1-i)*i*i*t}function bx(i,t){return i*i*i*t}function cr(i,t,e,n,s){return yx(i,t)+vx(i,e)+Mx(i,n)+bx(i,s)}function Mu(i,t,e,n,s){let r,o;if(s===zx(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Yh(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Yh(r,i[r],i[r+1],o);return o&&Bo(o,o.next)&&(vr(o),o=o.next),o}function as(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Bo(e,e.next)||Ze(e.prev,e,e.next)===0)){if(vr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function _r(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Dx(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?wx(i,n,s,r):Ex(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),vr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Tx(as(i),t,e),_r(i,t,e,n,s,r,2)):o===2&&Ax(i,t,e,n,s,r):_r(as(i),t,e,n,s,r,1);break}}}function Ex(i){let t=i.prev,e=i,n=i.next;if(Ze(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,p=a<l?a<c?a:c:l<c?l:c,u=s>r?s>o?s:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=p&&g.y<=f&&Ps(s,a,r,l,o,c,g.x,g.y)&&Ze(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function wx(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Ze(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,p=r.y,u=o.y,f=a<l?a<c?a:c:l<c?l:c,g=h<p?h<u?h:u:p<u?p:u,_=a>l?a>c?a:c:l>c?l:c,m=h>p?h>u?h:u:p>u?p:u,d=Yl(f,g,t,e,n),M=Yl(_,m,t,e,n),b=i.prevZ,v=i.nextZ;for(;b&&b.z>=d&&v&&v.z<=M;){if(b.x>=f&&b.x<=_&&b.y>=g&&b.y<=m&&b!==s&&b!==o&&Ps(a,h,l,p,c,u,b.x,b.y)&&Ze(b.prev,b,b.next)>=0||(b=b.prevZ,v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Ps(a,h,l,p,c,u,v.x,v.y)&&Ze(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;b&&b.z>=d;){if(b.x>=f&&b.x<=_&&b.y>=g&&b.y<=m&&b!==s&&b!==o&&Ps(a,h,l,p,c,u,b.x,b.y)&&Ze(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;v&&v.z<=M;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Ps(a,h,l,p,c,u,v.x,v.y)&&Ze(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Tx(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!Bo(s,r)&&bu(s,n,n.next,r)&&yr(s,r)&&yr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),vr(n),vr(n.next),n=i=r),n=n.next}while(n!==i);return as(n)}function Ax(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Fx(o,a)){let l=Su(o,a);o=as(o,o.next),l=as(l,l.next),_r(o,t,e,n,s,r,0),_r(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Rx(i,t,e,n){let s=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Mu(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Nx(c));for(s.sort(Cx),r=0;r<s.length;r++)e=Ix(s[r],e);return e}function Cx(i,t){return i.x-t.x}function Ix(i,t){let e=Px(i,t);if(!e)return t;let n=Su(e,i);return as(n,n.next),as(e,e.next)}function Px(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let u=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=r&&u>n&&(n=u,s=e.x<e.next.x?e:e.next,u===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,p;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Ps(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(p=Math.abs(o-e.y)/(r-e.x),yr(e,i)&&(p<h||p===h&&(e.x>s.x||e.x===s.x&&Lx(s,e)))&&(s=e,h=p)),e=e.next;while(e!==a);return s}function Lx(i,t){return Ze(i.prev,i,t.prev)<0&&Ze(t.next,i,i.next)<0}function Dx(i,t,e,n){let s=i;do s.z===0&&(s.z=Yl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Ux(s)}function Ux(i){let t,e,n,s,r,o,a,l,c=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(o>1);return i}function Yl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Nx(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Ps(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Fx(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Ox(i,t)&&(yr(i,t)&&yr(t,i)&&Bx(i,t)&&(Ze(i.prev,i,t.prev)||Ze(i,t.prev,t))||Bo(i,t)&&Ze(i.prev,i,i.next)>0&&Ze(t.prev,t,t.next)>0)}function Ze(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Bo(i,t){return i.x===t.x&&i.y===t.y}function bu(i,t,e,n){let s=jr(Ze(i,t,e)),r=jr(Ze(i,t,n)),o=jr(Ze(e,n,i)),a=jr(Ze(e,n,t));return!!(s!==r&&o!==a||s===0&&Qr(i,e,t)||r===0&&Qr(i,n,t)||o===0&&Qr(e,i,n)||a===0&&Qr(e,t,n))}function Qr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function jr(i){return i>0?1:i<0?-1:0}function Ox(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&bu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function yr(i,t){return Ze(i.prev,i,i.next)<0?Ze(i,t,i.next)>=0&&Ze(i,i.prev,t)>=0:Ze(i,t,i.prev)<0||Ze(i,i.next,t)<0}function Bx(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Su(i,t){let e=new Zl(i.i,i.x,i.y),n=new Zl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Yh(i,t,e,n){let s=new Zl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function vr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Zl(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function zx(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}function Zh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function $h(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}function Hx(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}function to(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Vx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Qh(){return performance.now()}var ac,Bf,Xc,zf,jh,lc,xi,Fi,Pn,En,li,Ls,ci,qc,Yc,kf,Qi,Hf,Vf,Gf,Wf,Xf,qf,Yf,Zf,Oa,Ba,$f,Kf,Jf,Qf,jf,td,ed,nd,id,za,ka,Ha,Fs,Va,Ga,hr,Wa,tu,sd,rd,Ui,cc,hc,uc,Mr,od,fc,dc,eu,Os,Bs,Xa,qa,No,ur,es,Ya,Hn,ad,Cr,oi,ia,ns,Mi,nu,iu,fr,pc,is,ai,ni,mc,gc,zs,su,ru,ou,jn,au,lu,Ds,ks,xc,_c,cu,yc,vc,eo,no,io,so,Za,$a,Ka,Ja,Qa,ja,tl,el,nl,il,sl,rl,ol,al,ll,cl,hl,ul,fl,dl,pl,ro,ml,gl,hu,xl,_l,yl,oo,vl,sa,Zc,$c,Kc,ld,cd,uu,hd,Di,vn,Ws,Fo,Oe,ms,Jc,ud,fd,dd,fu,pd,md,gd,xd,Qc,jc,yi,ao,Oi,_n,ra,Ml,xt,xe,aa,th,Ie,eh,nh,ih,sh,rh,gs,bl,Sd,co,Ed,Ln,Ke,Sl,wn,ho,El,Bi,H,ca,oh,bi,fi,Kn,Ir,xs,_s,ys,Ai,Ri,Xi,js,Pr,Lr,qi,wd,tr,ua,ss,di,fa,Dr,Ci,da,Ur,pa,wl,Be,vs,Jn,Td,Ad,Ii,Nr,Bn,ah,lh,hi,uo,Rd,ch,Ms,pi,Fr,er,Cd,Id,hh,uh,fh,dh,Pd,bs,ma,Qe,Qn,mi,ga,gi,Ss,Es,ph,xa,_a,ya,va,Ma,ba,ji,pu,Pi,Or,ne,yn,Ld,rs,je,sn,Br,rn,fo,po,Me,Dd,qn,Ea,ws,zn,nr,dn,on,mh,Yi,zr,gh,kr,Hr,Vr,wa,Gr,xh,Wr,ie,We,ki,Fd,Od,an,mo,Li,_h,yh,kn,Ts,As,Tl,go,Al,Ta,Bd,zd,_i,Zi,qr,dr,Tn,Hd,Vd,Gd,Wd,Xd,qd,Yd,Zd,$d,Kd,Jd,Qd,jd,tp,ep,np,ip,sp,rp,op,ap,lp,cp,hp,up,fp,dp,pp,mp,gp,xp,_p,yp,vp,Mp,bp,Sp,Ep,wp,Tp,Ap,Rp,Cp,Ip,Pp,Lp,Dp,Up,Np,Fp,Op,Bp,zp,kp,Hp,Vp,Gp,Wp,Xp,qp,Yp,Zp,$p,Kp,Jp,Qp,jp,tm,em,nm,im,sm,rm,om,am,lm,cm,hm,um,fm,dm,pm,mm,gm,xm,_m,ym,vm,Mm,bm,Sm,Em,wm,Tm,Am,Rm,Cm,Im,Pm,Lm,Dm,Um,Nm,Fm,Om,Bm,zm,km,Hm,Vm,Gm,Wm,Xm,qm,Ym,Zm,$m,Km,Jm,Qm,jm,t0,e0,n0,i0,s0,r0,o0,a0,l0,c0,h0,u0,f0,d0,p0,m0,g0,x0,_0,y0,ve,Nt,ri,Yr,$i,v0,zi,Is,vh,ts,Aa,Mh,Ra,Ca,Ia,Pa,Ji,Rs,bh,xo,_o,xu,Th,_u,yu,vu,Ah,Rh,Ch,Ih,Ph,Rl,Cl,Il,La,Ns,Sg,Eg,Uh,$r,Dg,Ug,Fg,Wg,Ll,Dl,Jg,Ul,Nl,ex,nx,sx,Fl,In,cx,ar,hx,ux,Ol,Bl,Ki,fx,yo,vo,zl,pr,Cs,Wh,Kr,Xh,mx,ir,sr,Dn,Mo,Yn,mr,kl,Jr,Da,Ua,Na,Hl,bo,Vl,So,Gl,Eo,Wl,wo,Xl,ql,gr,xr,To,Ao,qe,os,Sx,Ni,Vs,kx,Ro,ti,Co,Te,Gs,$l,Kl,Jl,ei,ls,Ql,jl,tc,Io,cs,ec,nc,Gx,ic,Po,Lo,Fa,Kh,Jh,sc,rc,Do,Uo,Sc,Wx,Ec,Xx,qx,Yx,Zx,$x,Kx,Jx,oc,Xe,F_,Vn=nn(()=>{ac="170",Bf=0,Xc=1,zf=2,jh=1,lc=2,xi=3,Fi=0,Pn=1,En=2,li=0,Ls=1,ci=2,qc=3,Yc=4,kf=5,Qi=100,Hf=101,Vf=102,Gf=103,Wf=104,Xf=200,qf=201,Yf=202,Zf=203,Oa=204,Ba=205,$f=206,Kf=207,Jf=208,Qf=209,jf=210,td=211,ed=212,nd=213,id=214,za=0,ka=1,Ha=2,Fs=3,Va=4,Ga=5,hr=6,Wa=7,tu=0,sd=1,rd=2,Ui=0,cc=1,hc=2,uc=3,Mr=4,od=5,fc=6,dc=7,eu=300,Os=301,Bs=302,Xa=303,qa=304,No=306,ur=1e3,es=1001,Ya=1002,Hn=1003,ad=1004,Cr=1005,oi=1006,ia=1007,ns=1008,Mi=1009,nu=1010,iu=1011,fr=1012,pc=1013,is=1014,ai=1015,ni=1016,mc=1017,gc=1018,zs=1020,su=35902,ru=1021,ou=1022,jn=1023,au=1024,lu=1025,Ds=1026,ks=1027,xc=1028,_c=1029,cu=1030,yc=1031,vc=1033,eo=33776,no=33777,io=33778,so=33779,Za=35840,$a=35841,Ka=35842,Ja=35843,Qa=36196,ja=37492,tl=37496,el=37808,nl=37809,il=37810,sl=37811,rl=37812,ol=37813,al=37814,ll=37815,cl=37816,hl=37817,ul=37818,fl=37819,dl=37820,pl=37821,ro=36492,ml=36494,gl=36495,hu=36283,xl=36284,_l=36285,yl=36286,oo=2300,vl=2301,sa=2302,Zc=2400,$c=2401,Kc=2402,ld=3200,cd=3201,uu=0,hd=1,Di="",vn="srgb",Ws="srgb-linear",Fo="linear",Oe="srgb",ms=7680,Jc=519,ud=512,fd=513,dd=514,fu=515,pd=516,md=517,gd=518,xd=519,Qc=35044,jc="300 es",yi=2e3,ao=2001,Oi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},_n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ra=Math.PI/180,Ml=180/Math.PI;xt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(mn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},xe=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],p=n[7],u=n[2],f=n[5],g=n[8],_=s[0],m=s[3],d=s[6],M=s[1],b=s[4],v=s[7],N=s[2],P=s[5],D=s[8];return r[0]=o*_+a*M+l*N,r[3]=o*m+a*b+l*P,r[6]=o*d+a*v+l*D,r[1]=c*_+h*M+p*N,r[4]=c*m+h*b+p*P,r[7]=c*d+h*v+p*D,r[2]=u*_+f*M+g*N,r[5]=u*m+f*b+g*P,r[8]=u*d+f*v+g*D,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],p=h*o-a*c,u=a*l-h*r,f=c*r-o*l,g=e*p+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=p*_,t[1]=(s*c-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=u*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(aa.makeScale(t,e)),this}rotate(t){return this.premultiply(aa.makeRotation(-t)),this}translate(t,e){return this.premultiply(aa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},aa=new xe;th={};Ie={enabled:!0,workingColorSpace:Ws,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Oe&&(i.r=vi(i.r),i.g=vi(i.g),i.b=vi(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Oe&&(i.r=Us(i.r),i.g=Us(i.g),i.b=Us(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Di?Fo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};eh=[.64,.33,.3,.6,.15,.06],nh=[.2126,.7152,.0722],ih=[.3127,.329],sh=new xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rh=new xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ie.define({[Ws]:{primaries:eh,whitePoint:ih,transfer:Fo,toXYZ:sh,fromXYZ:rh,luminanceCoefficients:nh,workingColorSpaceConfig:{unpackColorSpace:vn},outputColorSpaceConfig:{drawingBufferColorSpace:vn}},[vn]:{primaries:eh,whitePoint:ih,transfer:Oe,toXYZ:sh,fromXYZ:rh,luminanceCoefficients:nh,outputColorSpaceConfig:{drawingBufferColorSpace:vn}}});bl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{gs===void 0&&(gs=lo("canvas")),gs.width=t.width,gs.height=t.height;let n=gs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=gs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=lo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=vi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(vi(e[n]/255)*255):e[n]=vi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Sd=0,co=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sd++}),this.uuid=Xs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(la(s[o].image)):r.push(la(s[o]))}else r=la(s);n.url=r}return e||(t.images[this.uuid]=n),n}};Ed=0,Ln=class i extends Oi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=es,s=es,r=oi,o=ns,a=jn,l=Mi,c=i.DEFAULT_ANISOTROPY,h=Di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=Xs(),this.name="",this.source=new co(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==eu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ur:t.x=t.x-Math.floor(t.x);break;case es:t.x=t.x<0?0:1;break;case Ya:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ur:t.y=t.y-Math.floor(t.y);break;case es:t.y=t.y<0?0:1;break;case Ya:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ln.DEFAULT_IMAGE=null;Ln.DEFAULT_MAPPING=eu;Ln.DEFAULT_ANISOTROPY=1;Ke=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],p=l[8],u=l[1],f=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(h-u)<.01&&Math.abs(p-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(p+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(c+1)/2,v=(f+1)/2,N=(d+1)/2,P=(h+u)/4,D=(p+_)/4,z=(g+m)/4;return b>v&&b>N?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=P/n,r=D/n):v>N?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=P/s,r=z/s):N<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(N),n=D/r,s=z/r),this.set(n,s,r,e),this}let M=Math.sqrt((m-g)*(m-g)+(p-_)*(p-_)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(p-_)/M,this.z=(u-h)/M,this.w=Math.acos((c+f+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Sl=class extends Oi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ke(0,0,t,e),this.scissorTest=!1,this.viewport=new Ke(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:oi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Ln(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new co(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},wn=class extends Sl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ho=class extends Ln{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},El=class extends Ln{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Bi=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],p=n[s+3],u=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=p;return}if(a===1){t[e+0]=u,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(p!==_||l!==u||c!==f||h!==g){let m=1-a,d=l*u+c*f+h*g+p*_,M=d>=0?1:-1,b=1-d*d;if(b>Number.EPSILON){let N=Math.sqrt(b),P=Math.atan2(N,d*M);m=Math.sin(m*P)/N,a=Math.sin(a*P)/N}let v=a*M;if(l=l*m+u*v,c=c*m+f*v,h=h*m+g*v,p=p*m+_*v,m===1-a){let N=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=N,c*=N,h*=N,p*=N}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],p=r[o],u=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*p+l*f-c*u,t[e+1]=l*g+h*u+c*p-a*f,t[e+2]=c*g+h*f+a*u-l*p,t[e+3]=h*g-a*p-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),p=a(r/2),u=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*p+c*f*g,this._y=c*f*p-u*h*g,this._z=c*h*g+u*f*p,this._w=c*h*p-u*f*g;break;case"YXZ":this._x=u*h*p+c*f*g,this._y=c*f*p-u*h*g,this._z=c*h*g-u*f*p,this._w=c*h*p+u*f*g;break;case"ZXY":this._x=u*h*p-c*f*g,this._y=c*f*p+u*h*g,this._z=c*h*g+u*f*p,this._w=c*h*p-u*f*g;break;case"ZYX":this._x=u*h*p-c*f*g,this._y=c*f*p+u*h*g,this._z=c*h*g-u*f*p,this._w=c*h*p+u*f*g;break;case"YZX":this._x=u*h*p+c*f*g,this._y=c*f*p+u*h*g,this._z=c*h*g-u*f*p,this._w=c*h*p-u*f*g;break;case"XZY":this._x=u*h*p-c*f*g,this._y=c*f*p-u*h*g,this._z=c*h*g+u*f*p,this._w=c*h*p+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],p=e[10],u=n+a+p;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>p){let f=2*Math.sqrt(1+n-a-p);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>p){let f=2*Math.sqrt(1+a-n-p);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+p-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(mn(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),p=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=o*p+this._w*u,this._x=n*p+this._x*u,this._y=s*p+this._y*u,this._z=r*p+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},H=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(oh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(oh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),p=2*(r*n-o*e);return this.x=e+l*c+o*p-a*h,this.y=n+l*h+a*c-r*p,this.z=s+l*p+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ca.copy(this).projectOnVector(t),this.sub(ca)}reflect(t){return this.sub(ca.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(mn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ca=new H,oh=new Bi,bi=class{constructor(t=new H(1/0,1/0,1/0),e=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Kn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Kn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Kn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Kn):Kn.fromBufferAttribute(r,o),Kn.applyMatrix4(t.matrixWorld),this.expandByPoint(Kn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ir.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ir.copy(n.boundingBox)),Ir.applyMatrix4(t.matrixWorld),this.union(Ir)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Kn),Kn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(js),Pr.subVectors(this.max,js),xs.subVectors(t.a,js),_s.subVectors(t.b,js),ys.subVectors(t.c,js),Ai.subVectors(_s,xs),Ri.subVectors(ys,_s),Xi.subVectors(xs,ys);let e=[0,-Ai.z,Ai.y,0,-Ri.z,Ri.y,0,-Xi.z,Xi.y,Ai.z,0,-Ai.x,Ri.z,0,-Ri.x,Xi.z,0,-Xi.x,-Ai.y,Ai.x,0,-Ri.y,Ri.x,0,-Xi.y,Xi.x,0];return!ha(e,xs,_s,ys,Pr)||(e=[1,0,0,0,1,0,0,0,1],!ha(e,xs,_s,ys,Pr))?!1:(Lr.crossVectors(Ai,Ri),e=[Lr.x,Lr.y,Lr.z],ha(e,xs,_s,ys,Pr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Kn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Kn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(fi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},fi=[new H,new H,new H,new H,new H,new H,new H,new H],Kn=new H,Ir=new bi,xs=new H,_s=new H,ys=new H,Ai=new H,Ri=new H,Xi=new H,js=new H,Pr=new H,Lr=new H,qi=new H;wd=new bi,tr=new H,ua=new H,ss=class{constructor(t=new H,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):wd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;tr.subVectors(t,this.center);let e=tr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(tr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ua.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(tr.copy(t.center).add(ua)),this.expandByPoint(tr.copy(t.center).sub(ua))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},di=new H,fa=new H,Dr=new H,Ci=new H,da=new H,Ur=new H,pa=new H,wl=class{constructor(t=new H,e=new H(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,di)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=di.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(di.copy(this.origin).addScaledVector(this.direction,e),di.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){fa.copy(t).add(e).multiplyScalar(.5),Dr.copy(e).sub(t).normalize(),Ci.copy(this.origin).sub(fa);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Dr),a=Ci.dot(this.direction),l=-Ci.dot(Dr),c=Ci.lengthSq(),h=Math.abs(1-o*o),p,u,f,g;if(h>0)if(p=o*l-a,u=o*a-l,g=r*h,p>=0)if(u>=-g)if(u<=g){let _=1/h;p*=_,u*=_,f=p*(p+o*u+2*a)+u*(o*p+u+2*l)+c}else u=r,p=Math.max(0,-(o*u+a)),f=-p*p+u*(u+2*l)+c;else u=-r,p=Math.max(0,-(o*u+a)),f=-p*p+u*(u+2*l)+c;else u<=-g?(p=Math.max(0,-(-o*r+a)),u=p>0?-r:Math.min(Math.max(-r,-l),r),f=-p*p+u*(u+2*l)+c):u<=g?(p=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(p=Math.max(0,-(o*r+a)),u=p>0?r:Math.min(Math.max(-r,-l),r),f=-p*p+u*(u+2*l)+c);else u=o>0?-r:r,p=Math.max(0,-(o*u+a)),f=-p*p+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(fa).addScaledVector(Dr,u),f}intersectSphere(t,e){di.subVectors(t.center,this.origin);let n=di.dot(this.direction),s=di.dot(di)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),p>=0?(a=(t.min.z-u.z)*p,l=(t.max.z-u.z)*p):(a=(t.max.z-u.z)*p,l=(t.min.z-u.z)*p),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,di)!==null}intersectTriangle(t,e,n,s,r){da.subVectors(e,t),Ur.subVectors(n,t),pa.crossVectors(da,Ur);let o=this.direction.dot(pa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ci.subVectors(this.origin,t);let l=a*this.direction.dot(Ur.crossVectors(Ci,Ur));if(l<0)return null;let c=a*this.direction.dot(da.cross(Ci));if(c<0||l+c>o)return null;let h=-a*Ci.dot(pa);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Be=class i{constructor(t,e,n,s,r,o,a,l,c,h,p,u,f,g,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,p,u,f,g,_,m)}set(t,e,n,s,r,o,a,l,c,h,p,u,f,g,_,m){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=p,d[14]=u,d[3]=f,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/vs.setFromMatrixColumn(t,0).length(),r=1/vs.setFromMatrixColumn(t,1).length(),o=1/vs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),p=Math.sin(r);if(t.order==="XYZ"){let u=o*h,f=o*p,g=a*h,_=a*p;e[0]=l*h,e[4]=-l*p,e[8]=c,e[1]=f+g*c,e[5]=u-_*c,e[9]=-a*l,e[2]=_-u*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,f=l*p,g=c*h,_=c*p;e[0]=u+_*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*p,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=_+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,f=l*p,g=c*h,_=c*p;e[0]=u-_*a,e[4]=-o*p,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=_-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,f=o*p,g=a*h,_=a*p;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+_,e[1]=l*p,e[5]=_*c+u,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-u*p,e[8]=g*p+f,e[1]=p,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*p+g,e[10]=u-_*p}else if(t.order==="XZY"){let u=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-p,e[8]=c*h,e[1]=u*p+_,e[5]=o*h,e[9]=f*p-g,e[2]=g*p-f,e[6]=a*h,e[10]=_*p+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Td,t,Ad)}lookAt(t,e,n){let s=this.elements;return Bn.subVectors(t,e),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),Ii.crossVectors(n,Bn),Ii.lengthSq()===0&&(Math.abs(n.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),Ii.crossVectors(n,Bn)),Ii.normalize(),Nr.crossVectors(Bn,Ii),s[0]=Ii.x,s[4]=Nr.x,s[8]=Bn.x,s[1]=Ii.y,s[5]=Nr.y,s[9]=Bn.y,s[2]=Ii.z,s[6]=Nr.z,s[10]=Bn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],p=n[5],u=n[9],f=n[13],g=n[2],_=n[6],m=n[10],d=n[14],M=n[3],b=n[7],v=n[11],N=n[15],P=s[0],D=s[4],z=s[8],A=s[12],E=s[1],w=s[5],$=s[9],Z=s[13],Q=s[2],et=s[6],Y=s[10],ot=s[14],tt=s[3],Tt=s[7],It=s[11],Ut=s[15];return r[0]=o*P+a*E+l*Q+c*tt,r[4]=o*D+a*w+l*et+c*Tt,r[8]=o*z+a*$+l*Y+c*It,r[12]=o*A+a*Z+l*ot+c*Ut,r[1]=h*P+p*E+u*Q+f*tt,r[5]=h*D+p*w+u*et+f*Tt,r[9]=h*z+p*$+u*Y+f*It,r[13]=h*A+p*Z+u*ot+f*Ut,r[2]=g*P+_*E+m*Q+d*tt,r[6]=g*D+_*w+m*et+d*Tt,r[10]=g*z+_*$+m*Y+d*It,r[14]=g*A+_*Z+m*ot+d*Ut,r[3]=M*P+b*E+v*Q+N*tt,r[7]=M*D+b*w+v*et+N*Tt,r[11]=M*z+b*$+v*Y+N*It,r[15]=M*A+b*Z+v*ot+N*Ut,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],p=t[6],u=t[10],f=t[14],g=t[3],_=t[7],m=t[11],d=t[15];return g*(+r*l*p-s*c*p-r*a*u+n*c*u+s*a*f-n*l*f)+_*(+e*l*f-e*c*u+r*o*u-s*o*f+s*c*h-r*l*h)+m*(+e*c*p-e*a*f-r*o*p+n*o*f+r*a*h-n*c*h)+d*(-s*a*h-e*l*p+e*a*u+s*o*p-n*o*u+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],p=t[9],u=t[10],f=t[11],g=t[12],_=t[13],m=t[14],d=t[15],M=p*m*c-_*u*c+_*l*f-a*m*f-p*l*d+a*u*d,b=g*u*c-h*m*c-g*l*f+o*m*f+h*l*d-o*u*d,v=h*_*c-g*p*c+g*a*f-o*_*f-h*a*d+o*p*d,N=g*p*l-h*_*l-g*a*u+o*_*u+h*a*m-o*p*m,P=e*M+n*b+s*v+r*N;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/P;return t[0]=M*D,t[1]=(_*u*r-p*m*r-_*s*f+n*m*f+p*s*d-n*u*d)*D,t[2]=(a*m*r-_*l*r+_*s*c-n*m*c-a*s*d+n*l*d)*D,t[3]=(p*l*r-a*u*r-p*s*c+n*u*c+a*s*f-n*l*f)*D,t[4]=b*D,t[5]=(h*m*r-g*u*r+g*s*f-e*m*f-h*s*d+e*u*d)*D,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*d-e*l*d)*D,t[7]=(o*u*r-h*l*r+h*s*c-e*u*c-o*s*f+e*l*f)*D,t[8]=v*D,t[9]=(g*p*r-h*_*r-g*n*f+e*_*f+h*n*d-e*p*d)*D,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*d+e*a*d)*D,t[11]=(h*a*r-o*p*r-h*n*c+e*p*c+o*n*f-e*a*f)*D,t[12]=N*D,t[13]=(h*_*s-g*p*s+g*n*u-e*_*u-h*n*m+e*p*m)*D,t[14]=(g*a*s-o*_*s-g*n*l+e*_*l+o*n*m-e*a*m)*D,t[15]=(o*p*s-h*a*s+h*n*l-e*p*l-o*n*u+e*a*u)*D,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,p=a+a,u=r*c,f=r*h,g=r*p,_=o*h,m=o*p,d=a*p,M=l*c,b=l*h,v=l*p,N=n.x,P=n.y,D=n.z;return s[0]=(1-(_+d))*N,s[1]=(f+v)*N,s[2]=(g-b)*N,s[3]=0,s[4]=(f-v)*P,s[5]=(1-(u+d))*P,s[6]=(m+M)*P,s[7]=0,s[8]=(g+b)*D,s[9]=(m-M)*D,s[10]=(1-(u+_))*D,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=vs.set(s[0],s[1],s[2]).length(),o=vs.set(s[4],s[5],s[6]).length(),a=vs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Jn.copy(this);let c=1/r,h=1/o,p=1/a;return Jn.elements[0]*=c,Jn.elements[1]*=c,Jn.elements[2]*=c,Jn.elements[4]*=h,Jn.elements[5]*=h,Jn.elements[6]*=h,Jn.elements[8]*=p,Jn.elements[9]*=p,Jn.elements[10]*=p,e.setFromRotationMatrix(Jn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=yi){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),p=(e+t)/(e-t),u=(n+s)/(n-s),f,g;if(a===yi)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ao)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=yi){let l=this.elements,c=1/(e-t),h=1/(n-s),p=1/(o-r),u=(e+t)*c,f=(n+s)*h,g,_;if(a===yi)g=(o+r)*p,_=-2*p;else if(a===ao)g=r*p,_=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},vs=new H,Jn=new Be,Td=new H(0,0,0),Ad=new H(1,1,1),Ii=new H,Nr=new H,Bn=new H,ah=new Be,lh=new Bi,hi=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],p=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(mn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-mn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(mn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-mn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(mn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-mn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ah.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ah,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return lh.setFromEuler(this),this.setFromQuaternion(lh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};hi.DEFAULT_ORDER="XYZ";uo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Rd=0,ch=new H,Ms=new Bi,pi=new Be,Fr=new H,er=new H,Cd=new H,Id=new Bi,hh=new H(1,0,0),uh=new H(0,1,0),fh=new H(0,0,1),dh={type:"added"},Pd={type:"removed"},bs={type:"childadded",child:null},ma={type:"childremoved",child:null},Qe=class i extends Oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=Xs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new H,e=new hi,n=new Bi,s=new H(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Be},normalMatrix:{value:new xe}}),this.matrix=new Be,this.matrixWorld=new Be,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ms.setFromAxisAngle(t,e),this.quaternion.multiply(Ms),this}rotateOnWorldAxis(t,e){return Ms.setFromAxisAngle(t,e),this.quaternion.premultiply(Ms),this}rotateX(t){return this.rotateOnAxis(hh,t)}rotateY(t){return this.rotateOnAxis(uh,t)}rotateZ(t){return this.rotateOnAxis(fh,t)}translateOnAxis(t,e){return ch.copy(t).applyQuaternion(this.quaternion),this.position.add(ch.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(hh,t)}translateY(t){return this.translateOnAxis(uh,t)}translateZ(t){return this.translateOnAxis(fh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Fr.copy(t):Fr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(er,Fr,this.up):pi.lookAt(Fr,er,this.up),this.quaternion.setFromRotationMatrix(pi),s&&(pi.extractRotation(s.matrixWorld),Ms.setFromRotationMatrix(pi),this.quaternion.premultiply(Ms.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(dh),bs.child=t,this.dispatchEvent(bs),bs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Pd),ma.child=t,this.dispatchEvent(ma),ma.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),pi.multiply(t.parent.matrixWorld)),t.applyMatrix4(pi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(dh),bs.child=t,this.dispatchEvent(bs),bs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,t,Cd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,Id,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let p=l[c];r(t.shapes,p)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),p=o(t.shapes),u=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Qe.DEFAULT_UP=new H(0,1,0);Qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Qn=new H,mi=new H,ga=new H,gi=new H,Ss=new H,Es=new H,ph=new H,xa=new H,_a=new H,ya=new H,va=new Ke,Ma=new Ke,ba=new Ke,ji=class i{constructor(t=new H,e=new H,n=new H){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Qn.subVectors(t,e),s.cross(Qn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Qn.subVectors(s,e),mi.subVectors(n,e),ga.subVectors(t,e);let o=Qn.dot(Qn),a=Qn.dot(mi),l=Qn.dot(ga),c=mi.dot(mi),h=mi.dot(ga),p=o*c-a*a;if(p===0)return r.set(0,0,0),null;let u=1/p,f=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,gi.x),l.addScaledVector(o,gi.y),l.addScaledVector(a,gi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return va.setScalar(0),Ma.setScalar(0),ba.setScalar(0),va.fromBufferAttribute(t,e),Ma.fromBufferAttribute(t,n),ba.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(va,r.x),o.addScaledVector(Ma,r.y),o.addScaledVector(ba,r.z),o}static isFrontFacing(t,e,n,s){return Qn.subVectors(n,e),mi.subVectors(t,e),Qn.cross(mi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Qn.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),Qn.cross(mi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Ss.subVectors(s,n),Es.subVectors(r,n),xa.subVectors(t,n);let l=Ss.dot(xa),c=Es.dot(xa);if(l<=0&&c<=0)return e.copy(n);_a.subVectors(t,s);let h=Ss.dot(_a),p=Es.dot(_a);if(h>=0&&p<=h)return e.copy(s);let u=l*p-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Ss,o);ya.subVectors(t,r);let f=Ss.dot(ya),g=Es.dot(ya);if(g>=0&&f<=g)return e.copy(r);let _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Es,a);let m=h*g-f*p;if(m<=0&&p-h>=0&&f-g>=0)return ph.subVectors(r,s),a=(p-h)/(p-h+(f-g)),e.copy(s).addScaledVector(ph,a);let d=1/(m+_+u);return o=_*d,a=u*d,e.copy(n).addScaledVector(Ss,o).addScaledVector(Es,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},pu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},Or={h:0,s:0,l:0};ne=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=vn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ie.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ie.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Ie.workingColorSpace){if(t=_d(t,1),e=mn(e,0,1),n=mn(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Sa(o,r,t+1/3),this.g=Sa(o,r,t),this.b=Sa(o,r,t-1/3)}return Ie.toWorkingColorSpace(this,s),this}setStyle(t,e=vn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=vn){let n=pu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=vi(t.r),this.g=vi(t.g),this.b=vi(t.b),this}copyLinearToSRGB(t){return this.r=Us(t.r),this.g=Us(t.g),this.b=Us(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=vn){return Ie.fromWorkingColorSpace(yn.copy(this),t),Math.round(mn(yn.r*255,0,255))*65536+Math.round(mn(yn.g*255,0,255))*256+Math.round(mn(yn.b*255,0,255))}getHexString(t=vn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ie.workingColorSpace){Ie.fromWorkingColorSpace(yn.copy(this),e);let n=yn.r,s=yn.g,r=yn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let p=o-a;switch(c=h<=.5?p/(o+a):p/(2-o-a),o){case n:l=(s-r)/p+(s<r?6:0);break;case s:l=(r-n)/p+2;break;case r:l=(n-s)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Ie.workingColorSpace){return Ie.fromWorkingColorSpace(yn.copy(this),e),t.r=yn.r,t.g=yn.g,t.b=yn.b,t}getStyle(t=vn){Ie.fromWorkingColorSpace(yn.copy(this),t);let e=yn.r,n=yn.g,s=yn.b;return t!==vn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Pi),this.setHSL(Pi.h+t,Pi.s+e,Pi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Pi),t.getHSL(Or);let n=oa(Pi.h,Or.h,e),s=oa(Pi.s,Or.s,e),r=oa(Pi.l,Or.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},yn=new ne;ne.NAMES=pu;Ld=0,rs=class extends Oi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ld++}),this.uuid=Xs(),this.name="",this.blending=Ls,this.side=Fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oa,this.blendDst=Ba,this.blendEquation=Qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ne(0,0,0),this.blendAlpha=0,this.depthFunc=Fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ms,this.stencilZFail=ms,this.stencilZPass=ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ls&&(n.blending=this.blending),this.side!==Fi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Oa&&(n.blendSrc=this.blendSrc),this.blendDst!==Ba&&(n.blendDst=this.blendDst),this.blendEquation!==Qi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Fs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ms&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ms&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ms&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},je=class extends rs{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.combine=tu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},sn=new H,Br=new xt,rn=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Qc,this.updateRanges=[],this.gpuType=ai,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Br.fromBufferAttribute(this,e),Br.applyMatrix3(t),this.setXY(e,Br.x,Br.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.applyMatrix3(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.applyMatrix4(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.applyNormalMatrix(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.transformDirection(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Qs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Cn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Qs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Cn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Qs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Cn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Qs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Cn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Qs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Cn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Cn(e,this.array),n=Cn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Cn(e,this.array),n=Cn(n,this.array),s=Cn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Cn(e,this.array),n=Cn(n,this.array),s=Cn(s,this.array),r=Cn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Qc&&(t.usage=this.usage),t}},fo=class extends rn{constructor(t,e,n){super(new Uint16Array(t),e,n)}},po=class extends rn{constructor(t,e,n){super(new Uint32Array(t),e,n)}},Me=class extends rn{constructor(t,e,n){super(new Float32Array(t),e,n)}},Dd=0,qn=new Be,Ea=new Qe,ws=new H,zn=new bi,nr=new bi,dn=new H,on=class i extends Oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=Xs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(du(t)?po:fo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new xe().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return qn.makeRotationFromQuaternion(t),this.applyMatrix4(qn),this}rotateX(t){return qn.makeRotationX(t),this.applyMatrix4(qn),this}rotateY(t){return qn.makeRotationY(t),this.applyMatrix4(qn),this}rotateZ(t){return qn.makeRotationZ(t),this.applyMatrix4(qn),this}translate(t,e,n){return qn.makeTranslation(t,e,n),this.applyMatrix4(qn),this}scale(t,e,n){return qn.makeScale(t,e,n),this.applyMatrix4(qn),this}lookAt(t){return Ea.lookAt(t),Ea.updateMatrix(),this.applyMatrix4(Ea.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ws).negate(),this.translate(ws.x,ws.y,ws.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Me(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];zn.setFromBufferAttribute(r),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ss);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(t){let n=this.boundingSphere.center;if(zn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];nr.setFromBufferAttribute(a),this.morphTargetsRelative?(dn.addVectors(zn.min,nr.min),zn.expandByPoint(dn),dn.addVectors(zn.max,nr.max),zn.expandByPoint(dn)):(zn.expandByPoint(nr.min),zn.expandByPoint(nr.max))}zn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)dn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(dn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)dn.fromBufferAttribute(a,c),l&&(ws.fromBufferAttribute(t,c),dn.add(ws)),s=Math.max(s,n.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rn(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let z=0;z<n.count;z++)a[z]=new H,l[z]=new H;let c=new H,h=new H,p=new H,u=new xt,f=new xt,g=new xt,_=new H,m=new H;function d(z,A,E){c.fromBufferAttribute(n,z),h.fromBufferAttribute(n,A),p.fromBufferAttribute(n,E),u.fromBufferAttribute(r,z),f.fromBufferAttribute(r,A),g.fromBufferAttribute(r,E),h.sub(c),p.sub(c),f.sub(u),g.sub(u);let w=1/(f.x*g.y-g.x*f.y);isFinite(w)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(p,-f.y).multiplyScalar(w),m.copy(p).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(w),a[z].add(_),a[A].add(_),a[E].add(_),l[z].add(m),l[A].add(m),l[E].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let z=0,A=M.length;z<A;++z){let E=M[z],w=E.start,$=E.count;for(let Z=w,Q=w+$;Z<Q;Z+=3)d(t.getX(Z+0),t.getX(Z+1),t.getX(Z+2))}let b=new H,v=new H,N=new H,P=new H;function D(z){N.fromBufferAttribute(s,z),P.copy(N);let A=a[z];b.copy(A),b.sub(N.multiplyScalar(N.dot(A))).normalize(),v.crossVectors(P,A);let w=v.dot(l[z])<0?-1:1;o.setXYZW(z,b.x,b.y,b.z,w)}for(let z=0,A=M.length;z<A;++z){let E=M[z],w=E.start,$=E.count;for(let Z=w,Q=w+$;Z<Q;Z+=3)D(t.getX(Z+0)),D(t.getX(Z+1)),D(t.getX(Z+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new rn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new H,r=new H,o=new H,a=new H,l=new H,c=new H,h=new H,p=new H;if(t)for(let u=0,f=t.count;u<f;u+=3){let g=t.getX(u+0),_=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),p.subVectors(s,r),h.cross(p),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),p.subVectors(s,r),h.cross(p),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)dn.fromBufferAttribute(t,e),dn.normalize(),t.setXYZ(e,dn.x,dn.y,dn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,p=a.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let d=0;d<h;d++)u[g++]=c[f++]}return new rn(u,h,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,p=c.length;h<p;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let p=0,u=c.length;p<u;p++){let f=c[p];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],p=r[c];for(let u=0,f=p.length;u<f;u++)h.push(p[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let p=o[c];this.addGroup(p.start,p.count,p.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},mh=new Be,Yi=new wl,zr=new ss,gh=new H,kr=new H,Hr=new H,Vr=new H,wa=new H,Gr=new H,xh=new H,Wr=new H,ie=class extends Qe{constructor(t=new on,e=new je){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Gr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],p=r[l];h!==0&&(wa.fromBufferAttribute(p,t),o?Gr.addScaledVector(wa,h):Gr.addScaledVector(wa.sub(e),h))}e.add(Gr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),zr.copy(n.boundingSphere),zr.applyMatrix4(r),Yi.copy(t.ray).recast(t.near),!(zr.containsPoint(Yi.origin)===!1&&(Yi.intersectSphere(zr,gh)===null||Yi.origin.distanceToSquared(gh)>(t.far-t.near)**2))&&(mh.copy(r).invert(),Yi.copy(t.ray).applyMatrix4(mh),!(n.boundingBox!==null&&Yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Yi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,p=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){let m=u[g],d=o[m.materialIndex],M=Math.max(m.start,f.start),b=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=M,N=b;v<N;v+=3){let P=a.getX(v),D=a.getX(v+1),z=a.getX(v+2);s=Xr(this,d,t,n,c,h,p,P,D,z),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,d=_;m<d;m+=3){let M=a.getX(m),b=a.getX(m+1),v=a.getX(m+2);s=Xr(this,o,t,n,c,h,p,M,b,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){let m=u[g],d=o[m.materialIndex],M=Math.max(m.start,f.start),b=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=M,N=b;v<N;v+=3){let P=v,D=v+1,z=v+2;s=Xr(this,d,t,n,c,h,p,P,D,z),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,d=_;m<d;m+=3){let M=m,b=m+1,v=m+2;s=Xr(this,o,t,n,c,h,p,M,b,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};We=class i extends on{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],p=[],u=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Me(c,3)),this.setAttribute("normal",new Me(h,3)),this.setAttribute("uv",new Me(p,2));function g(_,m,d,M,b,v,N,P,D,z,A){let E=v/D,w=N/z,$=v/2,Z=N/2,Q=P/2,et=D+1,Y=z+1,ot=0,tt=0,Tt=new H;for(let It=0;It<Y;It++){let Ut=It*w-Z;for(let Qt=0;Qt<et;Qt++){let fe=Qt*E-$;Tt[_]=fe*M,Tt[m]=Ut*b,Tt[d]=Q,c.push(Tt.x,Tt.y,Tt.z),Tt[_]=0,Tt[m]=0,Tt[d]=P>0?1:-1,h.push(Tt.x,Tt.y,Tt.z),p.push(Qt/D),p.push(1-It/z),ot+=1}}for(let It=0;It<z;It++)for(let Ut=0;Ut<D;Ut++){let Qt=u+Ut+et*It,fe=u+Ut+et*(It+1),ct=u+(Ut+1)+et*(It+1),bt=u+(Ut+1)+et*It;l.push(Qt,fe,bt),l.push(fe,ct,bt),tt+=6}a.addGroup(f,tt,A),f+=tt,u+=ot}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};ki={clone:Hs,merge:Sn},Fd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Od=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,an=class extends rs{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fd,this.fragmentShader=Od,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Hs(t.uniforms),this.uniformsGroups=Nd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},mo=class extends Qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Be,this.projectionMatrix=new Be,this.projectionMatrixInverse=new Be,this.coordinateSystem=yi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Li=new H,_h=new xt,yh=new xt,kn=class extends mo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ml*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ra*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ml*2*Math.atan(Math.tan(ra*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Li.x,Li.y).multiplyScalar(-t/Li.z),Li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Li.x,Li.y).multiplyScalar(-t/Li.z)}getViewSize(t,e){return this.getViewBounds(t,_h,yh),e.subVectors(yh,_h)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ra*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ts=-90,As=1,Tl=class extends Qe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new kn(Ts,As,t,e);s.layers=this.layers,this.add(s);let r=new kn(Ts,As,t,e);r.layers=this.layers,this.add(r);let o=new kn(Ts,As,t,e);o.layers=this.layers,this.add(o);let a=new kn(Ts,As,t,e);a.layers=this.layers,this.add(a);let l=new kn(Ts,As,t,e);l.layers=this.layers,this.add(l);let c=new kn(Ts,As,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===yi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ao)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,p=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(p,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},go=class extends Ln{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Os,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Al=class extends wn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new go(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:oi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new We(5,5,5),r=new an({name:"CubemapFromEquirect",uniforms:Hs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pn,blending:li});r.uniforms.tEquirect.value=e;let o=new ie(s,r),a=e.minFilter;return e.minFilter===ns&&(e.minFilter=oi),new Tl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Ta=new H,Bd=new H,zd=new xe,_i=class{constructor(t=new H(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Ta.subVectors(n,e).cross(Bd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Ta),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||zd.getNormalMatrix(t),s=this.coplanarPoint(Ta).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Zi=new ss,qr=new H,dr=class{constructor(t=new _i,e=new _i,n=new _i,s=new _i,r=new _i,o=new _i){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=yi){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],p=s[6],u=s[7],f=s[8],g=s[9],_=s[10],m=s[11],d=s[12],M=s[13],b=s[14],v=s[15];if(n[0].setComponents(l-r,u-c,m-f,v-d).normalize(),n[1].setComponents(l+r,u+c,m+f,v+d).normalize(),n[2].setComponents(l+o,u+h,m+g,v+M).normalize(),n[3].setComponents(l-o,u-h,m-g,v-M).normalize(),n[4].setComponents(l-a,u-p,m-_,v-b).normalize(),e===yi)n[5].setComponents(l+a,u+p,m+_,v+b).normalize();else if(e===ao)n[5].setComponents(a,p,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Zi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Zi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Zi)}intersectsSprite(t){return Zi.center.set(0,0,0),Zi.radius=.7071067811865476,Zi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Zi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(qr.x=s.normal.x>0?t.max.x:t.min.x,qr.y=s.normal.y>0?t.max.y:t.min.y,qr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(qr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};Tn=class i extends on{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,p=t/a,u=e/l,f=[],g=[],_=[],m=[];for(let d=0;d<h;d++){let M=d*u-o;for(let b=0;b<c;b++){let v=b*p-r;g.push(v,-M,0),_.push(0,0,1),m.push(b/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let M=0;M<a;M++){let b=M+c*d,v=M+c*(d+1),N=M+1+c*(d+1),P=M+1+c*d;f.push(b,v,P),f.push(v,N,P)}this.setIndex(f),this.setAttribute("position",new Me(g,3)),this.setAttribute("normal",new Me(_,3)),this.setAttribute("uv",new Me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Hd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Gd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Zd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$d=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Kd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,tp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ep=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,np=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ip=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,op=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ap=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,cp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,hp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,up=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,fp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,dp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xp="gl_FragColor = linearToOutputTexel( gl_FragColor );",_p=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,vp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Mp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,bp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ep=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ap=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Cp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ip=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Pp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Dp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Up=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Np=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Op=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,zp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,kp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Hp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Vp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$p=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Kp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,em=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,im=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,rm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,om=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,am=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,hm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,um=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,gm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_m=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ym=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Sm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Em=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,wm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Tm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Am=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Rm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Im=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Dm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Um=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Nm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,zm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,km=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ym=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Zm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,$m=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,t0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,e0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,i0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,r0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,a0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,l0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,c0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,u0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,d0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,m0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,g0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,x0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,y0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ve={alphahash_fragment:Hd,alphahash_pars_fragment:Vd,alphamap_fragment:Gd,alphamap_pars_fragment:Wd,alphatest_fragment:Xd,alphatest_pars_fragment:qd,aomap_fragment:Yd,aomap_pars_fragment:Zd,batching_pars_vertex:$d,batching_vertex:Kd,begin_vertex:Jd,beginnormal_vertex:Qd,bsdfs:jd,iridescence_fragment:tp,bumpmap_pars_fragment:ep,clipping_planes_fragment:np,clipping_planes_pars_fragment:ip,clipping_planes_pars_vertex:sp,clipping_planes_vertex:rp,color_fragment:op,color_pars_fragment:ap,color_pars_vertex:lp,color_vertex:cp,common:hp,cube_uv_reflection_fragment:up,defaultnormal_vertex:fp,displacementmap_pars_vertex:dp,displacementmap_vertex:pp,emissivemap_fragment:mp,emissivemap_pars_fragment:gp,colorspace_fragment:xp,colorspace_pars_fragment:_p,envmap_fragment:yp,envmap_common_pars_fragment:vp,envmap_pars_fragment:Mp,envmap_pars_vertex:bp,envmap_physical_pars_fragment:Dp,envmap_vertex:Sp,fog_vertex:Ep,fog_pars_vertex:wp,fog_fragment:Tp,fog_pars_fragment:Ap,gradientmap_pars_fragment:Rp,lightmap_pars_fragment:Cp,lights_lambert_fragment:Ip,lights_lambert_pars_fragment:Pp,lights_pars_begin:Lp,lights_toon_fragment:Up,lights_toon_pars_fragment:Np,lights_phong_fragment:Fp,lights_phong_pars_fragment:Op,lights_physical_fragment:Bp,lights_physical_pars_fragment:zp,lights_fragment_begin:kp,lights_fragment_maps:Hp,lights_fragment_end:Vp,logdepthbuf_fragment:Gp,logdepthbuf_pars_fragment:Wp,logdepthbuf_pars_vertex:Xp,logdepthbuf_vertex:qp,map_fragment:Yp,map_pars_fragment:Zp,map_particle_fragment:$p,map_particle_pars_fragment:Kp,metalnessmap_fragment:Jp,metalnessmap_pars_fragment:Qp,morphinstance_vertex:jp,morphcolor_vertex:tm,morphnormal_vertex:em,morphtarget_pars_vertex:nm,morphtarget_vertex:im,normal_fragment_begin:sm,normal_fragment_maps:rm,normal_pars_fragment:om,normal_pars_vertex:am,normal_vertex:lm,normalmap_pars_fragment:cm,clearcoat_normal_fragment_begin:hm,clearcoat_normal_fragment_maps:um,clearcoat_pars_fragment:fm,iridescence_pars_fragment:dm,opaque_fragment:pm,packing:mm,premultiplied_alpha_fragment:gm,project_vertex:xm,dithering_fragment:_m,dithering_pars_fragment:ym,roughnessmap_fragment:vm,roughnessmap_pars_fragment:Mm,shadowmap_pars_fragment:bm,shadowmap_pars_vertex:Sm,shadowmap_vertex:Em,shadowmask_pars_fragment:wm,skinbase_vertex:Tm,skinning_pars_vertex:Am,skinning_vertex:Rm,skinnormal_vertex:Cm,specularmap_fragment:Im,specularmap_pars_fragment:Pm,tonemapping_fragment:Lm,tonemapping_pars_fragment:Dm,transmission_fragment:Um,transmission_pars_fragment:Nm,uv_pars_fragment:Fm,uv_pars_vertex:Om,uv_vertex:Bm,worldpos_vertex:zm,background_vert:km,background_frag:Hm,backgroundCube_vert:Vm,backgroundCube_frag:Gm,cube_vert:Wm,cube_frag:Xm,depth_vert:qm,depth_frag:Ym,distanceRGBA_vert:Zm,distanceRGBA_frag:$m,equirect_vert:Km,equirect_frag:Jm,linedashed_vert:Qm,linedashed_frag:jm,meshbasic_vert:t0,meshbasic_frag:e0,meshlambert_vert:n0,meshlambert_frag:i0,meshmatcap_vert:s0,meshmatcap_frag:r0,meshnormal_vert:o0,meshnormal_frag:a0,meshphong_vert:l0,meshphong_frag:c0,meshphysical_vert:h0,meshphysical_frag:u0,meshtoon_vert:f0,meshtoon_frag:d0,points_vert:p0,points_frag:m0,shadow_vert:g0,shadow_frag:x0,sprite_vert:_0,sprite_frag:y0},Nt={common:{diffuse:{value:new ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xe}},envmap:{envMap:{value:null},envMapRotation:{value:new xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xe},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0},uvTransform:{value:new xe}},sprite:{diffuse:{value:new ne(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}}},ri={basic:{uniforms:Sn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:ve.meshbasic_vert,fragmentShader:ve.meshbasic_frag},lambert:{uniforms:Sn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new ne(0)}}]),vertexShader:ve.meshlambert_vert,fragmentShader:ve.meshlambert_frag},phong:{uniforms:Sn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new ne(0)},specular:{value:new ne(1118481)},shininess:{value:30}}]),vertexShader:ve.meshphong_vert,fragmentShader:ve.meshphong_frag},standard:{uniforms:Sn([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag},toon:{uniforms:Sn([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new ne(0)}}]),vertexShader:ve.meshtoon_vert,fragmentShader:ve.meshtoon_frag},matcap:{uniforms:Sn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:ve.meshmatcap_vert,fragmentShader:ve.meshmatcap_frag},points:{uniforms:Sn([Nt.points,Nt.fog]),vertexShader:ve.points_vert,fragmentShader:ve.points_frag},dashed:{uniforms:Sn([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ve.linedashed_vert,fragmentShader:ve.linedashed_frag},depth:{uniforms:Sn([Nt.common,Nt.displacementmap]),vertexShader:ve.depth_vert,fragmentShader:ve.depth_frag},normal:{uniforms:Sn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:ve.meshnormal_vert,fragmentShader:ve.meshnormal_frag},sprite:{uniforms:Sn([Nt.sprite,Nt.fog]),vertexShader:ve.sprite_vert,fragmentShader:ve.sprite_frag},background:{uniforms:{uvTransform:{value:new xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ve.background_vert,fragmentShader:ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xe}},vertexShader:ve.backgroundCube_vert,fragmentShader:ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ve.cube_vert,fragmentShader:ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ve.equirect_vert,fragmentShader:ve.equirect_frag},distanceRGBA:{uniforms:Sn([Nt.common,Nt.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ve.distanceRGBA_vert,fragmentShader:ve.distanceRGBA_frag},shadow:{uniforms:Sn([Nt.lights,Nt.fog,{color:{value:new ne(0)},opacity:{value:1}}]),vertexShader:ve.shadow_vert,fragmentShader:ve.shadow_frag}};ri.physical={uniforms:Sn([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xe},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xe},sheen:{value:0},sheenColor:{value:new ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xe},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xe},attenuationDistance:{value:0},attenuationColor:{value:new ne(0)},specularColor:{value:new ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xe},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xe}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag};Yr={r:0,b:0,g:0},$i=new hi,v0=new Be;zi=class extends mo{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Is=4,vh=[.125,.215,.35,.446,.526,.582],ts=20,Aa=new zi,Mh=new ne,Ra=null,Ca=0,Ia=0,Pa=!1,Ji=(1+Math.sqrt(5))/2,Rs=1/Ji,bh=[new H(-Ji,Rs,0),new H(Ji,Rs,0),new H(-Rs,0,Ji),new H(Rs,0,Ji),new H(0,Ji,-Rs),new H(0,Ji,Rs),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)],xo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ra=this._renderer.getRenderTarget(),Ca=this._renderer.getActiveCubeFace(),Ia=this._renderer.getActiveMipmapLevel(),Pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Eh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ra,Ca,Ia),this._renderer.xr.enabled=Pa,t.scissorTest=!1,Zr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Os||t.mapping===Bs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ra=this._renderer.getRenderTarget(),Ca=this._renderer.getActiveCubeFace(),Ia=this._renderer.getActiveMipmapLevel(),Pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:oi,minFilter:oi,generateMipmaps:!1,type:ni,format:jn,colorSpace:Ws,depthBuffer:!1},s=Sh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=A0(r)),this._blurMaterial=R0(r,t,e)}return s}_compileMaterial(t){let e=new ie(this._lodPlanes[0],t);this._renderer.compile(e,Aa)}_sceneToCubeUV(t,e,n,s){let a=new kn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,u=h.toneMapping;h.getClearColor(Mh),h.toneMapping=Ui,h.autoClear=!1;let f=new je({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1}),g=new ie(new We,f),_=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(Mh),_=!0);for(let d=0;d<6;d++){let M=d%3;M===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):M===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));let b=this._cubeSize;Zr(s,M*b,d>2?b:0,b,b),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=p,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Os||t.mapping===Bs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=wh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Eh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ie(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Zr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Aa)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=bh[(s-r-1)%bh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,p=new ie(this._lodPlanes[s],c),u=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ts-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):ts;m>ts&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ts}`);let d=[],M=0;for(let D=0;D<ts;++D){let z=D/_,A=Math.exp(-z*z/2);d.push(A),D===0?M+=A:D<m&&(M+=2*A)}for(let D=0;D<d.length;D++)d[D]=d[D]/M;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=d,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:b}=this;u.dTheta.value=g,u.mipInt.value=b-n;let v=this._sizeLods[s],N=3*v*(s>b-Is?s-b+Is:0),P=4*(this._cubeSize-v);Zr(e,N,P,3*v,2*v),l.setRenderTarget(e),l.render(p,Aa)}};_o=class extends Ln{constructor(t,e,n,s,r,o,a,l,c,h=Ds){if(h!==Ds&&h!==ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ds&&(n=is),n===void 0&&h===ks&&(n=zs),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Hn,this.minFilter=l!==void 0?l:Hn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},xu=new Ln,Th=new _o(1,1),_u=new ho,yu=new El,vu=new go,Ah=[],Rh=[],Ch=new Float32Array(16),Ih=new Float32Array(9),Ph=new Float32Array(4);Rl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=eg(e.type)}},Cl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Mg(e.type)}},Il=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},La=/(\w+)(\])?(\[|\.)?/g;Ns=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);bg(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};Sg=37297,Eg=0;Uh=new xe;$r=new H;Dg=/^[ \t]*#include +<([\w\d./]+)>/gm;Ug=new Map;Fg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;Wg=0,Ll=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Dl(t),e.set(t,n)),n}},Dl=class{constructor(t){this.id=Wg++,this.code=t,this.usedTimes=0}};Jg=0;Ul=class extends rs{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ld,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Nl=class extends rs{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},ex=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;sx={[za]:ka,[Ha]:hr,[Va]:Wa,[Fs]:Ga,[ka]:za,[hr]:Ha,[Wa]:Va,[Ga]:Fs};Fl=class extends kn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},In=class extends Qe{constructor(){super(),this.isGroup=!0,this.type="Group"}},cx={type:"move"},ar=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new In,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new In,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new In,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),d=this._getHandJoint(c,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=h.position.distanceTo(p.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(cx)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new In;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},hx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ux=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ol=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Ln,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new an({vertexShader:hx,fragmentShader:ux,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ie(new Tn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Bl=class extends Oi{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,p=null,u=null,f=null,g=null,_=new Ol,m=e.getContextAttributes(),d=null,M=null,b=[],v=[],N=new xt,P=null,D=new kn;D.viewport=new Ke;let z=new kn;z.viewport=new Ke;let A=[D,z],E=new Fl,w=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ct){let bt=b[ct];return bt===void 0&&(bt=new ar,b[ct]=bt),bt.getTargetRaySpace()},this.getControllerGrip=function(ct){let bt=b[ct];return bt===void 0&&(bt=new ar,b[ct]=bt),bt.getGripSpace()},this.getHand=function(ct){let bt=b[ct];return bt===void 0&&(bt=new ar,b[ct]=bt),bt.getHandSpace()};function Z(ct){let bt=v.indexOf(ct.inputSource);if(bt===-1)return;let Ht=b[bt];Ht!==void 0&&(Ht.update(ct.inputSource,ct.frame,c||o),Ht.dispatchEvent({type:ct.type,data:ct.inputSource}))}function Q(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",Q),s.removeEventListener("inputsourceschange",et);for(let ct=0;ct<b.length;ct++){let bt=v[ct];bt!==null&&(v[ct]=null,b[ct].disconnect(bt))}w=null,$=null,_.reset(),t.setRenderTarget(d),f=null,u=null,p=null,s=null,M=null,fe.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(N.width,N.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ct){r=ct,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ct){a=ct,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ct){c=ct},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return p},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ct){if(s=ct,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",Q),s.addEventListener("inputsourceschange",et),m.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(N),s.renderState.layers===void 0){let bt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,bt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new wn(f.framebufferWidth,f.framebufferHeight,{format:jn,type:Mi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let bt=null,Ht=null,St=null;m.depth&&(St=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,bt=m.stencil?ks:Ds,Ht=m.stencil?zs:is);let Gt={colorFormat:e.RGBA8,depthFormat:St,scaleFactor:r};p=new XRWebGLBinding(s,e),u=p.createProjectionLayer(Gt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),M=new wn(u.textureWidth,u.textureHeight,{format:jn,type:Mi,depthTexture:new _o(u.textureWidth,u.textureHeight,Ht,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),fe.setContext(s),fe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function et(ct){for(let bt=0;bt<ct.removed.length;bt++){let Ht=ct.removed[bt],St=v.indexOf(Ht);St>=0&&(v[St]=null,b[St].disconnect(Ht))}for(let bt=0;bt<ct.added.length;bt++){let Ht=ct.added[bt],St=v.indexOf(Ht);if(St===-1){for(let te=0;te<b.length;te++)if(te>=v.length){v.push(Ht),St=te;break}else if(v[te]===null){v[te]=Ht,St=te;break}if(St===-1)break}let Gt=b[St];Gt&&Gt.connect(Ht)}}let Y=new H,ot=new H;function tt(ct,bt,Ht){Y.setFromMatrixPosition(bt.matrixWorld),ot.setFromMatrixPosition(Ht.matrixWorld);let St=Y.distanceTo(ot),Gt=bt.projectionMatrix.elements,te=Ht.projectionMatrix.elements,jt=Gt[14]/(Gt[10]-1),he=Gt[14]/(Gt[10]+1),ut=(Gt[9]+1)/Gt[5],_t=(Gt[9]-1)/Gt[5],F=(Gt[8]-1)/Gt[0],zt=(te[8]+1)/te[0],pt=jt*F,At=jt*zt,yt=St/(-F+zt),$t=yt*-F;if(bt.matrixWorld.decompose(ct.position,ct.quaternion,ct.scale),ct.translateX($t),ct.translateZ(yt),ct.matrixWorld.compose(ct.position,ct.quaternion,ct.scale),ct.matrixWorldInverse.copy(ct.matrixWorld).invert(),Gt[10]===-1)ct.projectionMatrix.copy(bt.projectionMatrix),ct.projectionMatrixInverse.copy(bt.projectionMatrixInverse);else{let Bt=jt+yt,I=he+yt,S=pt-$t,X=At+(St-$t),at=ut*he/I*Bt,ht=_t*he/I*Bt;ct.projectionMatrix.makePerspective(S,X,at,ht,Bt,I),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert()}}function Tt(ct,bt){bt===null?ct.matrixWorld.copy(ct.matrix):ct.matrixWorld.multiplyMatrices(bt.matrixWorld,ct.matrix),ct.matrixWorldInverse.copy(ct.matrixWorld).invert()}this.updateCamera=function(ct){if(s===null)return;let bt=ct.near,Ht=ct.far;_.texture!==null&&(_.depthNear>0&&(bt=_.depthNear),_.depthFar>0&&(Ht=_.depthFar)),E.near=z.near=D.near=bt,E.far=z.far=D.far=Ht,(w!==E.near||$!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),w=E.near,$=E.far),D.layers.mask=ct.layers.mask|2,z.layers.mask=ct.layers.mask|4,E.layers.mask=D.layers.mask|z.layers.mask;let St=ct.parent,Gt=E.cameras;Tt(E,St);for(let te=0;te<Gt.length;te++)Tt(Gt[te],St);Gt.length===2?tt(E,D,z):E.projectionMatrix.copy(D.projectionMatrix),It(ct,E,St)};function It(ct,bt,Ht){Ht===null?ct.matrix.copy(bt.matrixWorld):(ct.matrix.copy(Ht.matrixWorld),ct.matrix.invert(),ct.matrix.multiply(bt.matrixWorld)),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.updateMatrixWorld(!0),ct.projectionMatrix.copy(bt.projectionMatrix),ct.projectionMatrixInverse.copy(bt.projectionMatrixInverse),ct.isPerspectiveCamera&&(ct.fov=Ml*2*Math.atan(1/ct.projectionMatrix.elements[5]),ct.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(ct){l=ct,u!==null&&(u.fixedFoveation=ct),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ct)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(E)};let Ut=null;function Qt(ct,bt){if(h=bt.getViewerPose(c||o),g=bt,h!==null){let Ht=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let St=!1;Ht.length!==E.cameras.length&&(E.cameras.length=0,St=!0);for(let te=0;te<Ht.length;te++){let jt=Ht[te],he=null;if(f!==null)he=f.getViewport(jt);else{let _t=p.getViewSubImage(u,jt);he=_t.viewport,te===0&&(t.setRenderTargetTextures(M,_t.colorTexture,u.ignoreDepthValues?void 0:_t.depthStencilTexture),t.setRenderTarget(M))}let ut=A[te];ut===void 0&&(ut=new kn,ut.layers.enable(te),ut.viewport=new Ke,A[te]=ut),ut.matrix.fromArray(jt.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(jt.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(he.x,he.y,he.width,he.height),te===0&&(E.matrix.copy(ut.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),St===!0&&E.cameras.push(ut)}let Gt=s.enabledFeatures;if(Gt&&Gt.includes("depth-sensing")){let te=p.getDepthInformation(Ht[0]);te&&te.isValid&&te.texture&&_.init(t,te,s.renderState)}}for(let Ht=0;Ht<b.length;Ht++){let St=v[Ht],Gt=b[Ht];St!==null&&Gt!==void 0&&Gt.update(St,bt,c||o)}Ut&&Ut(ct,bt),bt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:bt}),g=null}let fe=new gu;fe.setAnimationLoop(Qt),this.setAnimationLoop=function(ct){Ut=ct},this.dispose=function(){}}},Ki=new hi,fx=new Be;yo=class{constructor(t={}){let{canvas:e=yd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),_=new Int32Array(4),m=null,d=null,M=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=vn,this.toneMapping=Ui,this.toneMappingExposure=1;let v=this,N=!1,P=0,D=0,z=null,A=-1,E=null,w=new Ke,$=new Ke,Z=null,Q=new ne(0),et=0,Y=e.width,ot=e.height,tt=1,Tt=null,It=null,Ut=new Ke(0,0,Y,ot),Qt=new Ke(0,0,Y,ot),fe=!1,ct=new dr,bt=!1,Ht=!1,St=new Be,Gt=new Be,te=new H,jt=new Ke,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ut=!1;function _t(){return z===null?tt:1}let F=n;function zt(y,U){return e.getContext(y,U)}try{let y={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ac}`),e.addEventListener("webglcontextlost",dt,!1),e.addEventListener("webglcontextrestored",Dt,!1),e.addEventListener("webglcontextcreationerror",Lt,!1),F===null){let U="webgl2";if(F=zt(U,y),F===null)throw zt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let pt,At,yt,$t,Bt,I,S,X,at,ht,rt,Vt,Et,Ft,Ot,gt,Pt,Yt,Kt,vt,de,ae,Ue,G;function Ct(){pt=new I0(F),pt.init(),ae=new lx(F,pt),At=new E0(F,pt,t,ae),yt=new rx(F,pt),At.reverseDepthBuffer&&u&&yt.buffers.depth.setReversed(!0),$t=new D0(F),Bt=new qg,I=new ax(F,pt,yt,Bt,At,ae,$t),S=new T0(v),X=new C0(v),at=new kd(F),Ue=new b0(F,at),ht=new P0(F,at,$t,Ue),rt=new N0(F,ht,at,$t),Kt=new U0(F,At,I),gt=new w0(Bt),Vt=new Xg(v,S,X,pt,At,Ue,gt),Et=new dx(v,Bt),Ft=new Zg,Ot=new tx(pt),Yt=new M0(v,S,X,yt,rt,f,l),Pt=new ix(v,rt,At),G=new px(F,$t,At,yt),vt=new S0(F,pt,$t),de=new L0(F,pt,$t),$t.programs=Vt.programs,v.capabilities=At,v.extensions=pt,v.properties=Bt,v.renderLists=Ft,v.shadowMap=Pt,v.state=yt,v.info=$t}Ct();let K=new Bl(v,F);this.xr=K,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let y=pt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=pt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(y){y!==void 0&&(tt=y,this.setSize(Y,ot,!1))},this.getSize=function(y){return y.set(Y,ot)},this.setSize=function(y,U,k=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=y,ot=U,e.width=Math.floor(y*tt),e.height=Math.floor(U*tt),k===!0&&(e.style.width=y+"px",e.style.height=U+"px"),this.setViewport(0,0,y,U)},this.getDrawingBufferSize=function(y){return y.set(Y*tt,ot*tt).floor()},this.setDrawingBufferSize=function(y,U,k){Y=y,ot=U,tt=k,e.width=Math.floor(y*k),e.height=Math.floor(U*k),this.setViewport(0,0,y,U)},this.getCurrentViewport=function(y){return y.copy(w)},this.getViewport=function(y){return y.copy(Ut)},this.setViewport=function(y,U,k,O){y.isVector4?Ut.set(y.x,y.y,y.z,y.w):Ut.set(y,U,k,O),yt.viewport(w.copy(Ut).multiplyScalar(tt).round())},this.getScissor=function(y){return y.copy(Qt)},this.setScissor=function(y,U,k,O){y.isVector4?Qt.set(y.x,y.y,y.z,y.w):Qt.set(y,U,k,O),yt.scissor($.copy(Qt).multiplyScalar(tt).round())},this.getScissorTest=function(){return fe},this.setScissorTest=function(y){yt.setScissorTest(fe=y)},this.setOpaqueSort=function(y){Tt=y},this.setTransparentSort=function(y){It=y},this.getClearColor=function(y){return y.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor.apply(Yt,arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha.apply(Yt,arguments)},this.clear=function(y=!0,U=!0,k=!0){let O=0;if(y){let B=!1;if(z!==null){let J=z.texture.format;B=J===vc||J===yc||J===_c}if(B){let J=z.texture.type,it=J===Mi||J===is||J===fr||J===zs||J===mc||J===gc,nt=Yt.getClearColor(),lt=Yt.getClearAlpha(),mt=nt.r,Rt=nt.g,Mt=nt.b;it?(g[0]=mt,g[1]=Rt,g[2]=Mt,g[3]=lt,F.clearBufferuiv(F.COLOR,0,g)):(_[0]=mt,_[1]=Rt,_[2]=Mt,_[3]=lt,F.clearBufferiv(F.COLOR,0,_))}else O|=F.COLOR_BUFFER_BIT}U&&(O|=F.DEPTH_BUFFER_BIT),k&&(O|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",dt,!1),e.removeEventListener("webglcontextrestored",Dt,!1),e.removeEventListener("webglcontextcreationerror",Lt,!1),Ft.dispose(),Ot.dispose(),Bt.dispose(),S.dispose(),X.dispose(),rt.dispose(),Ue.dispose(),G.dispose(),Vt.dispose(),K.dispose(),K.removeEventListener("sessionstart",wi),K.removeEventListener("sessionend",Ti),Xn.stop()};function dt(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function Dt(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;let y=$t.autoReset,U=Pt.enabled,k=Pt.autoUpdate,O=Pt.needsUpdate,B=Pt.type;Ct(),$t.autoReset=y,Pt.enabled=U,Pt.autoUpdate=k,Pt.needsUpdate=O,Pt.type=B}function Lt(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function se(y){let U=y.target;U.removeEventListener("dispose",se),De(U)}function De(y){ce(y),Bt.remove(y)}function ce(y){let U=Bt.get(y).programs;U!==void 0&&(U.forEach(function(k){Vt.releaseProgram(k)}),y.isShaderMaterial&&Vt.releaseShaderCache(y))}this.renderBufferDirect=function(y,U,k,O,B,J){U===null&&(U=he);let it=B.isMesh&&B.matrixWorld.determinant()<0,nt=st(y,U,k,O,B);yt.setMaterial(O,it);let lt=k.index,mt=1;if(O.wireframe===!0){if(lt=ht.getWireframeAttribute(k),lt===void 0)return;mt=2}let Rt=k.drawRange,Mt=k.attributes.position,Wt=Rt.start*mt,Jt=(Rt.start+Rt.count)*mt;J!==null&&(Wt=Math.max(Wt,J.start*mt),Jt=Math.min(Jt,(J.start+J.count)*mt)),lt!==null?(Wt=Math.max(Wt,0),Jt=Math.min(Jt,lt.count)):Mt!=null&&(Wt=Math.max(Wt,0),Jt=Math.min(Jt,Mt.count));let re=Jt-Wt;if(re<0||re===1/0)return;Ue.setup(B,O,nt,k,lt);let Se,Zt=vt;if(lt!==null&&(Se=at.get(lt),Zt=de,Zt.setIndex(Se)),B.isMesh)O.wireframe===!0?(yt.setLineWidth(O.wireframeLinewidth*_t()),Zt.setMode(F.LINES)):Zt.setMode(F.TRIANGLES);else if(B.isLine){let Xt=O.linewidth;Xt===void 0&&(Xt=1),yt.setLineWidth(Xt*_t()),B.isLineSegments?Zt.setMode(F.LINES):B.isLineLoop?Zt.setMode(F.LINE_LOOP):Zt.setMode(F.LINE_STRIP)}else B.isPoints?Zt.setMode(F.POINTS):B.isSprite&&Zt.setMode(F.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Zt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(pt.get("WEBGL_multi_draw"))Zt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let Xt=B._multiDrawStarts,Rn=B._multiDrawCounts,Pe=B._multiDrawCount,pn=lt?at.get(lt).bytesPerElement:1,$n=Bt.get(O).currentProgram.getUniforms();for(let Re=0;Re<Pe;Re++)$n.setValue(F,"_gl_DrawID",Re),Zt.render(Xt[Re]/pn,Rn[Re])}else if(B.isInstancedMesh)Zt.renderInstances(Wt,re,B.count);else if(k.isInstancedBufferGeometry){let Xt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Rn=Math.min(k.instanceCount,Xt);Zt.renderInstances(Wt,re,Rn)}else Zt.render(Wt,re)};function pe(y,U,k){y.transparent===!0&&y.side===En&&y.forceSinglePass===!1?(y.side=Pn,y.needsUpdate=!0,W(y,U,k),y.side=Fi,y.needsUpdate=!0,W(y,U,k),y.side=En):W(y,U,k)}this.compile=function(y,U,k=null){k===null&&(k=y),d=Ot.get(k),d.init(U),b.push(d),k.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(d.pushLight(B),B.castShadow&&d.pushShadow(B))}),y!==k&&y.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(d.pushLight(B),B.castShadow&&d.pushShadow(B))}),d.setupLights();let O=new Set;return y.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let J=B.material;if(J)if(Array.isArray(J))for(let it=0;it<J.length;it++){let nt=J[it];pe(nt,k,B),O.add(nt)}else pe(J,k,B),O.add(J)}),b.pop(),d=null,O},this.compileAsync=function(y,U,k=null){let O=this.compile(y,U,k);return new Promise(B=>{function J(){if(O.forEach(function(it){Bt.get(it).currentProgram.isReady()&&O.delete(it)}),O.size===0){B(y);return}setTimeout(J,10)}pt.get("KHR_parallel_shader_compile")!==null?J():setTimeout(J,10)})};let un=null;function Mn(y){un&&un(y)}function wi(){Xn.stop()}function Ti(){Xn.start()}let Xn=new gu;Xn.setAnimationLoop(Mn),typeof self<"u"&&Xn.setContext(self),this.setAnimationLoop=function(y){un=y,K.setAnimationLoop(y),y===null?Xn.stop():Xn.start()},K.addEventListener("sessionstart",wi),K.addEventListener("sessionend",Ti),this.render=function(y,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(U),U=K.getCamera()),y.isScene===!0&&y.onBeforeRender(v,y,U,z),d=Ot.get(y,b.length),d.init(U),b.push(d),Gt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ct.setFromProjectionMatrix(Gt),Ht=this.localClippingEnabled,bt=gt.init(this.clippingPlanes,Ht),m=Ft.get(y,M.length),m.init(),M.push(m),K.enabled===!0&&K.isPresenting===!0){let J=v.xr.getDepthSensingMesh();J!==null&&R(J,U,-1/0,v.sortObjects)}R(y,U,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(Tt,It),ut=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,ut&&Yt.addToRenderList(m,y),this.info.render.frame++,bt===!0&&gt.beginShadows();let k=d.state.shadowsArray;Pt.render(k,y,U),bt===!0&&gt.endShadows(),this.info.autoReset===!0&&this.info.reset();let O=m.opaque,B=m.transmissive;if(d.setupLights(),U.isArrayCamera){let J=U.cameras;if(B.length>0)for(let it=0,nt=J.length;it<nt;it++){let lt=J[it];T(O,B,y,lt)}ut&&Yt.render(y);for(let it=0,nt=J.length;it<nt;it++){let lt=J[it];x(m,y,lt,lt.viewport)}}else B.length>0&&T(O,B,y,U),ut&&Yt.render(y),x(m,y,U);z!==null&&(I.updateMultisampleRenderTarget(z),I.updateRenderTargetMipmap(z)),y.isScene===!0&&y.onAfterRender(v,y,U),Ue.resetDefaultState(),A=-1,E=null,b.pop(),b.length>0?(d=b[b.length-1],bt===!0&&gt.setGlobalState(v.clippingPlanes,d.state.camera)):d=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function R(y,U,k,O){if(y.visible===!1)return;if(y.layers.test(U.layers)){if(y.isGroup)k=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(U);else if(y.isLight)d.pushLight(y),y.castShadow&&d.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||ct.intersectsSprite(y)){O&&jt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Gt);let it=rt.update(y),nt=y.material;nt.visible&&m.push(y,it,nt,k,jt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||ct.intersectsObject(y))){let it=rt.update(y),nt=y.material;if(O&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),jt.copy(y.boundingSphere.center)):(it.boundingSphere===null&&it.computeBoundingSphere(),jt.copy(it.boundingSphere.center)),jt.applyMatrix4(y.matrixWorld).applyMatrix4(Gt)),Array.isArray(nt)){let lt=it.groups;for(let mt=0,Rt=lt.length;mt<Rt;mt++){let Mt=lt[mt],Wt=nt[Mt.materialIndex];Wt&&Wt.visible&&m.push(y,it,Wt,k,jt.z,Mt)}}else nt.visible&&m.push(y,it,nt,k,jt.z,null)}}let J=y.children;for(let it=0,nt=J.length;it<nt;it++)R(J[it],U,k,O)}function x(y,U,k,O){let B=y.opaque,J=y.transmissive,it=y.transparent;d.setupLightsView(k),bt===!0&&gt.setGlobalState(v.clippingPlanes,k),O&&yt.viewport(w.copy(O)),B.length>0&&C(B,U,k),J.length>0&&C(J,U,k),it.length>0&&C(it,U,k),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1)}function T(y,U,k,O){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[O.id]===void 0&&(d.state.transmissionRenderTarget[O.id]=new wn(1,1,{generateMipmaps:!0,type:pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float")?ni:Mi,minFilter:ns,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ie.workingColorSpace}));let J=d.state.transmissionRenderTarget[O.id],it=O.viewport||w;J.setSize(it.z,it.w);let nt=v.getRenderTarget();v.setRenderTarget(J),v.getClearColor(Q),et=v.getClearAlpha(),et<1&&v.setClearColor(16777215,.5),v.clear(),ut&&Yt.render(k);let lt=v.toneMapping;v.toneMapping=Ui;let mt=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),d.setupLightsView(O),bt===!0&&gt.setGlobalState(v.clippingPlanes,O),C(y,k,O),I.updateMultisampleRenderTarget(J),I.updateRenderTargetMipmap(J),pt.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let Mt=0,Wt=U.length;Mt<Wt;Mt++){let Jt=U[Mt],re=Jt.object,Se=Jt.geometry,Zt=Jt.material,Xt=Jt.group;if(Zt.side===En&&re.layers.test(O.layers)){let Rn=Zt.side;Zt.side=Pn,Zt.needsUpdate=!0,L(re,k,O,Se,Zt,Xt),Zt.side=Rn,Zt.needsUpdate=!0,Rt=!0}}Rt===!0&&(I.updateMultisampleRenderTarget(J),I.updateRenderTargetMipmap(J))}v.setRenderTarget(nt),v.setClearColor(Q,et),mt!==void 0&&(O.viewport=mt),v.toneMapping=lt}function C(y,U,k){let O=U.isScene===!0?U.overrideMaterial:null;for(let B=0,J=y.length;B<J;B++){let it=y[B],nt=it.object,lt=it.geometry,mt=O===null?it.material:O,Rt=it.group;nt.layers.test(k.layers)&&L(nt,U,k,lt,mt,Rt)}}function L(y,U,k,O,B,J){y.onBeforeRender(v,U,k,O,B,J),y.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),B.onBeforeRender(v,U,k,O,y,J),B.transparent===!0&&B.side===En&&B.forceSinglePass===!1?(B.side=Pn,B.needsUpdate=!0,v.renderBufferDirect(k,U,O,B,y,J),B.side=Fi,B.needsUpdate=!0,v.renderBufferDirect(k,U,O,B,y,J),B.side=En):v.renderBufferDirect(k,U,O,B,y,J),y.onAfterRender(v,U,k,O,B,J)}function W(y,U,k){U.isScene!==!0&&(U=he);let O=Bt.get(y),B=d.state.lights,J=d.state.shadowsArray,it=B.state.version,nt=Vt.getParameters(y,B.state,J,U,k),lt=Vt.getProgramCacheKey(nt),mt=O.programs;O.environment=y.isMeshStandardMaterial?U.environment:null,O.fog=U.fog,O.envMap=(y.isMeshStandardMaterial?X:S).get(y.envMap||O.environment),O.envMapRotation=O.environment!==null&&y.envMap===null?U.environmentRotation:y.envMapRotation,mt===void 0&&(y.addEventListener("dispose",se),mt=new Map,O.programs=mt);let Rt=mt.get(lt);if(Rt!==void 0){if(O.currentProgram===Rt&&O.lightsStateVersion===it)return q(y,nt),Rt}else nt.uniforms=Vt.getUniforms(y),y.onBeforeCompile(nt,v),Rt=Vt.acquireProgram(nt,lt),mt.set(lt,Rt),O.uniforms=nt.uniforms;let Mt=O.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Mt.clippingPlanes=gt.uniform),q(y,nt),O.needsLights=ft(y),O.lightsStateVersion=it,O.needsLights&&(Mt.ambientLightColor.value=B.state.ambient,Mt.lightProbe.value=B.state.probe,Mt.directionalLights.value=B.state.directional,Mt.directionalLightShadows.value=B.state.directionalShadow,Mt.spotLights.value=B.state.spot,Mt.spotLightShadows.value=B.state.spotShadow,Mt.rectAreaLights.value=B.state.rectArea,Mt.ltc_1.value=B.state.rectAreaLTC1,Mt.ltc_2.value=B.state.rectAreaLTC2,Mt.pointLights.value=B.state.point,Mt.pointLightShadows.value=B.state.pointShadow,Mt.hemisphereLights.value=B.state.hemi,Mt.directionalShadowMap.value=B.state.directionalShadowMap,Mt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Mt.spotShadowMap.value=B.state.spotShadowMap,Mt.spotLightMatrix.value=B.state.spotLightMatrix,Mt.spotLightMap.value=B.state.spotLightMap,Mt.pointShadowMap.value=B.state.pointShadowMap,Mt.pointShadowMatrix.value=B.state.pointShadowMatrix),O.currentProgram=Rt,O.uniformsList=null,Rt}function V(y){if(y.uniformsList===null){let U=y.currentProgram.getUniforms();y.uniformsList=Ns.seqWithValue(U.seq,y.uniforms)}return y.uniformsList}function q(y,U){let k=Bt.get(y);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.batchingColor=U.batchingColor,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.instancingMorph=U.instancingMorph,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function st(y,U,k,O,B){U.isScene!==!0&&(U=he),I.resetTextureUnits();let J=U.fog,it=O.isMeshStandardMaterial?U.environment:null,nt=z===null?v.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Ws,lt=(O.isMeshStandardMaterial?X:S).get(O.envMap||it),mt=O.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Rt=!!k.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Mt=!!k.morphAttributes.position,Wt=!!k.morphAttributes.normal,Jt=!!k.morphAttributes.color,re=Ui;O.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(re=v.toneMapping);let Se=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Zt=Se!==void 0?Se.length:0,Xt=Bt.get(O),Rn=d.state.lights;if(bt===!0&&(Ht===!0||y!==E)){let Ne=y===E&&O.id===A;gt.setState(O,y,Ne)}let Pe=!1;O.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==Rn.state.version||Xt.outputColorSpace!==nt||B.isBatchedMesh&&Xt.batching===!1||!B.isBatchedMesh&&Xt.batching===!0||B.isBatchedMesh&&Xt.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Xt.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Xt.instancing===!1||!B.isInstancedMesh&&Xt.instancing===!0||B.isSkinnedMesh&&Xt.skinning===!1||!B.isSkinnedMesh&&Xt.skinning===!0||B.isInstancedMesh&&Xt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Xt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Xt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Xt.instancingMorph===!1&&B.morphTexture!==null||Xt.envMap!==lt||O.fog===!0&&Xt.fog!==J||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==gt.numPlanes||Xt.numIntersection!==gt.numIntersection)||Xt.vertexAlphas!==mt||Xt.vertexTangents!==Rt||Xt.morphTargets!==Mt||Xt.morphNormals!==Wt||Xt.morphColors!==Jt||Xt.toneMapping!==re||Xt.morphTargetsCount!==Zt)&&(Pe=!0):(Pe=!0,Xt.__version=O.version);let pn=Xt.currentProgram;Pe===!0&&(pn=W(O,U,B));let $n=!1,Re=!1,ii=!1,wt=pn.getUniforms(),_e=Xt.uniforms;if(yt.useProgram(pn.program)&&($n=!0,Re=!0,ii=!0),O.id!==A&&(A=O.id,Re=!0),$n||E!==y){yt.buffers.depth.getReversed()?(St.copy(y.projectionMatrix),Md(St),bd(St),wt.setValue(F,"projectionMatrix",St)):wt.setValue(F,"projectionMatrix",y.projectionMatrix),wt.setValue(F,"viewMatrix",y.matrixWorldInverse);let Ve=wt.map.cameraPosition;Ve!==void 0&&Ve.setValue(F,te.setFromMatrixPosition(y.matrixWorld)),At.logarithmicDepthBuffer&&wt.setValue(F,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&wt.setValue(F,"isOrthographic",y.isOrthographicCamera===!0),E!==y&&(E=y,Re=!0,ii=!0)}if(B.isSkinnedMesh){wt.setOptional(F,B,"bindMatrix"),wt.setOptional(F,B,"bindMatrixInverse");let Ne=B.skeleton;Ne&&(Ne.boneTexture===null&&Ne.computeBoneTexture(),wt.setValue(F,"boneTexture",Ne.boneTexture,I))}B.isBatchedMesh&&(wt.setOptional(F,B,"batchingTexture"),wt.setValue(F,"batchingTexture",B._matricesTexture,I),wt.setOptional(F,B,"batchingIdTexture"),wt.setValue(F,"batchingIdTexture",B._indirectTexture,I),wt.setOptional(F,B,"batchingColorTexture"),B._colorsTexture!==null&&wt.setValue(F,"batchingColorTexture",B._colorsTexture,I));let Ce=k.morphAttributes;if((Ce.position!==void 0||Ce.normal!==void 0||Ce.color!==void 0)&&Kt.update(B,k,pn),(Re||Xt.receiveShadow!==B.receiveShadow)&&(Xt.receiveShadow=B.receiveShadow,wt.setValue(F,"receiveShadow",B.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(_e.envMap.value=lt,_e.flipEnvMap.value=lt.isCubeTexture&&lt.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&U.environment!==null&&(_e.envMapIntensity.value=U.environmentIntensity),Re&&(wt.setValue(F,"toneMappingExposure",v.toneMappingExposure),Xt.needsLights&&j(_e,ii),J&&O.fog===!0&&Et.refreshFogUniforms(_e,J),Et.refreshMaterialUniforms(_e,O,tt,ot,d.state.transmissionRenderTarget[y.id]),Ns.upload(F,V(Xt),_e,I)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Ns.upload(F,V(Xt),_e,I),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&wt.setValue(F,"center",B.center),wt.setValue(F,"modelViewMatrix",B.modelViewMatrix),wt.setValue(F,"normalMatrix",B.normalMatrix),wt.setValue(F,"modelMatrix",B.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){let Ne=O.uniformsGroups;for(let Ve=0,He=Ne.length;Ve<He;Ve++){let ye=Ne[Ve];G.update(ye,pn),G.bind(ye,pn)}}return pn}function j(y,U){y.ambientLightColor.needsUpdate=U,y.lightProbe.needsUpdate=U,y.directionalLights.needsUpdate=U,y.directionalLightShadows.needsUpdate=U,y.pointLights.needsUpdate=U,y.pointLightShadows.needsUpdate=U,y.spotLights.needsUpdate=U,y.spotLightShadows.needsUpdate=U,y.rectAreaLights.needsUpdate=U,y.hemisphereLights.needsUpdate=U}function ft(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(y,U,k){Bt.get(y.texture).__webglTexture=U,Bt.get(y.depthTexture).__webglTexture=k;let O=Bt.get(y);O.__hasExternalTextures=!0,O.__autoAllocateDepthBuffer=k===void 0,O.__autoAllocateDepthBuffer||pt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,U){let k=Bt.get(y);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(y,U=0,k=0){z=y,P=U,D=k;let O=!0,B=null,J=!1,it=!1;if(y){let lt=Bt.get(y);if(lt.__useDefaultFramebuffer!==void 0)yt.bindFramebuffer(F.FRAMEBUFFER,null),O=!1;else if(lt.__webglFramebuffer===void 0)I.setupRenderTarget(y);else if(lt.__hasExternalTextures)I.rebindTextures(y,Bt.get(y.texture).__webglTexture,Bt.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let Mt=y.depthTexture;if(lt.__boundDepthTexture!==Mt){if(Mt!==null&&Bt.has(Mt)&&(y.width!==Mt.image.width||y.height!==Mt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(y)}}let mt=y.texture;(mt.isData3DTexture||mt.isDataArrayTexture||mt.isCompressedArrayTexture)&&(it=!0);let Rt=Bt.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Rt[U])?B=Rt[U][k]:B=Rt[U],J=!0):y.samples>0&&I.useMultisampledRTT(y)===!1?B=Bt.get(y).__webglMultisampledFramebuffer:Array.isArray(Rt)?B=Rt[k]:B=Rt,w.copy(y.viewport),$.copy(y.scissor),Z=y.scissorTest}else w.copy(Ut).multiplyScalar(tt).floor(),$.copy(Qt).multiplyScalar(tt).floor(),Z=fe;if(yt.bindFramebuffer(F.FRAMEBUFFER,B)&&O&&yt.drawBuffers(y,B),yt.viewport(w),yt.scissor($),yt.setScissorTest(Z),J){let lt=Bt.get(y.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,lt.__webglTexture,k)}else if(it){let lt=Bt.get(y.texture),mt=U||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,lt.__webglTexture,k||0,mt)}A=-1},this.readRenderTargetPixels=function(y,U,k,O,B,J,it){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let nt=Bt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&it!==void 0&&(nt=nt[it]),nt){yt.bindFramebuffer(F.FRAMEBUFFER,nt);try{let lt=y.texture,mt=lt.format,Rt=lt.type;if(!At.textureFormatReadable(mt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!At.textureTypeReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=y.width-O&&k>=0&&k<=y.height-B&&F.readPixels(U,k,O,B,ae.convert(mt),ae.convert(Rt),J)}finally{let lt=z!==null?Bt.get(z).__webglFramebuffer:null;yt.bindFramebuffer(F.FRAMEBUFFER,lt)}}},this.readRenderTargetPixelsAsync=async function(y,U,k,O,B,J,it){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let nt=Bt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&it!==void 0&&(nt=nt[it]),nt){let lt=y.texture,mt=lt.format,Rt=lt.type;if(!At.textureFormatReadable(mt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!At.textureTypeReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=y.width-O&&k>=0&&k<=y.height-B){yt.bindFramebuffer(F.FRAMEBUFFER,nt);let Mt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Mt),F.bufferData(F.PIXEL_PACK_BUFFER,J.byteLength,F.STREAM_READ),F.readPixels(U,k,O,B,ae.convert(mt),ae.convert(Rt),0);let Wt=z!==null?Bt.get(z).__webglFramebuffer:null;yt.bindFramebuffer(F.FRAMEBUFFER,Wt);let Jt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await vd(F,Jt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Mt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,J),F.deleteBuffer(Mt),F.deleteSync(Jt),J}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,U=null,k=0){y.isTexture!==!0&&(rr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,y=arguments[1]);let O=Math.pow(2,-k),B=Math.floor(y.image.width*O),J=Math.floor(y.image.height*O),it=U!==null?U.x:0,nt=U!==null?U.y:0;I.setTexture2D(y,0),F.copyTexSubImage2D(F.TEXTURE_2D,k,0,0,it,nt,B,J),yt.unbindTexture()},this.copyTextureToTexture=function(y,U,k=null,O=null,B=0){y.isTexture!==!0&&(rr("WebGLRenderer: copyTextureToTexture function signature has changed."),O=arguments[0]||null,y=arguments[1],U=arguments[2],B=arguments[3]||0,k=null);let J,it,nt,lt,mt,Rt,Mt,Wt,Jt,re=y.isCompressedTexture?y.mipmaps[B]:y.image;k!==null?(J=k.max.x-k.min.x,it=k.max.y-k.min.y,nt=k.isBox3?k.max.z-k.min.z:1,lt=k.min.x,mt=k.min.y,Rt=k.isBox3?k.min.z:0):(J=re.width,it=re.height,nt=re.depth||1,lt=0,mt=0,Rt=0),O!==null?(Mt=O.x,Wt=O.y,Jt=O.z):(Mt=0,Wt=0,Jt=0);let Se=ae.convert(U.format),Zt=ae.convert(U.type),Xt;U.isData3DTexture?(I.setTexture3D(U,0),Xt=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(I.setTexture2DArray(U,0),Xt=F.TEXTURE_2D_ARRAY):(I.setTexture2D(U,0),Xt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);let Rn=F.getParameter(F.UNPACK_ROW_LENGTH),Pe=F.getParameter(F.UNPACK_IMAGE_HEIGHT),pn=F.getParameter(F.UNPACK_SKIP_PIXELS),$n=F.getParameter(F.UNPACK_SKIP_ROWS),Re=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,re.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,re.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,lt),F.pixelStorei(F.UNPACK_SKIP_ROWS,mt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Rt);let ii=y.isDataArrayTexture||y.isData3DTexture,wt=U.isDataArrayTexture||U.isData3DTexture;if(y.isRenderTargetTexture||y.isDepthTexture){let _e=Bt.get(y),Ce=Bt.get(U),Ne=Bt.get(_e.__renderTarget),Ve=Bt.get(Ce.__renderTarget);yt.bindFramebuffer(F.READ_FRAMEBUFFER,Ne.__webglFramebuffer),yt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer);for(let He=0;He<nt;He++)ii&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Bt.get(y).__webglTexture,B,Rt+He),y.isDepthTexture?(wt&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Bt.get(U).__webglTexture,B,Jt+He),F.blitFramebuffer(lt,mt,J,it,Mt,Wt,J,it,F.DEPTH_BUFFER_BIT,F.NEAREST)):wt?F.copyTexSubImage3D(Xt,B,Mt,Wt,Jt+He,lt,mt,J,it):F.copyTexSubImage2D(Xt,B,Mt,Wt,Jt+He,lt,mt,J,it);yt.bindFramebuffer(F.READ_FRAMEBUFFER,null),yt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else wt?y.isDataTexture||y.isData3DTexture?F.texSubImage3D(Xt,B,Mt,Wt,Jt,J,it,nt,Se,Zt,re.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(Xt,B,Mt,Wt,Jt,J,it,nt,Se,re.data):F.texSubImage3D(Xt,B,Mt,Wt,Jt,J,it,nt,Se,Zt,re):y.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,B,Mt,Wt,J,it,Se,Zt,re.data):y.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,B,Mt,Wt,re.width,re.height,Se,re.data):F.texSubImage2D(F.TEXTURE_2D,B,Mt,Wt,J,it,Se,Zt,re);F.pixelStorei(F.UNPACK_ROW_LENGTH,Rn),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Pe),F.pixelStorei(F.UNPACK_SKIP_PIXELS,pn),F.pixelStorei(F.UNPACK_SKIP_ROWS,$n),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Re),B===0&&U.generateMipmaps&&F.generateMipmap(Xt),yt.unbindTexture()},this.copyTextureToTexture3D=function(y,U,k=null,O=null,B=0){return y.isTexture!==!0&&(rr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,O=arguments[1]||null,y=arguments[2],U=arguments[3],B=arguments[4]||0),rr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,U,k,O,B)},this.initRenderTarget=function(y){Bt.get(y).__webglFramebuffer===void 0&&I.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?I.setTextureCube(y,0):y.isData3DTexture?I.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?I.setTexture2DArray(y,0):I.setTexture2D(y,0),yt.unbindTexture()},this.resetState=function(){P=0,D=0,z=null,yt.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ie._getUnpackColorSpace()}},vo=class extends Qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hi,this.environmentIntensity=1,this.environmentRotation=new hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},zl=class extends Ln{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Hn,h=Hn,p,u){super(null,o,a,l,c,h,s,r,p,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},pr=class extends rn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Cs=new Be,Wh=new Be,Kr=[],Xh=new bi,mx=new Be,ir=new ie,sr=new ss,Dn=class extends ie{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new pr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,mx)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new bi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Cs),Xh.copy(t.boundingBox).applyMatrix4(Cs),this.boundingBox.union(Xh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ss),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Cs),sr.copy(t.boundingSphere).applyMatrix4(Cs),this.boundingSphere.union(sr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(ir.geometry=this.geometry,ir.material=this.material,ir.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),sr.copy(this.boundingSphere),sr.applyMatrix4(n),t.ray.intersectsSphere(sr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Cs),Wh.multiplyMatrices(n,Cs),ir.matrixWorld=Wh,ir.raycast(t,Kr);for(let o=0,a=Kr.length;o<a;o++){let l=Kr[o];l.instanceId=r,l.object=this,e.push(l)}Kr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new pr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new zl(new Float32Array(s*this.count),s,this.count,xc,ai));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}},Mo=class extends Ln{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Yn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new xt:new H);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new H,s=[],r=[],o=[],a=new H,l=new Be;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new H)}r[0]=new H,o[0]=new H;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),p=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),p<=c&&(c=p,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(mn(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(mn(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},mr=class extends Yn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new xt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*p+this.aX,c=u*p+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},kl=class extends mr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};Jr=new H,Da=new bc,Ua=new bc,Na=new bc,Hl=class extends Yn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new H){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Jr.subVectors(s[0],s[1]).add(s[0]),c=Jr);let p=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Jr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Jr),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(p),f),_=Math.pow(p.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Da.initNonuniformCatmullRom(c.x,p.x,u.x,h.x,g,_,m),Ua.initNonuniformCatmullRom(c.y,p.y,u.y,h.y,g,_,m),Na.initNonuniformCatmullRom(c.z,p.z,u.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Da.initCatmullRom(c.x,p.x,u.x,h.x,this.tension),Ua.initCatmullRom(c.y,p.y,u.y,h.y,this.tension),Na.initCatmullRom(c.z,p.z,u.z,h.z,this.tension));return n.set(Da.calc(l),Ua.calc(l),Na.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new H().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};bo=class extends Yn{constructor(t=new xt,e=new xt,n=new xt,s=new xt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new xt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(cr(t,s.x,r.x,o.x,a.x),cr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Vl=class extends Yn{constructor(t=new H,e=new H,n=new H,s=new H){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new H){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(cr(t,s.x,r.x,o.x,a.x),cr(t,s.y,r.y,o.y,a.y),cr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},So=class extends Yn{constructor(t=new xt,e=new xt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new xt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new xt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Gl=class extends Yn{constructor(t=new H,e=new H){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new H){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new H){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Eo=class extends Yn{constructor(t=new xt,e=new xt,n=new xt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new xt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(lr(t,s.x,r.x,o.x),lr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Wl=class extends Yn{constructor(t=new H,e=new H,n=new H){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new H){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(lr(t,s.x,r.x,o.x),lr(t,s.y,r.y,o.y),lr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},wo=class extends Yn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new xt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],p=s[o>s.length-3?s.length-1:o+2];return n.set(qh(a,l.x,c.x,h.x,p.x),qh(a,l.y,c.y,h.y,p.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new xt().fromArray(s))}return this}},Xl=Object.freeze({__proto__:null,ArcCurve:kl,CatmullRomCurve3:Hl,CubicBezierCurve:bo,CubicBezierCurve3:Vl,EllipseCurve:mr,LineCurve:So,LineCurve3:Gl,QuadraticBezierCurve:Eo,QuadraticBezierCurve3:Wl,SplineCurve:wo}),ql=class extends Yn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Xl[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Xl[s.type]().fromJSON(s))}return this}},gr=class extends ql{constructor(t){super(),this.type="Path",this.currentPoint=new xt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new So(this.currentPoint.clone(),new xt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Eo(this.currentPoint.clone(),new xt(t,e),new xt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new bo(this.currentPoint.clone(),new xt(t,e),new xt(n,s),new xt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new wo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new mr(t,e,n,s,r,o,a,l);if(this.curves.length>0){let p=c.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},xr=class i extends on{constructor(t=[new xt(0,-.5),new xt(.5,0),new xt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=mn(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,p=new H,u=new xt,f=new H,g=new H,_=new H,m=0,d=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:m=t[M+1].x-t[M].x,d=t[M+1].y-t[M].y,f.x=d*1,f.y=-m,f.z=d*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[M+1].x-t[M].x,d=t[M+1].y-t[M].y,f.x=d*1,f.y=-m,f.z=d*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(g)}for(let M=0;M<=e;M++){let b=n+M*h*s,v=Math.sin(b),N=Math.cos(b);for(let P=0;P<=t.length-1;P++){p.x=t[P].x*v,p.y=t[P].y,p.z=t[P].x*N,o.push(p.x,p.y,p.z),u.x=M/e,u.y=P/(t.length-1),a.push(u.x,u.y);let D=l[3*P+0]*v,z=l[3*P+1],A=l[3*P+0]*N;c.push(D,z,A)}}for(let M=0;M<e;M++)for(let b=0;b<t.length-1;b++){let v=b+M*t.length,N=v,P=v+t.length,D=v+t.length+1,z=v+1;r.push(N,P,z),r.push(D,z,P)}this.setIndex(r),this.setAttribute("position",new Me(o,3)),this.setAttribute("uv",new Me(a,2)),this.setAttribute("normal",new Me(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},To=class i extends xr{constructor(t=1,e=1,n=4,s=8){let r=new gr;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}},Ao=class i extends on{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new H,h=new xt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let p=0,u=3;p<=e;p++,u+=3){let f=n+p/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,l.push(h.x,h.y)}for(let p=1;p<=e;p++)r.push(p,p+1,0);this.setIndex(r),this.setAttribute("position",new Me(o,3)),this.setAttribute("normal",new Me(a,3)),this.setAttribute("uv",new Me(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},qe=class i extends on{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],p=[],u=[],f=[],g=0,_=[],m=n/2,d=0;M(),o===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new Me(p,3)),this.setAttribute("normal",new Me(u,3)),this.setAttribute("uv",new Me(f,2));function M(){let v=new H,N=new H,P=0,D=(e-t)/n;for(let z=0;z<=r;z++){let A=[],E=z/r,w=E*(e-t)+t;for(let $=0;$<=s;$++){let Z=$/s,Q=Z*l+a,et=Math.sin(Q),Y=Math.cos(Q);N.x=w*et,N.y=-E*n+m,N.z=w*Y,p.push(N.x,N.y,N.z),v.set(et,D,Y).normalize(),u.push(v.x,v.y,v.z),f.push(Z,1-E),A.push(g++)}_.push(A)}for(let z=0;z<s;z++)for(let A=0;A<r;A++){let E=_[A][z],w=_[A+1][z],$=_[A+1][z+1],Z=_[A][z+1];(t>0||A!==0)&&(h.push(E,w,Z),P+=3),(e>0||A!==r-1)&&(h.push(w,$,Z),P+=3)}c.addGroup(d,P,0),d+=P}function b(v){let N=g,P=new xt,D=new H,z=0,A=v===!0?t:e,E=v===!0?1:-1;for(let $=1;$<=s;$++)p.push(0,m*E,0),u.push(0,E,0),f.push(.5,.5),g++;let w=g;for(let $=0;$<=s;$++){let Q=$/s*l+a,et=Math.cos(Q),Y=Math.sin(Q);D.x=A*Y,D.y=m*E,D.z=A*et,p.push(D.x,D.y,D.z),u.push(0,E,0),P.x=et*.5+.5,P.y=Y*.5*E+.5,f.push(P.x,P.y),g++}for(let $=0;$<s;$++){let Z=N+$,Q=w+$;v===!0?h.push(Q,Q+1,Z):h.push(Q+1,Q,Z),z+=3}c.addGroup(d,z,v===!0?1:2),d+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},os=class extends gr{constructor(t){super(t),this.uuid=Xs(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new gr().fromJSON(s))}return this}},Sx={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Mu(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,p,u,f;if(n&&(r=Rx(i,t,r,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let g=e;g<s;g+=e)p=i[g],u=i[g+1],p<a&&(a=p),u<l&&(l=u),p>c&&(c=p),u>h&&(h=u);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return _r(r,o,e,a,l,f,0),o}};Ni=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Zh(t),$h(n,t);let o=t.length;e.forEach(Zh);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,$h(n,e[l]);let a=Sx.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};Vs=class i extends on{constructor(t=new os([new xt(.5,.5),new xt(-.5,.5),new xt(-.5,-.5),new xt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new Me(s,3)),this.setAttribute("uv",new Me(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,p=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,d=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:kx,b,v=!1,N,P,D,z;d&&(b=d.getSpacedPoints(h),v=!0,u=!1,N=d.computeFrenetFrames(h,!1),P=new H,D=new H,z=new H),u||(m=0,f=0,g=0,_=0);let A=a.extractPoints(c),E=A.shape,w=A.holes;if(!Ni.isClockWise(E)){E=E.reverse();for(let ut=0,_t=w.length;ut<_t;ut++){let F=w[ut];Ni.isClockWise(F)&&(w[ut]=F.reverse())}}let Z=Ni.triangulateShape(E,w),Q=E;for(let ut=0,_t=w.length;ut<_t;ut++){let F=w[ut];E=E.concat(F)}function et(ut,_t,F){return _t||console.error("THREE.ExtrudeGeometry: vec does not exist"),ut.clone().addScaledVector(_t,F)}let Y=E.length,ot=Z.length;function tt(ut,_t,F){let zt,pt,At,yt=ut.x-_t.x,$t=ut.y-_t.y,Bt=F.x-ut.x,I=F.y-ut.y,S=yt*yt+$t*$t,X=yt*I-$t*Bt;if(Math.abs(X)>Number.EPSILON){let at=Math.sqrt(S),ht=Math.sqrt(Bt*Bt+I*I),rt=_t.x-$t/at,Vt=_t.y+yt/at,Et=F.x-I/ht,Ft=F.y+Bt/ht,Ot=((Et-rt)*I-(Ft-Vt)*Bt)/(yt*I-$t*Bt);zt=rt+yt*Ot-ut.x,pt=Vt+$t*Ot-ut.y;let gt=zt*zt+pt*pt;if(gt<=2)return new xt(zt,pt);At=Math.sqrt(gt/2)}else{let at=!1;yt>Number.EPSILON?Bt>Number.EPSILON&&(at=!0):yt<-Number.EPSILON?Bt<-Number.EPSILON&&(at=!0):Math.sign($t)===Math.sign(I)&&(at=!0),at?(zt=-$t,pt=yt,At=Math.sqrt(S)):(zt=yt,pt=$t,At=Math.sqrt(S/2))}return new xt(zt/At,pt/At)}let Tt=[];for(let ut=0,_t=Q.length,F=_t-1,zt=ut+1;ut<_t;ut++,F++,zt++)F===_t&&(F=0),zt===_t&&(zt=0),Tt[ut]=tt(Q[ut],Q[F],Q[zt]);let It=[],Ut,Qt=Tt.concat();for(let ut=0,_t=w.length;ut<_t;ut++){let F=w[ut];Ut=[];for(let zt=0,pt=F.length,At=pt-1,yt=zt+1;zt<pt;zt++,At++,yt++)At===pt&&(At=0),yt===pt&&(yt=0),Ut[zt]=tt(F[zt],F[At],F[yt]);It.push(Ut),Qt=Qt.concat(Ut)}for(let ut=0;ut<m;ut++){let _t=ut/m,F=f*Math.cos(_t*Math.PI/2),zt=g*Math.sin(_t*Math.PI/2)+_;for(let pt=0,At=Q.length;pt<At;pt++){let yt=et(Q[pt],Tt[pt],zt);St(yt.x,yt.y,-F)}for(let pt=0,At=w.length;pt<At;pt++){let yt=w[pt];Ut=It[pt];for(let $t=0,Bt=yt.length;$t<Bt;$t++){let I=et(yt[$t],Ut[$t],zt);St(I.x,I.y,-F)}}}let fe=g+_;for(let ut=0;ut<Y;ut++){let _t=u?et(E[ut],Qt[ut],fe):E[ut];v?(D.copy(N.normals[0]).multiplyScalar(_t.x),P.copy(N.binormals[0]).multiplyScalar(_t.y),z.copy(b[0]).add(D).add(P),St(z.x,z.y,z.z)):St(_t.x,_t.y,0)}for(let ut=1;ut<=h;ut++)for(let _t=0;_t<Y;_t++){let F=u?et(E[_t],Qt[_t],fe):E[_t];v?(D.copy(N.normals[ut]).multiplyScalar(F.x),P.copy(N.binormals[ut]).multiplyScalar(F.y),z.copy(b[ut]).add(D).add(P),St(z.x,z.y,z.z)):St(F.x,F.y,p/h*ut)}for(let ut=m-1;ut>=0;ut--){let _t=ut/m,F=f*Math.cos(_t*Math.PI/2),zt=g*Math.sin(_t*Math.PI/2)+_;for(let pt=0,At=Q.length;pt<At;pt++){let yt=et(Q[pt],Tt[pt],zt);St(yt.x,yt.y,p+F)}for(let pt=0,At=w.length;pt<At;pt++){let yt=w[pt];Ut=It[pt];for(let $t=0,Bt=yt.length;$t<Bt;$t++){let I=et(yt[$t],Ut[$t],zt);v?St(I.x,I.y+b[h-1].y,b[h-1].x+F):St(I.x,I.y,p+F)}}}ct(),bt();function ct(){let ut=s.length/3;if(u){let _t=0,F=Y*_t;for(let zt=0;zt<ot;zt++){let pt=Z[zt];Gt(pt[2]+F,pt[1]+F,pt[0]+F)}_t=h+m*2,F=Y*_t;for(let zt=0;zt<ot;zt++){let pt=Z[zt];Gt(pt[0]+F,pt[1]+F,pt[2]+F)}}else{for(let _t=0;_t<ot;_t++){let F=Z[_t];Gt(F[2],F[1],F[0])}for(let _t=0;_t<ot;_t++){let F=Z[_t];Gt(F[0]+Y*h,F[1]+Y*h,F[2]+Y*h)}}n.addGroup(ut,s.length/3-ut,0)}function bt(){let ut=s.length/3,_t=0;Ht(Q,_t),_t+=Q.length;for(let F=0,zt=w.length;F<zt;F++){let pt=w[F];Ht(pt,_t),_t+=pt.length}n.addGroup(ut,s.length/3-ut,1)}function Ht(ut,_t){let F=ut.length;for(;--F>=0;){let zt=F,pt=F-1;pt<0&&(pt=ut.length-1);for(let At=0,yt=h+m*2;At<yt;At++){let $t=Y*At,Bt=Y*(At+1),I=_t+zt+$t,S=_t+pt+$t,X=_t+pt+Bt,at=_t+zt+Bt;te(I,S,X,at)}}}function St(ut,_t,F){l.push(ut),l.push(_t),l.push(F)}function Gt(ut,_t,F){jt(ut),jt(_t),jt(F);let zt=s.length/3,pt=M.generateTopUV(n,s,zt-3,zt-2,zt-1);he(pt[0]),he(pt[1]),he(pt[2])}function te(ut,_t,F,zt){jt(ut),jt(_t),jt(zt),jt(_t),jt(F),jt(zt);let pt=s.length/3,At=M.generateSideWallUV(n,s,pt-6,pt-3,pt-2,pt-1);he(At[0]),he(At[1]),he(At[3]),he(At[1]),he(At[2]),he(At[3])}function jt(ut){s.push(l[ut*3+0]),s.push(l[ut*3+1]),s.push(l[ut*3+2])}function he(ut){r.push(ut.x),r.push(ut.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Hx(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Xl[s.type]().fromJSON(s)),new i(n,t.options)}},kx={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new xt(r,o),new xt(a,l),new xt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],p=t[n*3+2],u=t[s*3],f=t[s*3+1],g=t[s*3+2],_=t[r*3],m=t[r*3+1],d=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new xt(o,1-l),new xt(c,1-p),new xt(u,1-g),new xt(_,1-d)]:[new xt(a,1-l),new xt(h,1-p),new xt(f,1-g),new xt(m,1-d)]}};Ro=class i extends on{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],p=t,u=(e-t)/s,f=new H,g=new xt;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){let d=r+m/n*o;f.x=p*Math.cos(d),f.y=p*Math.sin(d),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}p+=u}for(let _=0;_<s;_++){let m=_*(n+1);for(let d=0;d<n;d++){let M=d+m,b=M,v=M+n+1,N=M+n+2,P=M+1;a.push(b,v,P),a.push(v,N,P)}}this.setIndex(a),this.setAttribute("position",new Me(l,3)),this.setAttribute("normal",new Me(c,3)),this.setAttribute("uv",new Me(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},ti=class i extends on{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],p=new H,u=new H,f=[],g=[],_=[],m=[];for(let d=0;d<=n;d++){let M=[],b=d/n,v=0;d===0&&o===0?v=.5/e:d===n&&l===Math.PI&&(v=-.5/e);for(let N=0;N<=e;N++){let P=N/e;p.x=-t*Math.cos(s+P*r)*Math.sin(o+b*a),p.y=t*Math.cos(o+b*a),p.z=t*Math.sin(s+P*r)*Math.sin(o+b*a),g.push(p.x,p.y,p.z),u.copy(p).normalize(),_.push(u.x,u.y,u.z),m.push(P+v,1-b),M.push(c++)}h.push(M)}for(let d=0;d<n;d++)for(let M=0;M<e;M++){let b=h[d][M+1],v=h[d][M],N=h[d+1][M],P=h[d+1][M+1];(d!==0||o>0)&&f.push(b,v,P),(d!==n-1||l<Math.PI)&&f.push(v,N,P)}this.setIndex(f),this.setAttribute("position",new Me(g,3)),this.setAttribute("normal",new Me(_,3)),this.setAttribute("uv",new Me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Co=class extends an{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}},Te=class extends rs{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uu,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};Gs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},$l=class extends Gs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Zc,endingEnd:Zc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case $c:r=t,a=2*e-n;break;case Kc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case $c:o=t,l=2*n-e;break;case Kc:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,p=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),_=g*g,m=_*g,d=-u*m+2*u*_-u*g,M=(1+u)*m+(-1.5-2*u)*_+(-.5+u)*g+1,b=(-1-f)*m+(1.5+f)*_+.5*g,v=f*m-f*_;for(let N=0;N!==a;++N)r[N]=d*o[h+N]+M*o[c+N]+b*o[l+N]+v*o[p+N];return r}},Kl=class extends Gs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),p=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*p+o[l+u]*h;return r}},Jl=class extends Gs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ei=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=to(e,this.TimeBufferType),this.values=to(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:to(t.times,Array),values:to(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Jl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Kl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new $l(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case oo:e=this.InterpolantFactoryMethodDiscrete;break;case vl:e=this.InterpolantFactoryMethodLinear;break;case sa:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return oo;case this.InterpolantFactoryMethodLinear:return vl;case this.InterpolantFactoryMethodSmooth:return sa}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Vx(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===sa,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let p=a*n,u=p-n,f=p+n;for(let g=0;g!==n;++g){let _=e[p+g];if(_!==e[u+g]||_!==e[f+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let p=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[p+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};ei.prototype.TimeBufferType=Float32Array;ei.prototype.ValueBufferType=Float32Array;ei.prototype.DefaultInterpolation=vl;ls=class extends ei{constructor(t,e,n){super(t,e,n)}};ls.prototype.ValueTypeName="bool";ls.prototype.ValueBufferType=Array;ls.prototype.DefaultInterpolation=oo;ls.prototype.InterpolantFactoryMethodLinear=void 0;ls.prototype.InterpolantFactoryMethodSmooth=void 0;Ql=class extends ei{};Ql.prototype.ValueTypeName="color";jl=class extends ei{};jl.prototype.ValueTypeName="number";tc=class extends Gs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Bi.slerpFlat(r,0,o,c-a,o,c,l);return r}},Io=class extends ei{InterpolantFactoryMethodLinear(t){return new tc(this.times,this.values,this.getValueSize(),t)}};Io.prototype.ValueTypeName="quaternion";Io.prototype.InterpolantFactoryMethodSmooth=void 0;cs=class extends ei{constructor(t,e,n){super(t,e,n)}};cs.prototype.ValueTypeName="string";cs.prototype.ValueBufferType=Array;cs.prototype.DefaultInterpolation=oo;cs.prototype.InterpolantFactoryMethodLinear=void 0;cs.prototype.InterpolantFactoryMethodSmooth=void 0;ec=class extends ei{};ec.prototype.ValueTypeName="vector";nc=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,p){return c.push(h,p),this},this.removeHandler=function(h){let p=c.indexOf(h);return p!==-1&&c.splice(p,2),this},this.getHandler=function(h){for(let p=0,u=c.length;p<u;p+=2){let f=c[p],g=c[p+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},Gx=new nc,ic=class{constructor(t){this.manager=t!==void 0?t:Gx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};ic.DEFAULT_MATERIAL_NAME="__DEFAULT";Po=class extends Qe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ne(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Lo=class extends Po{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Qe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ne(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Fa=new Be,Kh=new H,Jh=new H,sc=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xt(512,512),this.map=null,this.mapPass=null,this.matrix=new Be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new dr,this._frameExtents=new xt(1,1),this._viewportCount=1,this._viewports=[new Ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Kh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Kh),Jh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Jh),e.updateMatrixWorld(),Fa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Fa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},rc=class extends sc{constructor(){super(new zi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Do=class extends Po{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qe.DEFAULT_UP),this.updateMatrix(),this.target=new Qe,this.shadow=new rc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Uo=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Qh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Qh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};Sc="\\[\\]\\.:\\/",Wx=new RegExp("["+Sc+"]","g"),Ec="[^"+Sc+"]",Xx="[^"+Sc.replace("\\.","")+"]",qx=/((?:WC+[\/:])*)/.source.replace("WC",Ec),Yx=/(WCOD+)?/.source.replace("WCOD",Xx),Zx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ec),$x=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ec),Kx=new RegExp("^"+qx+Yx+Zx+$x+"$"),Jx=["material","materials","bones","map"],oc=class{constructor(t,e,n){let s=n||Xe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Xe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Wx,"")}static parseTrackName(t){let e=Kx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Jx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Xe.Composite=oc;Xe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Xe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Xe.prototype.GetterByBindingType=[Xe.prototype._getValue_direct,Xe.prototype._getValue_array,Xe.prototype._getValue_arrayElement,Xe.prototype._getValue_toArray];Xe.prototype.SetterByBindingTypeAndVersioning=[[Xe.prototype._setValue_direct,Xe.prototype._setValue_direct_setNeedsUpdate,Xe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_array,Xe.prototype._setValue_array_setNeedsUpdate,Xe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_arrayElement,Xe.prototype._setValue_arrayElement_setNeedsUpdate,Xe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_fromArray,Xe.prototype._setValue_fromArray_setNeedsUpdate,Xe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];F_=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ac}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ac)});var ko,wc=nn(()=>{ko={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`}});var Gn,Qx,Tc,jx,Hi,Ys=nn(()=>{Vn();Gn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Qx=new zi(-1,1,1,-1,0,1),Tc=class extends on{constructor(){super(),this.setAttribute("position",new Me([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Me([0,2,0,0,2,0],2))}},jx=new Tc,Hi=class{constructor(t){this._mesh=new ie(jx,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Qx)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}});var Ho,Eu=nn(()=>{Vn();Ys();Ho=class extends Gn{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof an?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=ki.clone(t.uniforms),this.material=new an({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Hi(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}});var br,Vo,Ac=nn(()=>{Ys();br=class extends Gn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Vo=class extends Gn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}});var Go,wu=nn(()=>{Vn();wc();Eu();Ac();Ac();Go=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new xt);this._width=n.width,this._height=n.height,e=new wn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ni}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ho(ko),this.copyPass.material.blending=li,this.clock=new Uo}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}br!==void 0&&(o instanceof br?n=!0:o instanceof Vo&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new xt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}});var Wo,Tu=nn(()=>{Vn();Ys();Wo=class extends Gn{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ne}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}}});var Au,Ru=nn(()=>{Vn();Au={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ne(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`}});var Zs,Cu=nn(()=>{Vn();Ys();wc();Ru();Zs=class i extends Gn{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new xt(t.x,t.y):new xt(256,256),this.clearColor=new ne(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new wn(r,o,{type:ni}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let p=0;p<this.nMips;p++){let u=new wn(r,o,{type:ni});u.texture.name="UnrealBloomPass.h"+p,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let f=new wn(r,o,{type:ni});f.texture.name="UnrealBloomPass.v"+p,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=Au;this.highPassUniforms=ki.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new an({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let p=0;p<this.nMips;p++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[p])),this.separableBlurMaterials[p].uniforms.invSize.value=new xt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=ko;this.copyUniforms=ki.clone(h.uniforms),this.blendMaterial=new an({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:ci,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ne,this.oldClearAlpha=1,this.basic=new je,this.fsQuad=new Hi(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new xt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new an({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new xt(.5,.5)},direction:{value:new xt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new an({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};Zs.BlurDirectionX=new xt(1,0);Zs.BlurDirectionY=new xt(0,1)});var Iu,Pu=nn(()=>{Iu={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`}});var Xo,Lu=nn(()=>{Vn();Ys();Pu();Xo=class extends Gn{constructor(){super();let t=Iu;this.uniforms=ki.clone(t.uniforms),this.material=new Co({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Hi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Ie.getTransfer(this._outputColorSpace)===Oe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===cc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===hc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===uc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Mr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===fc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===dc&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}});function Nn(i){let t=i>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Un(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,e}function hn(i,t=!0,e=!0){let n=new Mo(i);return t&&(n.colorSpace=vn),e&&(n.wrapS=n.wrapT=ur),n.anisotropy=8,n.needsUpdate=!0,n}function Vi(i,t,e,n,s,r,o=!0){for(let a=0;a<n;a++){let l=r();i.fillStyle=r()<.5?`rgba(0,0,0,${s*l})`:`rgba(255,255,255,${s*l*.6})`;let c=1+r()*2.5;i.fillRect(r()*t,r()*e,c,c)}}function gn(i,t,e,n,s,r="0,0,0",o=.08,a=60){for(let l=0;l<n;l++){let c=s()*t,h=s()*e,p=10+s()*a,u=i.createRadialGradient(c,h,0,c,h,p);u.addColorStop(0,`rgba(${r},${o*s()})`),u.addColorStop(1,`rgba(${r},0)`),i.fillStyle=u,i.fillRect(c-p,h-p,2*p,2*p)}}function Si(i,t,e,n){for(let s of[-t,0,t])for(let r of[-e,0,e])i.save(),i.translate(s,r),n(),i.restore()}function Fu(i,t){let e=Nn(t),n=512,s=Un(n,n),r=s.getContext("2d"),o=Un(n,n),a=o.getContext("2d");if(a.fillStyle="#000",a.fillRect(0,0,n,n),r.fillStyle=i.wall,r.fillRect(0,0,n,n),i.pat==="brick")for(let l=0;l<n;l+=8){let c=l/8%2?0:10;for(let h=-20;h<n;h+=20)r.fillStyle=`rgba(${e()<.5?0:255},${e()<.5?0:200},0,${.05+e()*.07})`,r.fillRect(h+c,l,18,6);r.fillStyle=i.mortar,r.globalAlpha=.55,r.fillRect(0,l+6,n,2),r.globalAlpha=1}if(i.pat==="panel"){r.strokeStyle="rgba(0,0,0,.25)",r.lineWidth=2;for(let l=0;l<n;l+=64)r.beginPath(),r.moveTo(0,l+.5),r.lineTo(n,l+.5),r.stroke();for(let l=0;l<n;l+=128)r.beginPath(),r.moveTo(l+1,0),r.lineTo(l+1,n),r.stroke()}if(Vi(r,n,n,5e3,.18,e),gn(r,n,n,30,e,"40,30,20",.12),i.pat==="glass"){for(let l=0;l<4;l++){let c=l*128;r.fillStyle="#3b4a4e",r.fillRect(0,c+100,n,28);let h=i.col||32,p=i.gcols||["#2f5866","#4f8090","#1c3a44"];for(let u=0;u<n;u+=h){let f=r.createLinearGradient(u,c,u+h,c+100);f.addColorStop(0,p[0]),f.addColorStop(.5+e()*.3,p[1]),f.addColorStop(1,p[2]),r.fillStyle=f,r.fillRect(u,c+4,h,96)}r.fillStyle=i.frame;for(let u=0;u<=n;u+=h)r.fillRect(u-1.5,c,3,128);if(r.fillRect(0,c+100,n,3),r.fillRect(0,c,n,4),e()<.45){a.fillStyle=e()<.5?"#d9e6ff":"#fff0d0";for(let u=0;u<n;u+=h)e()<.8&&(a.globalAlpha=.5+e()*.5,a.fillRect(u+2,c+6,h-4,92));a.globalAlpha=1}}return{map:hn(s),emi:hn(o)}}for(let l=0;l<4;l++){let c=l*128;if(i.band&&(r.fillStyle=i.band,r.fillRect(0,c+120,n,8),r.fillStyle="rgba(255,255,255,.12)",r.fillRect(0,c+120,n,2)),i.ribbon){let u=c+i.wy,f=i.wh;r.fillStyle=i.frame,r.fillRect(0,u-4,n,f+8);for(let g=0;g<n;g+=64){let _=r.createLinearGradient(g,u,g+64,u+f);_.addColorStop(0,"#3f5868"),_.addColorStop(1,i.glass),r.fillStyle=_,r.fillRect(g+3,u,58,f),e()<.4&&(a.fillStyle=qo[e()*qo.length|0],a.globalAlpha=.6+e()*.4,a.fillRect(g+3,u,58,f),a.globalAlpha=1,a.fillStyle="rgba(0,0,0,.5)",a.fillRect(g+3+e()*40,u,6,f))}r.fillStyle="rgba(0,0,0,.18)",r.fillRect(0,u+f+4,n,10);continue}let h=i.bays||4,p=n/h;for(let u=0;u<h;u++){let f=c+i.wy,g=i.wh,_=i.pair?i.ww*1.5:i.ww,m=u*p+(p-_)/2;if(i.balc&&(l+u)%2===0){r.fillStyle="rgba(0,0,0,.28)",r.fillRect(m-14,f+g*.55,_+28,g*.45+12),r.fillStyle=i.balc,r.fillRect(m-16,f+g*.55,_+32,6);for(let N=m-14;N<m+_+16;N+=6)r.fillRect(N,f+g*.55,2,g*.45+8);r.fillRect(m-16,f+g+6,_+32,6)}let d=i.pair?[[m,_/2-5],[m+_/2+5,_/2-5]]:[[m,_]],M=e()<.36,b=qo[e()*qo.length|0],v=e()<.4;for(let[N,P]of d){if(i.orn&&(r.fillStyle="rgba(255,250,235,.55)",r.fillRect(N-10,f-16,P+20,8),r.fillStyle="rgba(0,0,0,.15)",r.fillRect(N-10,f-8,P+20,3)),i.shutter){r.fillStyle=i.shutter,r.fillRect(N-16,f,12,g),r.fillRect(N+P+4,f,12,g),r.fillStyle="rgba(0,0,0,.25)";for(let A=0;A<g;A+=5)r.fillRect(N-16,f+A,12,1),r.fillRect(N+P+4,f+A,12,1)}r.fillStyle=i.frame,r.fillRect(N-4,f-4,P+8,g+8);let D=r.createLinearGradient(N,f,N+P,f+g);D.addColorStop(0,"#5a7488"),D.addColorStop(.35,i.glass),D.addColorStop(.6,"#3d5263"),D.addColorStop(1,"#141c24"),r.fillStyle=D,r.fillRect(N,f,P,g),v&&(r.fillStyle=i.curtain||"rgba(230,225,210,.55)",r.fillRect(N,f,P*.3,g)),r.fillStyle=i.frame,P>34&&r.fillRect(N+P/2-1.5,f,3,g),r.fillRect(N,f+g*.32,P,3),r.fillStyle="rgba(255,255,255,.35)",r.fillRect(N-6,f+g+4,P+12,5);let z=r.createLinearGradient(0,f+g+9,0,f+g+50);z.addColorStop(0,"rgba(0,0,0,.22)"),z.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=z,r.fillRect(N-2,f+g+9,P+4,41),M&&(a.globalAlpha=.75+e()*.25,a.fillStyle=b,a.fillRect(N,f,P,g),a.globalAlpha=1,a.fillStyle="rgba(0,0,0,.6)",P>34&&a.fillRect(N+P/2-1.5,f,3,g),a.fillRect(N,f+g*.32,P,3),v&&(a.fillStyle="rgba(60,30,10,.7)",a.fillRect(N,f,P*.3,g)))}}}for(let l=0;l<14;l++){let c=e()*n,h=4+e()*14,p=r.createLinearGradient(0,0,0,n);p.addColorStop(0,"rgba(0,0,0,0)"),p.addColorStop(1,"rgba(20,15,10,.12)"),r.fillStyle=p,r.fillRect(c,0,h,n)}return{map:hn(s),emi:hn(o)}}function t_(i,t,e,n,s,r){i.lineCap="round";for(let o=0;o<2+t()*3;o++){i.strokeStyle=Uu[t()*Uu.length|0],i.lineWidth=3+t()*4,i.beginPath();let a=e+t()*s*.3,l=n+r*.3+t()*r*.5;i.moveTo(a,l);for(let c=0;c<6;c++)a+=8+t()*16,l+=(t()-.5)*26,i.quadraticCurveTo(a-6,l-20*t(),a,l);i.stroke()}}function Rc(i,t){let e=Nn(i),n=512,s=160,r=Un(n,s),o=r.getContext("2d"),a=Un(n,s),l=a.getContext("2d");if(l.fillStyle="#000",l.fillRect(0,0,n,s),t==="res"){o.fillStyle=["#8a7d6a","#7a6e62","#958575","#6f6a63","#a89880"][e()*5|0],o.fillRect(0,0,n,s),Vi(o,n,s,3e3,.2,e),o.fillStyle="rgba(0,0,0,.25)",o.fillRect(0,s-36,n,36);for(let f=0;f<4;f++){let g=f*128;if(f===1)o.fillStyle="#3a2a1e",o.fillRect(g+40,40,48,s-40),o.fillStyle="#5a4230",o.fillRect(g+44,44,40,s-48),o.fillStyle="#e0c060",o.fillRect(g+76,100,4,4),l.fillStyle="#ffd080",l.fillRect(g+60,30,8,6);else if(o.fillStyle="#e8e0d0",o.fillRect(g+36,40,56,62),o.fillStyle="#1a242e",o.fillRect(g+40,44,48,54),o.strokeStyle="rgba(230,235,240,.35)",o.lineWidth=1,o.beginPath(),o.moveTo(g+42,46),o.lineTo(g+58,70),o.stroke(),e()<.35&&(l.fillStyle="#ffc070",l.fillRect(g+40,44,48,54)),e()<.5){o.fillStyle="#6a6a6a",o.fillRect(g+36,40,56,62),o.fillStyle="rgba(0,0,0,.3)";for(let _=40;_<102;_+=4)o.fillRect(g+36,_,56,1)}}return e()<.55&&t_(o,e,e()*200,50,300,100),gn(o,n,s,20,e,"30,25,20",.18,40),{map:hn(r),emi:hn(a)}}o.fillStyle="#2c2e32",o.fillRect(0,0,n,s);let c=Du[e()*Du.length|0];o.fillStyle=c,o.fillRect(0,0,n,34),o.fillStyle="rgba(255,255,255,.18)",o.fillRect(0,0,n,4),o.fillStyle="rgba(0,0,0,.35)",o.fillRect(0,30,n,4),o.fillStyle="rgba(255,255,255,.55)";for(let f=0;f<5+(e()*4|0);f++)o.fillRect(18+f*18+e()*4,10,10+e()*8,12);let h=e()*4|0,p=e()<.55,u=e()<.18;if(p){let f=["#b3202a","#1d6b3a","#1f4f9a","#c9a040","#222"][e()*5|0];o.fillStyle=f,o.fillRect(0,34,n,14),o.fillStyle="rgba(0,0,0,.25)";for(let g=0;g<n;g+=16)o.fillRect(g,34,8,14)}for(let f=0;f<4;f++){let g=f*128;o.fillStyle="#3a3c40",o.fillRect(g,p?48:34,128,s-(p?48:34));let _=g+10,m=p?56:42,d=108,M=s-(p?64:50);if(f===h){o.fillStyle="#1a1614",o.fillRect(g+38,m,52,s-m),o.fillStyle="#4a6a78",o.fillRect(g+42,m+4,44,s-m-8),o.fillStyle="#c8c0b0",o.fillRect(g+78,m+s*.35,4,4),l.fillStyle="#fff2d0",l.globalAlpha=.7,l.fillRect(g+42,m+4,44,s-m-8),l.globalAlpha=1;continue}let b=o.createLinearGradient(_,m,_+d,m+M);b.addColorStop(0,"#6a8496"),b.addColorStop(.35,"#2a3a48"),b.addColorStop(.7,"#1a242c"),b.addColorStop(1,"#0e1418"),o.fillStyle=b,o.fillRect(_,m,d,M),o.strokeStyle="rgba(210,220,230,.55)",o.lineWidth=3,o.strokeRect(_+1,m+1,d-2,M-2),o.fillStyle="rgba(220,230,240,.35)",o.fillRect(_+d/2-1.5,m,3,M),o.fillRect(_,m+M*.45,d,3),o.fillStyle="rgba(255,255,255,.18)",o.beginPath(),o.moveTo(_+8,m+4),o.lineTo(_+28,m+4),o.lineTo(_+14,m+M-6),o.lineTo(_-2,m+M-6),o.fill(),o.fillStyle="rgba(0,0,0,.35)";for(let v=0;v<3;v++)o.fillRect(_+8+v*30,m+M-28-v*8,22,10);if(l.fillStyle=e()<.5?"#ffe9b8":"#e8f0ff",l.globalAlpha=.55+e()*.3,l.fillRect(_,m,d,M),l.globalAlpha=1,l.fillStyle="rgba(0,0,0,.45)",l.fillRect(_+d/2-1.5,m,3,M),l.fillRect(_,m+M*.45,d,3),u&&f!==h){o.fillStyle="#8a8c90",o.fillRect(_,m,d,M*.55),o.fillStyle="rgba(0,0,0,.25)";for(let v=m;v<m+M*.55;v+=5)o.fillRect(_,v,d,1.5);l.fillStyle="#000",l.fillRect(_,m,d,M*.55)}}return gn(o,n,s,10,e,"20,20,20",.2,30),{map:hn(r),emi:hn(a)}}function Yo(i,t,e,n,s,r){let o=Nn(s),a=Un(n,n),l=a.getContext("2d");return l.fillStyle=i,l.fillRect(0,0,n,n),Vi(l,n,n,e,t,o),r&&r(l,o,n),hn(a)}function Ou(i,t=0){let e=Nn(i),n=512,s=Un(n,n),r=s.getContext("2d");if(t===4){r.fillStyle="#8a3a28",r.fillRect(0,0,n,n);for(let o=0;o<n;o+=14){let a=o/14%2?0:10;for(let l=-20;l<n;l+=20){let c=(e()-.5)*28;r.fillStyle=`rgb(${140+c},${55+c*.4},${38+c*.3})`,r.beginPath(),r.moveTo(l+a,o+14),r.quadraticCurveTo(l+a+10,o+2,l+a+20,o+14),r.fill()}r.fillStyle="rgba(0,0,0,.25)",r.fillRect(0,o+12,n,2)}return Vi(r,n,n,8e3,.2,e),hn(s)}if(t===5){for(let o=0;o<n;o++){let a=o/n,l=40+a*30,c=90+a*50,h=70+a*40;r.fillStyle=`rgb(${l|0},${c|0},${h|0})`,r.fillRect(0,o,n,1)}for(let o=0;o<n;o+=48)r.fillStyle="rgba(255,255,255,.12)",r.fillRect(o,0,2,n),r.fillStyle="rgba(0,0,0,.18)",r.fillRect(o+24,0,2,n);return gn(r,n,n,20,e,"20,60,40",.2,80),hn(s)}if(r.fillStyle="#c4c4c4",r.fillRect(0,0,n,n),t===0){Vi(r,n,n,26e3,.42,e),Si(r,n,n,()=>{gn(r,n,n,10,e,"0,0,0",.1,120),gn(r,n,n,6,e,"255,255,255",.08,90)}),r.fillStyle="rgba(0,0,0,.22)";for(let o=0;o<n;o+=128)r.fillRect(0,o,n,3)}else if(t===1){for(let o=0;o<n;o+=64){let a=(e()-.5)*30;r.fillStyle=`rgb(${196+a},${196+a},${196+a})`,r.fillRect(o,0,64,n),r.fillStyle="rgba(0,0,0,.35)",r.fillRect(o,0,3,n),r.fillStyle="rgba(255,255,255,.18)",r.fillRect(o+3,0,2,n)}Vi(r,n,n,9e3,.25,e),Si(r,n,n,()=>gn(r,n,n,8,e,"0,0,0",.14,100));for(let o=0;o<6;o++)r.fillStyle="rgba(0,0,0,.2)",r.fillRect(e()*n,e()*n,20+e()*50,14+e()*30)}else if(t===2){for(let a=0;a<n;a+=64)for(let l=0;l<n;l+=64){let c=(e()-.5)*34;r.fillStyle=`rgb(${200+c},${198+c},${192+c})`,r.fillRect(l,a,64,64)}Vi(r,n,n,12e3,.25,e),r.fillStyle="rgba(30,30,30,.45)";for(let a=0;a<n;a+=64)r.fillRect(0,a,n,2.5);for(let a=0;a<n;a+=64)r.fillRect(a,0,2.5,n);Si(r,n,n,()=>gn(r,n,n,8,e,"40,50,30",.18,90))}else{for(let o=0;o<n;o+=16){let a=r.createLinearGradient(o,0,o+16,0);a.addColorStop(0,"#9a9a9a"),a.addColorStop(.5,"#e2e2e2"),a.addColorStop(1,"#8a8a8a"),r.fillStyle=a,r.fillRect(o,0,16,n)}r.fillStyle="rgba(0,0,0,.3)";for(let o=0;o<n;o+=170)r.fillRect(0,o,n,2);Si(r,n,n,()=>gn(r,n,n,12,e,"90,50,20",.2,70))}return hn(s)}function Bu(i){return Yo("#4a4b4f",.3,22e3,512,i,(t,e,n)=>{Si(t,n,n,()=>{gn(t,n,n,30,e,"0,0,0",.22,80),gn(t,n,n,12,e,"120,120,120",.15,60)}),t.strokeStyle="rgba(20,20,20,.45)",t.lineWidth=1.2;for(let s=0;s<10;s++){t.beginPath();let r=e()*n,o=e()*n;t.moveTo(r,o);for(let a=0;a<8;a++)r+=(e()-.5)*30,o+=(e()-.5)*30,t.lineTo(r,o);t.stroke()}for(let s=0;s<5;s++){{let r=e()<.5?30:85;t.fillStyle=`rgba(${r},${r},${r+3},.35)`}t.fillRect(e()*n,e()*n,30+e()*80,20+e()*50)}})}function Cc(i,t="#8f8b84",e=32,n="rgba(40,35,30,.45)"){return Yo(t,.18,9e3,512,i,(s,r,o)=>{for(let a=0;a<o;a+=e)for(let l=0;l<o;l+=e){let c=(r()-.5)*18;s.fillStyle=`rgba(${c>0?255:0},${c>0?255:0},${c>0?255:0},${Math.abs(c)/120})`,s.fillRect(l,a,e,e)}s.fillStyle=n;for(let a=0;a<o;a+=e)s.fillRect(0,a,o,1.5);for(let a=0;a<o;a+=e)s.fillRect(a,0,1.5,o);Si(s,o,o,()=>gn(s,o,o,14,r,"30,25,20",.22,70));for(let a=0;a<40;a++){s.fillStyle="rgba(30,30,30,.35)";let l=1+r()*2;s.beginPath(),s.arc(r()*o,r()*o,l,0,7),s.fill()}})}function zu(i){return Yo("#a8927a",.18,9e3,512,i,(t,e,n)=>{for(let s=0;s<n;s+=16){let r=s/16%2?0:16;for(let o=-32;o<n;o+=32){let a=e();t.fillStyle=a<.33?"rgba(140,90,70,.35)":a<.66?"rgba(200,180,150,.25)":"rgba(90,80,75,.2)",t.fillRect(o+r,s,31,15)}}t.fillStyle="rgba(50,40,30,.35)";for(let s=0;s<n;s+=16)t.fillRect(0,s,n,1);Si(t,n,n,()=>gn(t,n,n,12,e,"40,30,20",.2,70))})}function ku(i){return Yo("#4f7a32",.4,26e3,256,i,(t,e,n)=>{Si(t,n,n,()=>{gn(t,n,n,20,e,"30,50,10",.35,40),gn(t,n,n,10,e,"140,150,60",.25,30)})})}function Sr(i="rgba(255,210,140,1)"){let t=Un(128,128),e=t.getContext("2d"),n=e.createRadialGradient(64,64,0,64,64,64);return n.addColorStop(0,i),n.addColorStop(.35,i.replace(/[\d.]+\)$/,"0.45)")),n.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=n,e.fillRect(0,0,128,128),hn(t,!0,!1)}function Hu(){let i=Un(64,64),t=i.getContext("2d"),e=t.createRadialGradient(32,32,4,32,32,32);return e.addColorStop(0,"rgba(0,0,0,.75)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),hn(i,!1,!1)}function Vu(){let i=Un(64,128),t=i.getContext("2d"),e=t.createLinearGradient(0,128,0,0);return e.addColorStop(0,"rgba(255,240,200,.9)"),e.addColorStop(1,"rgba(255,240,200,0)"),t.fillStyle=e,t.beginPath(),t.moveTo(26,128),t.lineTo(38,128),t.lineTo(64,0),t.lineTo(0,0),t.fill(),hn(i,!0,!1)}function Er(i,t={}){let e=t.w||512,n=t.h||128,s=Un(e,n),r=s.getContext("2d"),o=t.bg||"#140d18",a=t.fg||"#ff3fa4",l=t.font||'900 76px "Arial Black", Impact, sans-serif';r.fillStyle=o,r.fillRect(0,0,e,n),r.strokeStyle=t.border||a,r.lineWidth=6,r.strokeRect(5,5,e-10,n-10),r.font=l,r.textAlign="center",r.textBaseline="middle";let c=parseInt(l.match(/(\d+)px/)[1]);for(;r.measureText(i).width>e-40&&c>20;)c-=4,r.font=l.replace(/\d+px/,c+"px");return r.shadowColor=a,r.shadowBlur=t.blur??18,r.fillStyle=t.core||"#fff",r.fillText(i,e/2,n/2+4),r.shadowBlur=0,r.lineWidth=2,r.strokeStyle=a,r.strokeText(i,e/2,n/2+4),t.sub&&(r.font="bold 22px Arial, sans-serif",r.fillStyle=a,r.fillText(t.sub,e/2,n-22)),hn(s,!0,!1)}function Gu(i,t,e,n,s={}){let r=Nn(n),o=1024,a=s.square?1024:288,l=Un(o,a),c=l.getContext("2d");if(c.fillStyle=e,c.fillRect(0,0,o,a),s.stripes){c.fillStyle=s.stripes;for(let u=-a;u<o;u+=90)c.beginPath(),c.moveTo(u,0),c.lineTo(u+45,0),c.lineTo(u+45+a,a),c.lineTo(u+a,a),c.fill();c.fillStyle=e,c.fillRect(40,40,o-80,a-80)}c.strokeStyle=t,c.lineWidth=14,c.strokeRect(22,22,o-44,a-44);let h=s.square?620:190,p=u=>`900 ${u}px "Arial Black", Impact, sans-serif`;for(c.font=p(h);c.measureText(i).width>o-120&&h>40;)h-=6,c.font=p(h);c.textAlign="center",c.textBaseline="middle",c.fillStyle="rgba(0,0,0,.25)",c.fillText(i,o/2+8,a/2+14),c.fillStyle=t,c.fillText(i,o/2,a/2+6),s.sub&&(c.font="bold 40px Arial, sans-serif",c.fillStyle=t,c.fillText(s.sub,o/2,a-58)),Vi(c,o,a,3e4,.35,r),gn(c,o,a,40,r,"0,0,0",.25,140),gn(c,o,a,20,r,"255,255,255",.12,120);for(let u=0;u<60;u++)c.fillStyle=`rgba(${r()<.5?0:255},${r()<.5?0:255},${r()<.5?0:255},.12)`,c.fillRect(r()*o,r()*a,20+r()*120,2+r()*4);return hn(l,!0,!1)}function Wu(){let i=Un(64,128),t=i.getContext("2d");t.fillStyle="#16213a",t.fillRect(0,0,64,128),t.fillStyle="#2a3d66";for(let e=0;e<128;e+=16)for(let n=0;n<64;n+=16)t.fillRect(n+1.5,e+1.5,13,13);return t.strokeStyle="#b8c0c8",t.lineWidth=3,t.strokeRect(1.5,1.5,61,125),hn(i,!0,!1)}function Xu(i){let t=Nn(i),e=256,n=Un(e,e),s=n.getContext("2d");s.fillStyle="#d4d4d4",s.fillRect(0,0,e,e),Si(s,e,e,()=>{for(let a=0;a<900;a++){let l=t()*e,c=t()*e,h=3+t()*9,p=t();s.fillStyle=p<.4?"rgba(40,40,40,.18)":p<.8?"rgba(255,255,255,.14)":"rgba(0,0,0,.22)",s.beginPath(),s.arc(l,c,h,0,7),s.fill()}});let r=Un(e,e),o=r.getContext("2d");o.filter="blur(1.5px)";for(let a of[-e,0,e])for(let l of[-e,0,e])o.drawImage(n,a,l);return hn(r,!0,!0)}var Nu,qo,Du,Uu,Ic=nn(()=>{Vn();Nu=[{id:"altbau_cream",wall:"#d8c49a",pat:"plaster",frame:"#f3ead6",glass:"#2c3b4c",ww:44,wh:66,wy:30,band:"#c4ad80",orn:!0},{id:"brick_red",wall:"#9a4a35",pat:"brick",mortar:"#7a3a2a",frame:"#e8e2d6",glass:"#26323f",ww:42,wh:62,wy:32,band:"#7c3a2a"},{id:"concrete70",wall:"#a7a397",pat:"panel",frame:"#3a3a3a",glass:"#22303a",ribbon:!0,wy:42,wh:44,band:"#8d897e"},{id:"office_glass",wall:"#24424c",pat:"glass",frame:"#90a4a8",glass:"#1d3a46"},{id:"ochre",wall:"#c98d45",pat:"plaster",frame:"#efe4cc",glass:"#28343f",ww:46,wh:60,wy:34,band:"#b07a38",shutter:"#6e4a2a"},{id:"pastel_rose",wall:"#c7928a",pat:"plaster",frame:"#f1ebe4",glass:"#2a3540",ww:40,wh:64,wy:30,band:"#b07c74"},{id:"brick_dark",wall:"#5d3b30",pat:"brick",mortar:"#46302a",frame:"#cfc6b4",glass:"#1f2a33",ww:48,wh:58,wy:36,band:"#4a2e26"},{id:"mint_panel",wall:"#86a093",pat:"panel",frame:"#e6eee8",glass:"#24333b",ww:56,wh:52,wy:40,band:"#6f887b"},{id:"blue_plaster",wall:"#7f97ad",pat:"plaster",frame:"#eef0f2",glass:"#26313b",ww:44,wh:60,wy:34,band:"#6a8398"},{id:"yellow_brick",wall:"#c9b06a",pat:"brick",mortar:"#a8925a",frame:"#3b3b3b",glass:"#25313b",ww:50,wh:56,wy:38,band:"#a68e52"}],qo=["#ffcf7a","#ffb862","#ffe3a6","#ffd28c","#a9c8ff","#ffc06e","#fff0c8"];Du=["#b3202a","#1d6b3a","#1f4f9a","#e0b020","#efefe8","#6a2a8a","#d0601a","#202020"],Uu=["#e83a8a","#33c4e8","#f4e23a","#7ee05a","#ffffff","#ff7a2a"]});function tn(i,t,e){let n=!1;for(let s=0,r=e.length-1;s<e.length;r=s++){let o=e[s][0],a=e[s][1],l=e[r][0],c=e[r][1];a>t!=c>t&&i<(l-o)*(t-a)/(c-a)+o&&(n=!n)}return n}function Ei(i,t,e,n,s,r){let o=s-e,a=r-n,l=o*o+a*a,c=l?((i-e)*o+(t-n)*a)/l:0;c=Math.max(0,Math.min(1,c));let h=e+c*o,p=n+c*a;return[Math.hypot(i-h,t-p),h,p,c]}function $u(i,t,e){let n=Nn(1234),s={grid:new Pc,buildings:[],neonMats:[],emiMats:[],shopMats:[],pools:null,roadsDrive:[],junctions:[],signs:[]},r=(R,x,T=0)=>{let C=new ne(R),L={};return C.getHSL(L),C.setHSL((L.h+T+1)%1,L.s,Math.max(0,Math.min(1,L.l*x))),"#"+C.getHexString()},o=3,a=Nn(77),l=[];Nu.forEach((R,x)=>{for(let T=0;T<o;T++){let C=R;if(T>0){let L=a;C={...R,wall:r(R.wall,.8+L()*.4,(L()-.5)*.06)},R.pat==="glass"?(C.col=[24,32,48][L()*3|0],C.gcols=[["#2f5866","#4f8090","#1c3a44"],["#3a4a5a","#7a8c9c","#1e2630"],["#2a4a3a","#5a8a70","#16302a"],["#4a3e30","#9a8060","#2a2018"]][L()*4|0],C.frame=["#90a4a8","#c8c8c0","#3a3a3a"][L()*3|0]):R.ribbon?(C.frame=["#3a3a3a","#d0d0c8","#6a2a2a"][L()*3|0],C.wh=Math.round(R.wh*(.8+L()*.5))):(C.ww=Math.round(R.ww*(.75+L()*.45)),C.wh=Math.round(Math.min(78,R.wh*(.85+L()*.3))),C.bays=L()<.35?3:L()<.2?5:4,C.bays===5&&(C.ww=Math.min(C.ww,40)),C.pair=C.bays===3&&L()<.6,C.balc=L()<.3?["#d8d8d0","#3a3a3a","#8a5a3a"][L()*3|0]:null,L()<.3&&(C.band=null),L()<.4&&(C.frame=["#f3ead6","#3b3b3b","#e8e2d6","#6a4a30","#2a4a6a"][L()*5|0]))}l.push({style:x,st:C,seed:100+x*7+T})}});let c=l.map(({st:R,seed:x})=>{let T=Fu(R,x),C=new Te({map:T.map,emissiveMap:T.emi,emissive:16777215,emissiveIntensity:.5,roughness:R.pat==="glass"?.35:.9,metalness:R.pat==="glass"?.25:0});return s.emiMats.push(C),C}),h=[0,1,2,3,4,5].map(R=>{let x=Rc(500+R,"shop"),T=new Te({map:x.map,emissiveMap:x.emi,emissive:16777215,emissiveIntensity:.6,roughness:.6});return s.shopMats.push(T),T}),p=[0,1,2].map(R=>{let x=Rc(700+R,"res"),T=new Te({map:x.map,emissiveMap:x.emi,emissive:16777215,emissiveIntensity:.5,roughness:.95});return s.emiMats.push(T),T}),u=new Te({vertexColors:!0,roughness:.9,side:En}),f=[0,1,2,3,4,5].map(R=>new Te({map:Ou(9+R,R),vertexColors:!0,roughness:R===3||R===5?.55:.95,metalness:R===3||R===5?.35:0})),g=c.map(()=>new An),_=(R,x)=>R*o+(x()*o|0),m=h.map(()=>new An),d=p.map(()=>new An),M=new An,b=[0,1,2,3,4,5].map(()=>new An),v=new Set(["primary","primary_link","secondary","tertiary","residential","unclassified","living_street","service"]),N=[];for(let R of t.roads)if(R.t!=="foot")for(let x=0;x<R.p.length-1;x++)N.push([R.p[x][0],R.p[x][1],R.p[x+1][0],R.p[x+1][1],R.w,R]);let P=new Map,D=30;for(let R of N){let x=Math.floor(Math.min(R[0],R[2])/D)-1,T=Math.floor(Math.max(R[0],R[2])/D)+1,C=Math.floor(Math.min(R[1],R[3])/D)-1,L=Math.floor(Math.max(R[1],R[3])/D)+1;for(let W=x;W<=T;W++)for(let V=C;V<=L;V++){let q=W*1009+V;P.has(q)||P.set(q,[]),P.get(q).push(R)}}s.nearRoad=(R,x)=>{let T=null,C=1e9;for(let L of P.get(Math.floor(R/D)*1009+Math.floor(x/D))||[]){let[W]=Ei(R,x,L[0],L[1],L[2],L[3]),V=W-L[4]/2;V<C&&(C=V,T=L)}return T?{d:C,road:T[5],w:T[4]}:null};let z=new Map,A=[],E=[],w=[],$=0,Z=[[.34,.5,.32],[.64,.27,.21],[.8,.8,.76],[.32,.42,.58],[.74,.63,.42],[.22,.22,.25],[.55,.58,.36],[.7,.45,.25]];for(let R of t.buildings){let x=R.p,T=x.length,C=R.h,L=Nn(R.r),W=C>19,V;R.k==="church"?V=1:R.k==="industrial"?V=[2,7,6][L()*3|0]:R.k==="school"?V=[2,0,8][L()*3|0]:R.k==="station"?V=[3,2,7][L()*3|0]:R.k==="greenhouse"?V=3:W?V=[2,3,2,7,6,3][L()*6|0]:V=[0,0,1,4,5,6,8,9,0,4][L()*10|0];let q=qu[L()*qu.length|0];if(R.roofCol){let wt=new ne(R.roofCol);q=[wt.r,wt.g,wt.b]}else R.k==="church"?q=[.28,.42,.38]:R.k==="industrial"?q=[.55,.56,.58]:R.k==="garage"&&(q=[.45,.45,.48]);R.col;let st=_(V,L),j=(L()*4|0)/4,ft=new ne(l[st].st.wall),y=[ft.r*.75,ft.g*.75,ft.b*.75],U=[Math.min(1,ft.r*1.1+.08),Math.min(1,ft.g*1.1+.08),Math.min(1,ft.b*1.1+.08)],k=R.k==="shop"||L()<.55,O=Math.min(C-.8,k?4.2:3.6),B=C-.6,J=.45,it=Math.max(1,Math.round((B-O)/e_)),nt=L()*h.length|0,lt=L()*p.length|0,mt=[],Rt=[];for(let wt=0;wt<T;wt++){let _e=x[wt],Ce=x[(wt+1)%T],Ne=Ce[0]-_e[0],Ve=Ce[1]-_e[1],He=Math.hypot(Ne,Ve);if(He<.05)continue;let ye=Ve/He,me=-Ne/He,en=(_e[0]+Ce[0])/2,Fn=(_e[1]+Ce[1])/2;tn(en+ye*.2,Fn+me*.2,x)&&(ye=-ye,me=-me);let Ye=me,ps=-ye,ke=_e,ue=Ce;Ne*Ye+Ve*ps<0&&(ke=Ce,ue=_e),s.grid.add(_e[0],_e[1],Ce[0],Ce[1]);let Ge=Math.max(1,Math.round(He/3.5)),fn=Ge/4,ee=[ye,0,me],kt=(ge,Le)=>[ge[0],Le,ge[1]],oe=s.nearRoad(en+ye*3,Fn+me*3),le=oe&&oe.d<10;(le&&k?m[nt]:d[lt]).quad(kt(ke,0),kt(ue,0),kt(ue,O),kt(ke,O),ee,[0,0],[fn,0],[fn,1],[0,1]),B>O+.5&&g[st].quad(kt(ke,O),kt(ue,O),kt(ue,B),kt(ke,B),ee,[j,0],[j+fn,0],[j+fn,it/4],[j,it/4]),M.quad(kt(ke,Math.max(O,B)),kt(ue,Math.max(O,B)),kt(ue,C+J),kt(ke,C+J),ee,[0,0],[1,0],[1,1],[0,1],y),B>O+.5&&(M.quad([ke[0]+ye*.12,O+.25,ke[1]+me*.12],[ue[0]+ye*.12,O+.25,ue[1]+me*.12],[ue[0],O+.25,ue[1]],[ke[0],O+.25,ke[1]],[0,1,0],[0,0],[1,0],[1,1],[0,1],U),M.quad([ke[0]+ye*.12,O,ke[1]+me*.12],[ue[0]+ye*.12,O,ue[1]+me*.12],[ue[0]+ye*.12,O+.25,ue[1]+me*.12],[ke[0]+ye*.12,O+.25,ke[1]+me*.12],ee,[0,0],[1,0],[1,1],[0,1],y));let Ee=.35,we=[ke[0]-ye*Ee,ke[1]-me*Ee],Fe=[ue[0]-ye*Ee,ue[1]-me*Ee];M.quad(kt(ke,C+J),kt(ue,C+J),kt(Fe,C+J),kt(we,C+J),[0,1,0],[0,0],[1,0],[1,1],[0,1],U),M.quad(kt(Fe,C),kt(we,C),kt(we,C+J),kt(Fe,C+J),[-ye,0,-me],[0,0],[1,0],[1,1],[0,1],[q[0]*.8,q[1]*.8,q[2]*.8]);{let Le=[q[0]*.72,q[1]*.72,q[2]*.74];Rt.push([[ke[0],C+.03,ke[1]],[ue[0],C+.03,ue[1]],[ue[0]-ye*1.1,C+.03,ue[1]-me*1.1],[ke[0]-ye*1.1,C+.03,ke[1]-me*1.1],Le])}mt.push({A:ke,B:ue,nx:ye,nz:me,len:He,street:le,mx:en,mz:Fn})}let Mt=x.map(wt=>new xt(wt[0],wt[1])),Wt=[];try{Wt=Ni.triangulateShape(Mt,[])}catch{}let Jt=mt[0]||{A:[0,0],B:[1,0],len:1};for(let wt of mt)wt.len>Jt.len&&(Jt=wt);let re=(Jt.B[0]-Jt.A[0])/Jt.len,Se=(Jt.B[1]-Jt.A[1])/Jt.len,Zt=R.k==="garage"?3:R.k==="church"?5:R.k==="industrial"?3:C>19?[0,2,1,0][L()*4|0]:[4,4,1,0,4][L()*5|0];(R.roof==="gabled"||R.roof==="hipped"||R.roof==="gambrel")&&(Zt=4),(R.roof==="flat"||R.roof==="skillion")&&(Zt=0),(R.roof==="metal"||R.roof==="corrugated")&&(Zt=3),(R.roof==="dome"||R.roof==="onion")&&(Zt=5);let Xt=b[Zt],Rn=Zt===3||Zt===5?8:11,Pe=wt=>[(wt[0]*re+wt[1]*Se)/Rn,(-wt[0]*Se+wt[1]*re)/Rn],pn=(wt,_e,Ce,Ne,Ve)=>{let He=(_e[0]-wt[0])*(Ce[1]-wt[1])-(_e[1]-wt[1])*(Ce[0]-wt[0]),[ye,me,en]=He<0?[wt,_e,Ce]:[wt,Ce,_e];Xt.tri([ye[0],Ne,ye[1]],[me[0],Ne,me[1]],[en[0],Ne,en[1]],[0,1,0],Pe(ye),Pe(me),Pe(en),Ve)};for(let wt of Wt)pn(x[wt[0]],x[wt[1]],x[wt[2]],C,q);for(let wt of Rt)pn([wt[0][0],wt[0][2]],[wt[1][0],wt[1][2]],[wt[2][0],wt[2][2]],C+.03,wt[4]),pn([wt[0][0],wt[0][2]],[wt[2][0],wt[2][2]],[wt[3][0],wt[3][2]],C+.03,wt[4]);let $n=[],Re=0;for(let wt=0;wt<T;wt++){let _e=x[wt],Ce=x[(wt+1)%T];Re+=_e[0]*Ce[1]-Ce[0]*_e[1]}if(Re=Math.abs(Re)/2,Re>350&&R.k!=="church"){let wt=Re>3e3?6:Re>1500?4:Re>700?2:1,_e=0,Ce=0;for(let Ne of x)_e+=Ne[0],Ce+=Ne[1];_e/=T,Ce/=T;for(let Ne=0,Ve=0;Ne<wt&&Ve<120;Ve++){let He=5+L()*Math.min(10,Math.sqrt(Re)*.25),ye=4+L()*Math.min(8,Math.sqrt(Re)*.2),me=2.4+L()*1.6,en=_e+(L()-.5)*Math.sqrt(Re)*.7,Fn=Ce+(L()-.5)*Math.sqrt(Re)*.7,Ye=[[-He/2,-ye/2],[He/2,-ye/2],[He/2,ye/2],[-He/2,ye/2]].map(([ue,Ge])=>[en+ue*re-Ge*Se,Fn+ue*Se+Ge*re]);if(!Ye.every(ue=>tn(ue[0],ue[1],x))||Ye.some(ue=>mt.some(Ge=>Ei(ue[0],ue[1],Ge.A[0],Ge.A[1],Ge.B[0],Ge.B[1])[0]<1.5))||$n.some(ue=>Math.hypot(ue.x-en,ue.z-Fn)<ue.r+Math.hypot(He,ye)/2))continue;$n.push({x:en,z:Fn,r:Math.hypot(He,ye)/2,C:Ye,h:C+me}),Ne++;let ps=[ft.r*.9,ft.g*.9,ft.b*.9];for(let ue=0;ue<4;ue++){let Ge=Ye[ue],fn=Ye[(ue+1)%4],ee=fn[0]-Ge[0],kt=fn[1]-Ge[1],oe=Math.hypot(ee,kt),le=[kt/oe,0,-ee/oe],Ae=tn((Ge[0]+fn[0])/2+le[0]*.1,(Ge[1]+fn[1])/2+le[2]*.1,Ye)?[-le[0],0,-le[2]]:le;M.quad([Ge[0],C,Ge[1]],[fn[0],C,fn[1]],[fn[0],C+me,fn[1]],[Ge[0],C+me,Ge[1]],Ae,[0,0],[1,0],[1,1],[0,1],ps),M.quad([Ge[0],C+me,Ge[1]],[fn[0],C+me,fn[1]],[fn[0],C+me+.3,fn[1]],[Ge[0],C+me+.3,Ge[1]],Ae,[0,0],[1,0],[1,1],[0,1],U)}let ke=[q[0]*.85,q[1]*.85,q[2]*.85];pn(Ye[0],Ye[1],Ye[2],C+me+.3,ke),pn(Ye[0],Ye[2],Ye[3],C+me+.3,ke)}}let ii=[];if(Re>260&&R.k!=="church"){let wt=-Se,_e=re,Ce=1e9,Ne=-1e9,Ve=1e9,He=-1e9;for(let ee of x){let kt=ee[0]*re+ee[1]*Se,oe=ee[0]*wt+ee[1]*_e;Ce=Math.min(Ce,kt),Ne=Math.max(Ne,kt),Ve=Math.min(Ve,oe),He=Math.max(He,oe)}let ye=Ne-Ce,me=He-Ve,en=$n.map(ee=>{let kt=ee.x*re+ee.z*Se,oe=ee.x*wt+ee.z*_e;return[kt-ee.r,kt+ee.r,oe-ee.r,oe+ee.r]}),Fn=(ee,kt)=>[ee*re+kt*wt,ee*Se+kt*_e],Ye=(ee,kt,oe,le,Ae,Ee)=>{let we=[[ee-oe,kt-le],[ee+oe,kt-le],[ee+oe,kt+le],[ee-oe,kt+le]],Fe=[];for(let ge=0;ge<4;ge++){let Le=we[ge],$e=we[(ge+1)%4];for(let bn=0;bn<4;bn++){let On=bn/4;Fe.push(Fn(Le[0]+($e[0]-Le[0])*On,Le[1]+($e[1]-Le[1])*On))}}return!Fe.every(ge=>tn(ge[0],ge[1],x))||Fe.some(ge=>mt.some(Le=>Ei(ge[0],ge[1],Le.A[0],Le.A[1],Le.B[0],Le.B[1])[0]<Ae))||Ee&&Ee.some(ge=>ee+oe>ge[0]&&ee-oe<ge[1]&&kt+le>ge[2]&&kt-le<ge[3])?null:we.map(ge=>Fn(ge[0],ge[1]))},ps=(ee,kt,oe,le,Ae)=>{let Ee=Fe=>[(Fe[0]*re+Fe[1]*Se)/Ae,(Fe[0]*wt+Fe[1]*_e)/Ae],we=(Fe,ge,Le)=>{let $e=(ge[0]-Fe[0])*(Le[1]-Fe[1])-(ge[1]-Fe[1])*(Le[0]-Fe[0]),[bn,On,si]=$e<0?[Fe,ge,Le]:[Fe,Le,ge];ee.tri([bn[0],oe,bn[1]],[On[0],oe,On[1]],[si[0],oe,si[1]],[0,1,0],Ee(bn),Ee(On),Ee(si),le)};we(kt[0],kt[1],kt[2]),we(kt[0],kt[2],kt[3])},ke=(ee,kt,oe,le)=>{for(let Ae=0;Ae<4;Ae++){let Ee=ee[Ae],we=ee[(Ae+1)%4],Fe=we[0]-Ee[0],ge=we[1]-Ee[1],Le=Math.hypot(Fe,ge)||1,$e=[ge/Le,0,-Fe/Le];tn((Ee[0]+we[0])/2+$e[0]*.05,(Ee[1]+we[1])/2+$e[2]*.05,ee)&&($e=[-$e[0],0,-$e[2]]),M.quad([Ee[0],kt,Ee[1]],[we[0],kt,we[1]],[we[0],oe,we[1]],[Ee[0],oe,Ee[1]],$e,[0,0],[1,0],[1,1],[0,1],le)}},ue=Re>2500?3:Re>900?2:L()<.6?1:0,Ge=[];for(let ee=0,kt=0;ee<ue&&kt<40;kt++){let oe=ye*(.15+L()*.25),le=me*(.15+L()*.25);if(oe<2.5||le<2.5)continue;let Ae=Ce+oe+1.3+L()*Math.max(0,ye-2*oe-2.6),Ee=Ve+le+1.3+L()*Math.max(0,me-2*le-2.6),we=Ye(Ae,Ee,oe,le,1.2,en.concat(Ge));if(!we)continue;Ge.push([Ae-oe,Ae+oe,Ee-le,Ee+le]),ee++;let Fe=Z[L()*Z.length|0],ge=(Zt+1+(L()*2|0))%3,Le=C+.09;ps(b[ge],we,Le,Fe,ge===2?6:9),ke(we,C,Le,[Fe[0]*.6,Fe[1]*.6,Fe[2]*.6])}if(Re>800&&L()<.6)for(let ee=0;ee<12;ee++){let kt=Ve+3+L()*(me-6),oe=Ce+2,le=Ne-2,Ae=Ye((oe+le)/2,kt,(le-oe)/2*.8,.7,1,en);if(Ae){ps(b[2],Ae,C+.12,[.86,.84,.8],3);break}}if((Re>1100||R.k==="garage"&&Re>500)&&$<18&&L()<.85){let ee=[["KAUFHAUS LINDE","#f4efe0","#2a5a3a"],["KOLA ROT","#ffffff","#b0141c"],["POTT FM 99,1","#14102a","#3fd8e8"],["ELEKTRO BLITZ","#1a1a1a","#f2c200"],["ZECHE SIEBEN","#f2c200","#1c1c22"],["SCHAUM","#7a1010","#ffe03f"],["LINDENKAUF","#ffffff","#1f4f9a"],["NACHTEXPRESS","#f2c200","#111111"],["BACKSTUBE 11","#5a2a10","#f0dcb0"]],kt=R.k==="garage",oe=kt?["P","#ffffff","#1f4f9a"]:ee[(R.r+$)%ee.length],le=[[re,Se],[-re,-Se],[wt,_e],[-wt,-_e]],Ae=le[0];for(let Le of le)Le[1]<Ae[1]&&(Ae=Le);let Ee=[-Ae[1],Ae[0]],we=Math.abs(Ee[0]*re+Ee[1]*Se)>.5,Fe=we?ye:me,ge=we?me:ye;for(let Le=0;Le<25;Le++){let $e=Math.min(kt?14:30,Fe*(.45+L()*.25)),bn=kt?$e:$e*.28;if(bn>ge*.6&&(bn=ge*.6,$e=kt?bn:bn/.28),$e<7)break;let On=(we?$e:bn)/2,si=(we?bn:$e)/2,Ks=Ce+On+1.5+L()*Math.max(0,ye-2*On-3),Js=Ve+si+1.5+L()*Math.max(0,me-2*si-3);if(!Ye(Ks,Js,On,si,1.3,en))continue;let Wc=Fn(Ks,Js);A.push({x:Wc[0],z:Wc[1],y:C+.15,w:$e,d:bn,ang:Math.atan2(-Ae[0],-Ae[1]),A:oe,seed:R.r,sq:kt}),ii.push(Ye(Ks,Js,On+.6,si+.6,0,null)||[]),en.push([Ks-On,Ks+On,Js-si,Js+si]),$++;break}}if(Re>700&&L()<.5){let ee=4+(L()*6|0),kt=ee*3.4;for(let oe=0;oe<15;oe++){let le=Ce+kt/2+2+L()*Math.max(0,ye-kt-4),Ae=Ve+3+L()*Math.max(0,me-6);if(Ye(le,Ae,kt/2,1.6,1.5,en)){en.push([le-kt/2,le+kt/2,Ae-1.6,Ae+1.6]),ii.push(Ye(le,Ae,kt/2+.8,2.2,0,null)||[]);for(let Ee=0;Ee<ee;Ee++){let we=Fn(le-kt/2+1.7+Ee*3.4,Ae);w.push({x:we[0],z:we[1],y:C,rot:Math.atan2(wt,_e),s:1})}break}}}if(Re>300&&Re<4e3&&L()<.35){let ee=3+(L()*6|0),kt=1+(L()*3|0),oe=ee*.6+.2,le=kt*1.1+.2;for(let Ae=0;Ae<15;Ae++){let Ee=Ce+oe+2+L()*Math.max(0,ye-2*oe-4),we=Ve+le+2+L()*Math.max(0,me-2*le-4);if(!Ye(Ee,we,oe,le,1.6,en))continue;en.push([Ee-oe,Ee+oe,we-le,we+le]),ii.push(Ye(Ee,we,oe+.6,le+.6,0,null)||[]);let Fe=_e>0?1:-1;for(let ge=0;ge<ee;ge++)for(let Le=0;Le<kt;Le++){let $e=Fn(Ee-oe+.8+ge*1.2,we-le+1.3+Le*2.2);E.push({x:$e[0],z:$e[1],y:C+.55,ang:Math.atan2(re,Se),tilt:.45*Fe})}break}}}s.buildings.push({b:R,edges:mt,h:C,style:V,roofCol:q,shopish:k,annex:$n,area:Re,clear:ii})}let Q=(R,x,T=!0)=>{if(!R.p.length)return null;let C=new ie(R.build(),x);return C.castShadow=T,C.receiveShadow=!0,i.add(C),C};g.forEach((R,x)=>Q(R,c[x])),m.forEach((R,x)=>Q(R,h[x])),d.forEach((R,x)=>Q(R,p[x])),Q(M,u),b.forEach((R,x)=>Q(R,f[x]));let et={ac:[],vent:[],sky:[],hut:[],tank:[],ant:[],dish:[]};for(let R of s.buildings){let x=R.b,T=x.p,C=Nn(x.r+7),L=1e9,W=-1e9,V=1e9,q=-1e9;for(let y of T)L=Math.min(L,y[0]),W=Math.max(W,y[0]),V=Math.min(V,y[1]),q=Math.max(q,y[1]);let st=(W-L)*(q-V),j=Math.min(45,Math.floor(st/55)),ft=[];for(let y=0;y<j*4&&ft.length<j;y++){let U=L+C()*(W-L),k=V+C()*(q-V);if(!tn(U,k,T))continue;let O=!0;for(let nt of R.edges)if(Ei(U,k,nt.A[0],nt.A[1],nt.B[0],nt.B[1])[0]<1.8){O=!1;break}if(!O||ft.some(nt=>Math.hypot(nt[0]-U,nt[1]-k)<2.6)||R.annex.some(nt=>tn(U,k,nt.C)||Math.hypot(nt.x-U,nt.z-k)<nt.r+.8)||R.clear.some(nt=>nt.length&&tn(U,k,nt)))continue;ft.push([U,k]);let B=C(),J=Math.atan2(R.edges[0]?.nz||0,R.edges[0]?.nx||1),it={x:U,z:k,y:R.h,rot:J,s:.8+C()*.5};B<.38?et.ac.push(it):B<.55?et.vent.push(it):B<.68?et.sky.push(it):B<.76&&st>200?et.hut.push(it):B<.84?et.tank.push(it):B<.92?et.dish.push(it):et.ant.push(it)}}let Y=(R,x=.8,T=.1)=>new Te({color:R,roughness:x,metalness:T}),ot=(R,x,T,C,L)=>{if(!T.length)return;let W=new Dn(R,x,T.length),V=new Qe;return T.forEach((q,st)=>{V.position.set(q.x,q.y+C*(q.s||1),q.z),V.rotation.set(0,q.rot,0);let j=L?L(q):[q.s,q.s,q.s];V.scale.set(...j),V.updateMatrix(),W.setMatrixAt(st,V.matrix)}),W.castShadow=!0,W.receiveShadow=!0,i.add(W),W},tt=new We(1.4,.9,1);ot(tt,Y(12106944,.6,.3),et.ac,.45);let Tt=new qe(.35,.35,.06,12);ot(Tt,Y(2763824),et.ac.map(R=>({...R,x:R.x+Math.cos(R.rot)*.25*R.s,z:R.z-Math.sin(R.rot)*.25*R.s})),.93),ot(new qe(.3,.3,1,10),Y(9080208,.5,.5),et.vent,.5),ot(new qe(.42,.3,.25,10),Y(6974832,.5,.5),et.vent,1.1),ot(new We(1.6,.35,2.4),Y(7311264,.2,.4),et.sky,.17);{let R=new We(2,.5,2.6);ot(R,Y(9087160,.15,.5),w,.25);let x=new We(2.3,.2,2.9);ot(x,Y(5922402,.6,.3),w,.1)}if(E.length){let R=new Dn(new We(1.1,.06,2),new Te({map:Wu(),roughness:.25,metalness:.5}),E.length),x=new Qe;E.forEach((T,C)=>{x.position.set(T.x,T.y,T.z),x.rotation.set(T.tilt,T.ang,0,"YXZ"),x.updateMatrix(),R.setMatrixAt(C,x.matrix)}),R.castShadow=!0,R.receiveShadow=!0,i.add(R)}for(let R of A){let x=new Te({map:Gu(R.A[0],R.A[1],R.A[2],R.seed,{square:R.sq,stripes:R.sq?null:R.seed%3===0?"#e8e0c8":null}),roughness:.95,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),T=new Tn(R.w,R.d);T.rotateX(-Math.PI/2);let C=new ie(T,x);C.rotation.y=R.ang,C.position.set(R.x,R.y,R.z),C.receiveShadow=!0,i.add(C)}ot(new We(2.6,2.4,2.8),Y(10130054),et.hut,1.2),ot(new qe(.9,.9,1.8,14),Y(8018496),et.tank,.9),ot(new qe(1,.9,.15,14),Y(4864560),et.tank,1.85),ot(new qe(.04,.04,4,5),Y(3355443),et.ant,2);let It=new ti(.5,12,6,0,Math.PI*2,0,Math.PI/2.6);It.rotateX(-1),ot(It,Y(14211280,.6,.1),et.dish,.6);let Ut=new ie(new Tn(2400,2400),new Te({map:Cc(3),roughness:.95}));Ut.rotation.x=-Math.PI/2,Ut.material.map.repeat.set(2400/8,2400/8),Ut.receiveShadow=!0,i.add(Ut);let Qt={grass:new An,plaza:new An,parking:new An};for(let R of t.areas){let x=R.p.map(W=>new xt(W[0],W[1])),T=[];try{T=Ni.triangulateShape(x,[])}catch{continue}let C={grass:.02,plaza:.012,parking:.03}[R.t],L={grass:6,plaza:8,parking:10}[R.t];for(let W of T){let V=[R.p[W[0]],R.p[W[1]],R.p[W[2]]],st=(V[1][0]-V[0][0])*(V[2][1]-V[0][1])-(V[1][1]-V[0][1])*(V[2][0]-V[0][0])<0?[0,1,2]:[0,2,1];Qt[R.t].tri(...st.map(j=>[V[j][0],C,V[j][1]]),[0,1,0],...st.map(j=>[V[j][0]/L,V[j][1]/L]))}}let fe=Bu(5),ct=zu(6),bt=ku(7),Ht=new Te({map:fe,roughness:.9,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),St=new Te({map:ct,roughness:.95,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),Gt=(R,x)=>{if(!R.p.length)return;let T=new ie(R.build(),x);T.receiveShadow=!0,i.add(T)};Gt(Qt.grass,new Te({map:bt,roughness:1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1})),Gt(Qt.plaza,St),Gt(Qt.parking,Ht);let te=new An,jt=new An,he=new An,ut=new An,_t=new An;function F(R,x,T,C,L,W){let V=x.length;if(V<2)return;let q=[],st=[];for(let j=0;j<V;j++){let ft=x[Math.max(0,j-1)],y=x[Math.min(V-1,j+1)],U=y[0]-ft[0],k=y[1]-ft[1],O=Math.hypot(U,k)||1;U/=O,k/=O;let B=-k,J=U,it=1;if(j>0&&j<V-1){let nt=x[j][0]-x[j-1][0],lt=x[j][1]-x[j-1][1],mt=Math.hypot(nt,lt)||1,Rt=Math.abs(B*(-lt/mt)+J*(nt/mt));it=1/Math.max(.6,Rt)}q.push([x[j][0]+B*T/2*it,x[j][1]+J*T/2*it]),st.push([x[j][0]-B*T/2*it,x[j][1]-J*T/2*it])}for(let j=0;j<V-1;j++){let ft=[q[j],st[j],st[j+1],q[j+1]],y=ft.map(O=>[O[0],C,O[1]]),U=ft.map(O=>[O[0]/L,O[1]/L]);(ft[1][0]-ft[0][0])*(ft[2][1]-ft[0][1])-(ft[1][1]-ft[0][1])*(ft[2][0]-ft[0][0])<0?R.quad(y[0],y[1],y[2],y[3],[0,1,0],U[0],U[1],U[2],U[3],W):R.quad(y[0],y[3],y[2],y[1],[0,1,0],U[0],U[3],U[2],U[1],W)}}function zt(R,x,T,C,L,W){for(let q=0;q<14;q++){let st=q/14*Math.PI*2,j=(q+1)/14*Math.PI*2,ft=[x[0],C,x[1]],y=[x[0]+Math.cos(j)*T,C,x[1]+Math.sin(j)*T],U=[x[0]+Math.cos(st)*T,C,x[1]+Math.sin(st)*T];R.tri(ft,y,U,[0,1,0],[ft[0]/L,ft[2]/L],[y[0]/L,y[2]/L],[U[0]/L,U[2]/L],W)}}let pt=new Map;for(let R of t.roads)(v.has(R.t)||R.t==="pedestrian")&&R.nd.forEach((x,T)=>{pt.has(x)||pt.set(x,{c:0,p:R.p[T]}),pt.get(x).c++});let At=[];for(let[R,x]of pt)x.c>=2&&At.push(x.p);s.junctions=At;let yt=(R,x,T)=>At.some(C=>Math.abs(C[0]-R)<T&&Math.abs(C[1]-x)<T&&Math.hypot(C[0]-R,C[1]-x)<T),$t=[.78,.77,.74];for(let R of t.roads){if(R.t==="foot"){F(ut,R.p,2.4,.025,8);continue}if(R.t==="pedestrian"){F(he,R.p,12,.014,8),zt(he,R.p[0],6,.014,8),zt(he,R.p[R.p.length-1],6,.014,8);continue}let x=R.w;if(F(te,R.p,x,.04,10),F(jt,R.p,x+.7,.035,1,$t),zt(te,R.p[0],x/2,.04,10),zt(te,R.p[R.p.length-1],x/2,.04,10),zt(jt,R.p[0],x/2+.35,.035,1,$t),zt(jt,R.p[R.p.length-1],x/2+.35,.035,1,$t),R.t!=="service"&&s.roadsDrive.push(R),x>=6&&R.t!=="service"&&R.t!=="living_street"){let T=R.ow?Math.max(1,Math.round(x/3.3)):2,C=[];if(R.ow)for(let L=1;L<T;L++)C.push(-x/2+L*x/T);else C.push(0);for(let L of C){let W=0;for(let V=0;V<R.p.length-1;V++){let q=R.p[V],st=R.p[V+1],j=st[0]-q[0],ft=st[1]-q[1],y=Math.hypot(j,ft);if(y<.1)continue;let U=j/y,k=ft/y,O=-k,B=U;for(let J=0;J<y;J+=.5){let it=(W+J)%6;if(it<3&&it+.5<=3){let nt=q[0]+U*J+O*L,lt=q[1]+k*J+B*L;if(yt(nt,lt,R.t==="primary"?11:8))continue;let mt=.08,Rt=[nt+O*mt,.05,lt+B*mt],Mt=[nt-O*mt,.05,lt-B*mt],Wt=[nt-O*mt+U*.5,.05,lt-B*mt+k*.5],Jt=[nt+O*mt+U*.5,.05,lt+B*mt+k*.5];_t.quad(Rt,Jt,Wt,Mt,[0,1,0],[0,0],[0,0],[0,0],[0,0])}}W+=y}}}if(["primary","secondary","tertiary","residential","unclassified"].includes(R.t)&&x>=6)for(let T of[0,1]){let C=T?R.nd[R.nd.length-1]:R.nd[0];if((pt.get(C)?.c||0)<3)continue;let L=T?[...R.p].reverse():R.p,W=L[0],V=L[1],q=V[0]-W[0],st=V[1]-W[1],j=Math.hypot(q,st),ft=R.t==="primary"?9:6.5;if(j<ft+4)continue;let y=q/j,U=st/j,k=-U,O=y,B=W[0]+y*ft,J=W[1]+U*ft;for(let it=-x/2+.6;it<x/2-.5;it+=1){let nt=B+k*it,lt=J+O*it,mt=.25,Rt=1.4,Mt=[nt+k*mt-y*Rt,.05,lt+O*mt-U*Rt],Wt=[nt-k*mt-y*Rt,.05,lt-O*mt-U*Rt],Jt=[nt-k*mt+y*Rt,.05,lt-O*mt+U*Rt],re=[nt+k*mt+y*Rt,.05,lt+O*mt+U*Rt];_t.quad(Mt,re,Jt,Wt,[0,1,0],[0,0],[0,0],[0,0],[0,0])}}}Gt(jt,new Te({vertexColors:!0,roughness:.9,polygonOffset:!0,polygonOffsetFactor:-1.5,polygonOffsetUnits:-1.5})),Gt(ut,new Te({map:Cc(11,"#9a958c",64),roughness:.95,polygonOffset:!0,polygonOffsetFactor:-1.2,polygonOffsetUnits:-1.2})),Gt(he,St),Gt(te,Ht),Gt(_t,new Te({color:15262936,roughness:.7,side:En,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}));let Bt=[];for(let R of s.roadsDrive){let x=0;for(let T=0;T<R.p.length-1;T++){let C=R.p[T],L=R.p[T+1],W=Math.hypot(L[0]-C[0],L[1]-C[1]);for(let V=(17-x%17+17)%17;V<W;V+=23){let q=V/W;Bt.push({x:C[0]+(L[0]-C[0])*q+(Bt.length%3-1)*1.2,z:C[1]+(L[1]-C[1])*q,y:.055,rot:0})}x+=W}}let I=new Te({color:2763306,roughness:.6,metalness:.4,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}),S=new Ao(.35,12);S.rotateX(-Math.PI/2),ot(S,I,Bt,0).castShadow=!1;let X=(t.trees||[]).slice();if(X.length<120)for(let R of s.roadsDrive){if(!["residential","tertiary","unclassified","living_street","secondary"].includes(R.t))continue;let x=10;for(let T=0;T<R.p.length-1;T++){let C=R.p[T],L=R.p[T+1],W=Math.hypot(L[0]-C[0],L[1]-C[1]);if(W<1)continue;let V=(L[0]-C[0])/W,q=(L[1]-C[1])/W;for(;x<W;){for(let st of[-1,1]){if(!(X.length+st&1))continue;let j=C[0]+V*x-q*(R.w/2+2.5)*st,ft=C[1]+q*x+V*(R.w/2+2.5)*st;X.push([j,ft])}x+=16+X.length*5%7}x-=W}}for(let R of t.areas||[]){if(!(R.park||R.t==="grass"))continue;let x=R.p;if(!x||x.length<3)continue;let T=1e9,C=-1e9,L=1e9,W=-1e9;for(let st of x)T=Math.min(T,st[0]),C=Math.max(C,st[0]),L=Math.min(L,st[1]),W=Math.max(W,st[1]);let V=Math.abs((C-T)*(W-L)),q=Math.min(40,Math.floor(V/220));for(let st=0;st<q;st++){let j=T+st*57%100/100*(C-T),ft=L+st*91%100/100*(W-L);tn(j,ft,x)&&X.push([j,ft])}}let at=X.filter(R=>!s.buildings.some(x=>Math.abs(x.b.p[0][0]-R[0])<80&&tn(R[0],R[1],x.b.p))),ht=Nn(77),rt=new ti(1,28,16);rt.rotateX(Math.PI/2);{let R=rt.attributes.position,x=[];for(let T=0;T<R.count;T++){let C=R.getX(T),L=R.getY(T),W=R.getZ(T),V=1+.07*Math.sin(C*5.1+W*2.3)*Math.cos(W*4.7-L*3.1)+.05*Math.sin(L*7+C*3);R.setXYZ(T,C*V,L*V*.62,W*V);let q=.55+.45*Math.max(0,(L+.3)/1.3);x.push(q,q,q)}rt.setAttribute("color",new Me(x,3)),rt.computeVertexNormals()}let Vt=new Te({color:16777215,map:Xu(5),vertexColors:!0,roughness:.95});Vt.map.repeat.set(3,2);let Et=new Dn(rt,Vt,at.length*3),Ft=new Dn(new qe(.16,.26,4.2,8),new Te({color:3811870,roughness:.9}),at.length),Ot=new Qe,gt=new ne;at.forEach((R,x)=>{let T=1.7+ht()*1;Ot.position.set(R[0],2.1,R[1]),Ot.rotation.set(0,0,0),Ot.scale.set(1,1,1),Ot.updateMatrix(),Ft.setMatrixAt(x,Ot.matrix);let C=.22+ht()*.08,L=.42+ht()*.18,W=.3+ht()*.08;Ot.position.set(R[0],4.4+T*.25,R[1]),Ot.rotation.set(0,ht()*6,0),Ot.scale.set(T,T,T),Ot.updateMatrix(),Et.setMatrixAt(x*3,Ot.matrix),gt.setHSL(C,L,W),Et.setColorAt(x*3,gt);for(let V=1;V<3;V++){let q=ht()*6.28,st=T*.45,j=T*(.55+ht()*.15);Ot.position.set(R[0]+Math.cos(q)*st,4.6+T*.3+ht()*.4,R[1]+Math.sin(q)*st),Ot.scale.set(j,j,j),Ot.rotation.set(0,ht()*6,0),Ot.updateMatrix(),Et.setMatrixAt(x*3+V,Ot.matrix),gt.setHSL(C+.01*V,L,W+.03*V),Et.setColorAt(x*3+V,gt)}}),Et.castShadow=!0,Et.receiveShadow=!0,Ft.castShadow=!0,i.add(Et,Ft);let Pt=t.lamps.filter(R=>!s.buildings.some(x=>Math.abs(x.b.p[0][0]-R[0])<80&&tn(R[0],R[1],x.b.p))),Yt=new Dn(new qe(.07,.1,5.5,6),new Te({color:3816770,metalness:.5,roughness:.5}),Pt.length),Kt=new Te({color:5592405,emissive:16767392,emissiveIntensity:1});s.lampHeadMat=Kt;let vt=new Dn(new We(.5,.18,.5),Kt,Pt.length),de=new je({map:Sr("rgba(255,200,120,1)"),transparent:!0,blending:ci,depthWrite:!1,opacity:.5,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-6}),ae=new Tn(1,1);ae.rotateX(-Math.PI/2);let Ue=Pt.length,G=new Dn(ae,de,Ue);Pt.forEach((R,x)=>{Ot.rotation.set(0,0,0),Ot.scale.set(1,1,1),Ot.position.set(R[0],2.75,R[1]),Ot.updateMatrix(),Yt.setMatrixAt(x,Ot.matrix),Ot.position.set(R[0],5.5,R[1]),Ot.updateMatrix(),vt.setMatrixAt(x,Ot.matrix),Ot.position.set(R[0],.07,R[1]),Ot.scale.set(13,1,13),Ot.updateMatrix(),G.setMatrixAt(x,Ot.matrix)}),Yt.castShadow=!0,i.add(Yt,vt,G),s.poolMat=de,s.lamps=Pt;let Ct=(t.props||[]).slice();if(Ct.length<50)for(let R of s.roadsDrive){if(!["residential","living_street","tertiary","unclassified"].includes(R.t))continue;let x=14;for(let T=0;T<R.p.length-1;T++){let C=R.p[T],L=R.p[T+1],W=Math.hypot(L[0]-C[0],L[1]-C[1]);if(W<1)continue;let V=(L[0]-C[0])/W,q=(L[1]-C[1])/W;for(;x<W;){let st=Ct.length%2?1:-1,j=C[0]+V*x-q*(R.w/2+1.55)*st,ft=C[1]+q*x+V*(R.w/2+1.55)*st;if(!s.buildings.some(y=>Math.abs(y.b.p[0][0]-j)<70&&tn(j,ft,y.b.p))){let y=["bollard","bin","planter","bench","hydrant"];Ct.push({p:[j,ft],k:y[Ct.length%y.length],rot:Math.atan2(V,q)})}x+=12+Ct.length*3%6}x-=W}}let K=[],dt=[],Dt=[],Lt=[],se=[];for(let R of Ct){let x=R.p[0],T=R.p[1];if(s.buildings.some(L=>Math.abs(L.b.p[0][0]-x)<55&&tn(x,T,L.b.p)))continue;let C={x,z:T,rot:R.rot||0,y:0};R.k==="bench"?K.push(C):R.k==="bin"?dt.push(C):R.k==="hydrant"?Dt.push(C):R.k==="planter"?se.push(C):Lt.push(C)}ot(new We(1.15,.08,.38),Y(5914672),K,.42);{let R=new Dn(new We(1.15,.32,.06),Y(4863016),Math.max(1,K.length)),x=new Qe;K.forEach((T,C)=>{let L=Math.sin(T.rot||0),W=Math.cos(T.rot||0);x.position.set(T.x+L*.16,.62,T.z+W*.16),x.rotation.set(0,T.rot||0,0),x.scale.set(1,1,1),x.updateMatrix(),R.setMatrixAt(C,x.matrix)}),K.length&&(R.castShadow=!0,i.add(R))}if(ot(new qe(.18,.2,.55,8),Y(2764338,.6,.3),dt,.28),ot(new qe(.12,.14,.55,8),Y(11538456,.5,.4),Dt,.28),ot(new qe(.08,.09,.7,6),Y(13157560,.5,.2),Lt,.35),ot(new qe(.35,.4,.45,10),Y(6967360),se,.22),se.length){let R=new Dn(new qe(.32,.32,.18,10),new Te({color:3828264,roughness:1}),se.length),x=new Qe;se.forEach((T,C)=>{x.position.set(T.x,.55,T.z),x.rotation.set(0,0,0),x.scale.set(1,1,1),x.updateMatrix(),R.setMatrixAt(C,x.matrix)}),R.castShadow=!0,i.add(R)}let De=(R,x,T)=>{let C=null,L=T;for(let W of s.buildings)if(!(Math.abs(W.b.p[0][0]-R)>90||Math.abs(W.b.p[0][1]-x)>90))for(let V of W.edges){let[q,st,j]=Ei(R,x,V.A[0],V.A[1],V.B[0],V.B[1]);q<L&&V.len>4&&(L=q,C={B:W,e:V,cx:st,cz:j})}return C};s.facing=De;let ce=new Set,pe={},un=(R,x,T,C={})=>{let L=R.e,W=Math.round(R.cx*2)+"_"+Math.round(R.cz*2);if(ce.has(L))return null;ce.add(L);let V=(L.B[0]-L.A[0])/L.len,q=(L.B[1]-L.A[1])/L.len;(V<-.3||Math.abs(V)<=.3&&q>0)&&(V=-V,q=-q);let st=Math.min(C.w||5.5,L.len-.6),j=st/4,ft=Math.min(R.B.h-.8,R.B.shopish?4.2:3.6),y=new je({map:Er(x,{fg:T,sub:C.sub}),toneMapped:!1});s.neonMats.push(y);let U=new Tn(st,j),k=new ie(U,y),O=new H(V,0,q),B=new H(q,0,-V),J=new H().crossVectors(O,B),it=.42,nt=B.clone().multiplyScalar(Math.cos(it)).add(new H(0,1,0).multiplyScalar(Math.sin(it))),lt=new H().crossVectors(O,nt),mt=new Be().makeBasis(O,nt,lt);k.quaternion.setFromRotationMatrix(mt);let Rt=j/2+.25,Mt=B.x*L.nx+B.z*L.nz;k.position.set(R.cx+L.nx*Rt,ft+.15+(Mt<0?j*.5*Math.sin(it):0),R.cz+L.nz*Rt),i.add(k);let Wt=new ie(new We(st,.08,j*.9),new Te({color:2236962}));return Wt.quaternion.copy(k.quaternion),Wt.rotateX(-Math.PI/2),Wt.position.copy(k.position).add(new H(0,-.06,0)),Wt.castShadow=!0,i.add(Wt),s.signs.push(k),k},Mn=e.hubNear||[0,0],wi=t.pois.filter(R=>["fast_food","restaurant"].includes(R.a)&&Math.abs(R.p[0])<450&&Math.abs(R.p[1])<380).map(R=>({p:R,d:Math.hypot(R.p[0]-Mn[0],R.p[1]-Mn[1])+(R.a==="fast_food"?0:60)+(R.fallback?40:0)-(R.n?30:0)})).sort((R,x)=>R.d-x.d).find(R=>De(R.p.p[0],R.p.p[1],20));for(let R of t.pois){if(R===wi?.p||!["fast_food","restaurant","cafe","bar","pub"].includes(R.a))continue;let x=De(R.p[0],R.p[1],14);if(!x)continue;let T=Yu[R.a]||Yu.fast_food;pe[R.a]=(pe[R.a]||0)+1;let C=T[pe[R.a]%T.length];un(x,C,Zo[n()*Zo.length|0])}for(let R of s.buildings)if(R.shopish)for(let x of R.edges)x.street&&x.len>7&&n()<.22&&!ce.has(x)&&un({B:R,e:x,cx:x.mx,cz:x.mz},Zu[n()*Zu.length|0],Zo[n()*Zo.length|0],{w:4.5});let Ti=[["SCHAUM","das Feierabendbier","#ffe03f","#7a1010"],["KOLA ROT","eiskalt seit 1987","#ffffff","#b0101a"],["NACHTEXPRESS","Taxi rund um die Uhr","#111111","#f2c200"],["ZAHNARZT DR. KNIRSCH","tut kaum weh","#1a3a6a","#e8f0f8"],["POTT FM 99,1","Radio f\xFCr die Hood","#3ff0ff","#14102a"],["GOLDENE KRONE","Spielothek","#ffd04f","#3a0a3a"]],Xn=0;for(let R of s.buildings.filter(x=>x.h>15).sort((x,T)=>x.b.r%97-T.b.r%97).slice(0,10)){let x=R.edges.filter(O=>O.len>9).sort((O,B)=>B.nz-O.nz)[0];if(!x)continue;let T=Ti[Xn++%Ti.length],C=new je({map:Er(T[0],{fg:T[2],bg:T[3],core:T[2],border:T[2],blur:8,sub:T[1],w:512,h:192,font:'900 80px "Arial Black", Impact, sans-serif'}),toneMapped:!1});s.neonMats.push(C);let L=Math.min(9,x.len*.8),W=L*.375,V=new ie(new Tn(L,W),C),q=(x.B[0]-x.A[0])/x.len,st=(x.B[1]-x.A[1])/x.len;q<0&&(q=-q,st=-st);let j=new H(q,0,st),y=new H(st,0,-q).clone().multiplyScalar(Math.cos(.9)).add(new H(0,Math.sin(.9),0));V.quaternion.setFromRotationMatrix(new Be().makeBasis(j,y,new H().crossVectors(j,y)));let U=[x.mx-x.nx*2.2,x.mz-x.nz*2.2];V.position.set(U[0],R.h+.45+1.2+W/2*Math.sin(.9),U[1]),i.add(V);for(let O of[-.4,.4]){let B=new ie(new We(.15,1.6+W*.6,.15),Y(2763306));B.position.set(U[0]+q*L*O,R.h+.45+(1.6+W*.6)/2,U[1]+st*L*O),B.castShadow=!0,i.add(B)}let k=new ie(new Tn(L,W),Y(3158064));k.quaternion.copy(V.quaternion),k.rotateY(Math.PI),k.position.copy(V.position),k.castShadow=!0,i.add(k)}return s.hubPoi=wi?.p,s.placeSign=un,s.propMat=Y,s}var e_,An,Pc,qu,Yu,Zu,Zo,Ku=nn(()=>{Vn();Ic();e_=3.3;An=class{constructor(){this.p=[],this.n=[],this.u=[],this.c=[]}tri(t,e,n,s,r,o,a,l){this.p.push(...t,...e,...n);for(let c=0;c<3;c++)this.n.push(...s);if(this.u.push(...r,...o,...a),l)for(let c=0;c<3;c++)this.c.push(...l)}quad(t,e,n,s,r,o,a,l,c,h){this.tri(t,e,n,r,o,a,l,h),this.tri(t,n,s,r,o,l,c,h)}build(){let t=new on;return t.setAttribute("position",new Me(this.p,3)),t.setAttribute("normal",new Me(this.n,3)),t.setAttribute("uv",new Me(this.u,2)),this.c.length&&t.setAttribute("color",new Me(this.c,3)),t.computeBoundingSphere(),t}},Pc=class{constructor(t=16){this.cell=t,this.m=new Map}key(t,e){return t*10007+e}add(t,e,n,s){let r=this.cell,o=Math.floor(Math.min(t,n)/r)-1,a=Math.floor(Math.max(t,n)/r)+1,l=Math.floor(Math.min(e,s)/r)-1,c=Math.floor(Math.max(e,s)/r)+1;for(let h=o;h<=a;h++)for(let p=l;p<=c;p++){let u=this.key(h,p);this.m.has(u)||this.m.set(u,[]),this.m.get(u).push([t,e,n,s])}}near(t,e){return this.m.get(this.key(Math.floor(t/this.cell),Math.floor(e/this.cell)))||[]}resolve(t,e){let n=null;for(let s=0;s<3;s++){let r=!1;for(let o of this.near(t.x,t.z)){let[a,l,c]=Ei(t.x,t.z,o[0],o[1],o[2],o[3]);if(a<e){let h=t.x-l,p=t.z-c,u=Math.hypot(h,p)||1;h/=u,p/=u,t.x=l+h*e,t.z=c+p*e,n={x:h,z:p},r=!0}}if(!r)break}return n}},qu=[[.46,.44,.4],[.58,.3,.22],[.3,.42,.34],[.7,.62,.46],[.26,.27,.31],[.52,.44,.54],[.32,.44,.56],[.74,.4,.26],[.62,.62,.58],[.34,.26,.22],[.24,.48,.5],[.6,.56,.3]],Yu={fast_food:["PIZZA NOTTE","BURGER BUDE","CURRY ECK","FALAFEL HOUSE","IMBISS ROSI","H\xC4HNCHEN HEINZ","WOK STATION 9","KUMPIR K\xD6NIG","B\xD6REK BOX","POMMES POTT"],restaurant:["TRATTORIA LUNA","TAVERNA DELFI","ASIA GARDEN","STEAKHAUS RUHR","LA CANTINA","BALKAN GRILL","SUSHI KAZE","PHO SAIGON","GASTHAUS KRONE"],cafe:["CAF\xC9 KORN","KAFFEEKLATSCH","BACKSTUBE 11","ESPRESSO 44","CAF\xC9 ZUCKER"],bar:["BAR NOIR","LUCKY 13","BLAUE STUNDE","EXIT BAR","COCKTAIL CLUB"],pub:["ZUM HENKEL","KNEIPE 7","ZUR ECKE","PILS-STUBE","SCHICHT-ENDE"]},Zu=["KIOSK","SPIELHALLE","WETTB\xDCRO","HANDY DOC","SHISHA LOUNGE","SALON SCHNITT","ORIENT MARKT","PFANDHAUS","TATTOO INK","SP\xC4TI 24","GOLD ANKAUF","NAGEL STUDIO","REISEB\xDCRO SONNE","APOTHEKE AM ECK"],Zo=["#ff3fa4","#3ff0ff","#ffe03f","#7dff5a","#ff6a2a","#b46bff","#ff2a3a"]});function Gi(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new on,c=0;for(let h=0;h<i.length;++h){let p=i[h],u=0;if(e!==(p.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in p.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(p.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==p.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in p.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(p.morphAttributes[f])}if(t){let f;if(e)f=p.index.count;else if(p.attributes.position!==void 0)f=p.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,p=[];for(let u=0;u<i.length;++u){let f=i[u].index;for(let g=0;g<f.count;++g)p.push(f.getX(g)+h);h+=i[u].attributes.position.count}l.setIndex(p)}for(let h in r){let p=Ju(r[h]);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,p)}for(let h in o){let p=o[h][0].length;if(p===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<p;++u){let f=[];for(let _=0;_<o[h].length;++_)f.push(o[h][_][u]);let g=Ju(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Ju(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new rn(o,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let p=l/e;for(let u=0,f=h.count;u<f;u++)for(let g=0;g<e;g++){let _=h.getComponent(u,g);a.setComponent(u+p,g,_)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var Lc=nn(()=>{Vn()});function ef(i){i=i.index?i.toNonIndexed():i;for(let t of Object.keys(i.attributes))["position","normal","uv"].includes(t)||i.deleteAttribute(t);return i.attributes.uv||i.setAttribute("uv",new rn(new Float32Array(i.attributes.position.count*2),2)),i.clearGroups(),i}function ze(i,t){i=ef(i);let e=i.attributes.position.count,n=new Float32Array(e*3);for(let s=0;s<e;s++)n[s*3]=t[0],n[s*3+1]=t[1],n[s*3+2]=t[2];return i.setAttribute("color",new rn(n,3)),i}function Qu(i,t){i=ef(i);let e=i.attributes.position,n=e.count,s=new Float32Array(n*3),r=new H,o=new H,a=new H,l=new H;for(let c=0;c<n;c+=3){r.fromBufferAttribute(e,c),o.fromBufferAttribute(e,c+1),a.fromBufferAttribute(e,c+2),l.subVectors(a,o).cross(o.clone().sub(r)).normalize(),l.lengthSq()<.5&&l.set(0,1,0);let h=(r.y+o.y+a.y)/3,p=(r.z+o.z+a.z)/3,u=t(-l.x,-l.y,-l.z,h,p);for(let f=0;f<3;f++)s[(c+f)*3]=u[0],s[(c+f)*3+1]=u[1],s[(c+f)*3+2]=u[2]}return i.setAttribute("color",new rn(s,3)),i}function ju(i,t,e=.06){let n=new os;n.moveTo(i[0][0],i[0][1]);for(let o=1;o<i.length;o++)n.lineTo(i[o][0],i[o][1]);let s=Math.max(.02,t-2*e),r=new Vs(n,{depth:s,bevelEnabled:!0,bevelThickness:e,bevelSize:e,bevelSegments:2,curveSegments:1});return r.translate(0,0,-s/2),r.rotateY(-Math.PI/2),r}function o_(i,t=[1,1,1]){let e=hs[i],n=[],{L:s,W:r,hb:o,hr:a}=e,l=.34,c=.06,h=t,p=[h[0]*.8,h[1]*.8,h[2]*.8],u=s/2-e.hood,f=u-e.ws,g=f-e.roof,_=g-e.rw,m=s/2-c,d=-s/2+c,M=e.van?[[m,o-.32],[m-.2,o-.12]]:[[m,o-.24],[m-.14,o-.1]],b=ju([[d,l],[m,l],...M,[u,o-c],[_,o-c],[d+.14,o-c-.02],[d,o-c-.14]],r,c);n.push(Qu(b,(D,z,A,E)=>E<.42?Wi:z>.6?h:p));let v=ju([[_,o-.02],[u,o-.02],[f,o+a-c],[g,o+a-c]],r-.16,c);{let D=v.attributes.position;for(let z=0;z<D.count;z++){let A=D.getY(z),E=1-.13*Math.max(0,Math.min(1,(A-o)/a));D.setX(z,D.getX(z)*E)}v.computeVertexNormals()}n.push(Qu(v,(D,z,A,E,w)=>z>.8&&E>o+a-.08?h:z>.25&&w>f-.05?i_:n_));let N=(f+g)/2-(e.van?.4:.05);for(let D of[-1,1])n.push(ze(Je(.06,a-.08,.12,D*((r-.16)/2*.935),o+a/2,N),h));let P=[s/2-.82-(e.van?.05:0),-s/2+.78];for(let D of[-1,1])for(let z of P){let A=new qe(.34,.34,.25,14);A.rotateZ(Math.PI/2),A.translate(D*(r/2-.1),.34,z),n.push(ze(A,s_));let E=new qe(.17,.17,.02,10);E.rotateZ(Math.PI/2),E.translate(D*(r/2+.03),.34,z),n.push(ze(E,r_)),n.push(ze(Je(.09,.1,1,D*(r/2+.005),.74,z),Wi))}if(n.push(ze(Je(r-.12,.2,.14,0,l+.08,s/2-.02),Wi),ze(Je(r-.12,.2,.14,0,l+.08,-s/2+.02),Wi)),n.push(ze(Je(r*.46,.12,.04,0,o-.27,s/2+.005),Wi)),n.push(ze(Je(r-.42,.03,.09,0,o+.005,u+.06),Wi)),!e.van)for(let D of[-1,1])n.push(ze(Je(.035,.02,e.hood-.45,D*.43,o-.01,u+(e.hood-.45)/2+.12),[h[0]*.72,h[1]*.72,h[2]*.72]));e.rw>.3&&n.push(ze(Je(r-.5,.02,.05,0,o-.01,_-.12),[h[0]*.7,h[1]*.7,h[2]*.7]));for(let D of[-1,1])n.push(ze(Je(.18,.1,.1,D*(r/2+.07),o+.06,u-.12),h));if(e.stripe)for(let D of[-1,1]){let z=[.95,.95,.92];n.push(ze(Je(.13,.02,e.hood-.2,D*.17,o-.015,u+(e.hood-.2)/2),z),ze(Je(.13,.02,e.roof+.1,D*.17*.87,o+a+.005,(f+g)/2),z),ze(Je(.13,.02,_-d-.15,D*.17,o-.04,(_+d)/2+.05),z))}if(e.rails)for(let D of[-1,1])n.push(ze(Je(.05,.05,e.roof*.85,D*(r/2-.08-.13*r/2),o+a+.02,(f+g)/2),Wi));return e.taxi&&n.push(ze(Je(.62,.17,.24,0,o+a+.08,(f+g)/2),[1,.93,.55])),e.van&&n.push(ze(Je(.02,.5,.03,r/2+.002,o-.1,g+.9),Wi)),Gi(n)}function a_(i){let t=hs[i],e=[],n=[],{L:s,W:r,hb:o}=t;for(let a of[-1,1])e.push(Je(.42,.13,.16,a*(r/2-.3),o-(t.van?.2:.14),s/2-.06)),n.push(Je(.4,.12,.12,a*(r/2-.28),o-.1,-s/2+.05));return{front:Gi(e),rear:Gi(n)}}function nf(i,t,e){let n=new In,s=new ne(t),r=o_(i,[s.r,s.g,s.b]),o=new ie(r,l_);o.castShadow=!0,o.receiveShadow=!0,n.add(o);let a=a_(i),l=new ie(a.front,e.head),c=new ie(a.rear,e.tail);n.add(l,c);let h=hs[i],p=new ie(e.blobGeo,e.blob);p.scale.set(h.W+.9,1,h.L+.9),p.position.y=.06,n.add(p);let u=new ie(e.coneGeo,e.cone);u.position.set(0,.07,h.L/2+7.5),n.add(u);let f=new Te({color:2763306,roughness:.95,metalness:.1}),g=new Te({color:1710618,roughness:1,metalness:0}),_=[];for(let M=0;M<4;M++){let b=new ie(new ti(.18+M*.04,8,6),f);b.visible=!1,b.scale.set(1.4,.35,1.1),n.add(b),_.push(b)}let m=[];for(let M=0;M<3;M++){let b=new ie(new We(.06,.04,.7+M*.2),g);b.visible=!1,n.add(b),m.push(b)}let d=new ie(new ti(.35,8,6),new je({color:8947848,transparent:!0,opacity:.45,depthWrite:!1}));return d.position.set(0,1.1,-h.L*.15),d.visible=!1,n.add(d),n.userData={type:i,T:h,cone:u,body:o,hf:l,hr:c,dents:_,scratches:m,smoke:d,damage:0,paint:[s.r,s.g,s.b]},n}function Ko(i,t){let n=(i.g||i).userData;if(!n||!n.dents)return;n.damage=Math.min(1,(n.damage||0)+Math.min(.35,t*.04));let s=n.T,r=n.damage;n.body&&(n.body.scale.set(1,1-r*.04,1-r*.08),n.body.position.z=-r*.12),n.dents.forEach((o,a)=>{let l=r>.08+a*.15;if(o.visible=l,l){let c=a%2?1:-1;o.position.set(c*(s.W/2-.1),.55+a*.08,s.L/2-.4-a*.35),o.scale.set(1.2+r,.25+r*.2,.9+r)}}),n.scratches.forEach((o,a)=>{let l=r>.12+a*.2;o.visible=l,l&&(o.position.set((a-1)*.25,.7,s.L/2-.9-a*.4),o.rotation.y=.2*a)}),n.smoke&&(n.smoke.visible=r>.55,n.smoke.scale.setScalar(.8+r*1.4),n.smoke.material.opacity=.25+r*.4),n.speedMul=Math.max(.35,1-r*.7)}function sf(i){let e=(i.g||i).userData;e&&(e.damage=0,e.speedMul=1,e.body&&(e.body.scale.set(1,1,1),e.body.position.z=0),(e.dents||[]).forEach(n=>n.visible=!1),(e.scratches||[]).forEach(n=>n.visible=!1),e.smoke&&(e.smoke.visible=!1))}function rf(i,t){let e=s=>{let r=Math.sin(i*91.7+s*13.3)*43758.5453;return r-Math.floor(r)},n=(s,r)=>s[e(r)*s.length|0];return{skin:t?.skin||n(c_,1),hair:t?.hair||n(h_,2),jacket:t?.jacket||n(u_,3),shirt:t?.shirt||n(f_,4),pants:t?.pants||n(d_,5),shoes:t?.shoes||n(p_,6),open:t?.open??e(7)<.4,long:t?.long??e(8)<.25,beanie:t?.beanie??e(10)<.1,coat:t?.coat??e(11)<.15}}function m_(i,t){let e=rf(i,t),n=[];return n.push(ze($o(.2,e.coat?.55:.4,0,e.coat?1.14:1.22,0,1.55,.95),e.jacket)),n.push(ze($o(.14,.42,0,1.48,0,1.35,1.25,Math.PI/2),e.jacket)),e.open&&n.push(ze(Je(.18,.48,.05,0,1.24,.16),e.shirt)),n.push(ze(Je(.22,.08,.26,0,1.55,0),e.jacket)),n.push(ze(new qe(.07,.075,.14,10).translate(0,1.6,0),e.skin)),n.push(ze(Dc(.17,0,1.78,.02,1.05,1.12,1.08),e.skin)),n.push(ze(Dc(.185,0,1.8,-.01,1.08,1.05,1.12,12,8,Math.PI*.62),e.beanie?e.jacket:e.hair)),e.long?n.push(ze(Je(.28,.34,.1,0,1.62,-.12),e.hair)):n.push(ze(Je(.2,.12,.08,0,1.7,-.12),e.hair)),n.push(ze($o(.16,.2,0,.96,0,1.15,.95,Math.PI/2),e.pants)),Gi(n)}function tf(i,t,e,n,s){let r=ze($o(i,t,0,-(t/2+i),0),e);return Gi([r,ze(n,s)])}function Uc(i,t,e,n=1.35){let s=new In,r=g=>{let _=Math.sin(i*51.7+g*7.3)*43758.5453;return _-Math.floor(_)},o=rf(i,e),a=new In;a.scale.setScalar(n),s.add(a);let l=new ie(m_(i,e),t.ped);l.castShadow=!0,a.add(l);let c=tf(.095,.74,o.pants,Je(.16,.1,.32,0,-.92,.06),o.shoes),h=tf(.07,.52,o.jacket,Dc(.065,0,-.68,.01),o.skin),p=[],u=[];for(let g of[-1,1]){let _=new In;_.position.set(g*.14,.94,0);let m=new ie(c,t.ped);m.castShadow=!0,_.add(m),a.add(_),p.push(_);let d=new In;d.position.set(g*.36,1.5,0),d.rotation.z=g*.1;let M=new ie(h,t.ped);M.castShadow=!0,d.add(M),a.add(d),u.push(d)}let f=new ie(t.blobGeo,t.blob);return f.scale.set(1.25,1,.95),f.position.y=.065,a.add(f),s.userData={legs:p,arms:u,body:a,phase:r(9)*6,bob:0},s}function Nc(i,t,e){let n=i.userData;if(t>.15){n.phase+=e*t*6.8;let r=Math.min(1.25,t/2.6)*1.05,o=Math.sin(n.phase)*r;n.legs[0].rotation.x=o,n.legs[1].rotation.x=-o,n.arms[0].rotation.x=-o*1.05,n.arms[1].rotation.x=o*1.05,n.legs[0].rotation.z=o*.05,n.legs[1].rotation.z=-o*.05,n.bob=Math.abs(Math.sin(n.phase*2))*.045*Math.min(1,t/3),n.body&&(n.body.position.y=n.bob)}else n.legs.forEach(r=>{r.rotation.x*=.75,r.rotation.z*=.75}),n.arms.forEach(r=>{r.rotation.x*=.75}),n.body&&(n.body.position.y*=.8)}var Je,n_,i_,s_,Wi,r_,hs,wr,l_,c_,h_,u_,f_,d_,p_,$o,Dc,of=nn(()=>{Vn();Lc();Je=(i,t,e,n,s,r)=>{let o=new We(i,t,e);return o.translate(n,s,r),o},n_=[.07,.09,.12],i_=[.16,.22,.3],s_=[.05,.05,.055],Wi=[.11,.11,.12],r_=[.6,.62,.64],hs={sedan:{L:4.4,W:1.8,hb:.86,hr:.5,hood:1.25,ws:.75,roof:1.2,rw:.6},hatch:{L:3.9,W:1.72,hb:.86,hr:.52,hood:1,ws:.7,roof:1.42,rw:.42},kombi:{L:4.7,W:1.82,hb:.88,hr:.52,hood:1.25,ws:.75,roof:2.1,rw:.25,rails:!0},van:{L:4.9,W:1.95,hb:1,hr:.88,hood:.95,ws:.85,roof:2.85,rw:.12,rails:!0,van:!0},taxi:{L:4.5,W:1.82,hb:.86,hr:.5,hood:1.28,ws:.75,roof:1.25,rw:.6,taxi:!0},coupe:{L:4.5,W:1.86,hb:.8,hr:.42,hood:1.6,ws:.85,roof:.8,rw:.8,stripe:!0}};wr=[10100516,2310526,13216058,2776892,13619142,2236966,8028038,6169682,12081696,3832462,5126700,14606046,4872762,9054746],l_=new Te({vertexColors:!0,roughness:.32,metalness:.28});c_=[[.9,.72,.58],[.78,.57,.42],[.56,.38,.26],[.36,.25,.18],[.95,.8,.68]],h_=[[.07,.05,.04],[.3,.19,.1],[.62,.48,.26],[.18,.18,.18],[.45,.14,.08],[.75,.72,.68]],u_=[[.12,.14,.22],[.18,.22,.34],[.32,.33,.36],[.22,.28,.18],[.42,.14,.14],[.55,.48,.36],[.2,.28,.42],[.5,.22,.14],[.16,.2,.2],[.58,.58,.56]],f_=[[.86,.84,.78],[.18,.18,.2],[.55,.62,.72],[.62,.18,.18],[.72,.64,.48]],d_=[[.16,.22,.38],[.1,.1,.12],[.24,.28,.4],[.32,.3,.24],[.34,.34,.36]],p_=[[.06,.06,.06],[.85,.85,.82],[.28,.18,.1]],$o=(i,t,e,n,s,r=1,o=1,a=0)=>{let l=new To(i,t,4,10);return a&&l.rotateZ(a),l.scale(r,1,o),l.translate(e,n,s),l},Dc=(i,t,e,n,s=1,r=1,o=1,a=12,l=8,c=Math.PI)=>{let h=new ti(i,a,l,0,Math.PI*2,0,c);return h.scale(s,r,o),h.translate(t,e,n),h}});function Oc(i){let t=2166136261,e=String(i);for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619)>>>0;return t^=t>>>13,t=Math.imul(t,1540483477)>>>0,t^=t>>>15,t>>>0}function Jo(i){if(i==null)return null;let t=parseFloat(String(i).replace("m","").replace(",",".").split(";")[0].trim());return isFinite(t)?t:null}function Bc(i){let t=0;for(let e=0;e<i.length;e++){let[n,s]=i[e],[r,o]=i[(e+1)%i.length];t+=n*o-r*s}return t/2}function af(i){if(!i)return null;let t=String(i).trim().match(/^#?([0-9a-fA-F]{6})$/);return t?"#"+t[1].toLowerCase():null}function g_(i,t){let e=111320*Math.cos(i*Math.PI/180),n=110574,s=660/e,r=560/n,o=`${(i-r).toFixed(6)},${(t-s).toFixed(6)},${(i+r).toFixed(6)},${(t+s).toFixed(6)}`;return`[out:json][timeout:55];(
way["building"](${o});relation["building"](${o});
way["highway"](${o});way["landuse"](${o});way["leisure"](${o});way["natural"~"wood|scrub"](${o});
way["amenity"="parking"](${o});
node["natural"="tree"](${o});node["highway"="street_lamp"](${o});
node["amenity"~"^(restaurant|fast_food|cafe|bar|pub|car_repair|fuel|school|place_of_worship|bench)$"](${o});
node["shop"](${o});node["tourism"="artwork"](${o});
node["emergency"="fire_hydrant"](${o});node["amenity"="waste_basket"](${o});
);out body;>;out skel qt;`}async function zc(i,t,e){let n=new AbortController,s=setTimeout(()=>n.abort(),e);try{return await fetch(i,{...t,signal:n.signal})}finally{clearTimeout(s)}}async function lf(i,t,e){let n=g_(i,t),s=null,r=Date.now(),o=[0,3e3,8e3];for(let l=0;l<o.length;l++){if(o[l])for(let c=o[l]/1e3;c>0;c--)e&&e(`Kartenserver ausgelastet \u2013 neuer Versuch in ${c} s \u2026`),await new Promise(h=>setTimeout(h,1e3));for(let c=0;c<Fc.length;c++){let h=Fc[c];if(Date.now()-r>16e4)break;try{e&&e(l||c?`Lade Karte \u2013 Server ${c+1}/${Fc.length}, Versuch ${l+1} \u2026`:"Lade Stra\xDFen und H\xE4user aus OpenStreetMap \u2026");let p=await zc(h,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"data="+encodeURIComponent(n)},c===0?5e4:4e4);if(!p.ok){s=new Error("HTTP "+p.status);continue}e&&e("Karte empfangen, lese Daten \u2026");let u=await p.json();if(!u.elements){s=new Error("leere Antwort");continue}if(u.remark&&/timed out|runtime error/i.test(u.remark)&&u.elements.length<50){s=new Error(u.remark);continue}return u.elements}catch(p){s=p}}}let a=new Error("overpass");throw a.cause=s,a.timeout=!!(s&&s.name==="AbortError"),a}function cf(i,t,e){let n=111320*Math.cos(t*Math.PI/180),s=110574,r=(_,m)=>[Math.round((m-e)*n*100)/100,Math.round(-(_-t)*s*100)/100],o=_=>Math.abs(_[0])<560&&Math.abs(_[1])<460,a=new Map,l=new Map,c=new Map;for(let _ of i)_.type==="node"&&_.lat!=null?(a.set(_.id,[_.lat,_.lon]),_.tags&&c.set(_.id,_.tags)):_.type==="way"&&l.set(_.id,_);for(let _ of i)_.type==="way"&&_.tags&&l.set(_.id,_);let h={buildings:[],roads:[],areas:[],trees:[],lamps:[],pois:[],props:[],bbox:{x:560,z:460}},p=new Set;function u(_,m,d){if(p.has(_))return;p.add(_);let M=m.filter(Y=>a.has(Y)).map(Y=>r(...a.get(Y)));if(M.length>1&&M[0][0]===M[M.length-1][0]&&M[0][1]===M[M.length-1][1]&&(M=M.slice(0,-1)),M.length<3)return;let b=0,v=0;for(let Y of M)b+=Y[0],v+=Y[1];if(b/=M.length,v/=M.length,!o([b,v]))return;let N=Bc(M);N<0&&M.reverse();let P=Math.abs(N);if(P<6)return;let D=d.building||"yes";if(["roof","carport","construction","ruins"].includes(D)||d["building:part"])return;let z=Jo(d["building:levels"]),A=Jo(d.height),E=Oc(_);z==null&&(["garage","garages","shed","kiosk","hut"].includes(D)?z=1:["church","cathedral","chapel"].includes(D)?z=3:P<40?z=2:P<120?z=3+E%2:z=4+E%3);let w=Jo(d["roof:levels"])||0;A==null&&(A=z*3.3+(z>1?1:.4)+w*1.8),A=Math.max(A,3.2),A>160&&(A=160);let $="res";(["retail","commercial","office","supermarket","department_store","hotel"].includes(D)||d.shop||d.amenity)&&($="shop"),(["church","cathedral","chapel","religious"].includes(D)||d.amenity==="place_of_worship")&&($="church"),["garage","garages","parking"].includes(D)&&($="garage"),["industrial","warehouse","manufacture","factory"].includes(D)&&($="industrial"),(["school","university","college","kindergarten"].includes(D)||d.amenity==="school")&&($="school"),(["train_station","transportation"].includes(D)||d.railway==="station")&&($="station"),["greenhouse","conservatory"].includes(D)&&($="greenhouse");let Z=d["roof:shape"]||d["roof:type"]||"",Q=af(d["building:colour"]||d["building:color"]||d.colour),et=af(d["roof:colour"]||d["roof:color"]);h.buildings.push({id:_,p:M,h:Math.round(A*10)/10,lv:Math.max(1,Math.round(z+w*.5)),k:$,r:E,n:d.name||"",roof:Z,col:Q,roofCol:et,shop:d.shop||"",amenity:d.amenity||""})}for(let _ of l.values()){let m=_.tags||{};m.building&&_.nodes&&_.nodes[0]===_.nodes[_.nodes.length-1]&&u(_.id,_.nodes,m)}for(let _ of i){if(_.type!=="relation"||!_.tags||!_.tags.building)continue;let m=_.members.filter(M=>M.type==="way"&&M.role==="outer"&&l.has(M.ref)).map(M=>l.get(M.ref).nodes.slice()),d=[];for(;m.length;){let M=m.shift(),b=!0;for(;M[0]!==M[M.length-1]&&b;){b=!1;for(let v=0;v<m.length;v++){let N=m[v];if(N[0]===M[M.length-1]){M=M.concat(N.slice(1)),m.splice(v,1),b=!0;break}if(N[N.length-1]===M[M.length-1]){M=M.concat(N.slice().reverse().slice(1)),m.splice(v,1),b=!0;break}}}M[0]===M[M.length-1]&&d.push(M)}d.forEach((M,b)=>u(_.id*10+b,M,_.tags))}let f={primary:12,primary_link:7,secondary:10,secondary_link:7,tertiary:9,tertiary_link:7,residential:7,unclassified:7,living_street:6,service:4.5,pedestrian:0,trunk:13,trunk_link:7},g={trunk:"primary",trunk_link:"primary_link",secondary_link:"secondary",tertiary_link:"tertiary"};for(let _ of l.values()){let m=_.tags||{},d=m.highway;if(!d||!_.nodes)continue;let M=_.nodes.filter(N=>a.has(N)),b=M.map(N=>r(...a.get(N)));if(b.length<2||!b.some(o))continue;let v=_.nodes[0]===_.nodes[_.nodes.length-1];if(d==="pedestrian"&&(m.area==="yes"||v&&m.area!=="no")){h.areas.push({t:"plaza",p:b.slice(0,-1)});continue}if(d in f){let N=f[d],P=g[d]||d;P==="primary"&&m.oneway==="yes"&&(N=8);let D=Jo(m.lanes);if(D&&d!=="pedestrian"&&(N=Math.min(Math.max(N,D*3.2),20)),d==="pedestrian"&&(N=8),d==="service"&&m.service==="parking_aisle"&&(N=5),m.tunnel==="yes"||String(m.layer||"0").startsWith("-")||m.area==="yes")continue;h.roads.push({t:P,w:N,p:b,n:m.name||"",ow:m.oneway==="yes",nd:M})}else if(["footway","path","cycleway","steps"].includes(d)&&!["sidewalk","crossing"].includes(m.footway)){if(m.tunnel==="yes")continue;h.roads.push({t:"foot",w:3,p:b,n:"",ow:!1,nd:M})}}for(let _ of l.values()){let m=_.tags||{},d=m.landuse||m.leisure||m.natural||(m.amenity==="parking"?"parking":null);if(d&&_.nodes&&_.nodes[0]===_.nodes[_.nodes.length-1]){let M=_.nodes.slice(0,-1).filter(v=>a.has(v)).map(v=>r(...a.get(v)));if(M.length<3||!M.some(o))continue;let b=["grass","village_green","park","garden","flowerbed","playground","dog_park","meadow","recreation_ground","cemetery","wood","forest","scrub"].includes(d)?"grass":d==="parking"?"parking":null;if(b&&(h.areas.push({t:b,p:M,park:["park","garden","recreation_ground","wood","forest"].includes(d)}),["park","garden","wood","forest","recreation_ground"].includes(d))){let v=Math.abs(Bc(M)),N=Math.min(80,Math.floor(v/180));for(let P=0;P<N;P++){let D=Oc(_.id*31+P)/4294967296,z=Oc(_.id*97+P*3)/4294967296,A=0,E=0;for(let ot of M)A+=ot[0],E+=ot[1];A/=M.length,E/=M.length;let w=1e9,$=-1e9,Z=1e9,Q=-1e9;for(let ot of M)w=Math.min(w,ot[0]),$=Math.max($,ot[0]),Z=Math.min(Z,ot[1]),Q=Math.max(Q,ot[1]);let et=w+D*($-w),Y=Z+z*(Q-Z);if(Math.abs(et)<560&&Math.abs(Y)<460){let ot=!1;for(let tt=0,Tt=M.length-1;tt<M.length;Tt=tt++){let It=M[tt][0],Ut=M[tt][1],Qt=M[Tt][0],fe=M[Tt][1];Ut>Y!=fe>Y&&et<(Qt-It)*(Y-Ut)/(fe-Ut)+It&&(ot=!ot)}ot&&h.trees.push([Math.round(et*100)/100,Math.round(Y*100)/100])}}}}}for(let _ of i){if(_.type!=="node"||!_.tags)continue;let m=_.tags,d=r(_.lat,_.lon);o(d)&&(m.natural==="tree"?h.trees.push(d):m.highway==="street_lamp"?h.lamps.push(d):["restaurant","fast_food","cafe","bar","pub"].includes(m.amenity)?h.pois.push({p:d,a:m.amenity,c:m.cuisine||"",n:m.name||""}):m.amenity==="car_repair"||m.shop==="car_repair"?h.pois.push({p:d,a:"car_repair",c:"",n:m.name||"Werkstatt"}):m.amenity==="fuel"?h.pois.push({p:d,a:"fuel",c:"",n:m.name||""}):m.shop?h.pois.push({p:d,a:"shop",c:m.shop,n:m.name||""}):m.amenity==="bench"?h.props.push({p:d,k:"bench"}):m.amenity==="waste_basket"?h.props.push({p:d,k:"bin"}):m.emergency==="fire_hydrant"&&h.props.push({p:d,k:"hydrant"}))}if(h.lamps.length<40)for(let _ of h.roads){if(!["residential","primary","secondary","tertiary","unclassified","living_street"].includes(_.t))continue;let m=13;for(let d=0;d<_.p.length-1;d++){let M=_.p[d],b=_.p[d+1],v=Math.hypot(b[0]-M[0],b[1]-M[1]);if(v<1)continue;let N=(b[0]-M[0])/v,P=(b[1]-M[1])/v;for(;m<v;){let D=h.lamps.length%2?1:-1,z=M[0]+N*m-P*(_.w/2+1.2)*D,A=M[1]+P*m+N*(_.w/2+1.2)*D;o([z,A])&&h.lamps.push([Math.round(z*100)/100,Math.round(A*100)/100]),m+=26}m-=v}}if(h.trees.length<80)for(let _ of h.roads){if(!["residential","tertiary","unclassified","living_street","secondary"].includes(_.t))continue;let m=9+_.t.length%7;for(let d=0;d<_.p.length-1;d++){let M=_.p[d],b=_.p[d+1],v=Math.hypot(b[0]-M[0],b[1]-M[1]);if(v<1)continue;let N=(b[0]-M[0])/v,P=(b[1]-M[1])/v;for(;m<v;){for(let D of[-1,1]){if(h.trees.length+D&1)continue;let z=M[0]+N*m-P*(_.w/2+2.4)*D,A=M[1]+P*m+N*(_.w/2+2.4)*D;o([z,A])&&h.trees.push([Math.round(z*100)/100,Math.round(A*100)/100])}m+=18+h.trees.length*3%5}m-=v}}return h.fallbackHub=y_(h),h}function x_(i,t,e){let n=!1;for(let s=0,r=e.length-1;s<e.length;r=s++){let o=e[s],a=e[r];o[1]>t!=a[1]>t&&i<(a[0]-o[0])*(t-o[1])/(a[1]-o[1])+o[0]&&(n=!n)}return n}function hf(i,t,e,n,s,r){let o=s-e,a=r-n,l=o*o+a*a||1,c=((i-e)*o+(t-n)*a)/l;return c=Math.max(0,Math.min(1,c)),Math.hypot(i-e-o*c,t-n-a*c)}function __(i,t,e,n){for(let s of i.buildings){let r=s.p;if(!(Math.abs(r[0][0]-t)>120||Math.abs(r[0][1]-e)>120))for(let o=0;o<r.length;o++){let a=r[o],l=r[(o+1)%r.length];if(hf(t,e,a[0],a[1],l[0],l[1])<n)return!0}}return!1}function y_(i){if(i.pois.some(r=>["fast_food","restaurant"].includes(r.a)&&Math.abs(r.p[0])<400&&Math.abs(r.p[1])<350&&__(i,r.p[0],r.p[1],18)))return null;let e=new Set(["primary","secondary","tertiary","residential","unclassified","living_street","pedestrian"]),n=[];for(let r of i.roads)if(e.has(r.t))for(let o=0;o<r.p.length-1;o++){let a=r.p[o],l=r.p[o+1],c=Math.hypot(l[0]-a[0],l[1]-a[1]);if(!(c<12))for(let h of[.3,.5,.7]){let p=a[0]+(l[0]-a[0])*h,u=a[1]+(l[1]-a[1])*h;Math.abs(p)>350||Math.abs(u)>280||n.push({x:p,z:u,tx:(l[0]-a[0])/c,tz:(l[1]-a[1])/c,w:r.w||7,d:Math.hypot(p,u)})}}n.sort((r,o)=>r.d-o.d);let s=[];for(let r of i.roads)if(r.t!=="foot")for(let o=0;o<r.p.length-1;o++)s.push([r.p[o],r.p[o+1],r.w||5]);for(let r of n.slice(0,400))for(let o of[1,-1]){let a=-r.tz*o,l=r.tx*o,c=r.w/2+5.5,h=r.x+a*c,p=r.z+l*c,u=3.6,f=2.6,g=[[-u,-f],[u,-f],[u,f],[-u,f]].map(([b,v])=>[h+r.tx*b+a*v,p+r.tz*b+l*v]),_=g.concat([[h,p]]),m=!1;for(let b of _){for(let v of i.buildings)if(!(Math.abs(v.p[0][0]-b[0])>150||Math.abs(v.p[0][1]-b[1])>150)&&x_(b[0],b[1],v.p)){m=!0;break}if(m)break;for(let v of s)if(hf(b[0],b[1],v[0][0],v[0][1],v[1][0],v[1][1])<v[2]/2+1.2){m=!0;break}if(m)break}if(m)continue;Bc(g)<0&&g.reverse(),i.buildings.push({id:-777,p:g.map(b=>[Math.round(b[0]*100)/100,Math.round(b[1]*100)/100]),h:3.8,lv:1,k:"shop",r:777123,n:"Kiosk Eck",roof:"flat",col:null,roofCol:null,shop:"kiosk",amenity:"fast_food"});let d=h-a*(f+.3),M=p-l*(f+.3);return i.pois.push({p:[d,M],a:"fast_food",c:"snack",n:"Kiosk Eck",fallback:!0}),{x:h,z:p}}return i.buildings.push({id:-777,p:[[-3.6,-2.6],[3.6,-2.6],[3.6,2.6],[-3.6,2.6]],h:3.8,lv:1,k:"shop",r:777123,n:"Kiosk Eck",roof:"flat",col:null,roofCol:null,shop:"kiosk",amenity:"fast_food"}),i.pois.push({p:[0,2.9],a:"fast_food",c:"snack",n:"Kiosk Eck",fallback:!0}),{x:0,z:0}}async function uf(i){let t="https://nominatim.openstreetmap.org/search?format=jsonv2&limit=10&addressdetails=1&accept-language=de&q="+encodeURIComponent(i),e=await zc(t,{headers:{Accept:"application/json"}},15e3);if(!e.ok)throw new Error("HTTP "+e.status);return(await e.json()).map(s=>{let r=s.address||{},o=s.name||r.suburb||r.neighbourhood||r.quarter||r.city_district||r.city||s.display_name.split(",")[0];return{name:s.display_name,short:o,lat:+s.lat,lon:+s.lon,type:s.type,cls:s.class}})}async function ff(i,t){try{let s=(await(await zc(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&zoom=16&accept-language=de&lat=${i}&lon=${t}`,{},1e4)).json()).address||{};return[s.suburb||s.neighbourhood||s.quarter||s.city_district||s.road,s.city||s.town||s.village].filter(Boolean).join(", ")||"Mein Standort"}catch{return"Mein Standort"}}var Fc,kc=nn(()=>{Fc=["https://overpass-api.de/api/interpreter","https://maps.mail.ru/osm/tools/overpass/api/interpreter","https://overpass.private.coffee/api/interpreter"]});function df(){let i=window.AudioContext||window.webkitAudioContext,t=null,e=null,n=!1,s=.55,r={};function o(){if(t)return;t=new i,e=t.createGain(),e.gain.value=s,e.connect(t.destination);let u=t.createBuffer(1,t.sampleRate*2,t.sampleRate),f=u.getChannelData(0);for(let d=0;d<f.length;d++)f[d]=(Math.random()*2-1)*.35;let g=t.createBufferSource();g.buffer=u,g.loop=!0;let _=t.createBiquadFilter();_.type="lowpass",_.frequency.value=900,_.Q.value=.5;let m=t.createGain();m.gain.value=0,g.connect(_),_.connect(m),m.connect(e),g.start(),r.amb={n:g,f:_,g:m}}function a(){o(),t.state==="suspended"&&t.resume().catch(()=>{})}function l(u){n=!!u,o(),e.gain.value=n?0:s}function c(u){s=Math.max(0,Math.min(1,u)),e&&!n&&(e.gain.value=s)}function h(u,f,g="sine",_=.12,m){if(n)return;a();let d=t.currentTime,M=t.createOscillator(),b=t.createGain();M.type=g,M.frequency.setValueAtTime(u,d),m&&M.frequency.exponentialRampToValueAtTime(Math.max(40,m),d+f),b.gain.setValueAtTime(_,d),b.gain.exponentialRampToValueAtTime(.001,d+f),M.connect(b),b.connect(e),M.start(d),M.stop(d+f+.02)}function p(u,f=.2,g=200,_=4e3){if(n)return;a();let m=Math.max(1,Math.floor(t.sampleRate*u)),d=t.createBuffer(1,m,t.sampleRate),M=d.getChannelData(0);for(let D=0;D<m;D++)M[D]=(Math.random()*2-1)*Math.pow(1-D/m,.6);let b=t.createBufferSource();b.buffer=d;let v=t.createBiquadFilter();v.type="highpass",v.frequency.value=g;let N=t.createBiquadFilter();N.type="lowpass",N.frequency.value=_;let P=t.createGain();P.gain.value=f,b.connect(v),v.connect(N),N.connect(P),P.connect(e),b.start()}return{resume:a,setMute:l,setVol:c,getMute:()=>n,getVol:()=>s,setAmbience(u){o();let f=t.currentTime;r.amb.g.gain.cancelScheduledValues(f),r.amb.g.gain.linearRampToValueAtTime(n?0:u*.045,f+.4),r.amb.f.frequency.linearRampToValueAtTime(700+u*800,f+.4)},step(){n||(a(),p(.05,.045,400,2500),h(90+Math.random()*30,.05,"triangle",.03))},door(){h(180,.08,"square",.06,90),setTimeout(()=>h(120,.1,"sine",.05),70)},crash(u){let f=Math.min(.45,.08+u*.03);p(.18+Math.min(.3,u*.02),f,80,3500),h(70,.2,"sawtooth",f*.5,40)},engineStart(){if(r.eng)return;o(),a();let u=t.createOscillator();u.type="sawtooth",u.frequency.value=55;let f=t.createOscillator();f.type="square",f.frequency.value=110;let g=t.createBiquadFilter();g.type="lowpass",g.frequency.value=320;let _=t.createGain();_.gain.value=0,u.connect(g),f.connect(g),g.connect(_),_.connect(e),u.start(),f.start(),r.eng={o1:u,o2:f,f:g,g:_}},engineStop(){if(!r.eng)return;let u=t.currentTime;r.eng.g.gain.linearRampToValueAtTime(0,u+.25);let f=r.eng;setTimeout(()=>{try{f.o1.stop(),f.o2.stop()}catch{}},400),r.eng=null},engineTick(u,f){if(!r.eng||n)return;let g=Math.abs(u),_=t.currentTime,d=(f?48:55)+g*6.5;r.eng.o1.frequency.setTargetAtTime(d,_,.05),r.eng.o2.frequency.setTargetAtTime(d*2.02,_,.05),r.eng.f.frequency.setTargetAtTime(280+g*40,_,.08);let M=g<.4?.035:.05+Math.min(.12,g*.006);r.eng.g.gain.setTargetAtTime(M*s,_,.06)},radioDuck(u){}}}var pf=nn(()=>{});function mf(i={}){let t=Math.max(0,Zn.findIndex(m=>m.id===(i.station||"")));t<0&&(t=0);let e=!1,n=i.vol??.45,s=!!i.muted,r=null,o=null,a=0,l=()=>r||(r=new Audio,r.crossOrigin="anonymous",r.preload="none",r.addEventListener("error",()=>{a++,a<Zn.length?(t=(t+1)%Zn.length,e&&h(!0)):p(!0)}),r.addEventListener("playing",()=>{a=0}),r);function c(){r&&(r.volume=s?0:n)}function h(m){e=!0;let d=l(),M=Zn[t];if(m||d.src!==M.url){try{d.pause()}catch{}d.src=M.url,d.load()}c(),d.play().catch(()=>{a++,a<Zn.length&&(t=(t+1)%Zn.length,h(!0))}),i.onChange&&i.onChange(_())}function p(m){if(e=!1,!!r){try{r.pause()}catch{}!m&&i.onChange&&i.onChange(_())}}function u(m=500){if(!r||!e){p(!0);return}let d=r,M=d.volume,b=performance.now();clearInterval(o),o=setInterval(()=>{let v=Math.min(1,(performance.now()-b)/m);d.volume=M*(1-v),v>=1&&(clearInterval(o),p(!0),d.volume=s?0:n)},40)}function f(){t=(t+1)%Zn.length,a=0,e?h(!0):i.onChange&&i.onChange(_())}function g(){t=(t-1+Zn.length)%Zn.length,a=0,e?h(!0):i.onChange&&i.onChange(_())}function _(){return{on:e,i:t,name:Zn[t].name,vol:n,muted:s,stations:Zn.map(m=>m.name)}}return{play:h,stop:p,fadeOut:u,next:f,prev:g,setVol(m){n=Math.max(0,Math.min(1,m)),c()},setMute(m){s=!!m,c()},getState:_,stations:Zn}}var Zn,gf=nn(()=>{Zn=[{id:"wdr2",name:"WDR 2",url:"https://wdr-wdr2-ruhrgebiet.icecastssl.wdr.de/wdr/wdr2/ruhrgebiet/mp3/128/stream.mp3"},{id:"wdr3",name:"WDR 3",url:"https://wdr-wdr3-live.icecastssl.wdr.de/wdr/wdr3/live/mp3/128/stream.mp3"},{id:"dlf",name:"Deutschlandfunk",url:"https://st01.sslstream.dlf.de/dlf/01/128/mp3/stream.mp3"},{id:"dkultur",name:"Dlf Kultur",url:"https://st02.sslstream.dlf.de/dlf/02/128/mp3/stream.mp3"},{id:"soma",name:"SomaFM Groove",url:"https://ice1.somafm.com/grooveidm-128-mp3"},{id:"soma2",name:"SomaFM Drone",url:"https://ice1.somafm.com/dronezone-128-mp3"}]});function xf(i={}){let t=i.cash??120,e={brokkoli:0,backpulver:0,zuckerwatte:0},n=[];function s(u,f,g){n.length=0;let _=u.filter(v=>["fast_food","restaurant","cafe","bar","pub"].includes(v.a)),m=(v,N)=>{let P=v.slice(),D=[];for(;P.length&&D.length<N;)D.push(P.splice(f()*P.length|0,1)[0]);return D},d=v=>{if(typeof g=="function"){let N=g(v.p[0],v.p[1]);if(N)return N}return{x:v.p[0],z:v.p[1]}},M=m(_,3),b=m(_.filter(v=>!M.includes(v)),3);if(M.forEach((v,N)=>{let P=d(v);n.push({x:P.x,z:P.z,role:"buy",item:us[N%us.length].id,label:"Kontakt"})}),b.forEach((v,N)=>{let P=d(v);n.push({x:P.x,z:P.z,role:"sell",item:us[N%us.length].id,label:"Abnehmer"})}),!M.length&&u[0]){let v=d(u[0]);n.push({x:v.x,z:v.z,role:"buy",item:"brokkoli",label:"Kontakt"}),n.push({x:v.x+6,z:v.z+5,role:"sell",item:"brokkoli",label:"Abnehmer"})}return n}function r(u,f,g=4.2){let _=null,m=g;for(let d of n){let M=Math.hypot(d.x-u,d.z-f);M<m&&(m=M,_=d)}return _}function o(u){return us.find(f=>f.id===u)}function a(u){let f=o(u);return!f||t<f.buy?{ok:!1,msg:t<f.buy?"Zu wenig Geld.":"Geht nicht."}:(t-=f.buy,e[u]=(e[u]|0)+1,{ok:!0,msg:f.name+" gekauft (\u2212"+f.buy+" \u20AC).",cash:t,inv:{...e}})}function l(u){let f=o(u);return!f||!(e[u]>0)?{ok:!1,msg:"Du hast nichts davon dabei."}:(e[u]--,t+=f.sell,{ok:!0,msg:f.name+" verkauft (+"+f.sell+" \u20AC).",cash:t,inv:{...e}})}function c(u,f){let g=r(u,f);if(!g)return null;let _=o(g.item);return g.role==="buy"?{spot:g,text:_.name+" kaufen \xB7 "+_.buy+" \u20AC",action:()=>a(g.item)}:{spot:g,text:_.name+" verkaufen \xB7 "+_.sell+" \u20AC",action:()=>l(g.item)}}function h(){return{cash:t,inv:{...e},items:us.map(u=>({...u,have:e[u.id]|0})),spots:n}}function p(u){t=u}return{placeSpots:s,near:r,prompt:c,buy:a,sell:l,state:h,setCash:p,ITEMS:us}}var us,_f=nn(()=>{us=[{id:"brokkoli",name:"Brokkoli",buy:40,sell:75,icon:"\u{1F966}"},{id:"backpulver",name:"Backpulver",buy:90,sell:160,icon:"\u{1F9C2}"},{id:"zuckerwatte",name:"Zuckerwatte",buy:25,sell:48,icon:"\u{1F36D}"}]});function vf(i,t={}){let e=t.mobile??matchMedia("(pointer:coarse)").matches,n=t.touch||{active:!1,x:0,y:0,mag:0,hbrake:!1},s=new yo({antialias:!0,preserveDrawingBuffer:Tr});s.setPixelRatio(Tr?1:Math.min(2,e?Math.max(1,devicePixelRatio*.75):devicePixelRatio)),s.setSize(innerWidth,innerHeight),s.shadowMap.enabled=!0,s.shadowMap.type=lc,s.toneMapping=Mr,s.outputColorSpace=vn,document.getElementById("game").appendChild(s.domElement);let r=new vo,o=new zi(-1,1,1,-1,1,1600),a=600;function l(x){let T=innerWidth/innerHeight,C=x*T,L=x;T<1&&(C=x*.78,L=C/T),o.left=-C,o.right=C,o.top=L,o.bottom=-L,o.updateProjectionMatrix()}let c=new Lo(16777215,4473924,1);r.add(c);let h=new Do(16777215,2);h.castShadow=!0;let p=Tr&&!e?4096:2048;h.shadow.mapSize.set(p,p);let u=e?62:85;Object.assign(h.shadow.camera,{left:-u,right:u,top:u,bottom:-u,near:1,far:600}),h.shadow.bias=-6e-4,h.shadow.normalBias=.04,r.add(h,h.target);let f=t.hubNear||[0,0],g=$u(r,i,{hubNear:f}),_=i.bbox?.x||560,m=i.bbox?.z||460;(function(){let C=[];r.traverse(q=>{if(q.isInstancedMesh&&q.count>=48){let st=q.geometry;(st.index?st.index.count:st.attributes.position.count)/3*q.count>3e4&&C.push(q)}});let L=new Be,W=new H,V=new ne;for(let q of C){let st=new Map;for(let ft=0;ft<q.count;ft++){q.getMatrixAt(ft,L),W.setFromMatrixPosition(L);let y=Math.floor(W.x/120)+","+Math.floor(W.z/120);st.has(y)||st.set(y,[]),st.get(y).push(ft)}if(st.size<2)continue;let j=q.parent;for(let ft of st.values()){let y=new Dn(q.geometry,q.material,ft.length);ft.forEach((U,k)=>{q.getMatrixAt(U,L),y.setMatrixAt(k,L),q.instanceColor&&(q.getColorAt(U,V),y.setColorAt(k,V))}),y.castShadow=q.castShadow,y.receiveShadow=q.receiveShadow,y.renderOrder=q.renderOrder,y.position.copy(q.position),y.quaternion.copy(q.quaternion),y.scale.copy(q.scale),y.computeBoundingSphere(),j.add(y)}j.remove(q)}})();let d=new Tn(1,1);d.rotateX(-Math.PI/2);let M=new Tn(6,14);M.rotateX(-Math.PI/2),M.rotateY(Math.PI);let b={blob:new je({map:Hu(),transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-8,polygonOffsetUnits:-8}),blobGeo:d,coneGeo:M,cone:new je({map:Vu(),transparent:!0,blending:ci,depthWrite:!1,opacity:.5,polygonOffset:!0,polygonOffsetFactor:-7,polygonOffsetUnits:-7}),headOff:new Te({color:14211280,roughness:.3}),tailOff:new Te({color:6950928,roughness:.4}),head:new Te({color:16774877,emissive:16773832,emissiveIntensity:1.5}),tail:new Te({color:8912896,emissive:16718362,emissiveIntensity:1.2}),ped:new Te({vertexColors:!0,roughness:.85}),legGeo:new We(.15,.9,.17),armGeo:new We(.11,.6,.13)},v=null;if(g.hubPoi){let x=g.facing(g.hubPoi.p[0],g.hubPoi.p[1],20);if(x){let T=x.e,C={fast_food:["IMBISS ECKE","PIZZA NOTTE","BURGER BUDE","CURRY ECK","FALAFEL HOUSE"],restaurant:["TRATTORIA LUNA","TAVERNA DELFI","GASTHAUS KRONE","BALKAN GRILL"]},L=C[g.hubPoi.a]||C.fast_food,W=L[Math.abs(g.hubPoi.p[0]*10|0)%L.length],V=g.placeSign(x,W,"#ffd23f",{w:7,sub:"IMBISS \xB7 AUFTR\xC4GE"}),q={x:x.cx+T.nx*2.5,z:x.cz+T.nz*2.5},st=new ie(new Ro(1.1,1.5,40),new je({color:6160234,transparent:!0,opacity:.85,toneMapped:!1,side:En,depthWrite:!1}));st.rotation.x=-Math.PI/2,st.position.set(q.x,.09,q.z),r.add(st);let j=new os;j.moveTo(0,0),j.lineTo(.9,1.1),j.lineTo(.35,1.1),j.lineTo(.35,2.2),j.lineTo(-.35,2.2),j.lineTo(-.35,1.1),j.lineTo(-.9,1.1),j.closePath();let ft=new ie(new Vs(j,{depth:.25,bevelEnabled:!1}),new je({color:6160234,toneMapped:!1}));ft.position.set(q.x,6,q.z),r.add(ft);let y=new ie(d,new je({map:Sr("rgba(255,210,80,1)"),transparent:!0,blending:ci,depthWrite:!1,opacity:.6}));y.scale.set(10,1,10),y.position.set(q.x,.08,q.z),r.add(y);let U=(()=>{let J=[];for(let Mt=0;Mt<=10;Mt++){let Wt=Mt/10;J.push(new xt(1.75*Wt,.42*(1-Math.pow(Wt,1.7))+0))}J.push(new xt(1.75*.995,-.08));let nt=new xr(J,32).toNonIndexed(),lt=nt.attributes.position,mt=[];for(let Mt=0;Mt<lt.count;Mt+=3){let Wt=0,Jt=0;for(let Zt=0;Zt<3;Zt++)Wt+=lt.getX(Mt+Zt),Jt+=lt.getZ(Mt+Zt);let Se=Math.floor((Math.atan2(Jt,Wt)+Math.PI)/(Math.PI*2)*8)%8%2?[.92,.9,.84]:[.72,.1,.12];for(let Zt=0;Zt<3;Zt++)mt.push(...Se)}nt.setAttribute("color",new Me(mt,3)),nt.computeVertexNormals();let Rt=new ti(.09,8,6).toNonIndexed();return Rt.translate(0,.45,0),Rt.setAttribute("color",new Me(new Array(Rt.attributes.position.count*3).fill(.3),3)),Rt.deleteAttribute("uv"),nt.deleteAttribute("uv"),Gi([nt,Rt])})(),k=new Te({vertexColors:!0,roughness:.8,side:En}),O=g.propMat(14606046,.5,.3),B=new Te({color:13115434,roughness:.7});for(let J of[-1,1]){let it=x.cx+T.nx*4.8+(T.B[0]-T.A[0])/T.len*J*3.2,nt=x.cz+T.nz*4.8+(T.B[1]-T.A[1])/T.len*J*3.2,lt=new ie(new qe(.4,.4,.75,10),O);lt.position.set(it,.37,nt),lt.castShadow=!0,r.add(lt);let mt=new ie(U,k);mt.position.set(it,2.3,nt),mt.rotation.y=J*.2,mt.castShadow=!0,mt.receiveShadow=!0,r.add(mt);let Rt=new ie(new qe(.035,.035,2.35,6),O);Rt.position.set(it,1.17,nt),Rt.castShadow=!0,r.add(Rt);for(let Mt of[0,2.1,4.2]){let Wt=new ie(new qe(.22,.22,.06,12),g.propMat(3815998,.6,.3));Wt.position.set(it+Math.cos(Mt)*.85,.45,nt+Math.sin(Mt)*.85),Wt.castShadow=!0,r.add(Wt)}}{let J=x.B,it=new In,nt=new je({map:Er(W,{fg:"#ffd23f",sub:"IMBISS \xB7 AUFTR\xC4GE"}),toneMapped:!1});g.neonMats.push(nt);let lt=new ie(new Tn(10,2.5),nt);lt.rotation.x=-.95,lt.position.y=2.2,it.add(lt);let mt=new ie(new We(10.4,2.9,.25),g.propMat(2763310));mt.rotation.x=-.95,mt.position.set(0,2.2-Math.sin(.95)*.2,-Math.cos(.95)*.2),it.add(mt);for(let Jt of[-4,4]){let re=new ie(new We(.2,2.2,.2),g.propMat(3815994,.5,.6));re.position.set(Jt,1.1,-.6),it.add(re)}let Rt=x.cx-T.nx*2.5,Mt=x.cz-T.nz*2.5;it.position.set(Rt,J.h+.45,Mt),r.add(it);let Wt=new ie(d,new je({map:Sr("rgba(255,200,60,1)"),transparent:!0,blending:ci,depthWrite:!1,opacity:.5}));Wt.scale.set(14,1,8),Wt.position.set(Rt,J.h+.5,Mt+1),r.add(Wt)}v={door:q,ring:st,arrow:ft,pool:y,sign:V}}}let N=Uc(7,b,{jacket:[.18,.32,.55],shirt:[.9,.86,.78],pants:[.12,.12,.14],hair:[.08,.05,.03],skin:[.88,.68,.52],shoes:[.9,.9,.88],open:!0,long:!1,beanie:!1,coat:!1},1.75);r.add(N);let P=new je({color:15249978,depthWrite:!1,depthFunc:hr,fog:!1,toneMapped:!1});function D(x,T){if(!x.userData.ghosts){let C=[],L=[];x.traverse(W=>{W.isMesh&&!W.userData.isGhost&&!(W.material&&(W.material.transparent||W.material.isMeshBasicMaterial))&&L.push(W)});for(let W of L){let V=new ie(W.geometry,P);V.userData.isGhost=!0,V.renderOrder=1,V.castShadow=V.receiveShadow=!1,V.visible=!1,V.raycast=()=>{},W.add(V),C.push(V),W.userData.ro0=W.renderOrder}x.userData.ghosts=C,x.userData.ghostSrc=L}for(let C of x.userData.ghosts)C.visible=!!T;for(let C of x.userData.ghostSrc)C.renderOrder=T?2:C.userData.ro0}D(N,!1);let z=null;function A(x,T,C=1.7){let L=o.position.x,W=o.position.y,V=o.position.z,q=x-L,st=C-W,j=T-V;for(let ft of g.buildings){if(ft.h<3.2)continue;let y=ft.b.p,U=1e9,k=-1e9,O=1e9,B=-1e9;for(let J of y)U=Math.min(U,J[0]),k=Math.max(k,J[0]),O=Math.min(O,J[1]),B=Math.max(B,J[1]);if(!(B<T-.5)&&!(O>V+1)&&!(k<Math.min(x,L)-3||U>Math.max(x,L)+3)){if(tn(x,T,y))return!0;for(let J=.06;J<.92;J+=.07){let it=L+q*J,nt=W+st*J,lt=V+j*J;if(!(it<U-.2||it>k+.2||lt<O-.2||lt>B+.2)&&nt<ft.h+.5&&tn(it,lt,y))return!0}}}return!1}function E(){let x=!w.car&&N.visible&&A(w.x,w.z,1.75);if(D(N,x),w.car){z&&z!==w.car&&D(z.g,!1);let T=A(w.car.x,w.car.z,1.15);D(w.car.g,T),z=w.car}else z&&(D(z.g,!1),z=null)}let w={x:v?v.door.x+2.2:0,z:v?v.door.z+4.5:0,rot:Math.PI,vx:0,vz:0,car:null};N.position.set(w.x,0,w.z);let $=Nn(4242),Z=[],Q=Object.keys(hs);function et(x,T){x.g.userData.cone.visible=T,x.g.userData.hf.material=T?b.head:b.headOff,x.g.userData.hr.material=T?b.tail:b.tailOff}function Y(x,T,C,L,W,V){let q=nf(x,T,b);q.position.set(C,0,L),q.rotation.y=W,r.add(q);let st={g:q,type:x,x:C,z:L,rot:W,speed:0,steer:0,ai:V,driven:!1};return Z.push(st),et(st,!!V),st}let ot=(x,T,C)=>{for(let L of g.grid.near(x,T))if(Ei(x,T,L[0],L[1],L[2],L[3])[0]<C)return!1;for(let L of g.buildings)if(Math.abs(L.b.p[0][0]-x)<70&&Math.abs(L.b.p[0][1]-T)<70&&tn(x,T,L.b.p))return!1;return!0},tt=(x,T,C)=>g.junctions.some(L=>Math.hypot(L[0]-x,L[1]-T)<C),Tt=[];for(let x of g.roadsDrive)if(["residential","unclassified","living_street","tertiary"].includes(x.t))for(let T of[-1,1]){let C=0;for(let L=0;L<x.p.length-1;L++){let W=x.p[L],V=x.p[L+1],q=Math.hypot(V[0]-W[0],V[1]-W[1]);if(q<1)continue;let st=(V[0]-W[0])/q,j=(V[1]-W[1])/q,ft=-j,y=st;for(let U=3;U<q-3;U+=5.6){if($()<.4)continue;let k=x.w/2-1.15,O=W[0]+st*U+ft*k*T,B=W[1]+j*U+y*k*T;tt(O,B,12)||ot(O,B,1.6)&&(Tt.some(J=>Math.hypot(J.x-O,J.z-B)<4.8)||Tt.push({x:O,z:B,rot:Math.atan2(st,j)+(T>0?0:Math.PI)+($()-.5)*.06}))}}}for(let x of Tt.slice(0,e?90:140)){let T=["sedan","hatch","kombi","sedan","van","coupe","taxi","hatch","kombi"][$()*9|0];Y(T,T==="taxi"?15909376:wr[$()*wr.length|0],x.x,x.z,x.rot,!1)}let It=null;{let x=null,T=1e9;for(let C of Z){let L=Math.hypot(C.x-w.x,C.z-w.z);L<T&&(T=L,x=C)}if(x&&T<40){r.remove(x.g);let C=Y("coupe",13115434,x.x,x.z,x.rot,!1);Z.splice(Z.indexOf(x),1),It=C}else{let C=g.nearRoad(w.x,w.z);It=Y("coupe",13115434,w.x+4,w.z+3,0,!1)}}let Ut=new Map;g.roadsDrive.forEach((x,T)=>{if(x.t!=="service")for(let C of[0,1]){let L=C?x.nd[x.nd.length-1]:x.nd[0];Ut.has(L)||Ut.set(L,[]),Ut.get(L).push({i:T,e:C})}});function Qt(x,T,C){let L=g.roadsDrive[T],W=L.p.slice();C&&W.reverse(),x.route={ri:T,pts:W,k:1,rev:C,ow:L.ow,w:L.w}}let fe=g.roadsDrive.map((x,T)=>T).filter(x=>["primary","residential","unclassified","secondary","tertiary","living_street"].includes(g.roadsDrive[x].t)&&g.roadsDrive[x].p.length>=2);for(let x=0;x<(e?16:26)&&fe.length;x++){let T=fe[$()*fe.length|0],L=!g.roadsDrive[T].ow&&$()<.5,W=["sedan","hatch","van","taxi","kombi","coupe"][$()*6|0],V=Y(W,W==="taxi"?15909376:wr[$()*wr.length|0],0,0,0,!0);Qt(V,T,L);let q=V.route.pts[0];V.x=q[0],V.z=q[1],V.speed=6+$()*4,V.max=7+$()*5}function ct(x){let T=x.route;return T.ow?0:Math.min(T.w/4,2.2)}function bt(x,T){let C=x.route;if(!C)return;let L=C.pts[C.k],W=C.pts[C.k-1],V=L[0]-W[0],q=L[1]-W[1],st=Math.hypot(V,q)||1,j=q/st,ft=-V/st,y=ct(x),U=L[0]+j*y,k=L[1]+ft*y,O=U-x.x,B=k-x.z;if(Math.hypot(O,B)<2.5){if(C.k++,C.k>=C.pts.length){let Jt=g.roadsDrive[C.ri],re=C.rev?Jt.nd[0]:Jt.nd[Jt.nd.length-1],Se=(Ut.get(re)||[]).filter(Zt=>Zt.i!==C.ri&&(!g.roadsDrive[Zt.i].ow||Zt.e===0));if(Se.length){let Zt=Se[Math.random()*Se.length|0];Qt(x,Zt.i,Zt.e===1)}else if(!Jt.ow)Qt(x,C.ri,!C.rev);else{let Zt=fe[Math.random()*fe.length|0];Qt(x,Zt,!1),x.x=x.route.pts[0][0],x.z=x.route.pts[0][1]}}return}let nt=Math.atan2(O,B)-x.rot;for(;nt>Math.PI;)nt-=2*Math.PI;for(;nt<-Math.PI;)nt+=2*Math.PI;x.rot+=Math.max(-2*T,Math.min(2*T,nt))*(Math.min(1,x.speed/4)+.3);let lt=!1,mt=Math.sin(x.rot),Rt=Math.cos(x.rot),Mt=(Jt,re)=>{let Se=Jt-x.x,Zt=re-x.z,Xt=Se*mt+Zt*Rt,Rn=Math.abs(Se*Rt-Zt*mt);return Xt>0&&Xt<9&&Rn<1.8};Mt(w.x,w.z)&&(lt=!0);for(let Jt of Z)if(Jt!==x&&Mt(Jt.x,Jt.z)){lt=!0;break}let Wt=lt?0:Math.abs(nt)>.6?x.max*.45:x.max;x.speed+=Math.sign(Wt-x.speed)*Math.min(Math.abs(Wt-x.speed),(lt?14:4)*T),x.x+=Math.sin(x.rot)*x.speed*T,x.z+=Math.cos(x.rot)*x.speed*T}let Ht=[],St=[];for(let x of i.roads)if(x.t==="pedestrian"||x.t==="foot")St.push({pts:x.p,lat:x.t==="pedestrian"?4.5:.6});else if(["residential","primary","unclassified","tertiary","living_street"].includes(x.t))for(let T of[-1,1])St.push({pts:x.p,off:(x.w/2+1.6)*T,lat:.4});let Gt=St.filter(x=>{let T=x.pts[0];return Math.abs(T[0])<_*.9&&Math.abs(T[1])<m*.9});for(let x=0;x<(e?50:90);x++){let T=Gt[$()*Gt.length|0];if(!T)break;let C=Uc(100+x,b);r.add(C);let L={g:C,path:T,k:1,dir:1,lat:($()-.5)*2*T.lat,speed:1.1+$()*.6,t:$()},W=Math.floor($()*(T.pts.length-1));L.k=W+1;let V=T.pts[W],q=T.pts[W+1],st=te(T,V,q,L.lat,L.t);if(L.x=st[0],L.z=st[1],!ot(L.x,L.z,.4)){r.remove(C);continue}Ht.push(L)}function te(x,T,C,L,W){let V=C[0]-T[0],q=C[1]-T[1],st=Math.hypot(V,q)||1,j=-q/st,ft=V/st,y=(x.off||0)+L;return[T[0]+V*W+j*y,T[1]+q*W+ft*y]}function jt(x,T){let C=x.path,L=x.dir>0?x.k-1:x.k,W=C.pts[x.dir>0?x.k-1:x.k],V=C.pts[x.dir>0?x.k:x.k-1],q=Math.hypot(V[0]-W[0],V[1]-W[1])||1;x.t+=x.speed*T/q,x.t>=1&&(x.t=0,x.k+=x.dir,(x.k>=C.pts.length||x.k<=0)&&(x.dir*=-1,x.k=Math.max(1,Math.min(C.pts.length-1,x.k))));let st=C.pts[x.dir>0?x.k-1:x.k],j=C.pts[x.dir>0?x.k:x.k-1],ft=(C.off||0)*(x.dir>0?1:-1),y=te({off:ft},st,j,x.lat*(x.dir>0?1:-1),x.t),U=y[0]-x.x,k=y[1]-x.z,O={x:y[0],z:y[1]};g.grid.resolve(O,.35),Math.hypot(U,k)>.001&&(x.g.rotation.y=Math.atan2(U,k)),x.x=O.x,x.z=O.z,x.g.position.set(x.x,0,x.z),Nc(x.g,x.speed,T)}let he={afternoon:{sun:16769720,si:2.6,el:34,az:235,sky:12110048,gnd:6970956,hi:1.05,win:.05,shop:.25,neon:.85,pool:0,lamp:.2,bg:9413560,exp:1,bloom:.15,cone:0},dusk:{sun:16756848,si:2.5,el:20,az:250,sky:10528972,gnd:5918792,hi:1.1,win:.7,shop:.75,neon:1.4,pool:.4,lamp:1.2,bg:3813456,exp:1.12,bloom:.55,cone:.35},night:{sun:9414112,si:.8,el:55,az:200,sky:5267616,gnd:2236972,hi:1,win:1.1,shop:.9,neon:1.8,pool:1,lamp:2.5,bg:790042,exp:1.2,bloom:.6,cone:.75}},ut=yf.get("time")||t.time||"dusk";function _t(x){he[x]||(x="dusk"),ut=x;let T=he[x];h.color.setHex(T.sun),h.intensity=T.si,c.color.setHex(T.sky),c.groundColor.setHex(T.gnd),c.intensity=T.hi,r.background=new ne(T.bg),r.fog=null;for(let V of g.emiMats)V.emissiveIntensity=T.win;for(let V of g.shopMats)V.emissiveIntensity=T.shop;for(let V of g.neonMats)V.color.setScalar(T.neon);g.poolMat.opacity=T.pool,g.lampHeadMat.emissiveIntensity=T.lamp,b.cone.opacity=T.cone,b.head.emissiveIntensity=x==="afternoon"?.3:1.6,s.toneMappingExposure=T.exp,pt&&(pt.strength=T.bloom);let C=T.el*Math.PI/180,L=T.az*Math.PI/180;F.set(Math.sin(L)*Math.cos(C),Math.sin(C),Math.cos(L)*Math.cos(C)*-1).normalize();let W=document.getElementById("time");W&&(W.textContent={afternoon:"NACHMITTAG",dusk:"D\xC4MMERUNG",night:"NACHT"}[x]);try{typeof At<"u"&&At&&At.setAmbience(x==="afternoon"?.9:x==="dusk"?.55:.28)}catch{}}let F=new H,zt=new Go(s);zt.addPass(new Wo(r,o));let pt=new Zs(new xt(innerWidth,innerHeight),.5,.5,.82);zt.addPass(pt),zt.addPass(new Xo),_t(ut);let At=df();t.muted&&At.setMute(!0);let yt=mf({muted:!!t.muted,onChange:x=>{t.onRadio&&t.onRadio(x);let T=document.getElementById("radName");T&&(T.textContent=x.name)}}),$t=xf({cash:120}),Bt=(x,T)=>{let C=g.facing(x,T,28);if(C){let W=C.e,V=W.mx+W.nx*4.2,q=W.mz+W.nz*4.2;tn(V,q,C.B.b.p)&&(V=W.mx-W.nx*4.2,q=W.mz-W.nz*4.2);let st=g.nearRoad(V,q);return st&&st.d>8,{x:V,z:q}}return g.nearRoad(x,T)?{x,z:T}:{x,z:T}};$t.placeSpots(i.pois||[],$,Bt),t.onMoney&&t.onMoney($t.state().cash);let I=[];for(let x of i.pois||[])(x.a==="car_repair"||x.a==="vehicle_inspection")&&I.push({x:x.p[0],z:x.p[1]});if(!I.length){let x=g.nearRoad(0,0);I.push({x:x?x.x:40,z:x?x.z:-40})}let S={};addEventListener("keydown",x=>{if(S[x.code]=!0,x.code==="KeyE"&&ae(),x.code==="KeyT"){let T=Object.keys(he);_t(T[(T.indexOf(ut)+1)%T.length])}x.code==="KeyB"&&(Ft=!Ft),(x.code.startsWith("Arrow")||x.code==="Space")&&x.preventDefault()}),addEventListener("keyup",x=>{S[x.code]=!1});let X=t.zoom!=null?t.zoom<5?13*t.zoom:t.zoom:e?11:13,at=7.5,ht=null;function rt(){if(ht)return ht;let x=[],T=[];for(let j of g.buildings)for(let ft of j.b.p)x.push(ft[0]),T.push(ft[1]);if(x.length<8)for(let j of g.roadsDrive)for(let ft of j.p)x.push(ft[0]),T.push(ft[1]);x.sort((j,ft)=>j-ft),T.sort((j,ft)=>j-ft);let C=j=>j[Math.floor(j.length*.02)],L=j=>j[Math.min(j.length-1,Math.floor(j.length*.98))],W=C(x),V=L(x),q=C(T),st=L(T);return V>W||(W=-_*.7,V=_*.7,q=-m*.7,st=m*.7),ht={minx:W,maxx:V,minz:q,maxz:st,cx:(W+V)/2,cz:(q+st)/2,hx:(V-W)/2,hz:(st-q)/2},ht}function Vt(){let x=rt(),T=Math.max(.45,innerWidth/innerHeight),C=1.04;return T>=1?Math.max(x.hz*C,x.hx*C/T):Math.max(x.hx*C,x.hx*C/T)}function Et(x){return Math.max(at,Math.min(Vt(),x))}X=Et(X);let Ft=!e,Ot=!0,gt=0,Pt=0,Yt=0,Kt=null,vt={x:0,z:0};function de(x,T=.45){for(let C of g.buildings){let L=C.b.p,W=1e9,V=-1e9,q=1e9,st=-1e9;for(let O of L)W=Math.min(W,O[0]),V=Math.max(V,O[0]),q=Math.min(q,O[1]),st=Math.max(st,O[1]);if(x.x<W-1||x.x>V+1||x.z<q-1||x.z>st+1||!tn(x.x,x.z,L))continue;let j=1e9,ft=x.x,y=x.z,U=1,k=0;for(let O of C.edges){let[B,J,it]=Ei(x.x,x.z,O.A[0],O.A[1],O.B[0],O.B[1]);B<j&&(j=B,ft=J,y=it,U=O.nx,k=O.nz)}x.x=ft+U*(T+.08),x.z=y+k*(T+.08),tn(x.x,x.z,L)&&(x.x=ft-U*(T+.08),x.z=y-k*(T+.08))}}function ae(){if(At.resume(),w.car){let C=w.car,L=Math.cos(C.rot),W=-Math.sin(C.rot),V=C.x-L*1.6,q=C.z-W*1.6;vt.x=V,vt.z=q,de(vt,.55),g.grid.resolve(vt,.35),w.x=vt.x,w.z=vt.z,w.car.driven=!1,et(w.car,!1),w.car=null,N.visible=!0,N.position.set(w.x,0,w.z),At.door(),At.engineStop(),yt.fadeOut(450),document.body.classList.remove("incar");let st=document.getElementById("radio");st&&(st.style.display="");return}let x=null,T=3.6;for(let C of Z){let L=Math.hypot(C.x-w.x,C.z-w.z);L<T&&(T=L,x=C)}x&&(x.ai=!1,x.route=null,x.driven=!0,et(x,!0),w.car=x,N.visible=!1,At.door(),At.engineStart(),yt.play())}let Ue=x=>{for(;x>Math.PI;)x-=2*Math.PI;for(;x<-Math.PI;)x+=2*Math.PI;return x};function G(x){let T=S.KeyW||S.ArrowUp,C=S.KeyS||S.ArrowDown,L=S.KeyA||S.ArrowLeft,W=S.KeyD||S.ArrowRight,V=n.active&&n.mag>.18;if(w.car){let y=w.car,U=hs[y.type],k=y.g.userData.speedMul??1,O=T?9:0,B=C?y.speed>.5?16:6:0,J=(L?1:0)-(W?1:0);if(V){let lt=Math.atan2(n.x,n.y),mt=Ue(lt-y.rot),Rt=Math.abs(mt)>2.25;if(Rt)y.speed>.5?(y.speed-=16*x,y.backT=0):(y.backT=(y.backT||0)+x,y.backT>.4||y.speed<-.5?(y.speed-=6*x,J=-Math.max(-1,Math.min(1,Ue(lt-(y.rot+Math.PI))*2.2))):y.speed*=Math.pow(.1,x));else{let Mt=g.nearRoad(y.x,y.z),Wt=Mt&&Mt.d<Mt.w/2+1.2?1:.55,Jt=24*k*Wt*Math.min(1,n.mag)*(Math.abs(mt)>1.1?.55:1);y.speed<Jt?y.speed+=9*Math.min(1,n.mag+.2)*x:y.speed*=Math.pow(.6,x),y.speed<-.3&&(y.speed+=16*x),J=Math.max(-1,Math.min(1,mt*2.2))}Rt||(y.backT=0)}else T&&(y.speed+=O*x),C&&(y.speed-=B*x),!T&&!C&&(y.speed*=Math.pow(.55,x));y.speed=Math.max(-6,Math.min(24*k,y.speed)),(S.Space||n.hbrake)&&(y.speed*=Math.pow(.05,x)),y.steer+=(J*.6-y.steer)*Math.min(1,x*8),y.rot+=y.steer*y.speed/(U.L*.62)*x,y.x+=Math.sin(y.rot)*y.speed*x,y.z+=Math.cos(y.rot)*y.speed*x;let it=!1,nt=0;for(let lt of[-1,1]){let mt=Math.sin(y.rot)*lt*(U.L/2-.9),Rt=Math.cos(y.rot)*lt*(U.L/2-.9);vt.x=y.x+mt,vt.z=y.z+Rt,g.grid.resolve(vt,U.W/2+.05)&&(y.x=vt.x-mt,y.z=vt.z-Rt,it=!0,nt=Math.max(nt,Math.abs(y.speed)))}for(let lt of Z){if(lt===y)continue;let mt=Math.hypot(lt.x-y.x,lt.z-y.z);if(mt<U.L*.75){let Rt=(y.x-lt.x)/(mt||1),Mt=(y.z-lt.z)/(mt||1);y.x+=Rt*(U.L*.75-mt),y.z+=Mt*(U.L*.75-mt),it=!0,nt=Math.max(nt,Math.abs(y.speed)+Math.abs(lt.speed||0)*.5)}}if(it){let lt=Math.abs(y.speed);if(y.speed*=-.25,lt>2.2&&(Ko(y,lt),At.crash(lt),Yt=Math.min(1.2,lt*.08),navigator.vibrate))try{navigator.vibrate(Math.min(80,20+lt*4))}catch{}}for(let lt of I)Math.hypot(lt.x-y.x,lt.z-y.z)<4.5&&(y.g.userData.damage||0)>.05&&Math.abs(y.speed)<1.2&&sf(y);At.engineTick(y.speed,y.speed<-.4),w.x=y.x,w.z=y.z,w.x=Math.max(-_+8,Math.min(_-8,w.x)),w.z=Math.max(-m+8,Math.min(m-8,w.z)),y.x=w.x,y.z=w.z;return}if(Kt&&!V){let y=Kt.x-w.x,U=Kt.z-w.z,k=Math.hypot(y,U);k<.6?Kt=null:(w.x+=y/k*3.4*x,w.z+=U/k*3.4*x,w.rot=Math.atan2(y,U))}let q=(W?1:0)-(L?1:0),st=(C?1:0)-(T?1:0),j=S.ShiftLeft?6.2:3.6;V&&(Kt=null,q=n.x,st=n.y,j=n.mag>.85?6.2:2+n.mag*2.4);let ft=Math.hypot(q,st);if(ft>0){q/=ft,st/=ft,w.x+=q*j*x,w.z+=st*j*x;let y=Math.atan2(q,st)-w.rot;for(;y>Math.PI;)y-=2*Math.PI;for(;y<-Math.PI;)y+=2*Math.PI;w.rot+=y*Math.min(1,x*14),Math.random()<x*j*1.6&&At.step()}vt.x=w.x,vt.z=w.z,g.grid.resolve(vt,.32),de(vt,.4),g.grid.resolve(vt,.32),w.x=vt.x,w.z=vt.z;for(let y of Z){let U=hs[y.type],k=(w.x-y.x)*Math.cos(y.rot)-(w.z-y.z)*Math.sin(y.rot),O=(w.x-y.x)*Math.sin(y.rot)+(w.z-y.z)*Math.cos(y.rot);if(Math.abs(k)<U.W/2+.3&&Math.abs(O)<U.L/2+.3){let B=U.W/2+.3-Math.abs(k),J=U.L/2+.3-Math.abs(O),it=0,nt=0;B<J?it=Math.sign(k)*B:nt=Math.sign(O)*J,w.x+=it*Math.cos(y.rot)+nt*Math.sin(y.rot),w.z+=-it*Math.sin(y.rot)+nt*Math.cos(y.rot)}}w.x=Math.max(-_+6,Math.min(_-6,w.x)),w.z=Math.max(-m+6,Math.min(m-6,w.z)),N.position.set(w.x,0,w.z),N.rotation.y=w.rot,Nc(N,ft>0||Kt?j:0,x),ft===0&&!Kt&&(N.userData.legs.forEach(y=>y.rotation.x*=.8),N.userData.arms.forEach(y=>y.rotation.x*=.8))}let Ct=14*Math.PI/180,K={x:w.x,z:w.z,h:X};function dt(x,T){let C=w.car?Math.abs(w.car.speed):0,L=w.car?{x:Math.sin(w.car.rot)*C*.55,z:Math.cos(w.car.rot)*C*.55}:{x:0,z:0},W=Vt(),V=X>W*.58,q=V?rt():null,st,j;V?(st=q.cx,j=q.cz,gt=st,Pt=j):Ot?(st=w.x+L.x,j=w.z+L.z,gt=st,Pt=j):(st=gt,j=Pt);let ft=w.car?16+C*.35:12,y=!V&&Ot&&X<ft*1.4?Math.max(X,ft*.85):X,U=T?1:Math.min(1,x*3.2);K.x+=(st-K.x)*U,K.z+=(j-K.z)*U,K.h+=(y-K.h)*(T?1:Math.min(1,x*2.2));let k=K.h>90;h.castShadow=Tr||!k,pt&&(pt.strength=k?0:he[ut].bloom||.3);let O=0,B=0;Yt>.01?(O=(Math.random()-.5)*Yt*1.8,B=(Math.random()-.5)*Yt*1.8,Yt*=Math.pow(.05,x)):Yt=0,l(K.h),o.position.set(K.x+O,a*Math.cos(Ct),K.z+a*Math.sin(Ct)+B),o.lookAt(K.x+O,0,K.z+B);let J=2*u/h.shadow.mapSize.x,it=Math.round(K.x/J)*J,nt=Math.round(K.z/J)*J;h.target.position.set(it,0,nt),h.position.set(it+F.x*250,F.y*250,nt+F.z*250)}let Dt=document.getElementById("street"),Lt=document.getElementById("prompt"),se="";function De(){let x=g.nearRoad(w.x,w.z),T="";x&&x.d<25&&(T=x.road.n||""),T&&T!==se&&(se=T,Dt.textContent=T.toUpperCase(),Dt.classList.remove("pop"),Dt.offsetWidth,Dt.classList.add("pop"));let C="";if(ce.deal=!1,ce.dealLabel="",w.car)ce.nearCar=!1,ce._dealAct=null,(w.car.g.userData.damage||0)>.55?C="Auto stark besch\xE4digt":I.some(W=>Math.hypot(W.x-w.x,W.z-w.z)<5)&&(C="Werkstatt \u2014 stehen bleiben zum Reparieren");else{let L=Z.some(V=>Math.hypot(V.x-w.x,V.z-w.z)<3.6);ce.nearCar=L,L&&(C="Auto in der N\xE4he"),v&&Math.hypot(v.door.x-w.x,v.door.z-w.z)<3&&(C="Imbiss \u2014 Auftr\xE4ge gibt's hier bald");let W=$t.prompt(w.x,w.z);W?(C=W.text,ce.deal=!0,ce.dealLabel=W.spot.role==="buy"?"Kaufen":"Verkaufen",ce._dealAct=W.action):ce._dealAct=null}if(ce.inCar=!!w.car,ce.follow=Ot,w.car)document.body.classList.add("incar");else{yt.getState().on&&yt.stop(!0),document.body.classList.remove("incar");let W=document.getElementById("radio");W&&(W.style.display="")}Lt.textContent=C,Lt.style.opacity=C?1:0,t.onState&&t.onState(ce)}let ce={inCar:!1,nearCar:!1,follow:!0,deal:!1,dealLabel:""};At.setAmbience(ut==="afternoon"?.9:ut==="dusk"?.55:.28);let pe=0;function un(x){pe+=x,G(x),E();for(let T of Z){T.ai&&bt(T,x),T.g.position.set(T.x,0,T.z),T.g.rotation.y=T.rot;let C=T.g.userData.smoke;C&&C.visible&&(C.position.y=1+Math.sin(pe*6+T.x)*.15,C.scale.setScalar(.8+(T.g.userData.damage||0)*1.4+Math.sin(pe*4)*.1))}for(let T of Ht)Math.hypot(T.x-w.x,T.z-w.z)<Math.max(120,K.h*1.2)&&jt(T,x);v&&(v.arrow.position.y=5.5+Math.sin(pe*3)*.6,v.arrow.rotation.set(Math.PI,pe*1.5,0),v.ring.material.opacity=.55+.35*Math.sin(pe*4),v.ring.scale.setScalar(1+.08*Math.sin(pe*4))),dt(x)}function Mn(){Ft&&K.h<90?zt.render():s.render(r,o)}dt(0,!0);let wi=performance.now();function Ti(x){let T=Math.min(.05,(x-wi)/1e3);wi=x,un(T),De(),Mn(),requestAnimationFrame(Ti)}Tr||requestAnimationFrame(Ti);let Xn=()=>{X=Et(X),l(K.h),s.setSize(innerWidth,innerHeight),zt.setSize(innerWidth,innerHeight)};addEventListener("resize",Xn),addEventListener("orientationchange",()=>setTimeout(Xn,250));function R(x,T){let C=x/innerWidth*2-1,L=-(T/innerHeight)*2+1,W=(o.right-o.left)/2,V=(o.top-o.bottom)/2,q=C*W,st=L*V,j=K.x+q,ft=K.z-st/Math.cos(Ct)*.85;return{x:j,z:ft}}return window.hood={P:w,cars:Z,peds:Ht,city:g,camera:o,scene:r,renderer:s,keys:S,hub:v,myCar:It,state:ce,toggleCar:ae,audio:At,radio:yt,deal:$t,getTime:()=>ut,getZoom:()=>X/13,getView:()=>X,touch:n,setTime:_t,setZoom:x=>{X=Et(x<5?13*x:x)},setView:x=>{X=Et(x)},zoomBy:x=>{X=Et(X*x)},setFollow:x=>{Ot=!!x,Ot&&(gt=w.x,Pt=w.z),ce.follow=Ot,t.onState&&t.onState(ce)},isFollow:()=>Ot,panBy:(x,T)=>{let C=K.h*2/innerHeight;gt-=x*C,Pt-=T*C,gt=Math.max(-_,Math.min(_,gt)),Pt=Math.max(-m,Math.min(m,Pt)),Ot=!1,ce.follow=!1,t.onState&&t.onState(ce)},tapWalk:(x,T)=>{let C=R(x,T);Kt={x:C.x,z:C.z}},setMute:x=>{At.setMute(x),yt.setMute(x)},radioNext:()=>yt.next(),radioPrev:()=>yt.prev(),doDeal:()=>{if(ce._dealAct){let x=ce._dealAct();x&&t.onMoney&&t.onMoney(x.cash),x&&x.msg&&(Lt.textContent=x.msg,Lt.style.opacity=1)}},place(x,T,C){w.x=x,w.z=T,C!=null&&(w.rot=C),vt.x=w.x,vt.z=w.z,de(vt,.5),g.grid.resolve(vt,.35),w.x=vt.x,w.z=vt.z,N.position.set(w.x,0,w.z),N.rotation.y=w.rot,dt(0,!0),De()},placeCar(x,T,C){let L=It;L.x=x,L.z=T,L.rot=C,L.g.position.set(x,0,T),L.g.rotation.y=C},enter(){if(!w.car){let x=It;w.x=x.x,w.z=x.z,x.ai=!1,x.driven=!0,et(x,!0),w.car=x,N.visible=!1,At.engineStart(),yt.play(),document.body.classList.add("incar"),ce.inCar=!0,t.onState&&t.onState(ce),De()}},openStreet(x,T,C=180){let L=x??w.x,W=T??w.z,V=null,q=1e9;for(let st of g.roadsDrive)if(["residential","tertiary","unclassified","secondary","primary","living_street"].includes(st.t))for(let j=1;j<st.p.length-1;j++){let ft=st.p[j];if(g.buildings.some(k=>{let O=k.b.p[0];return Math.abs(O[0]-ft[0])<80&&Math.abs(O[1]-ft[1])<80&&tn(ft[0],ft[1],k.b.p)}))continue;let y=0;for(let k of g.buildings){if(k.h<6)continue;let O=1e9,B=-1e9,J=1e9,it=-1e9;for(let nt of k.b.p)O=Math.min(O,nt[0]),B=Math.max(B,nt[0]),J=Math.min(J,nt[1]),it=Math.max(it,nt[1]);J>ft[1]+2&&J<ft[1]+28&&!(B<ft[0]-6||O>ft[0]+6)&&(y=Math.max(y,k.h))}let U=Math.hypot(ft[0]-L,ft[1]-W)+y*.35;U<q&&U<C&&(q=U,V={x:ft[0],z:ft[1],rot:Math.atan2(st.p[j+1][0]-ft[0],st.p[j+1][1]-ft[1]),south:y})}return V},centerMap(){Ot=!1,ce.follow=!1;let x=rt();gt=x.cx,Pt=x.cz,K.x=x.cx,K.z=x.cz,t.onState&&t.onState(ce)},damageCar(x=12){w.car?Ko(w.car,x):It&&Ko(It,x),De()},step(x,T=1){let C=x/T;for(let L=0;L<T;L++)un(C);De()},snap(){dt(0,!0)},lineup(x,T,C=0){let L=[13115434,2771578,14210248,3824186,14725152,2105380];Q.forEach((W,V)=>Y(W,L[V%6],x+V*3.2,T,C,!1))},hidePlayer(x){N.visible=!x},render:Mn,drawCalls(){s.info.autoReset=!1,s.info.reset(),zt.render();let x={calls:s.info.render.calls,tris:s.info.render.triangles};return s.info.autoReset=!0,x},info(){return{buildings:g.buildings.length,cars:Z.length,peds:Ht.length,trees:(i.trees||[]).length,P:{x:w.x,z:w.z},hub:v&&v.door,view:X,viewMax:Vt(),bbox:{x:_,z:m},calls:s.info.render.calls,tris:s.info.render.triangles}}},window.hood}var yf,Tr,Mf=nn(()=>{Vn();wu();Tu();Cu();Lu();Ku();Lc();of();Ic();kc();pf();gf();_f();yf=new URLSearchParams(location.search),Tr=yf.has("shot")});var U_=Of(()=>{Mf();kc();var qt=i=>document.getElementById(i),jo=new URLSearchParams(location.search),ta=jo.has("shot"),xn={get(i,t){try{let e=localStorage.getItem("hood."+i);return e==null?t:JSON.parse(e)}catch{return t}},set(i,t){try{return localStorage.setItem("hood."+i,JSON.stringify(t)),!0}catch{return!1}},del(i){try{localStorage.removeItem("hood."+i)}catch{}}},b_={name:"Dortmund-Innenstadt",lat:51.514,lon:7.46225,builtin:!0},Wn={active:!1,x:0,y:0,mag:0,hbrake:!1},be=null,ds=!!xn.get("mute",!1);function ea(i){qt("loading").classList.remove("hidden","error"),qt("loadMsg").textContent=i,qt("loadBtns").innerHTML=""}function S_(i,t){qt("loading").classList.remove("hidden"),qt("loading").classList.add("error"),qt("loadMsg").textContent=i;let e=qt("loadBtns");e.innerHTML="";for(let[n,s]of t){let r=document.createElement("button");r.className="btn",r.textContent=n,r.onclick=s,e.appendChild(r)}}function bf(){qt("loading").classList.add("hidden")}var If=()=>new Promise(i=>requestAnimationFrame(()=>requestAnimationFrame(i)));function E_(i){return new Promise((t,e)=>{let n=document.createElement("script");n.src=i,n.onload=t,n.onerror=e,document.head.appendChild(n)})}var Sf=i=>i.lat.toFixed(5)+","+i.lon.toFixed(5);async function w_(i){if(i.builtin)return window.HOOD_DATA||(ea("Lade Dortmund \u2026"),await E_("data.js?v="+(window.HOOD_V||""))),window.HOOD_DATA;let t=xn.get("cache",null);if(t&&t.key===Sf(i)&&t.data)return t.data;ea("Lade \u201E"+i.name+"\u201C aus OpenStreetMap \u2026");let e=await lf(i.lat,i.lon,s=>{qt("loadMsg").textContent=s});qt("loadMsg").textContent="Rechne Grundrisse und Stra\xDFen um \u2026",await If();let n=cf(e,i.lat,i.lon);if(n.buildings.length<8&&n.roads.length<6){let s=new Error("empty");throw s.empty=!0,s}return xn.set("cache",{key:Sf(i),data:n})||xn.del("cache"),n}async function T_(){let i=xn.get("city",null),t=jo.get("lat"),e=jo.get("lon");t&&e&&(i={name:jo.get("name")||"Ort",lat:+t,lon:+e}),(!i||!isFinite(i.lat))&&(i=b_);let n;try{n=await w_(i)}catch(o){console.warn(o);let a=o.empty?"Rund um \u201E"+i.name+"\u201C gibt es in OpenStreetMap kaum H\xE4user oder Stra\xDFen. Such dir einen Ort mit mehr Stadt.":(o.timeout?"Zeit\xFCberschreitung: Der Kartenserver (Overpass) hat zu lange gebraucht.":"Der Kartenserver (OpenStreetMap / Overpass) antwortet gerade nicht oder ist \xFCberlastet.")+" Bitte gleich nochmal versuchen \u2013 oder erst mal in Dortmund spielen.";S_(a,[["Nochmal versuchen",()=>location.reload()],["Andere Stadt suchen",()=>{bf(),na(!0)}],["Zur\xFCck nach Dortmund",()=>{xn.del("city"),location.href=location.pathname+(location.search.replace(/[?&](lat|lon|name)=[^&]*/g,"").replace(/^&/,"?")||"")}]]);return}ea("Baue "+i.name+" ("+n.buildings.length+" H\xE4user) \u2026"),await If();let s=xn.get("zoom",null),r=s==null?matchMedia("(pointer:coarse)").matches?.85:1:s>5?s/13:s;be=vf(n,{touch:Wn,hubNear:i.builtin?[-146.9,-38.7]:[0,0],time:xn.get("time","dusk"),zoom:r,muted:ds,onState:L_,onMoney:R_,onRadio:C_}),qt("cityName").textContent=i.name,qt("curCity").textContent=i.name,bf(),!xn.get("seen",!1)&&!ta?na(!0):ta||Ff(),Uf(),Nf(),Lf()}function na(i){qt("menu").classList.remove("hidden"),qt("menu").classList.toggle("start",!!i),qt("resList").innerHTML="",qt("searchMsg").textContent="",Rr()}function Pf(){qt("menu").classList.add("hidden"),xn.set("seen",!0),Ff(),Lf(),be&&be.audio&&be.audio.resume()}function Lf(){if(ta)return;let i=document.documentElement;try{!document.fullscreenElement&&i.requestFullscreen&&matchMedia("(pointer:coarse)").matches&&i.requestFullscreen({navigationUI:"hide"}).then(()=>{try{screen.orientation.lock("landscape").catch(()=>{})}catch{}}).catch(()=>{})}catch{}}function Gc(i){xn.set("city",{name:i.name,lat:i.lat,lon:i.lon}),xn.set("seen",!0),ea("Lade \u201E"+i.name+"\u201C \u2026");let t=new URL(location.href);["lat","lon","name"].forEach(e=>t.searchParams.delete(e)),location.href=t.pathname+(t.search||"")+(t.hash||"")}var Hc=!1;async function Df(i){i&&i.preventDefault();let t=qt("searchIn").value.trim();if(!(t.length<2||Hc)){Hc=!0,qt("searchMsg").textContent="Suche \u2026",qt("resList").innerHTML="",qt("searchIn").blur();try{let e=await uf(t);if(!e.length)qt("searchMsg").textContent="Keine Treffer f\xFCr \u201E"+t+"\u201C. Versuch es mit Stadt und Stadtteil, z. B. \u201EDortmund Hombruch\u201C.";else{qt("searchMsg").textContent="Tippe auf einen Ort:";for(let n of e){let s=document.createElement("button");s.className="res",s.innerHTML="<b></b><span></span>",s.querySelector("b").textContent=n.short,s.querySelector("span").textContent=n.name,s.onclick=()=>Gc({name:n.short,lat:n.lat,lon:n.lon}),qt("resList").appendChild(s)}}}catch{qt("searchMsg").textContent="Suche gerade nicht erreichbar (keine Verbindung?). Bitte nochmal versuchen."}Hc=!1}}function A_(){if(!navigator.geolocation){qt("searchMsg").textContent="Standort wird von diesem Browser nicht unterst\xFCtzt \u2014 nutz einfach die Suche.";return}qt("searchMsg").textContent="Frage Standort ab \u2026",navigator.geolocation.getCurrentPosition(async i=>{let t=i.coords.latitude,e=i.coords.longitude;qt("searchMsg").textContent="Standort gefunden \u2026";let n=await ff(t,e);Gc({name:n,lat:t,lon:e})},()=>{qt("searchMsg").textContent="Standort nicht freigegeben oder nicht verf\xFCgbar \u2014 nutz einfach die Suche."},{enableHighAccuracy:!1,timeout:12e3,maximumAge:6e5})}function Uf(){let i=be?be.getTime():"dusk";document.querySelectorAll("[data-time]").forEach(t=>t.classList.toggle("on",t.dataset.time===i))}function Nf(){let i=qt("muteBtn");i&&(i.textContent=ds?"Ton: aus":"Ton: an"),i&&i.classList.toggle("on",!ds)}function R_(i){let t=qt("money");t&&(t.textContent=Math.round(i)+" \u20AC")}function C_(i){let t=qt("radName");t&&(t.textContent=i&&i.name?i.name:"Radio")}var Ar=null,fs=52;function Ef(i,t){let e=qt("stick").getBoundingClientRect(),n=e.left+e.width/2,s=e.top+e.height/2,r=i-n,o=t-s,a=Math.hypot(r,o);a>fs&&(r*=fs/a,o*=fs/a,a=fs),Wn.x=a?r/fs:0,Wn.y=a?o/fs:0,Wn.mag=a/fs,Wn.active=!0,qt("stickKnob").style.transform=`translate(${r}px,${o}px)`}function Rr(){Ar=null,Wn.active=!1,Wn.mag=0,Wn.x=Wn.y=0;let i=qt("stickKnob");i&&(i.style.transform="translate(0,0)")}function I_(){let i=qt("stick");i.addEventListener("pointerdown",t=>{if(Ar===null){Ar=t.pointerId;try{i.setPointerCapture(t.pointerId)}catch{}qt("hint").classList.add("hidden"),Ef(t.clientX,t.clientY),t.preventDefault(),t.stopPropagation()}}),i.addEventListener("pointermove",t=>{t.pointerId===Ar&&(Ef(t.clientX,t.clientY),t.preventDefault())});for(let t of["pointerup","pointercancel","lostpointercapture"])i.addEventListener(t,e=>{e.pointerId===Ar&&Rr()});addEventListener("blur",Rr),document.addEventListener("visibilitychange",()=>{document.hidden&&(Rr(),Wn.hbrake=!1)})}var ui=new Map,Vc=0,wf=0,$s=null,Qo=null,Tf=0,Af=0,Rf=0;function P_(){let i=qt("game"),t=(n,s)=>Math.hypot(n.x-s.x,n.y-s.y);i.addEventListener("pointerdown",n=>{if(!n.target.closest("#stick,.abtn,#zoomBox,#btnFollow,#radio,#menuBtn")){if(ui.set(n.pointerId,{x:n.clientX,y:n.clientY}),ui.size===2){let[s,r]=[...ui.values()];Vc=t(s,r)||1,wf=be?be.getView():13,$s=null}else ui.size===1&&($s=n.pointerId,Qo={x:n.clientX,y:n.clientY},Tf=performance.now(),Af=n.clientX,Rf=n.clientY);try{i.setPointerCapture(n.pointerId)}catch{}n.preventDefault()}}),i.addEventListener("pointermove",n=>{if(ui.has(n.pointerId)){if(ui.set(n.pointerId,{x:n.clientX,y:n.clientY}),ui.size>=2&&be){let[s,r]=[...ui.values()],o=t(s,r)||1;be.setView(wf*(Vc/o)),$s=null;return}if($s===n.pointerId&&be&&!be.isFollow()){let s=n.clientX-Qo.x,r=n.clientY-Qo.y;Qo={x:n.clientX,y:n.clientY},be.panBy(s,r)}n.preventDefault()}});let e=n=>{if(ui.delete(n.pointerId),ui.size<2&&(Vc=0),n.pointerId===$s){let s=performance.now()-Tf,r=Math.hypot(n.clientX-Af,n.clientY-Rf);s<280&&r<12&&be&&!be.isFollow()||s<280&&r<14&&be&&be.isFollow()&&!be.state.inCar&&be.tapWalk(n.clientX,n.clientY),$s=null}};for(let n of["pointerup","pointercancel","lostpointercapture"])i.addEventListener(n,e)}function L_(i){let t=qt("btnCar");t.textContent=i.inCar?"Aussteigen":"Einsteigen",t.classList.toggle("dim",!i.inCar&&!i.nearCar),qt("btnBrake").classList.toggle("hidden",!i.inCar),document.body.classList.toggle("incar",i.inCar);let e=qt("btnDeal");if(e){let s=!!i.deal;e.classList.toggle("hidden",!s),s&&(e.textContent=i.dealLabel||"Handeln")}let n=qt("btnFollow");n&&n.classList.toggle("hidden",!!i.follow)}function D_(){qt("btnCar").addEventListener("pointerdown",t=>{if(t.preventDefault(),be&&be.toggleCar(),navigator.vibrate)try{navigator.vibrate(15)}catch{}});let i=qt("btnBrake");i.addEventListener("pointerdown",t=>{t.preventDefault();try{i.setPointerCapture(t.pointerId)}catch{}Wn.hbrake=!0,i.classList.add("down")});for(let t of["pointerup","pointercancel","lostpointercapture"])i.addEventListener(t,()=>{Wn.hbrake=!1,i.classList.remove("down")});qt("btnDeal").addEventListener("pointerdown",t=>{t.preventDefault(),be&&be.doDeal()}),qt("btnZin").addEventListener("click",()=>{be&&(be.zoomBy(1/1.22),xn.set("zoom",be.getZoom()))}),qt("btnZout").addEventListener("click",()=>{be&&(be.zoomBy(1.22),xn.set("zoom",be.getZoom()))}),qt("btnFollow").addEventListener("click",()=>{be&&be.setFollow(!0)}),qt("radPrev").addEventListener("click",()=>be&&be.radioPrev()),qt("radNext").addEventListener("click",()=>be&&be.radioNext()),qt("menuBtn").addEventListener("click",()=>na(!1)),qt("playBtn").addEventListener("click",Pf),qt("searchForm").addEventListener("submit",Df),qt("locBtn").addEventListener("click",A_),qt("muteBtn").addEventListener("click",()=>{ds=!ds,xn.set("mute",ds),Nf(),be&&be.setMute(ds)}),qt("creditsBtn").addEventListener("click",()=>qt("credits").classList.add("open")),qt("creditsClose").addEventListener("click",()=>qt("credits").classList.remove("open")),document.querySelectorAll("[data-time]").forEach(t=>t.addEventListener("click",()=>{be&&be.setTime(t.dataset.time),xn.set("time",t.dataset.time),Uf()}));for(let t of["gesturestart","dblclick"])document.addEventListener(t,e=>e.preventDefault());document.addEventListener("contextmenu",t=>{t.target.closest("input,#credits")||t.preventDefault()})}var Cf=0;function Ff(){let i=qt("hint");i.classList.remove("hidden"),clearTimeout(Cf),Cf=setTimeout(()=>i.classList.add("hidden"),5500)}ta&&document.body.classList.add("shot");I_();P_();D_();T_();window.hoodApp={TOUCH:Wn,openMenu:na,closeMenu:Pf,releaseStick:Rr,chooseCity:Gc,doSearch:Df,LS:xn}});U_();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
