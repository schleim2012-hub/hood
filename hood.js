(()=>{var fn=(i,t)=>()=>(i&&(t=i(i=0)),t);var uf=(i,t)=>()=>(t||i((t={exports:{}}).exports,t),t.exports);function Fs(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(mn[i&255]+mn[i>>8&255]+mn[i>>16&255]+mn[i>>24&255]+"-"+mn[t&255]+mn[t>>8&255]+"-"+mn[t>>16&15|64]+mn[t>>24&255]+"-"+mn[e&63|128]+mn[e>>8&255]+"-"+mn[e>>16&255]+mn[e>>24&255]+mn[n&255]+mn[n>>8&255]+mn[n>>16&255]+mn[n>>24&255]).toLowerCase()}function dn(i,t,e){return Math.max(t,Math.min(e,i))}function qf(i,t){return(i%t+t)%t}function $o(i,t,e){return(1-e)*i+e*t}function Gs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Tn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}function Qh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Kr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Yf(){let i=Kr("canvas");return i.style.display="block",i}function Js(i){i in zc||(zc[i]=!0,console.warn(i))}function Zf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function $f(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Jf(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}function mi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Es(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}function Ko(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ul.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function jo(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){zi.fromArray(i,r);let a=s.x*Math.abs(zi.x)+s.y*Math.abs(zi.y)+s.z*Math.abs(zi.z),l=t.dot(zi),c=e.dot(zi),h=n.dot(zi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}function fa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}function ld(i,t,e,n,s,r,o,a){let l;if(t.side===Rn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Ci,a),l===null)return null;Dr.copy(a),Dr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Dr);return c<e.near||c>e.far?null:{distance:c,point:Dr.clone(),object:i}}function Ur(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Cr),i.getVertexPosition(l,Ir),i.getVertexPosition(c,Pr);let h=ld(i,t,e,n,Cr,Ir,Pr,nh);if(h){let f=new O;qi.getBarycoord(nh,Cr,Ir,Pr,f),s&&(h.uv=qi.getInterpolatedAttribute(s,a,l,c,f,new _t)),r&&(h.uv1=qi.getInterpolatedAttribute(r,a,l,c,f,new _t)),o&&(h.normal=qi.getInterpolatedAttribute(o,a,l,c,f,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new O,materialIndex:0};qi.getNormal(Cr,Ir,Pr,u.normal),h.face=u,h.barycoord=f}return h}function Ls(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Mn(i){let t={};for(let e=0;e<i.length;e++){let n=Ls(i[e]);for(let s in n)t[s]=n[s]}return t}function cd(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function tu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Pe.workingColorSpace}function eu(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function pd(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){let h=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,h);else{f.sort((p,m)=>p.start-m.start);let u=0;for(let p=1;p<f.length;p++){let m=f[u],x=f[p];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++u,f[u]=x)}f.length=u+1;for(let p=0,m=f.length;p<m;p++){let x=f[p];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}function $m(i,t,e,n,s,r,o){let a=new se(0),l=r===!0?0:1,c,h,f=null,u=0,p=null;function m(E){let M=E.isScene===!0?E.background:null;return M&&M.isTexture&&(M=(E.backgroundBlurriness>0?e:t).get(M)),M}function x(E){let M=!1,_=m(E);_===null?d(a,l):_&&_.isColor&&(d(_,1),M=!0);let F=i.xr.getEnvironmentBlendMode();F==="additive"?n.buffers.color.setClear(0,0,0,1,o):F==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(E,M){let _=m(M);_&&(_.isCubeTexture||_.mapping===Eo)?(h===void 0&&(h=new re(new Ke(1,1,1),new on({name:"BackgroundCubeMaterial",uniforms:Ls(jn.backgroundCube.uniforms),vertexShader:jn.backgroundCube.vertexShader,fragmentShader:jn.backgroundCube.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(F,C,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Vi.copy(M.backgroundRotation),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Zm.makeRotationFromEuler(Vi)),h.material.toneMapped=Pe.getTransfer(_.colorSpace)!==He,(f!==_||u!==_.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,f=_,u=_.version,p=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new re(new En(2,2),new on({name:"BackgroundMaterial",uniforms:Ls(jn.background.uniforms),vertexShader:jn.background.vertexShader,fragmentShader:jn.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Pe.getTransfer(_.colorSpace)!==He,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||u!==_.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,f=_,u=_.version,p=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function d(E,M){E.getRGB(Fr,tu(i)),n.buffers.color.setClear(Fr.r,Fr.g,Fr.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(E,M=1){a.set(E),l=M,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,d(a,l)},render:x,addToRenderList:g}}function Jm(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(S,U,K,Z,j){let st=!1,$=f(Z,K,U);r!==$&&(r=$,c(r.object)),st=p(S,Z,K,j),st&&m(S,Z,K,j),j!==null&&t.update(j,i.ELEMENT_ARRAY_BUFFER),(st||o)&&(o=!1,_(S,U,K,Z),j!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function f(S,U,K){let Z=K.wireframe===!0,j=n[S.id];j===void 0&&(j={},n[S.id]=j);let st=j[U.id];st===void 0&&(st={},j[U.id]=st);let $=st[Z];return $===void 0&&($=u(l()),st[Z]=$),$}function u(S){let U=[],K=[],Z=[];for(let j=0;j<e;j++)U[j]=0,K[j]=0,Z[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:K,attributeDivisors:Z,object:S,attributes:{},index:null}}function p(S,U,K,Z){let j=r.attributes,st=U.attributes,$=0,ut=K.getAttributes();for(let nt in ut)if(ut[nt].location>=0){let Pt=j[nt],Bt=st[nt];if(Bt===void 0&&(nt==="instanceMatrix"&&S.instanceMatrix&&(Bt=S.instanceMatrix),nt==="instanceColor"&&S.instanceColor&&(Bt=S.instanceColor)),Pt===void 0||Pt.attribute!==Bt||Bt&&Pt.data!==Bt.data)return!0;$++}return r.attributesNum!==$||r.index!==Z}function m(S,U,K,Z){let j={},st=U.attributes,$=0,ut=K.getAttributes();for(let nt in ut)if(ut[nt].location>=0){let Pt=st[nt];Pt===void 0&&(nt==="instanceMatrix"&&S.instanceMatrix&&(Pt=S.instanceMatrix),nt==="instanceColor"&&S.instanceColor&&(Pt=S.instanceColor));let Bt={};Bt.attribute=Pt,Pt&&Pt.data&&(Bt.data=Pt.data),j[nt]=Bt,$++}r.attributes=j,r.attributesNum=$,r.index=Z}function x(){let S=r.newAttributes;for(let U=0,K=S.length;U<K;U++)S[U]=0}function g(S){d(S,0)}function d(S,U){let K=r.newAttributes,Z=r.enabledAttributes,j=r.attributeDivisors;K[S]=1,Z[S]===0&&(i.enableVertexAttribArray(S),Z[S]=1),j[S]!==U&&(i.vertexAttribDivisor(S,U),j[S]=U)}function E(){let S=r.newAttributes,U=r.enabledAttributes;for(let K=0,Z=U.length;K<Z;K++)U[K]!==S[K]&&(i.disableVertexAttribArray(K),U[K]=0)}function M(S,U,K,Z,j,st,$){$===!0?i.vertexAttribIPointer(S,U,K,j,st):i.vertexAttribPointer(S,U,K,Z,j,st)}function _(S,U,K,Z){x();let j=Z.attributes,st=K.getAttributes(),$=U.defaultAttributeValues;for(let ut in st){let nt=st[ut];if(nt.location>=0){let Et=j[ut];if(Et===void 0&&(ut==="instanceMatrix"&&S.instanceMatrix&&(Et=S.instanceMatrix),ut==="instanceColor"&&S.instanceColor&&(Et=S.instanceColor)),Et!==void 0){let Pt=Et.normalized,Bt=Et.itemSize,te=t.get(Et);if(te===void 0)continue;let we=te.buffer,ot=te.type,Mt=te.bytesPerElement,Gt=ot===i.INT||ot===i.UNSIGNED_INT||Et.gpuType===ic;if(Et.isInterleavedBufferAttribute){let St=Et.data,Vt=St.stride,jt=Et.offset;if(St.isInstancedInterleavedBuffer){for(let $t=0;$t<nt.locationSize;$t++)d(nt.location+$t,St.meshPerAttribute);S.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let $t=0;$t<nt.locationSize;$t++)g(nt.location+$t);i.bindBuffer(i.ARRAY_BUFFER,we);for(let $t=0;$t<nt.locationSize;$t++)M(nt.location+$t,Bt/nt.locationSize,ot,Pt,Vt*Mt,(jt+Bt/nt.locationSize*$t)*Mt,Gt)}else{if(Et.isInstancedBufferAttribute){for(let St=0;St<nt.locationSize;St++)d(nt.location+St,Et.meshPerAttribute);S.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let St=0;St<nt.locationSize;St++)g(nt.location+St);i.bindBuffer(i.ARRAY_BUFFER,we);for(let St=0;St<nt.locationSize;St++)M(nt.location+St,Bt/nt.locationSize,ot,Pt,Bt*Mt,Bt/nt.locationSize*St*Mt,Gt)}}else if($!==void 0){let Pt=$[ut];if(Pt!==void 0)switch(Pt.length){case 2:i.vertexAttrib2fv(nt.location,Pt);break;case 3:i.vertexAttrib3fv(nt.location,Pt);break;case 4:i.vertexAttrib4fv(nt.location,Pt);break;default:i.vertexAttrib1fv(nt.location,Pt)}}}}E()}function F(){L();for(let S in n){let U=n[S];for(let K in U){let Z=U[K];for(let j in Z)h(Z[j].object),delete Z[j];delete U[K]}delete n[S]}}function C(S){if(n[S.id]===void 0)return;let U=n[S.id];for(let K in U){let Z=U[K];for(let j in Z)h(Z[j].object),delete Z[j];delete U[K]}delete n[S.id]}function b(S){for(let U in n){let K=n[U];if(K[S.id]===void 0)continue;let Z=K[S.id];for(let j in Z)h(Z[j].object),delete Z[j];delete K[S.id]}}function L(){w(),o=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:w,dispose:F,releaseStatesOfGeometry:C,releaseStatesOfProgram:b,initAttributes:x,enableAttribute:g,disableUnusedAttributes:E}}function Km(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,f){f!==0&&(i.drawArraysInstanced(n,c,h,f),e.update(h,n,f))}function a(c,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let p=0;for(let m=0;m<f;m++)p+=h[m];e.update(p,n,1)}function l(c,h,f,u){if(f===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<c.length;m++)o(c[m],h[m],u[m]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,f);let m=0;for(let x=0;x<f;x++)m+=h[x]*u[x];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Qm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let b=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(b){return!(b!==Zn&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){let L=b===Jn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==gi&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==ei&&!L)}function l(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),F=m>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:E,maxVaryings:M,maxFragmentUniforms:_,vertexTextures:F,maxSamples:C}}function jm(i){let t=this,e=null,n=0,s=!1,r=!1,o=new di,a=new _e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let p=f.length!==0||u||n!==0||s;return s=u,n=f.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,p){let m=f.clippingPlanes,x=f.clipIntersection,g=f.clipShadows,d=i.get(f);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{let E=r?0:n,M=E*4,_=d.clippingState||null;l.value=_,_=h(m,u,M,p);for(let F=0;F!==M;++F)_[F]=e[F];d.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,p,m){let x=f!==null?f.length:0,g=null;if(x!==0){if(g=l.value,m!==!0||g===null){let d=p+x*4,E=u.matrixWorldInverse;a.getNormalMatrix(E),(g===null||g.length<d)&&(g=new Float32Array(d));for(let M=0,_=p;M!==x;++M,_+=4)o.copy(f[M]).applyMatrix4(E,a),o.normal.toArray(g,_),g[_+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function t0(i){let t=new WeakMap;function e(o,a){return a===Ua?o.mapping=Rs:a===Na&&(o.mapping=Cs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ua||a===Na)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new gl(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}function e0(i){let t=[],e=[],n=[],s=i,r=i-ys+1+rh.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-ys?l=rh[o-i+ys-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,f=1+c,u=[h,h,f,h,f,f,h,h,f,f,h,f],p=6,m=6,x=3,g=2,d=1,E=new Float32Array(x*m*p),M=new Float32Array(g*m*p),_=new Float32Array(d*m*p);for(let C=0;C<p;C++){let b=C%3*2/3-1,L=C>2?0:-1,w=[b,L,0,b+2/3,L,0,b+2/3,L+1,0,b,L,0,b+2/3,L+1,0,b,L+1,0];E.set(w,x*m*C),M.set(u,g*m*C);let S=[C,C,C,C,C,C];_.set(S,d*m*C)}let F=new rn;F.setAttribute("position",new nn(E,x)),F.setAttribute("uv",new nn(M,g)),F.setAttribute("faceIndex",new nn(_,d)),t.push(F),s>ys&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function lh(i,t,e){let n=new bn(i,t,e);return n.texture.mapping=Eo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Or(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function n0(i,t,e){let n=new Float32Array(Yi),s=new O(0,1,0);return new on({name:"SphericalGaussianBlur",defines:{n:Yi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:hc(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function ch(){return new on({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hc(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function hh(){return new on({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function hc(){return`

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
	`}function i0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Ua||l===Na,h=l===Rs||l===Cs;if(c||h){let f=t.get(a),u=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new ro(i)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{let p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new ro(i)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function s0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Js("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function r0(i,t,e,n){let s={},r=new WeakMap;function o(f){let u=f.target;u.index!==null&&t.remove(u.index);for(let m in u.attributes)t.remove(u.attributes[m]);for(let m in u.morphAttributes){let x=u.morphAttributes[m];for(let g=0,d=x.length;g<d;g++)t.remove(x[g])}u.removeEventListener("dispose",o),delete s[u.id];let p=r.get(u);p&&(t.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(f,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(f){let u=f.attributes;for(let m in u)t.update(u[m],i.ARRAY_BUFFER);let p=f.morphAttributes;for(let m in p){let x=p[m];for(let g=0,d=x.length;g<d;g++)t.update(x[g],i.ARRAY_BUFFER)}}function c(f){let u=[],p=f.index,m=f.attributes.position,x=0;if(p!==null){let E=p.array;x=p.version;for(let M=0,_=E.length;M<_;M+=3){let F=E[M+0],C=E[M+1],b=E[M+2];u.push(F,C,C,b,b,F)}}else if(m!==void 0){let E=m.array;x=m.version;for(let M=0,_=E.length/3-1;M<_;M+=3){let F=M+0,C=M+1,b=M+2;u.push(F,C,C,b,b,F)}}else return;let g=new(Qh(u)?no:eo)(u,1);g.version=x;let d=r.get(f);d&&t.remove(d),r.set(f,g)}function h(f){let u=r.get(f);if(u){let p=f.index;p!==null&&u.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function o0(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,p){i.drawElements(n,p,r,u*o),e.update(p,n,1)}function c(u,p,m){m!==0&&(i.drawElementsInstanced(n,p,r,u*o,m),e.update(p,n,m))}function h(u,p,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,u,0,m);let g=0;for(let d=0;d<m;d++)g+=p[d];e.update(g,n,1)}function f(u,p,m,x){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<u.length;d++)c(u[d]/o,p[d],x[d]);else{g.multiDrawElementsInstancedWEBGL(n,p,0,r,u,0,x,0,m);let d=0;for(let E=0;E<m;E++)d+=p[E]*x[E];e.update(d,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function a0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function l0(i,t,e){let n=new WeakMap,s=new Je;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==f){let w=function(){b.dispose(),n.delete(a),a.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();let p=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],E=a.morphAttributes.color||[],M=0;p===!0&&(M=1),m===!0&&(M=2),x===!0&&(M=3);let _=a.attributes.position.count*M,F=1;_>t.maxTextureSize&&(F=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let C=new Float32Array(_*F*4*f),b=new jr(C,_,F,f);b.type=ei,b.needsUpdate=!0;let L=M*4;for(let S=0;S<f;S++){let U=g[S],K=d[S],Z=E[S],j=_*F*4*S;for(let st=0;st<U.count;st++){let $=st*L;p===!0&&(s.fromBufferAttribute(U,st),C[j+$+0]=s.x,C[j+$+1]=s.y,C[j+$+2]=s.z,C[j+$+3]=0),m===!0&&(s.fromBufferAttribute(K,st),C[j+$+4]=s.x,C[j+$+5]=s.y,C[j+$+6]=s.z,C[j+$+7]=0),x===!0&&(s.fromBufferAttribute(Z,st),C[j+$+8]=s.x,C[j+$+9]=s.y,C[j+$+10]=s.z,C[j+$+11]=Z.itemSize===4?s.w:1)}}u={count:f,texture:b,size:new _t(_,F)},n.set(a,u),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];let m=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function c0(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,f=t.get(l,h);if(s.get(f)!==c&&(t.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return f}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}function Os(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=fh[s];if(r===void 0&&(r=new Float32Array(s),fh[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function an(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ln(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function To(i,t){let e=dh[t];e===void 0&&(e=new Int32Array(t),dh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function h0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function u0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(an(e,t))return;i.uniform2fv(this.addr,t),ln(e,t)}}function f0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(an(e,t))return;i.uniform3fv(this.addr,t),ln(e,t)}}function d0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(an(e,t))return;i.uniform4fv(this.addr,t),ln(e,t)}}function p0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(an(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ln(e,t)}else{if(an(e,n))return;gh.set(n),i.uniformMatrix2fv(this.addr,!1,gh),ln(e,n)}}function m0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(an(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ln(e,t)}else{if(an(e,n))return;mh.set(n),i.uniformMatrix3fv(this.addr,!1,mh),ln(e,n)}}function g0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(an(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ln(e,t)}else{if(an(e,n))return;ph.set(n),i.uniformMatrix4fv(this.addr,!1,ph),ln(e,n)}}function x0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function _0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(an(e,t))return;i.uniform2iv(this.addr,t),ln(e,t)}}function v0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(an(e,t))return;i.uniform3iv(this.addr,t),ln(e,t)}}function y0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(an(e,t))return;i.uniform4iv(this.addr,t),ln(e,t)}}function M0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function S0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(an(e,t))return;i.uniform2uiv(this.addr,t),ln(e,t)}}function b0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(an(e,t))return;i.uniform3uiv(this.addr,t),ln(e,t)}}function E0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(an(e,t))return;i.uniform4uiv(this.addr,t),ln(e,t)}}function w0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(uh.compareFunction=Kh,r=uh):r=nu,e.setTexture2D(t||r,s)}function T0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||su,s)}function A0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||ru,s)}function R0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||iu,s)}function C0(i){switch(i){case 5126:return h0;case 35664:return u0;case 35665:return f0;case 35666:return d0;case 35674:return p0;case 35675:return m0;case 35676:return g0;case 5124:case 35670:return x0;case 35667:case 35671:return _0;case 35668:case 35672:return v0;case 35669:case 35673:return y0;case 5125:return M0;case 36294:return S0;case 36295:return b0;case 36296:return E0;case 35678:case 36198:case 36298:case 36306:case 35682:return w0;case 35679:case 36299:case 36307:return T0;case 35680:case 36300:case 36308:case 36293:return A0;case 36289:case 36303:case 36311:case 36292:return R0}}function I0(i,t){i.uniform1fv(this.addr,t)}function P0(i,t){let e=Os(t,this.size,2);i.uniform2fv(this.addr,e)}function L0(i,t){let e=Os(t,this.size,3);i.uniform3fv(this.addr,e)}function D0(i,t){let e=Os(t,this.size,4);i.uniform4fv(this.addr,e)}function U0(i,t){let e=Os(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function N0(i,t){let e=Os(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function F0(i,t){let e=Os(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function O0(i,t){i.uniform1iv(this.addr,t)}function B0(i,t){i.uniform2iv(this.addr,t)}function z0(i,t){i.uniform3iv(this.addr,t)}function k0(i,t){i.uniform4iv(this.addr,t)}function H0(i,t){i.uniform1uiv(this.addr,t)}function V0(i,t){i.uniform2uiv(this.addr,t)}function G0(i,t){i.uniform3uiv(this.addr,t)}function W0(i,t){i.uniform4uiv(this.addr,t)}function X0(i,t,e){let n=this.cache,s=t.length,r=To(e,s);an(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||nu,r[o])}function q0(i,t,e){let n=this.cache,s=t.length,r=To(e,s);an(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||su,r[o])}function Y0(i,t,e){let n=this.cache,s=t.length,r=To(e,s);an(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||ru,r[o])}function Z0(i,t,e){let n=this.cache,s=t.length,r=To(e,s);an(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||iu,r[o])}function $0(i){switch(i){case 5126:return I0;case 35664:return P0;case 35665:return L0;case 35666:return D0;case 35674:return U0;case 35675:return N0;case 35676:return F0;case 5124:case 35670:return O0;case 35667:case 35671:return B0;case 35668:case 35672:return z0;case 35669:case 35673:return k0;case 5125:return H0;case 36294:return V0;case 36295:return G0;case 36296:return W0;case 35678:case 36198:case 36298:case 36306:case 35682:return X0;case 35679:case 36299:case 36307:return q0;case 35680:case 36300:case 36308:case 36293:return Y0;case 36289:case 36303:case 36311:case 36292:return Z0}}function xh(i,t){i.seq.push(t),i.map[t.id]=t}function J0(i,t,e){let n=i.name,s=n.length;for(Ma.lastIndex=0;;){let r=Ma.exec(n),o=Ma.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){xh(e,c===void 0?new xl(a,i,t):new _l(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new vl(a),xh(e,f)),e=f}}}function _h(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}function j0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function tg(i){Pe._getMatrix(vh,Pe.workingColorSpace,i);let t=`mat3( ${vh.elements.map(e=>e.toFixed(4))} )`;switch(Pe.getTransfer(i)){case wo:return[t,"LinearTransferOETF"];case He:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function yh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+j0(i.getShaderSource(t),o)}else return s}function eg(i,t){let e=tg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function ng(i,t){let e;switch(t){case Ql:e="Linear";break;case jl:e="Reinhard";break;case tc:e="Cineon";break;case ur:e="ACESFilmic";break;case ec:e="AgX";break;case nc:e="Neutral";break;case Uf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function ig(){Pe.getLuminanceCoefficients(Br);let i=Br.x.toFixed(4),t=Br.y.toFixed(4),e=Br.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ks).join(`
`)}function rg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function og(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ks(i){return i!==""}function Mh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Sh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}function yl(i){return i.replace(ag,cg)}function cg(i,t){let e=ve[t];if(e===void 0){let n=lg.get(t);if(n!==void 0)e=ve[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return yl(e)}function bh(i){return i.replace(hg,ug)}function ug(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Eh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function fg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Bh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Kl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===fi&&(t="SHADOWMAP_TYPE_VSM"),t}function dg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Rs:case Cs:t="ENVMAP_TYPE_CUBE";break;case Eo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function pg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Cs:t="ENVMAP_MODE_REFRACTION";break}return t}function mg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case zh:t="ENVMAP_BLENDING_MULTIPLY";break;case Lf:t="ENVMAP_BLENDING_MIX";break;case Df:t="ENVMAP_BLENDING_ADD";break}return t}function gg(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function xg(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=fg(e),c=dg(e),h=pg(e),f=mg(e),u=gg(e),p=sg(e),m=rg(r),x=s.createProgram(),g,d,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ks).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ks).join(`
`),d.length>0&&(d+=`
`)):(g=[Eh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ks).join(`
`),d=[Eh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ai?"#define TONE_MAPPING":"",e.toneMapping!==Ai?ve.tonemapping_pars_fragment:"",e.toneMapping!==Ai?ng("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ve.colorspace_pars_fragment,eg("linearToOutputTexel",e.outputColorSpace),ig(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ks).join(`
`)),o=yl(o),o=Mh(o,e),o=Sh(o,e),a=yl(a),a=Mh(a,e),a=Sh(a,e),o=bh(o),a=bh(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",e.glslVersion===Bc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Bc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let M=E+g+o,_=E+d+a,F=_h(s,s.VERTEX_SHADER,M),C=_h(s,s.FRAGMENT_SHADER,_);s.attachShader(x,F),s.attachShader(x,C),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function b(U){if(i.debug.checkShaderErrors){let K=s.getProgramInfoLog(x).trim(),Z=s.getShaderInfoLog(F).trim(),j=s.getShaderInfoLog(C).trim(),st=!0,$=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(st=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,F,C);else{let ut=yh(s,F,"vertex"),nt=yh(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+K+`
`+ut+`
`+nt)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(Z===""||j==="")&&($=!1);$&&(U.diagnostics={runnable:st,programLog:K,vertexShader:{log:Z,prefix:g},fragmentShader:{log:j,prefix:d}})}s.deleteShader(F),s.deleteShader(C),L=new ws(s,x),w=og(s,x)}let L;this.getUniforms=function(){return L===void 0&&b(this),L};let w;this.getAttributes=function(){return w===void 0&&b(this),w};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(x,K0)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Q0++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=F,this.fragmentShader=C,this}function vg(i,t,e,n,s,r,o){let a=new to,l=new Ml,c=new Set,h=[],f=s.logarithmicDepthBuffer,u=s.vertexTextures,p=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return c.add(w),w===0?"uv":`uv${w}`}function g(w,S,U,K,Z){let j=K.fog,st=Z.geometry,$=w.isMeshStandardMaterial?K.environment:null,ut=(w.isMeshStandardMaterial?e:t).get(w.envMap||$),nt=ut&&ut.mapping===Eo?ut.image.height:null,Et=m[w.type];w.precision!==null&&(p=s.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));let Pt=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,Bt=Pt!==void 0?Pt.length:0,te=0;st.morphAttributes.position!==void 0&&(te=1),st.morphAttributes.normal!==void 0&&(te=2),st.morphAttributes.color!==void 0&&(te=3);let we,ot,Mt,Gt;if(Et){let D=jn[Et];we=D.vertexShader,ot=D.fragmentShader}else we=w.vertexShader,ot=w.fragmentShader,l.update(w),Mt=l.getVertexShaderID(w),Gt=l.getFragmentShaderID(w);let St=i.getRenderTarget(),Vt=i.state.buffers.depth.getReversed(),jt=Z.isInstancedMesh===!0,$t=Z.isBatchedMesh===!0,fe=!!w.map,ct=!!w.matcap,ft=!!ut,P=!!w.aoMap,kt=!!w.lightMap,dt=!!w.bumpMap,Rt=!!w.normalMap,wt=!!w.displacementMap,Kt=!!w.emissiveMap,Lt=!!w.metalnessMap,A=!!w.roughnessMap,v=w.anisotropy>0,X=w.clearcoat>0,it=w.dispersion>0,ht=w.iridescence>0,rt=w.sheen>0,Dt=w.transmission>0,Tt=v&&!!w.anisotropyMap,xt=X&&!!w.clearcoatMap,de=X&&!!w.clearcoatNormalMap,mt=X&&!!w.clearcoatRoughnessMap,Ot=ht&&!!w.iridescenceMap,Qt=ht&&!!w.iridescenceThicknessMap,T=rt&&!!w.sheenColorMap,N=rt&&!!w.sheenRoughnessMap,Y=!!w.specularMap,Q=!!w.specularColorMap,vt=!!w.specularIntensityMap,I=Dt&&!!w.transmissionMap,tt=Dt&&!!w.thicknessMap,V=!!w.gradientMap,et=!!w.alphaMap,pt=w.alphaTest>0,z=!!w.alphaHash,Nt=!!w.extensions,ee=Ai;w.toneMapped&&(St===null||St.isXRRenderTarget===!0)&&(ee=i.toneMapping);let R={shaderID:Et,shaderType:w.type,shaderName:w.name,vertexShader:we,fragmentShader:ot,defines:w.defines,customVertexShaderID:Mt,customFragmentShaderID:Gt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:$t,batchingColor:$t&&Z._colorsTexture!==null,instancing:jt,instancingColor:jt&&Z.instanceColor!==null,instancingMorph:jt&&Z.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:St===null?i.outputColorSpace:St.isXRRenderTarget===!0?St.texture.colorSpace:Ns,alphaToCoverage:!!w.alphaToCoverage,map:fe,matcap:ct,envMap:ft,envMapMode:ft&&ut.mapping,envMapCubeUVHeight:nt,aoMap:P,lightMap:kt,bumpMap:dt,normalMap:Rt,displacementMap:u&&wt,emissiveMap:Kt,normalMapObjectSpace:Rt&&w.normalMapType===Bf,normalMapTangentSpace:Rt&&w.normalMapType===Jh,metalnessMap:Lt,roughnessMap:A,anisotropy:v,anisotropyMap:Tt,clearcoat:X,clearcoatMap:xt,clearcoatNormalMap:de,clearcoatRoughnessMap:mt,dispersion:it,iridescence:ht,iridescenceMap:Ot,iridescenceThicknessMap:Qt,sheen:rt,sheenColorMap:T,sheenRoughnessMap:N,specularMap:Y,specularColorMap:Q,specularIntensityMap:vt,transmission:Dt,transmissionMap:I,thicknessMap:tt,gradientMap:V,opaque:w.transparent===!1&&w.blending===Ss&&w.alphaToCoverage===!1,alphaMap:et,alphaTest:pt,alphaHash:z,combine:w.combine,mapUv:fe&&x(w.map.channel),aoMapUv:P&&x(w.aoMap.channel),lightMapUv:kt&&x(w.lightMap.channel),bumpMapUv:dt&&x(w.bumpMap.channel),normalMapUv:Rt&&x(w.normalMap.channel),displacementMapUv:wt&&x(w.displacementMap.channel),emissiveMapUv:Kt&&x(w.emissiveMap.channel),metalnessMapUv:Lt&&x(w.metalnessMap.channel),roughnessMapUv:A&&x(w.roughnessMap.channel),anisotropyMapUv:Tt&&x(w.anisotropyMap.channel),clearcoatMapUv:xt&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:de&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:mt&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Ot&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:Qt&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:T&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:N&&x(w.sheenRoughnessMap.channel),specularMapUv:Y&&x(w.specularMap.channel),specularColorMapUv:Q&&x(w.specularColorMap.channel),specularIntensityMapUv:vt&&x(w.specularIntensityMap.channel),transmissionMapUv:I&&x(w.transmissionMap.channel),thicknessMapUv:tt&&x(w.thicknessMap.channel),alphaMapUv:et&&x(w.alphaMap.channel),vertexTangents:!!st.attributes.tangent&&(Rt||v),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!st.attributes.uv&&(fe||et),fog:!!j,useFog:w.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Vt,skinning:Z.isSkinnedMesh===!0,morphTargets:st.morphAttributes.position!==void 0,morphNormals:st.morphAttributes.normal!==void 0,morphColors:st.morphAttributes.color!==void 0,morphTargetsCount:Bt,morphTextureStride:te,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:ee,decodeVideoTexture:fe&&w.map.isVideoTexture===!0&&Pe.getTransfer(w.map.colorSpace)===He,decodeVideoTextureEmissive:Kt&&w.emissiveMap.isVideoTexture===!0&&Pe.getTransfer(w.emissiveMap.colorSpace)===He,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Sn,flipSided:w.side===Rn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Nt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Nt&&w.extensions.multiDraw===!0||$t)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return R.vertexUv1s=c.has(1),R.vertexUv2s=c.has(2),R.vertexUv3s=c.has(3),c.clear(),R}function d(w){let S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(let U in w.defines)S.push(U),S.push(w.defines[U]);return w.isRawShaderMaterial===!1&&(E(S,w),M(S,w),S.push(i.outputColorSpace)),S.push(w.customProgramCacheKey),S.join()}function E(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function M(w,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),w.push(a.mask)}function _(w){let S=m[w.type],U;if(S){let K=jn[S];U=Di.clone(K.uniforms)}else U=w.uniforms;return U}function F(w,S){let U;for(let K=0,Z=h.length;K<Z;K++){let j=h[K];if(j.cacheKey===S){U=j,++U.usedTimes;break}}return U===void 0&&(U=new xg(i,S,w,r),h.push(U)),U}function C(w){if(--w.usedTimes===0){let S=h.indexOf(w);h[S]=h[h.length-1],h.pop(),w.destroy()}}function b(w){l.remove(w)}function L(){l.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:_,acquireProgram:F,releaseProgram:C,releaseShaderCache:b,programs:h,dispose:L}}function yg(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Mg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function wh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Th(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f,u,p,m,x,g){let d=i[t];return d===void 0?(d={id:f.id,object:f,geometry:u,material:p,groupOrder:m,renderOrder:f.renderOrder,z:x,group:g},i[t]=d):(d.id=f.id,d.object=f,d.geometry=u,d.material=p,d.groupOrder=m,d.renderOrder=f.renderOrder,d.z=x,d.group=g),t++,d}function a(f,u,p,m,x,g){let d=o(f,u,p,m,x,g);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):e.push(d)}function l(f,u,p,m,x,g){let d=o(f,u,p,m,x,g);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function c(f,u){e.length>1&&e.sort(f||Mg),n.length>1&&n.sort(u||wh),s.length>1&&s.sort(u||wh)}function h(){for(let f=t,u=i.length;f<u;f++){let p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Sg(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Th,i.set(n,[o])):s>=r.length?(o=new Th,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function bg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new O,color:new se};break;case"SpotLight":e={position:new O,direction:new O,color:new se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new se,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new se,groundColor:new se};break;case"RectAreaLight":e={color:new se,position:new O,halfWidth:new O,halfHeight:new O};break}return i[t.id]=e,e}}}function Eg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}function Tg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Ag(i){let t=new bg,e=Eg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);let s=new O,r=new Ve,o=new Ve;function a(c){let h=0,f=0,u=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let p=0,m=0,x=0,g=0,d=0,E=0,M=0,_=0,F=0,C=0,b=0;c.sort(Tg);for(let w=0,S=c.length;w<S;w++){let U=c[w],K=U.color,Z=U.intensity,j=U.distance,st=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=K.r*Z,f+=K.g*Z,u+=K.b*Z;else if(U.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(U.sh.coefficients[$],Z);b++}else if(U.isDirectionalLight){let $=t.get(U);if($.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let ut=U.shadow,nt=e.get(U);nt.shadowIntensity=ut.intensity,nt.shadowBias=ut.bias,nt.shadowNormalBias=ut.normalBias,nt.shadowRadius=ut.radius,nt.shadowMapSize=ut.mapSize,n.directionalShadow[p]=nt,n.directionalShadowMap[p]=st,n.directionalShadowMatrix[p]=U.shadow.matrix,E++}n.directional[p]=$,p++}else if(U.isSpotLight){let $=t.get(U);$.position.setFromMatrixPosition(U.matrixWorld),$.color.copy(K).multiplyScalar(Z),$.distance=j,$.coneCos=Math.cos(U.angle),$.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),$.decay=U.decay,n.spot[x]=$;let ut=U.shadow;if(U.map&&(n.spotLightMap[F]=U.map,F++,ut.updateMatrices(U),U.castShadow&&C++),n.spotLightMatrix[x]=ut.matrix,U.castShadow){let nt=e.get(U);nt.shadowIntensity=ut.intensity,nt.shadowBias=ut.bias,nt.shadowNormalBias=ut.normalBias,nt.shadowRadius=ut.radius,nt.shadowMapSize=ut.mapSize,n.spotShadow[x]=nt,n.spotShadowMap[x]=st,_++}x++}else if(U.isRectAreaLight){let $=t.get(U);$.color.copy(K).multiplyScalar(Z),$.halfWidth.set(U.width*.5,0,0),$.halfHeight.set(0,U.height*.5,0),n.rectArea[g]=$,g++}else if(U.isPointLight){let $=t.get(U);if($.color.copy(U.color).multiplyScalar(U.intensity),$.distance=U.distance,$.decay=U.decay,U.castShadow){let ut=U.shadow,nt=e.get(U);nt.shadowIntensity=ut.intensity,nt.shadowBias=ut.bias,nt.shadowNormalBias=ut.normalBias,nt.shadowRadius=ut.radius,nt.shadowMapSize=ut.mapSize,nt.shadowCameraNear=ut.camera.near,nt.shadowCameraFar=ut.camera.far,n.pointShadow[m]=nt,n.pointShadowMap[m]=st,n.pointShadowMatrix[m]=U.shadow.matrix,M++}n.point[m]=$,m++}else if(U.isHemisphereLight){let $=t.get(U);$.skyColor.copy(U.color).multiplyScalar(Z),$.groundColor.copy(U.groundColor).multiplyScalar(Z),n.hemi[d]=$,d++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ct.LTC_FLOAT_1,n.rectAreaLTC2=Ct.LTC_FLOAT_2):(n.rectAreaLTC1=Ct.LTC_HALF_1,n.rectAreaLTC2=Ct.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let L=n.hash;(L.directionalLength!==p||L.pointLength!==m||L.spotLength!==x||L.rectAreaLength!==g||L.hemiLength!==d||L.numDirectionalShadows!==E||L.numPointShadows!==M||L.numSpotShadows!==_||L.numSpotMaps!==F||L.numLightProbes!==b)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=g,n.point.length=m,n.hemi.length=d,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=_+F-C,n.spotLightMap.length=F,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=b,L.directionalLength=p,L.pointLength=m,L.spotLength=x,L.rectAreaLength=g,L.hemiLength=d,L.numDirectionalShadows=E,L.numPointShadows=M,L.numSpotShadows=_,L.numSpotMaps=F,L.numLightProbes=b,n.version=wg++)}function l(c,h){let f=0,u=0,p=0,m=0,x=0,g=h.matrixWorldInverse;for(let d=0,E=c.length;d<E;d++){let M=c[d];if(M.isDirectionalLight){let _=n.directional[f];_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),f++}else if(M.isSpotLight){let _=n.spot[p];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),p++}else if(M.isRectAreaLight){let _=n.rectArea[m];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(g),o.identity(),r.copy(M.matrixWorld),r.premultiply(g),o.extractRotation(r),_.halfWidth.set(M.width*.5,0,0),_.halfHeight.set(0,M.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),m++}else if(M.isPointLight){let _=n.point[u];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(g),u++}else if(M.isHemisphereLight){let _=n.hemi[x];_.direction.setFromMatrixPosition(M.matrixWorld),_.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:n}}function Ah(i){let t=new Ag(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Rg(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Ah(i),t.set(s,[a])):r>=o.length?(a=new Ah(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function Pg(i,t,e){let n=new ir,s=new _t,r=new _t,o=new Je,a=new bl({depthPacking:Of}),l=new El,c={},h=e.maxTextureSize,f={[Ci]:Rn,[Rn]:Ci,[Sn]:Sn},u=new on({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:Cg,fragmentShader:Ig}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let m=new rn;m.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new re(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bh;let d=this.type;this.render=function(C,b,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;let w=i.getRenderTarget(),S=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),K=i.state;K.setBlending(ni),K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);let Z=d!==fi&&this.type===fi,j=d===fi&&this.type!==fi;for(let st=0,$=C.length;st<$;st++){let ut=C[st],nt=ut.shadow;if(nt===void 0){console.warn("THREE.WebGLShadowMap:",ut,"has no shadow.");continue}if(nt.autoUpdate===!1&&nt.needsUpdate===!1)continue;s.copy(nt.mapSize);let Et=nt.getFrameExtents();if(s.multiply(Et),r.copy(nt.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Et.x),s.x=r.x*Et.x,nt.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Et.y),s.y=r.y*Et.y,nt.mapSize.y=r.y)),nt.map===null||Z===!0||j===!0){let Bt=this.type!==fi?{minFilter:On,magFilter:On}:{};nt.map!==null&&nt.map.dispose(),nt.map=new bn(s.x,s.y,Bt),nt.map.texture.name=ut.name+".shadowMap",nt.camera.updateProjectionMatrix()}i.setRenderTarget(nt.map),i.clear();let Pt=nt.getViewportCount();for(let Bt=0;Bt<Pt;Bt++){let te=nt.getViewport(Bt);o.set(r.x*te.x,r.y*te.y,r.x*te.z,r.y*te.w),K.viewport(o),nt.updateMatrices(ut,Bt),n=nt.getFrustum(),_(b,L,nt.camera,ut,this.type)}nt.isPointLightShadow!==!0&&this.type===fi&&E(nt,L),nt.needsUpdate=!1}d=this.type,g.needsUpdate=!1,i.setRenderTarget(w,S,U)};function E(C,b){let L=t.update(x);u.defines.VSM_SAMPLES!==C.blurSamples&&(u.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new bn(s.x,s.y)),u.uniforms.shadow_pass.value=C.map.texture,u.uniforms.resolution.value=C.mapSize,u.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(b,null,L,u,x,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(b,null,L,p,x,null)}function M(C,b,L,w){let S=null,U=L.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(U!==void 0)S=U;else if(S=L.isPointLight===!0?l:a,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){let K=S.uuid,Z=b.uuid,j=c[K];j===void 0&&(j={},c[K]=j);let st=j[Z];st===void 0&&(st=S.clone(),j[Z]=st,b.addEventListener("dispose",F)),S=st}if(S.visible=b.visible,S.wireframe=b.wireframe,w===fi?S.side=b.shadowSide!==null?b.shadowSide:b.side:S.side=b.shadowSide!==null?b.shadowSide:f[b.side],S.alphaMap=b.alphaMap,S.alphaTest=b.alphaTest,S.map=b.map,S.clipShadows=b.clipShadows,S.clippingPlanes=b.clippingPlanes,S.clipIntersection=b.clipIntersection,S.displacementMap=b.displacementMap,S.displacementScale=b.displacementScale,S.displacementBias=b.displacementBias,S.wireframeLinewidth=b.wireframeLinewidth,S.linewidth=b.linewidth,L.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let K=i.properties.get(S);K.light=L}return S}function _(C,b,L,w,S){if(C.visible===!1)return;if(C.layers.test(b.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===fi)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,C.matrixWorld);let Z=t.update(C),j=C.material;if(Array.isArray(j)){let st=Z.groups;for(let $=0,ut=st.length;$<ut;$++){let nt=st[$],Et=j[nt.materialIndex];if(Et&&Et.visible){let Pt=M(C,Et,w,S);C.onBeforeShadow(i,C,b,L,Z,Pt,nt),i.renderBufferDirect(L,null,Z,Pt,C,nt),C.onAfterShadow(i,C,b,L,Z,Pt,nt)}}}else if(j.visible){let st=M(C,j,w,S);C.onBeforeShadow(i,C,b,L,Z,st,null),i.renderBufferDirect(L,null,Z,st,C,null),C.onAfterShadow(i,C,b,L,Z,st,null)}}let K=C.children;for(let Z=0,j=K.length;Z<j;Z++)_(K[Z],b,L,w,S)}function F(C){C.target.removeEventListener("dispose",F);for(let L in c){let w=c[L],S=C.target.uuid;S in w&&(w[S].dispose(),delete w[S])}}}function Dg(i,t){function e(){let I=!1,tt=new Je,V=null,et=new Je(0,0,0,0);return{setMask:function(pt){V!==pt&&!I&&(i.colorMask(pt,pt,pt,pt),V=pt)},setLocked:function(pt){I=pt},setClear:function(pt,z,Nt,ee,R){R===!0&&(pt*=ee,z*=ee,Nt*=ee),tt.set(pt,z,Nt,ee),et.equals(tt)===!1&&(i.clearColor(pt,z,Nt,ee),et.copy(tt))},reset:function(){I=!1,V=null,et.set(-1,0,0,0)}}}function n(){let I=!1,tt=!1,V=null,et=null,pt=null;return{setReversed:function(z){if(tt!==z){let Nt=t.get("EXT_clip_control");tt?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT);let ee=pt;pt=null,this.setClear(ee)}tt=z},getReversed:function(){return tt},setTest:function(z){z?St(i.DEPTH_TEST):Vt(i.DEPTH_TEST)},setMask:function(z){V!==z&&!I&&(i.depthMask(z),V=z)},setFunc:function(z){if(tt&&(z=Lg[z]),et!==z){switch(z){case Ra:i.depthFunc(i.NEVER);break;case Ca:i.depthFunc(i.ALWAYS);break;case Ia:i.depthFunc(i.LESS);break;case Ts:i.depthFunc(i.LEQUAL);break;case Pa:i.depthFunc(i.EQUAL);break;case La:i.depthFunc(i.GEQUAL);break;case As:i.depthFunc(i.GREATER);break;case Da:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}et=z}},setLocked:function(z){I=z},setClear:function(z){pt!==z&&(tt&&(z=1-z),i.clearDepth(z),pt=z)},reset:function(){I=!1,V=null,et=null,pt=null,tt=!1}}}function s(){let I=!1,tt=null,V=null,et=null,pt=null,z=null,Nt=null,ee=null,R=null;return{setTest:function(D){I||(D?St(i.STENCIL_TEST):Vt(i.STENCIL_TEST))},setMask:function(D){tt!==D&&!I&&(i.stencilMask(D),tt=D)},setFunc:function(D,J,G){(V!==D||et!==J||pt!==G)&&(i.stencilFunc(D,J,G),V=D,et=J,pt=G)},setOp:function(D,J,G){(z!==D||Nt!==J||ee!==G)&&(i.stencilOp(D,J,G),z=D,Nt=J,ee=G)},setLocked:function(D){I=D},setClear:function(D){R!==D&&(i.clearStencil(D),R=D)},reset:function(){I=!1,tt=null,V=null,et=null,pt=null,z=null,Nt=null,ee=null,R=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},f={},u=new WeakMap,p=[],m=null,x=!1,g=null,d=null,E=null,M=null,_=null,F=null,C=null,b=new se(0,0,0),L=0,w=!1,S=null,U=null,K=null,Z=null,j=null,st=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,ut=0,nt=i.getParameter(i.VERSION);nt.indexOf("WebGL")!==-1?(ut=parseFloat(/^WebGL (\d)/.exec(nt)[1]),$=ut>=1):nt.indexOf("OpenGL ES")!==-1&&(ut=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),$=ut>=2);let Et=null,Pt={},Bt=i.getParameter(i.SCISSOR_BOX),te=i.getParameter(i.VIEWPORT),we=new Je().fromArray(Bt),ot=new Je().fromArray(te);function Mt(I,tt,V,et){let pt=new Uint8Array(4),z=i.createTexture();i.bindTexture(I,z),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Nt=0;Nt<V;Nt++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(tt,0,i.RGBA,1,1,et,0,i.RGBA,i.UNSIGNED_BYTE,pt):i.texImage2D(tt+Nt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pt);return z}let Gt={};Gt[i.TEXTURE_2D]=Mt(i.TEXTURE_2D,i.TEXTURE_2D,1),Gt[i.TEXTURE_CUBE_MAP]=Mt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Gt[i.TEXTURE_2D_ARRAY]=Mt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Gt[i.TEXTURE_3D]=Mt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),St(i.DEPTH_TEST),o.setFunc(Ts),dt(!1),Rt(Ic),St(i.CULL_FACE),P(ni);function St(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function Vt(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function jt(I,tt){return f[I]!==tt?(i.bindFramebuffer(I,tt),f[I]=tt,I===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=tt),I===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=tt),!0):!1}function $t(I,tt){let V=p,et=!1;if(I){V=u.get(tt),V===void 0&&(V=[],u.set(tt,V));let pt=I.textures;if(V.length!==pt.length||V[0]!==i.COLOR_ATTACHMENT0){for(let z=0,Nt=pt.length;z<Nt;z++)V[z]=i.COLOR_ATTACHMENT0+z;V.length=pt.length,et=!0}}else V[0]!==i.BACK&&(V[0]=i.BACK,et=!0);et&&i.drawBuffers(V)}function fe(I){return m!==I?(i.useProgram(I),m=I,!0):!1}let ct={[Xi]:i.FUNC_ADD,[mf]:i.FUNC_SUBTRACT,[gf]:i.FUNC_REVERSE_SUBTRACT};ct[xf]=i.MIN,ct[_f]=i.MAX;let ft={[vf]:i.ZERO,[yf]:i.ONE,[Mf]:i.SRC_COLOR,[Ta]:i.SRC_ALPHA,[Af]:i.SRC_ALPHA_SATURATE,[wf]:i.DST_COLOR,[bf]:i.DST_ALPHA,[Sf]:i.ONE_MINUS_SRC_COLOR,[Aa]:i.ONE_MINUS_SRC_ALPHA,[Tf]:i.ONE_MINUS_DST_COLOR,[Ef]:i.ONE_MINUS_DST_ALPHA,[Rf]:i.CONSTANT_COLOR,[Cf]:i.ONE_MINUS_CONSTANT_COLOR,[If]:i.CONSTANT_ALPHA,[Pf]:i.ONE_MINUS_CONSTANT_ALPHA};function P(I,tt,V,et,pt,z,Nt,ee,R,D){if(I===ni){x===!0&&(Vt(i.BLEND),x=!1);return}if(x===!1&&(St(i.BLEND),x=!0),I!==pf){if(I!==g||D!==w){if((d!==Xi||_!==Xi)&&(i.blendEquation(i.FUNC_ADD),d=Xi,_=Xi),D)switch(I){case Ss:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ii:i.blendFunc(i.ONE,i.ONE);break;case Pc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Lc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Ss:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ii:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Pc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Lc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}E=null,M=null,F=null,C=null,b.set(0,0,0),L=0,g=I,w=D}return}pt=pt||tt,z=z||V,Nt=Nt||et,(tt!==d||pt!==_)&&(i.blendEquationSeparate(ct[tt],ct[pt]),d=tt,_=pt),(V!==E||et!==M||z!==F||Nt!==C)&&(i.blendFuncSeparate(ft[V],ft[et],ft[z],ft[Nt]),E=V,M=et,F=z,C=Nt),(ee.equals(b)===!1||R!==L)&&(i.blendColor(ee.r,ee.g,ee.b,R),b.copy(ee),L=R),g=I,w=!1}function kt(I,tt){I.side===Sn?Vt(i.CULL_FACE):St(i.CULL_FACE);let V=I.side===Rn;tt&&(V=!V),dt(V),I.blending===Ss&&I.transparent===!1?P(ni):P(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);let et=I.stencilWrite;a.setTest(et),et&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Kt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?St(i.SAMPLE_ALPHA_TO_COVERAGE):Vt(i.SAMPLE_ALPHA_TO_COVERAGE)}function dt(I){S!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),S=I)}function Rt(I){I!==ff?(St(i.CULL_FACE),I!==U&&(I===Ic?i.cullFace(i.BACK):I===df?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Vt(i.CULL_FACE),U=I}function wt(I){I!==K&&($&&i.lineWidth(I),K=I)}function Kt(I,tt,V){I?(St(i.POLYGON_OFFSET_FILL),(Z!==tt||j!==V)&&(i.polygonOffset(tt,V),Z=tt,j=V)):Vt(i.POLYGON_OFFSET_FILL)}function Lt(I){I?St(i.SCISSOR_TEST):Vt(i.SCISSOR_TEST)}function A(I){I===void 0&&(I=i.TEXTURE0+st-1),Et!==I&&(i.activeTexture(I),Et=I)}function v(I,tt,V){V===void 0&&(Et===null?V=i.TEXTURE0+st-1:V=Et);let et=Pt[V];et===void 0&&(et={type:void 0,texture:void 0},Pt[V]=et),(et.type!==I||et.texture!==tt)&&(Et!==V&&(i.activeTexture(V),Et=V),i.bindTexture(I,tt||Gt[I]),et.type=I,et.texture=tt)}function X(){let I=Pt[Et];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function it(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ht(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function rt(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Dt(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Tt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function de(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function mt(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ot(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Qt(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function T(I){we.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),we.copy(I))}function N(I){ot.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),ot.copy(I))}function Y(I,tt){let V=c.get(tt);V===void 0&&(V=new WeakMap,c.set(tt,V));let et=V.get(I);et===void 0&&(et=i.getUniformBlockIndex(tt,I.name),V.set(I,et))}function Q(I,tt){let et=c.get(tt).get(I);l.get(tt)!==et&&(i.uniformBlockBinding(tt,et,I.__bindingPointIndex),l.set(tt,et))}function vt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},Et=null,Pt={},f={},u=new WeakMap,p=[],m=null,x=!1,g=null,d=null,E=null,M=null,_=null,F=null,C=null,b=new se(0,0,0),L=0,w=!1,S=null,U=null,K=null,Z=null,j=null,we.set(0,0,i.canvas.width,i.canvas.height),ot.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:St,disable:Vt,bindFramebuffer:jt,drawBuffers:$t,useProgram:fe,setBlending:P,setMaterial:kt,setFlipSided:dt,setCullFace:Rt,setLineWidth:wt,setPolygonOffset:Kt,setScissorTest:Lt,activeTexture:A,bindTexture:v,unbindTexture:X,compressedTexImage2D:it,compressedTexImage3D:ht,texImage2D:Ot,texImage3D:Qt,updateUBOMapping:Y,uniformBlockBinding:Q,texStorage2D:de,texStorage3D:mt,texSubImage2D:rt,texSubImage3D:Dt,compressedTexSubImage2D:Tt,compressedTexSubImage3D:xt,scissor:T,viewport:N,reset:vt}}function Rh(i,t,e,n){let s=Ug(n);switch(e){case Wh:return i*t;case qh:return i*t;case Yh:return i*t*2;case oc:return i*t/s.components*s.byteLength;case ac:return i*t/s.components*s.byteLength;case Zh:return i*t*2/s.components*s.byteLength;case lc:return i*t*2/s.components*s.byteLength;case Xh:return i*t*3/s.components*s.byteLength;case Zn:return i*t*4/s.components*s.byteLength;case cc:return i*t*4/s.components*s.byteLength;case Wr:case Xr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case qr:case Yr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ba:case ka:return Math.max(i,16)*Math.max(t,8)/4;case Oa:case za:return Math.max(i,8)*Math.max(t,8)/2;case Ha:case Va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ga:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Wa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case qa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ya:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Za:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case $a:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ja:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ka:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Qa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ja:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case tl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case el:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case nl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case il:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Zr:case sl:case rl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case $h:case ol:return Math.ceil(i/4)*Math.ceil(t/4)*8;case al:case ll:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ug(i){switch(i){case gi:case Hh:return{byteLength:1,components:1};case nr:case Vh:case Jn:return{byteLength:2,components:1};case sc:case rc:return{byteLength:2,components:4};case Ji:case ic:case ei:return{byteLength:4,components:1};case Gh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Ng(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new _t,h=new WeakMap,f,u=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,v){return p?new OffscreenCanvas(A,v):Kr("canvas")}function x(A,v,X){let it=1,ht=Lt(A);if((ht.width>X||ht.height>X)&&(it=X/Math.max(ht.width,ht.height)),it<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let rt=Math.floor(it*ht.width),Dt=Math.floor(it*ht.height);f===void 0&&(f=m(rt,Dt));let Tt=v?m(rt,Dt):f;return Tt.width=rt,Tt.height=Dt,Tt.getContext("2d").drawImage(A,0,0,rt,Dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ht.width+"x"+ht.height+") to ("+rt+"x"+Dt+")."),Tt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ht.width+"x"+ht.height+")."),A;return A}function g(A){return A.generateMipmaps}function d(A){i.generateMipmap(A)}function E(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(A,v,X,it,ht=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let rt=v;if(v===i.RED&&(X===i.FLOAT&&(rt=i.R32F),X===i.HALF_FLOAT&&(rt=i.R16F),X===i.UNSIGNED_BYTE&&(rt=i.R8)),v===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(rt=i.R8UI),X===i.UNSIGNED_SHORT&&(rt=i.R16UI),X===i.UNSIGNED_INT&&(rt=i.R32UI),X===i.BYTE&&(rt=i.R8I),X===i.SHORT&&(rt=i.R16I),X===i.INT&&(rt=i.R32I)),v===i.RG&&(X===i.FLOAT&&(rt=i.RG32F),X===i.HALF_FLOAT&&(rt=i.RG16F),X===i.UNSIGNED_BYTE&&(rt=i.RG8)),v===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(rt=i.RG8UI),X===i.UNSIGNED_SHORT&&(rt=i.RG16UI),X===i.UNSIGNED_INT&&(rt=i.RG32UI),X===i.BYTE&&(rt=i.RG8I),X===i.SHORT&&(rt=i.RG16I),X===i.INT&&(rt=i.RG32I)),v===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(rt=i.RGB8UI),X===i.UNSIGNED_SHORT&&(rt=i.RGB16UI),X===i.UNSIGNED_INT&&(rt=i.RGB32UI),X===i.BYTE&&(rt=i.RGB8I),X===i.SHORT&&(rt=i.RGB16I),X===i.INT&&(rt=i.RGB32I)),v===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(rt=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(rt=i.RGBA16UI),X===i.UNSIGNED_INT&&(rt=i.RGBA32UI),X===i.BYTE&&(rt=i.RGBA8I),X===i.SHORT&&(rt=i.RGBA16I),X===i.INT&&(rt=i.RGBA32I)),v===i.RGB&&X===i.UNSIGNED_INT_5_9_9_9_REV&&(rt=i.RGB9_E5),v===i.RGBA){let Dt=ht?wo:Pe.getTransfer(it);X===i.FLOAT&&(rt=i.RGBA32F),X===i.HALF_FLOAT&&(rt=i.RGBA16F),X===i.UNSIGNED_BYTE&&(rt=Dt===He?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(rt=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(rt=i.RGB5_A1)}return(rt===i.R16F||rt===i.R32F||rt===i.RG16F||rt===i.RG32F||rt===i.RGBA16F||rt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function _(A,v){let X;return A?v===null||v===Ji||v===Is?X=i.DEPTH24_STENCIL8:v===ei?X=i.DEPTH32F_STENCIL8:v===nr&&(X=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Ji||v===Is?X=i.DEPTH_COMPONENT24:v===ei?X=i.DEPTH_COMPONENT32F:v===nr&&(X=i.DEPTH_COMPONENT16),X}function F(A,v){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==On&&A.minFilter!==ti?Math.log2(Math.max(v.width,v.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?v.mipmaps.length:1}function C(A){let v=A.target;v.removeEventListener("dispose",C),L(v),v.isVideoTexture&&h.delete(v)}function b(A){let v=A.target;v.removeEventListener("dispose",b),S(v)}function L(A){let v=n.get(A);if(v.__webglInit===void 0)return;let X=A.source,it=u.get(X);if(it){let ht=it[v.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&w(A),Object.keys(it).length===0&&u.delete(X)}n.remove(A)}function w(A){let v=n.get(A);i.deleteTexture(v.__webglTexture);let X=A.source,it=u.get(X);delete it[v.__cacheKey],o.memory.textures--}function S(A){let v=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(v.__webglFramebuffer[it]))for(let ht=0;ht<v.__webglFramebuffer[it].length;ht++)i.deleteFramebuffer(v.__webglFramebuffer[it][ht]);else i.deleteFramebuffer(v.__webglFramebuffer[it]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[it])}else{if(Array.isArray(v.__webglFramebuffer))for(let it=0;it<v.__webglFramebuffer.length;it++)i.deleteFramebuffer(v.__webglFramebuffer[it]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let it=0;it<v.__webglColorRenderbuffer.length;it++)v.__webglColorRenderbuffer[it]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[it]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let X=A.textures;for(let it=0,ht=X.length;it<ht;it++){let rt=n.get(X[it]);rt.__webglTexture&&(i.deleteTexture(rt.__webglTexture),o.memory.textures--),n.remove(X[it])}n.remove(A)}let U=0;function K(){U=0}function Z(){let A=U;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),U+=1,A}function j(A){let v=[];return v.push(A.wrapS),v.push(A.wrapT),v.push(A.wrapR||0),v.push(A.magFilter),v.push(A.minFilter),v.push(A.anisotropy),v.push(A.internalFormat),v.push(A.format),v.push(A.type),v.push(A.generateMipmaps),v.push(A.premultiplyAlpha),v.push(A.flipY),v.push(A.unpackAlignment),v.push(A.colorSpace),v.join()}function st(A,v){let X=n.get(A);if(A.isVideoTexture&&wt(A),A.isRenderTargetTexture===!1&&A.version>0&&X.__version!==A.version){let it=A.image;if(it===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ot(X,A,v);return}}e.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+v)}function $(A,v){let X=n.get(A);if(A.version>0&&X.__version!==A.version){ot(X,A,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+v)}function ut(A,v){let X=n.get(A);if(A.version>0&&X.__version!==A.version){ot(X,A,v);return}e.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+v)}function nt(A,v){let X=n.get(A);if(A.version>0&&X.__version!==A.version){Mt(X,A,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+v)}let Et={[er]:i.REPEAT,[Zi]:i.CLAMP_TO_EDGE,[Fa]:i.MIRRORED_REPEAT},Pt={[On]:i.NEAREST,[Nf]:i.NEAREST_MIPMAP_NEAREST,[_r]:i.NEAREST_MIPMAP_LINEAR,[ti]:i.LINEAR,[qo]:i.LINEAR_MIPMAP_NEAREST,[$i]:i.LINEAR_MIPMAP_LINEAR},Bt={[zf]:i.NEVER,[Xf]:i.ALWAYS,[kf]:i.LESS,[Kh]:i.LEQUAL,[Hf]:i.EQUAL,[Wf]:i.GEQUAL,[Vf]:i.GREATER,[Gf]:i.NOTEQUAL};function te(A,v){if(v.type===ei&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===ti||v.magFilter===qo||v.magFilter===_r||v.magFilter===$i||v.minFilter===ti||v.minFilter===qo||v.minFilter===_r||v.minFilter===$i)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Et[v.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Et[v.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Et[v.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Pt[v.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Pt[v.minFilter]),v.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Bt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===On||v.minFilter!==_r&&v.minFilter!==$i||v.type===ei&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let X=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function we(A,v){let X=!1;A.__webglInit===void 0&&(A.__webglInit=!0,v.addEventListener("dispose",C));let it=v.source,ht=u.get(it);ht===void 0&&(ht={},u.set(it,ht));let rt=j(v);if(rt!==A.__cacheKey){ht[rt]===void 0&&(ht[rt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,X=!0),ht[rt].usedTimes++;let Dt=ht[A.__cacheKey];Dt!==void 0&&(ht[A.__cacheKey].usedTimes--,Dt.usedTimes===0&&w(v)),A.__cacheKey=rt,A.__webglTexture=ht[rt].texture}return X}function ot(A,v,X){let it=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(it=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(it=i.TEXTURE_3D);let ht=we(A,v),rt=v.source;e.bindTexture(it,A.__webglTexture,i.TEXTURE0+X);let Dt=n.get(rt);if(rt.version!==Dt.__version||ht===!0){e.activeTexture(i.TEXTURE0+X);let Tt=Pe.getPrimaries(Pe.workingColorSpace),xt=v.colorSpace===Ti?null:Pe.getPrimaries(v.colorSpace),de=v.colorSpace===Ti||Tt===xt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);let mt=x(v.image,!1,s.maxTextureSize);mt=Kt(v,mt);let Ot=r.convert(v.format,v.colorSpace),Qt=r.convert(v.type),T=M(v.internalFormat,Ot,Qt,v.colorSpace,v.isVideoTexture);te(it,v);let N,Y=v.mipmaps,Q=v.isVideoTexture!==!0,vt=Dt.__version===void 0||ht===!0,I=rt.dataReady,tt=F(v,mt);if(v.isDepthTexture)T=_(v.format===Ps,v.type),vt&&(Q?e.texStorage2D(i.TEXTURE_2D,1,T,mt.width,mt.height):e.texImage2D(i.TEXTURE_2D,0,T,mt.width,mt.height,0,Ot,Qt,null));else if(v.isDataTexture)if(Y.length>0){Q&&vt&&e.texStorage2D(i.TEXTURE_2D,tt,T,Y[0].width,Y[0].height);for(let V=0,et=Y.length;V<et;V++)N=Y[V],Q?I&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,N.width,N.height,Ot,Qt,N.data):e.texImage2D(i.TEXTURE_2D,V,T,N.width,N.height,0,Ot,Qt,N.data);v.generateMipmaps=!1}else Q?(vt&&e.texStorage2D(i.TEXTURE_2D,tt,T,mt.width,mt.height),I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt.width,mt.height,Ot,Qt,mt.data)):e.texImage2D(i.TEXTURE_2D,0,T,mt.width,mt.height,0,Ot,Qt,mt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Q&&vt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,tt,T,Y[0].width,Y[0].height,mt.depth);for(let V=0,et=Y.length;V<et;V++)if(N=Y[V],v.format!==Zn)if(Ot!==null)if(Q){if(I)if(v.layerUpdates.size>0){let pt=Rh(N.width,N.height,v.format,v.type);for(let z of v.layerUpdates){let Nt=N.data.subarray(z*pt/N.data.BYTES_PER_ELEMENT,(z+1)*pt/N.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,z,N.width,N.height,1,Ot,Nt)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,N.width,N.height,mt.depth,Ot,N.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,V,T,N.width,N.height,mt.depth,0,N.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Q?I&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,N.width,N.height,mt.depth,Ot,Qt,N.data):e.texImage3D(i.TEXTURE_2D_ARRAY,V,T,N.width,N.height,mt.depth,0,Ot,Qt,N.data)}else{Q&&vt&&e.texStorage2D(i.TEXTURE_2D,tt,T,Y[0].width,Y[0].height);for(let V=0,et=Y.length;V<et;V++)N=Y[V],v.format!==Zn?Ot!==null?Q?I&&e.compressedTexSubImage2D(i.TEXTURE_2D,V,0,0,N.width,N.height,Ot,N.data):e.compressedTexImage2D(i.TEXTURE_2D,V,T,N.width,N.height,0,N.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Q?I&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,N.width,N.height,Ot,Qt,N.data):e.texImage2D(i.TEXTURE_2D,V,T,N.width,N.height,0,Ot,Qt,N.data)}else if(v.isDataArrayTexture)if(Q){if(vt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,tt,T,mt.width,mt.height,mt.depth),I)if(v.layerUpdates.size>0){let V=Rh(mt.width,mt.height,v.format,v.type);for(let et of v.layerUpdates){let pt=mt.data.subarray(et*V/mt.data.BYTES_PER_ELEMENT,(et+1)*V/mt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,et,mt.width,mt.height,1,Ot,Qt,pt)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,mt.width,mt.height,mt.depth,Ot,Qt,mt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,T,mt.width,mt.height,mt.depth,0,Ot,Qt,mt.data);else if(v.isData3DTexture)Q?(vt&&e.texStorage3D(i.TEXTURE_3D,tt,T,mt.width,mt.height,mt.depth),I&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,mt.width,mt.height,mt.depth,Ot,Qt,mt.data)):e.texImage3D(i.TEXTURE_3D,0,T,mt.width,mt.height,mt.depth,0,Ot,Qt,mt.data);else if(v.isFramebufferTexture){if(vt)if(Q)e.texStorage2D(i.TEXTURE_2D,tt,T,mt.width,mt.height);else{let V=mt.width,et=mt.height;for(let pt=0;pt<tt;pt++)e.texImage2D(i.TEXTURE_2D,pt,T,V,et,0,Ot,Qt,null),V>>=1,et>>=1}}else if(Y.length>0){if(Q&&vt){let V=Lt(Y[0]);e.texStorage2D(i.TEXTURE_2D,tt,T,V.width,V.height)}for(let V=0,et=Y.length;V<et;V++)N=Y[V],Q?I&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,Ot,Qt,N):e.texImage2D(i.TEXTURE_2D,V,T,Ot,Qt,N);v.generateMipmaps=!1}else if(Q){if(vt){let V=Lt(mt);e.texStorage2D(i.TEXTURE_2D,tt,T,V.width,V.height)}I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ot,Qt,mt)}else e.texImage2D(i.TEXTURE_2D,0,T,Ot,Qt,mt);g(v)&&d(it),Dt.__version=rt.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function Mt(A,v,X){if(v.image.length!==6)return;let it=we(A,v),ht=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+X);let rt=n.get(ht);if(ht.version!==rt.__version||it===!0){e.activeTexture(i.TEXTURE0+X);let Dt=Pe.getPrimaries(Pe.workingColorSpace),Tt=v.colorSpace===Ti?null:Pe.getPrimaries(v.colorSpace),xt=v.colorSpace===Ti||Dt===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);let de=v.isCompressedTexture||v.image[0].isCompressedTexture,mt=v.image[0]&&v.image[0].isDataTexture,Ot=[];for(let et=0;et<6;et++)!de&&!mt?Ot[et]=x(v.image[et],!0,s.maxCubemapSize):Ot[et]=mt?v.image[et].image:v.image[et],Ot[et]=Kt(v,Ot[et]);let Qt=Ot[0],T=r.convert(v.format,v.colorSpace),N=r.convert(v.type),Y=M(v.internalFormat,T,N,v.colorSpace),Q=v.isVideoTexture!==!0,vt=rt.__version===void 0||it===!0,I=ht.dataReady,tt=F(v,Qt);te(i.TEXTURE_CUBE_MAP,v);let V;if(de){Q&&vt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,tt,Y,Qt.width,Qt.height);for(let et=0;et<6;et++){V=Ot[et].mipmaps;for(let pt=0;pt<V.length;pt++){let z=V[pt];v.format!==Zn?T!==null?Q?I&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,pt,0,0,z.width,z.height,T,z.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,pt,Y,z.width,z.height,0,z.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Q?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,pt,0,0,z.width,z.height,T,N,z.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,pt,Y,z.width,z.height,0,T,N,z.data)}}}else{if(V=v.mipmaps,Q&&vt){V.length>0&&tt++;let et=Lt(Ot[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,tt,Y,et.width,et.height)}for(let et=0;et<6;et++)if(mt){Q?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Ot[et].width,Ot[et].height,T,N,Ot[et].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Y,Ot[et].width,Ot[et].height,0,T,N,Ot[et].data);for(let pt=0;pt<V.length;pt++){let Nt=V[pt].image[et].image;Q?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,pt+1,0,0,Nt.width,Nt.height,T,N,Nt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,pt+1,Y,Nt.width,Nt.height,0,T,N,Nt.data)}}else{Q?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,T,N,Ot[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Y,T,N,Ot[et]);for(let pt=0;pt<V.length;pt++){let z=V[pt];Q?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,pt+1,0,0,T,N,z.image[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,pt+1,Y,T,N,z.image[et])}}}g(v)&&d(i.TEXTURE_CUBE_MAP),rt.__version=ht.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function Gt(A,v,X,it,ht,rt){let Dt=r.convert(X.format,X.colorSpace),Tt=r.convert(X.type),xt=M(X.internalFormat,Dt,Tt,X.colorSpace),de=n.get(v),mt=n.get(X);if(mt.__renderTarget=v,!de.__hasExternalTextures){let Ot=Math.max(1,v.width>>rt),Qt=Math.max(1,v.height>>rt);ht===i.TEXTURE_3D||ht===i.TEXTURE_2D_ARRAY?e.texImage3D(ht,rt,xt,Ot,Qt,v.depth,0,Dt,Tt,null):e.texImage2D(ht,rt,xt,Ot,Qt,0,Dt,Tt,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),Rt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,ht,mt.__webglTexture,0,dt(v)):(ht===i.TEXTURE_2D||ht>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,it,ht,mt.__webglTexture,rt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function St(A,v,X){if(i.bindRenderbuffer(i.RENDERBUFFER,A),v.depthBuffer){let it=v.depthTexture,ht=it&&it.isDepthTexture?it.type:null,rt=_(v.stencilBuffer,ht),Dt=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Tt=dt(v);Rt(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Tt,rt,v.width,v.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt,rt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,rt,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Dt,i.RENDERBUFFER,A)}else{let it=v.textures;for(let ht=0;ht<it.length;ht++){let rt=it[ht],Dt=r.convert(rt.format,rt.colorSpace),Tt=r.convert(rt.type),xt=M(rt.internalFormat,Dt,Tt,rt.colorSpace),de=dt(v);X&&Rt(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,de,xt,v.width,v.height):Rt(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de,xt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,xt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Vt(A,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let it=n.get(v.depthTexture);it.__renderTarget=v,(!it.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),st(v.depthTexture,0);let ht=it.__webglTexture,rt=dt(v);if(v.depthTexture.format===bs)Rt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ht,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ht,0);else if(v.depthTexture.format===Ps)Rt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ht,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ht,0);else throw new Error("Unknown depthTexture format")}function jt(A){let v=n.get(A),X=A.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==A.depthTexture){let it=A.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),it){let ht=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,it.removeEventListener("dispose",ht)};it.addEventListener("dispose",ht),v.__depthDisposeCallback=ht}v.__boundDepthTexture=it}if(A.depthTexture&&!v.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");Vt(v.__webglFramebuffer,A)}else if(X){v.__webglDepthbuffer=[];for(let it=0;it<6;it++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[it]),v.__webglDepthbuffer[it]===void 0)v.__webglDepthbuffer[it]=i.createRenderbuffer(),St(v.__webglDepthbuffer[it],A,!1);else{let ht=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=v.__webglDepthbuffer[it];i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,rt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),St(v.__webglDepthbuffer,A,!1);else{let it=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ht),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,ht)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function $t(A,v,X){let it=n.get(A);v!==void 0&&Gt(it.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&jt(A)}function fe(A){let v=A.texture,X=n.get(A),it=n.get(v);A.addEventListener("dispose",b);let ht=A.textures,rt=A.isWebGLCubeRenderTarget===!0,Dt=ht.length>1;if(Dt||(it.__webglTexture===void 0&&(it.__webglTexture=i.createTexture()),it.__version=v.version,o.memory.textures++),rt){X.__webglFramebuffer=[];for(let Tt=0;Tt<6;Tt++)if(v.mipmaps&&v.mipmaps.length>0){X.__webglFramebuffer[Tt]=[];for(let xt=0;xt<v.mipmaps.length;xt++)X.__webglFramebuffer[Tt][xt]=i.createFramebuffer()}else X.__webglFramebuffer[Tt]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){X.__webglFramebuffer=[];for(let Tt=0;Tt<v.mipmaps.length;Tt++)X.__webglFramebuffer[Tt]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(Dt)for(let Tt=0,xt=ht.length;Tt<xt;Tt++){let de=n.get(ht[Tt]);de.__webglTexture===void 0&&(de.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&Rt(A)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let Tt=0;Tt<ht.length;Tt++){let xt=ht[Tt];X.__webglColorRenderbuffer[Tt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[Tt]);let de=r.convert(xt.format,xt.colorSpace),mt=r.convert(xt.type),Ot=M(xt.internalFormat,de,mt,xt.colorSpace,A.isXRRenderTarget===!0),Qt=dt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Qt,Ot,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,X.__webglColorRenderbuffer[Tt])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),St(X.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(rt){e.bindTexture(i.TEXTURE_CUBE_MAP,it.__webglTexture),te(i.TEXTURE_CUBE_MAP,v);for(let Tt=0;Tt<6;Tt++)if(v.mipmaps&&v.mipmaps.length>0)for(let xt=0;xt<v.mipmaps.length;xt++)Gt(X.__webglFramebuffer[Tt][xt],A,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,xt);else Gt(X.__webglFramebuffer[Tt],A,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0);g(v)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Dt){for(let Tt=0,xt=ht.length;Tt<xt;Tt++){let de=ht[Tt],mt=n.get(de);e.bindTexture(i.TEXTURE_2D,mt.__webglTexture),te(i.TEXTURE_2D,de),Gt(X.__webglFramebuffer,A,de,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,0),g(de)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let Tt=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Tt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Tt,it.__webglTexture),te(Tt,v),v.mipmaps&&v.mipmaps.length>0)for(let xt=0;xt<v.mipmaps.length;xt++)Gt(X.__webglFramebuffer[xt],A,v,i.COLOR_ATTACHMENT0,Tt,xt);else Gt(X.__webglFramebuffer,A,v,i.COLOR_ATTACHMENT0,Tt,0);g(v)&&d(Tt),e.unbindTexture()}A.depthBuffer&&jt(A)}function ct(A){let v=A.textures;for(let X=0,it=v.length;X<it;X++){let ht=v[X];if(g(ht)){let rt=E(A),Dt=n.get(ht).__webglTexture;e.bindTexture(rt,Dt),d(rt),e.unbindTexture()}}}let ft=[],P=[];function kt(A){if(A.samples>0){if(Rt(A)===!1){let v=A.textures,X=A.width,it=A.height,ht=i.COLOR_BUFFER_BIT,rt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Dt=n.get(A),Tt=v.length>1;if(Tt)for(let xt=0;xt<v.length;xt++)e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer);for(let xt=0;xt<v.length;xt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ht|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ht|=i.STENCIL_BUFFER_BIT)),Tt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Dt.__webglColorRenderbuffer[xt]);let de=n.get(v[xt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,de,0)}i.blitFramebuffer(0,0,X,it,0,0,X,it,ht,i.NEAREST),l===!0&&(ft.length=0,P.length=0,ft.push(i.COLOR_ATTACHMENT0+xt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(ft.push(rt),P.push(rt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,P)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ft))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Tt)for(let xt=0;xt<v.length;xt++){e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,Dt.__webglColorRenderbuffer[xt]);let de=n.get(v[xt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,de,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let v=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function dt(A){return Math.min(s.maxSamples,A.samples)}function Rt(A){let v=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function wt(A){let v=o.render.frame;h.get(A)!==v&&(h.set(A,v),A.update())}function Kt(A,v){let X=A.colorSpace,it=A.format,ht=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||X!==Ns&&X!==Ti&&(Pe.getTransfer(X)===He?(it!==Zn||ht!==gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),v}function Lt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=Z,this.resetTextureUnits=K,this.setTexture2D=st,this.setTexture2DArray=$,this.setTexture3D=ut,this.setTextureCube=nt,this.rebindTextures=$t,this.setupRenderTarget=fe,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=kt,this.setupDepthRenderbuffer=jt,this.setupFrameBufferTexture=Gt,this.useMultisampledRTT=Rt}function Fg(i,t){function e(n,s=Ti){let r,o=Pe.getTransfer(s);if(n===gi)return i.UNSIGNED_BYTE;if(n===sc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===rc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Gh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Hh)return i.BYTE;if(n===Vh)return i.SHORT;if(n===nr)return i.UNSIGNED_SHORT;if(n===ic)return i.INT;if(n===Ji)return i.UNSIGNED_INT;if(n===ei)return i.FLOAT;if(n===Jn)return i.HALF_FLOAT;if(n===Wh)return i.ALPHA;if(n===Xh)return i.RGB;if(n===Zn)return i.RGBA;if(n===qh)return i.LUMINANCE;if(n===Yh)return i.LUMINANCE_ALPHA;if(n===bs)return i.DEPTH_COMPONENT;if(n===Ps)return i.DEPTH_STENCIL;if(n===oc)return i.RED;if(n===ac)return i.RED_INTEGER;if(n===Zh)return i.RG;if(n===lc)return i.RG_INTEGER;if(n===cc)return i.RGBA_INTEGER;if(n===Wr||n===Xr||n===qr||n===Yr)if(o===He)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Wr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Wr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Xr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===qr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Yr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Oa||n===Ba||n===za||n===ka)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Oa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ba)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===za)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ka)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ha||n===Va||n===Ga)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ha||n===Va)return o===He?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ga)return o===He?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Wa||n===Xa||n===qa||n===Ya||n===Za||n===$a||n===Ja||n===Ka||n===Qa||n===ja||n===tl||n===el||n===nl||n===il)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Wa)return o===He?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xa)return o===He?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===qa)return o===He?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ya)return o===He?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Za)return o===He?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===$a)return o===He?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ja)return o===He?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ka)return o===He?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Qa)return o===He?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ja)return o===He?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===tl)return o===He?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===el)return o===He?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===nl)return o===He?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===il)return o===He?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Zr||n===sl||n===rl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Zr)return o===He?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===sl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===rl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===$h||n===ol||n===al||n===ll)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Zr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ol)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===al)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ll)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Is?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}function Hg(i,t){function e(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function n(g,d){d.color.getRGB(g.fogColor.value,tu(i)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function s(g,d,E,M,_){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(g,d):d.isMeshToonMaterial?(r(g,d),f(g,d)):d.isMeshPhongMaterial?(r(g,d),h(g,d)):d.isMeshStandardMaterial?(r(g,d),u(g,d),d.isMeshPhysicalMaterial&&p(g,d,_)):d.isMeshMatcapMaterial?(r(g,d),m(g,d)):d.isMeshDepthMaterial?r(g,d):d.isMeshDistanceMaterial?(r(g,d),x(g,d)):d.isMeshNormalMaterial?r(g,d):d.isLineBasicMaterial?(o(g,d),d.isLineDashedMaterial&&a(g,d)):d.isPointsMaterial?l(g,d,E,M):d.isSpriteMaterial?c(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,e(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,e(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,e(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===Rn&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,e(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===Rn&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,e(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,e(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);let E=t.get(d),M=E.envMap,_=E.envMapRotation;M&&(g.envMap.value=M,Gi.copy(_),Gi.x*=-1,Gi.y*=-1,Gi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Gi.y*=-1,Gi.z*=-1),g.envMapRotation.value.setFromMatrix4(kg.makeRotationFromEuler(Gi)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,g.aoMapTransform))}function o(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,e(d.map,g.mapTransform))}function a(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,E,M){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*E,g.scale.value=M*.5,d.map&&(g.map.value=d.map,e(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,e(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,e(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,e(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function h(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function f(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function u(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function p(g,d,E){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Rn&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=E.texture,g.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,d){d.matcap&&(g.matcap.value=d.matcap)}function x(g,d){let E=t.get(d).light;g.referencePosition.value.setFromMatrixPosition(E.matrixWorld),g.nearDistance.value=E.shadow.camera.near,g.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Vg(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,M){let _=M.program;n.uniformBlockBinding(E,_)}function c(E,M){let _=s[E.id];_===void 0&&(m(E),_=h(E),s[E.id]=_,E.addEventListener("dispose",g));let F=M.program;n.updateUBOMapping(E,F);let C=t.render.frame;r[E.id]!==C&&(u(E),r[E.id]=C)}function h(E){let M=f();E.__bindingPointIndex=M;let _=i.createBuffer(),F=E.__size,C=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,F,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,_),_}function f(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(E){let M=s[E.id],_=E.uniforms,F=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let C=0,b=_.length;C<b;C++){let L=Array.isArray(_[C])?_[C]:[_[C]];for(let w=0,S=L.length;w<S;w++){let U=L[w];if(p(U,C,w,F)===!0){let K=U.__offset,Z=Array.isArray(U.value)?U.value:[U.value],j=0;for(let st=0;st<Z.length;st++){let $=Z[st],ut=x($);typeof $=="number"||typeof $=="boolean"?(U.__data[0]=$,i.bufferSubData(i.UNIFORM_BUFFER,K+j,U.__data)):$.isMatrix3?(U.__data[0]=$.elements[0],U.__data[1]=$.elements[1],U.__data[2]=$.elements[2],U.__data[3]=0,U.__data[4]=$.elements[3],U.__data[5]=$.elements[4],U.__data[6]=$.elements[5],U.__data[7]=0,U.__data[8]=$.elements[6],U.__data[9]=$.elements[7],U.__data[10]=$.elements[8],U.__data[11]=0):($.toArray(U.__data,j),j+=ut.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,K,U.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(E,M,_,F){let C=E.value,b=M+"_"+_;if(F[b]===void 0)return typeof C=="number"||typeof C=="boolean"?F[b]=C:F[b]=C.clone(),!0;{let L=F[b];if(typeof C=="number"||typeof C=="boolean"){if(L!==C)return F[b]=C,!0}else if(L.equals(C)===!1)return L.copy(C),!0}return!1}function m(E){let M=E.uniforms,_=0,F=16;for(let b=0,L=M.length;b<L;b++){let w=Array.isArray(M[b])?M[b]:[M[b]];for(let S=0,U=w.length;S<U;S++){let K=w[S],Z=Array.isArray(K.value)?K.value:[K.value];for(let j=0,st=Z.length;j<st;j++){let $=Z[j],ut=x($),nt=_%F,Et=nt%ut.boundary,Pt=nt+Et;_+=Et,Pt!==0&&F-Pt<ut.storage&&(_+=F-Pt),K.__data=new Float32Array(ut.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=_,_+=ut.storage}}}let C=_%F;return C>0&&(_+=F-C),E.__size=_,E.__cache={},this}function x(E){let M={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(M.boundary=4,M.storage=4):E.isVector2?(M.boundary=8,M.storage=8):E.isVector3||E.isColor?(M.boundary=16,M.storage=12):E.isVector4?(M.boundary=16,M.storage=16):E.isMatrix3?(M.boundary=48,M.storage=48):E.isMatrix4?(M.boundary=64,M.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),M}function g(E){let M=E.target;M.removeEventListener("dispose",g);let _=o.indexOf(M.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function d(){for(let E in s)i.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}function uc(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,f){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+f)+(l-a)/f;u*=h,p*=h,s(o,a,u,p)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}function Ph(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function Wg(i,t){let e=1-i;return e*e*t}function Xg(i,t){return 2*(1-i)*i*t}function qg(i,t){return i*i*t}function js(i,t,e,n){return Wg(i,t)+Xg(i,e)+qg(i,n)}function Yg(i,t){let e=1-i;return e*e*e*t}function Zg(i,t){let e=1-i;return 3*e*e*i*t}function $g(i,t){return 3*(1-i)*i*i*t}function Jg(i,t){return i*i*i*t}function tr(i,t,e,n,s){return Yg(i,t)+Zg(i,e)+$g(i,n)+Jg(i,s)}function ou(i,t,e,n,s){let r,o;if(s===dx(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Lh(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Lh(r,i[r],i[r+1],o);return o&&Ao(o,o.next)&&(hr(o),o=o.next),o}function ts(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ao(e,e.next)||Ze(e.prev,e,e.next)===0)){if(hr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function lr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&ax(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?jg(i,n,s,r):Qg(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),hr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=tx(ts(i),t,e),lr(i,t,e,n,s,r,2)):o===2&&ex(i,t,e,n,s,r):lr(ts(i),t,e,n,s,r,1);break}}}function Qg(i){let t=i.prev,e=i,n=i.next;if(Ze(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,f=a<l?a<c?a:c:l<c?l:c,u=s>r?s>o?s:o:r>o?r:o,p=a>l?a>c?a:c:l>c?l:c,m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=u&&m.y>=f&&m.y<=p&&Ms(s,a,r,l,o,c,m.x,m.y)&&Ze(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function jg(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Ze(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,f=r.y,u=o.y,p=a<l?a<c?a:c:l<c?l:c,m=h<f?h<u?h:u:f<u?f:u,x=a>l?a>c?a:c:l>c?l:c,g=h>f?h>u?h:u:f>u?f:u,d=Fl(p,m,t,e,n),E=Fl(x,g,t,e,n),M=i.prevZ,_=i.nextZ;for(;M&&M.z>=d&&_&&_.z<=E;){if(M.x>=p&&M.x<=x&&M.y>=m&&M.y<=g&&M!==s&&M!==o&&Ms(a,h,l,f,c,u,M.x,M.y)&&Ze(M.prev,M,M.next)>=0||(M=M.prevZ,_.x>=p&&_.x<=x&&_.y>=m&&_.y<=g&&_!==s&&_!==o&&Ms(a,h,l,f,c,u,_.x,_.y)&&Ze(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;M&&M.z>=d;){if(M.x>=p&&M.x<=x&&M.y>=m&&M.y<=g&&M!==s&&M!==o&&Ms(a,h,l,f,c,u,M.x,M.y)&&Ze(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;_&&_.z<=E;){if(_.x>=p&&_.x<=x&&_.y>=m&&_.y<=g&&_!==s&&_!==o&&Ms(a,h,l,f,c,u,_.x,_.y)&&Ze(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function tx(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!Ao(s,r)&&au(s,n,n.next,r)&&cr(s,r)&&cr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),hr(n),hr(n.next),n=i=r),n=n.next}while(n!==i);return ts(n)}function ex(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&hx(o,a)){let l=lu(o,a);o=ts(o,o.next),l=ts(l,l.next),lr(o,t,e,n,s,r,0),lr(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function nx(i,t,e,n){let s=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=ou(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(cx(c));for(s.sort(ix),r=0;r<s.length;r++)e=sx(s[r],e);return e}function ix(i,t){return i.x-t.x}function sx(i,t){let e=rx(i,t);if(!e)return t;let n=lu(e,i);return ts(n,n.next),ts(e,e.next)}function rx(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let u=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=r&&u>n&&(n=u,s=e.x<e.next.x?e:e.next,u===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,f;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Ms(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(f=Math.abs(o-e.y)/(r-e.x),cr(e,i)&&(f<h||f===h&&(e.x>s.x||e.x===s.x&&ox(s,e)))&&(s=e,h=f)),e=e.next;while(e!==a);return s}function ox(i,t){return Ze(i.prev,i,t.prev)<0&&Ze(t.next,i,i.next)<0}function ax(i,t,e,n){let s=i;do s.z===0&&(s.z=Fl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,lx(s)}function lx(i){let t,e,n,s,r,o,a,l,c=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(o>1);return i}function Fl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function cx(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Ms(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function hx(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!ux(i,t)&&(cr(i,t)&&cr(t,i)&&fx(i,t)&&(Ze(i.prev,i,t.prev)||Ze(i,t.prev,t))||Ao(i,t)&&Ze(i.prev,i,i.next)>0&&Ze(t.prev,t,t.next)>0)}function Ze(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ao(i,t){return i.x===t.x&&i.y===t.y}function au(i,t,e,n){let s=Vr(Ze(i,t,e)),r=Vr(Ze(i,t,n)),o=Vr(Ze(e,n,i)),a=Vr(Ze(e,n,t));return!!(s!==r&&o!==a||s===0&&Hr(i,e,t)||r===0&&Hr(i,n,t)||o===0&&Hr(e,i,n)||a===0&&Hr(e,t,n))}function Hr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Vr(i){return i>0?1:i<0?-1:0}function ux(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&au(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function cr(i,t){return Ze(i.prev,i,i.next)<0?Ze(i,t,i.next)>=0&&Ze(i,i.prev,t)>=0:Ze(i,t,i.prev)<0||Ze(i,i.next,t)<0}function fx(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function lu(i,t){let e=new Ol(i.i,i.x,i.y),n=new Ol(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Lh(i,t,e,n){let s=new Ol(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function hr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ol(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function dx(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}function Dh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Uh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}function mx(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}function Gr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function gx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Oh(){return performance.now()}var Jl,ff,Ic,df,Bh,Kl,fi,Ci,Rn,Sn,ni,Ss,ii,Pc,Lc,pf,Xi,mf,gf,xf,_f,vf,yf,Mf,Sf,Ta,Aa,bf,Ef,wf,Tf,Af,Rf,Cf,If,Pf,Ra,Ca,Ia,Ts,Pa,La,As,Da,zh,Lf,Df,Ai,Ql,jl,tc,ur,Uf,ec,nc,kh,Rs,Cs,Ua,Na,Eo,er,Zi,Fa,On,Nf,_r,ti,qo,$i,gi,Hh,Vh,nr,ic,Ji,ei,Jn,sc,rc,Is,Gh,Wh,Xh,Zn,qh,Yh,bs,Ps,oc,ac,Zh,lc,cc,Wr,Xr,qr,Yr,Oa,Ba,za,ka,Ha,Va,Ga,Wa,Xa,qa,Ya,Za,$a,Ja,Ka,Qa,ja,tl,el,nl,il,Zr,sl,rl,$h,ol,al,ll,$r,cl,Yo,Dc,Uc,Nc,Ff,Of,Jh,Bf,Ti,xn,Ns,wo,He,rs,Fc,zf,kf,Hf,Kh,Vf,Gf,Wf,Xf,Oc,Bc,pi,Jr,Ii,mn,Zo,hl,_t,_e,Jo,zc,Pe,kc,Hc,Vc,Gc,Wc,os,ul,Kf,Qr,Qf,Cn,Je,fl,bn,jr,dl,Pi,O,Qo,Xc,xi,ai,Xn,vr,as,ls,cs,yi,Mi,Bi,Ws,yr,Mr,zi,jf,Xs,ta,Ki,li,ea,Sr,Si,na,br,ia,pl,Ve,hs,qn,td,ed,bi,Er,Un,qc,Yc,si,to,nd,Zc,us,ci,wr,qs,id,sd,$c,Jc,Kc,Qc,rd,fs,sa,sn,Yn,hi,ra,ui,ds,ps,jc,oa,aa,la,ca,ha,ua,qi,jh,Ei,Tr,se,gn,od,Qi,tn,je,Ar,nn,eo,no,Me,ad,Hn,da,ms,Nn,Ys,un,rn,th,ki,Rr,eh,Cr,Ir,Pr,pa,Lr,nh,Dr,re,Ke,Di,hd,ud,on,io,wi,ih,sh,Fn,gs,xs,ml,so,gl,ma,fd,dd,di,Hi,Nr,ir,En,md,gd,xd,_d,vd,yd,Md,Sd,bd,Ed,wd,Td,Ad,Rd,Cd,Id,Pd,Ld,Dd,Ud,Nd,Fd,Od,Bd,zd,kd,Hd,Vd,Gd,Wd,Xd,qd,Yd,Zd,$d,Jd,Kd,Qd,jd,tp,ep,np,ip,sp,rp,op,ap,lp,cp,hp,up,fp,dp,pp,mp,gp,xp,_p,vp,yp,Mp,Sp,bp,Ep,wp,Tp,Ap,Rp,Cp,Ip,Pp,Lp,Dp,Up,Np,Fp,Op,Bp,zp,kp,Hp,Vp,Gp,Wp,Xp,qp,Yp,Zp,$p,Jp,Kp,Qp,jp,tm,em,nm,im,sm,rm,om,am,lm,cm,hm,um,fm,dm,pm,mm,gm,xm,_m,vm,ym,Mm,Sm,bm,Em,wm,Tm,Am,Rm,Cm,Im,Pm,Lm,Dm,Um,Nm,Fm,Om,Bm,zm,km,Hm,Vm,Gm,Wm,Xm,qm,Ym,ve,Ct,jn,Fr,Vi,Zm,Li,ys,rh,Yi,ga,oh,xa,_a,va,ya,Wi,_s,ah,ro,oo,nu,uh,iu,su,ru,fh,dh,ph,mh,gh,xl,_l,vl,Ma,ws,K0,Q0,vh,Br,ag,lg,hg,_g,Ml,Sl,wg,bl,El,Cg,Ig,Lg,wl,An,Og,Qs,Bg,zg,Tl,Al,Gi,kg,ao,lo,Rl,sr,vs,Ch,zr,Ih,Gg,Zs,$s,Vn,co,Gn,rr,Cl,kr,Sa,ba,Ea,Il,ho,Pl,uo,Ll,fo,Dl,po,Ul,Nl,or,ar,mo,go,cn,ji,Kg,Ri,Ds,px,xo,_i,_o,De,Us,Bl,zl,kl,$n,es,Hl,Vl,Gl,vo,ns,Wl,Xl,xx,ql,yo,Mo,wa,Nh,Fh,Yl,Zl,So,bo,fc,_x,dc,vx,yx,Mx,Sx,bx,Ex,wx,$l,Ye,o_,Bn=fn(()=>{Jl="170",ff=0,Ic=1,df=2,Bh=1,Kl=2,fi=3,Ci=0,Rn=1,Sn=2,ni=0,Ss=1,ii=2,Pc=3,Lc=4,pf=5,Xi=100,mf=101,gf=102,xf=103,_f=104,vf=200,yf=201,Mf=202,Sf=203,Ta=204,Aa=205,bf=206,Ef=207,wf=208,Tf=209,Af=210,Rf=211,Cf=212,If=213,Pf=214,Ra=0,Ca=1,Ia=2,Ts=3,Pa=4,La=5,As=6,Da=7,zh=0,Lf=1,Df=2,Ai=0,Ql=1,jl=2,tc=3,ur=4,Uf=5,ec=6,nc=7,kh=300,Rs=301,Cs=302,Ua=303,Na=304,Eo=306,er=1e3,Zi=1001,Fa=1002,On=1003,Nf=1004,_r=1005,ti=1006,qo=1007,$i=1008,gi=1009,Hh=1010,Vh=1011,nr=1012,ic=1013,Ji=1014,ei=1015,Jn=1016,sc=1017,rc=1018,Is=1020,Gh=35902,Wh=1021,Xh=1022,Zn=1023,qh=1024,Yh=1025,bs=1026,Ps=1027,oc=1028,ac=1029,Zh=1030,lc=1031,cc=1033,Wr=33776,Xr=33777,qr=33778,Yr=33779,Oa=35840,Ba=35841,za=35842,ka=35843,Ha=36196,Va=37492,Ga=37496,Wa=37808,Xa=37809,qa=37810,Ya=37811,Za=37812,$a=37813,Ja=37814,Ka=37815,Qa=37816,ja=37817,tl=37818,el=37819,nl=37820,il=37821,Zr=36492,sl=36494,rl=36495,$h=36283,ol=36284,al=36285,ll=36286,$r=2300,cl=2301,Yo=2302,Dc=2400,Uc=2401,Nc=2402,Ff=3200,Of=3201,Jh=0,Bf=1,Ti="",xn="srgb",Ns="srgb-linear",wo="linear",He="srgb",rs=7680,Fc=519,zf=512,kf=513,Hf=514,Kh=515,Vf=516,Gf=517,Wf=518,Xf=519,Oc=35044,Bc="300 es",pi=2e3,Jr=2001,Ii=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zo=Math.PI/180,hl=180/Math.PI;_t=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(dn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},_e=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],p=n[5],m=n[8],x=s[0],g=s[3],d=s[6],E=s[1],M=s[4],_=s[7],F=s[2],C=s[5],b=s[8];return r[0]=o*x+a*E+l*F,r[3]=o*g+a*M+l*C,r[6]=o*d+a*_+l*b,r[1]=c*x+h*E+f*F,r[4]=c*g+h*M+f*C,r[7]=c*d+h*_+f*b,r[2]=u*x+p*E+m*F,r[5]=u*g+p*M+m*C,r[8]=u*d+p*_+m*b,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=h*o-a*c,u=a*l-h*r,p=c*r-o*l,m=e*f+n*u+s*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return t[0]=f*x,t[1]=(s*c-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=u*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=p*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Jo.makeScale(t,e)),this}rotate(t){return this.premultiply(Jo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Jo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Jo=new _e;zc={};Pe={enabled:!0,workingColorSpace:Ns,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===He&&(i.r=mi(i.r),i.g=mi(i.g),i.b=mi(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===He&&(i.r=Es(i.r),i.g=Es(i.g),i.b=Es(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ti?wo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};kc=[.64,.33,.3,.6,.15,.06],Hc=[.2126,.7152,.0722],Vc=[.3127,.329],Gc=new _e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wc=new _e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Pe.define({[Ns]:{primaries:kc,whitePoint:Vc,transfer:wo,toXYZ:Gc,fromXYZ:Wc,luminanceCoefficients:Hc,workingColorSpaceConfig:{unpackColorSpace:xn},outputColorSpaceConfig:{drawingBufferColorSpace:xn}},[xn]:{primaries:kc,whitePoint:Vc,transfer:He,toXYZ:Gc,fromXYZ:Wc,luminanceCoefficients:Hc,outputColorSpaceConfig:{drawingBufferColorSpace:xn}}});ul=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{os===void 0&&(os=Kr("canvas")),os.width=t.width,os.height=t.height;let n=os.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=os}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Kr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=mi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(mi(e[n]/255)*255):e[n]=mi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Kf=0,Qr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=Fs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ko(s[o].image)):r.push(Ko(s[o]))}else r=Ko(s);n.url=r}return e||(t.images[this.uuid]=n),n}};Qf=0,Cn=class i extends Ii{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Zi,s=Zi,r=ti,o=$i,a=Zn,l=gi,c=i.DEFAULT_ANISOTROPY,h=Ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qf++}),this.uuid=Fs(),this.name="",this.source=new Qr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==kh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case er:t.x=t.x-Math.floor(t.x);break;case Zi:t.x=t.x<0?0:1;break;case Fa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case er:t.y=t.y-Math.floor(t.y);break;case Zi:t.y=t.y<0?0:1;break;case Fa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Cn.DEFAULT_IMAGE=null;Cn.DEFAULT_MAPPING=kh;Cn.DEFAULT_ANISOTROPY=1;Je=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],p=l[5],m=l[9],x=l[2],g=l[6],d=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(c+1)/2,_=(p+1)/2,F=(d+1)/2,C=(h+u)/4,b=(f+x)/4,L=(m+g)/4;return M>_&&M>F?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=C/n,r=b/n):_>F?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=C/s,r=L/s):F<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(F),n=b/r,s=L/r),this.set(n,s,r,e),this}let E=Math.sqrt((g-m)*(g-m)+(f-x)*(f-x)+(u-h)*(u-h));return Math.abs(E)<.001&&(E=1),this.x=(g-m)/E,this.y=(f-x)/E,this.z=(u-h)/E,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},fl=class extends Ii{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Je(0,0,t,e),this.scissorTest=!1,this.viewport=new Je(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ti,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Cn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Qr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},bn=class extends fl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},jr=class extends Cn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=On,this.minFilter=On,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},dl=class extends Cn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=On,this.minFilter=On,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Pi=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],u=r[o+0],p=r[o+1],m=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f;return}if(a===1){t[e+0]=u,t[e+1]=p,t[e+2]=m,t[e+3]=x;return}if(f!==x||l!==u||c!==p||h!==m){let g=1-a,d=l*u+c*p+h*m+f*x,E=d>=0?1:-1,M=1-d*d;if(M>Number.EPSILON){let F=Math.sqrt(M),C=Math.atan2(F,d*E);g=Math.sin(g*C)/F,a=Math.sin(a*C)/F}let _=a*E;if(l=l*g+u*_,c=c*g+p*_,h=h*g+m*_,f=f*g+x*_,g===1-a){let F=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=F,c*=F,h*=F,f*=F}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[o],u=r[o+1],p=r[o+2],m=r[o+3];return t[e]=a*m+h*f+l*p-c*u,t[e+1]=l*m+h*u+c*f-a*p,t[e+2]=c*m+h*p+a*u-l*f,t[e+3]=h*m-a*f-l*u-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),f=a(r/2),u=l(n/2),p=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=u*h*f+c*p*m,this._y=c*p*f-u*h*m,this._z=c*h*m+u*p*f,this._w=c*h*f-u*p*m;break;case"YXZ":this._x=u*h*f+c*p*m,this._y=c*p*f-u*h*m,this._z=c*h*m-u*p*f,this._w=c*h*f+u*p*m;break;case"ZXY":this._x=u*h*f-c*p*m,this._y=c*p*f+u*h*m,this._z=c*h*m+u*p*f,this._w=c*h*f-u*p*m;break;case"ZYX":this._x=u*h*f-c*p*m,this._y=c*p*f+u*h*m,this._z=c*h*m-u*p*f,this._w=c*h*f+u*p*m;break;case"YZX":this._x=u*h*f+c*p*m,this._y=c*p*f+u*h*m,this._z=c*h*m-u*p*f,this._w=c*h*f-u*p*m;break;case"XZY":this._x=u*h*f-c*p*m,this._y=c*p*f-u*h*m,this._z=c*h*m+u*p*f,this._w=c*h*f+u*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=n+a+f;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>f){let p=2*Math.sqrt(1+n-a-f);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>f){let p=2*Math.sqrt(1+a-n-f);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+f-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(dn(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=o*f+this._w*u,this._x=n*f+this._x*u,this._y=s*f+this._y*u,this._z=r*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Xc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Xc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),f=2*(r*n-o*e);return this.x=e+l*c+o*f-a*h,this.y=n+l*h+a*c-r*f,this.z=s+l*f+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Qo.copy(this).projectOnVector(t),this.sub(Qo)}reflect(t){return this.sub(Qo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(dn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Qo=new O,Xc=new Pi,xi=class{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Xn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Xn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Xn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Xn):Xn.fromBufferAttribute(r,o),Xn.applyMatrix4(t.matrixWorld),this.expandByPoint(Xn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),vr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),vr.copy(n.boundingBox)),vr.applyMatrix4(t.matrixWorld),this.union(vr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Xn),Xn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ws),yr.subVectors(this.max,Ws),as.subVectors(t.a,Ws),ls.subVectors(t.b,Ws),cs.subVectors(t.c,Ws),yi.subVectors(ls,as),Mi.subVectors(cs,ls),Bi.subVectors(as,cs);let e=[0,-yi.z,yi.y,0,-Mi.z,Mi.y,0,-Bi.z,Bi.y,yi.z,0,-yi.x,Mi.z,0,-Mi.x,Bi.z,0,-Bi.x,-yi.y,yi.x,0,-Mi.y,Mi.x,0,-Bi.y,Bi.x,0];return!jo(e,as,ls,cs,yr)||(e=[1,0,0,0,1,0,0,0,1],!jo(e,as,ls,cs,yr))?!1:(Mr.crossVectors(yi,Mi),e=[Mr.x,Mr.y,Mr.z],jo(e,as,ls,cs,yr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Xn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Xn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ai),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},ai=[new O,new O,new O,new O,new O,new O,new O,new O],Xn=new O,vr=new xi,as=new O,ls=new O,cs=new O,yi=new O,Mi=new O,Bi=new O,Ws=new O,yr=new O,Mr=new O,zi=new O;jf=new xi,Xs=new O,ta=new O,Ki=class{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):jf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Xs.subVectors(t,this.center);let e=Xs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Xs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ta.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Xs.copy(t.center).add(ta)),this.expandByPoint(Xs.copy(t.center).sub(ta))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},li=new O,ea=new O,Sr=new O,Si=new O,na=new O,br=new O,ia=new O,pl=class{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,li)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=li.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(li.copy(this.origin).addScaledVector(this.direction,e),li.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ea.copy(t).add(e).multiplyScalar(.5),Sr.copy(e).sub(t).normalize(),Si.copy(this.origin).sub(ea);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Sr),a=Si.dot(this.direction),l=-Si.dot(Sr),c=Si.lengthSq(),h=Math.abs(1-o*o),f,u,p,m;if(h>0)if(f=o*l-a,u=o*a-l,m=r*h,f>=0)if(u>=-m)if(u<=m){let x=1/h;f*=x,u*=x,p=f*(f+o*u+2*a)+u*(o*f+u+2*l)+c}else u=r,f=Math.max(0,-(o*u+a)),p=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(o*u+a)),p=-f*f+u*(u+2*l)+c;else u<=-m?(f=Math.max(0,-(-o*r+a)),u=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+u*(u+2*l)+c):u<=m?(f=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(f=Math.max(0,-(o*r+a)),u=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+u*(u+2*l)+c);else u=o>0?-r:r,f=Math.max(0,-(o*u+a)),p=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(ea).addScaledVector(Sr,u),p}intersectSphere(t,e){li.subVectors(t.center,this.origin);let n=li.dot(this.direction),s=li.dot(li)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(a=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,li)!==null}intersectTriangle(t,e,n,s,r){na.subVectors(e,t),br.subVectors(n,t),ia.crossVectors(na,br);let o=this.direction.dot(ia),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Si.subVectors(this.origin,t);let l=a*this.direction.dot(br.crossVectors(Si,br));if(l<0)return null;let c=a*this.direction.dot(na.cross(Si));if(c<0||l+c>o)return null;let h=-a*Si.dot(ia);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ve=class i{constructor(t,e,n,s,r,o,a,l,c,h,f,u,p,m,x,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,f,u,p,m,x,g)}set(t,e,n,s,r,o,a,l,c,h,f,u,p,m,x,g){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=f,d[14]=u,d[3]=p,d[7]=m,d[11]=x,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/hs.setFromMatrixColumn(t,0).length(),r=1/hs.setFromMatrixColumn(t,1).length(),o=1/hs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let u=o*h,p=o*f,m=a*h,x=a*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=p+m*c,e[5]=u-x*c,e[9]=-a*l,e[2]=x-u*c,e[6]=m+p*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,p=l*f,m=c*h,x=c*f;e[0]=u+x*a,e[4]=m*a-p,e[8]=o*c,e[1]=o*f,e[5]=o*h,e[9]=-a,e[2]=p*a-m,e[6]=x+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,p=l*f,m=c*h,x=c*f;e[0]=u-x*a,e[4]=-o*f,e[8]=m+p*a,e[1]=p+m*a,e[5]=o*h,e[9]=x-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,p=o*f,m=a*h,x=a*f;e[0]=l*h,e[4]=m*c-p,e[8]=u*c+x,e[1]=l*f,e[5]=x*c+u,e[9]=p*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,p=o*c,m=a*l,x=a*c;e[0]=l*h,e[4]=x-u*f,e[8]=m*f+p,e[1]=f,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*f+m,e[10]=u-x*f}else if(t.order==="XZY"){let u=o*l,p=o*c,m=a*l,x=a*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+x,e[5]=o*h,e[9]=p*f-m,e[2]=m*f-p,e[6]=a*h,e[10]=x*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(td,t,ed)}lookAt(t,e,n){let s=this.elements;return Un.subVectors(t,e),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),bi.crossVectors(n,Un),bi.lengthSq()===0&&(Math.abs(n.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),bi.crossVectors(n,Un)),bi.normalize(),Er.crossVectors(Un,bi),s[0]=bi.x,s[4]=Er.x,s[8]=Un.x,s[1]=bi.y,s[5]=Er.y,s[9]=Un.y,s[2]=bi.z,s[6]=Er.z,s[10]=Un.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],p=n[13],m=n[2],x=n[6],g=n[10],d=n[14],E=n[3],M=n[7],_=n[11],F=n[15],C=s[0],b=s[4],L=s[8],w=s[12],S=s[1],U=s[5],K=s[9],Z=s[13],j=s[2],st=s[6],$=s[10],ut=s[14],nt=s[3],Et=s[7],Pt=s[11],Bt=s[15];return r[0]=o*C+a*S+l*j+c*nt,r[4]=o*b+a*U+l*st+c*Et,r[8]=o*L+a*K+l*$+c*Pt,r[12]=o*w+a*Z+l*ut+c*Bt,r[1]=h*C+f*S+u*j+p*nt,r[5]=h*b+f*U+u*st+p*Et,r[9]=h*L+f*K+u*$+p*Pt,r[13]=h*w+f*Z+u*ut+p*Bt,r[2]=m*C+x*S+g*j+d*nt,r[6]=m*b+x*U+g*st+d*Et,r[10]=m*L+x*K+g*$+d*Pt,r[14]=m*w+x*Z+g*ut+d*Bt,r[3]=E*C+M*S+_*j+F*nt,r[7]=E*b+M*U+_*st+F*Et,r[11]=E*L+M*K+_*$+F*Pt,r[15]=E*w+M*Z+_*ut+F*Bt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],p=t[14],m=t[3],x=t[7],g=t[11],d=t[15];return m*(+r*l*f-s*c*f-r*a*u+n*c*u+s*a*p-n*l*p)+x*(+e*l*p-e*c*u+r*o*u-s*o*p+s*c*h-r*l*h)+g*(+e*c*f-e*a*p-r*o*f+n*o*p+r*a*h-n*c*h)+d*(-s*a*h-e*l*f+e*a*u+s*o*f-n*o*u+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],p=t[11],m=t[12],x=t[13],g=t[14],d=t[15],E=f*g*c-x*u*c+x*l*p-a*g*p-f*l*d+a*u*d,M=m*u*c-h*g*c-m*l*p+o*g*p+h*l*d-o*u*d,_=h*x*c-m*f*c+m*a*p-o*x*p-h*a*d+o*f*d,F=m*f*l-h*x*l-m*a*u+o*x*u+h*a*g-o*f*g,C=e*E+n*M+s*_+r*F;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let b=1/C;return t[0]=E*b,t[1]=(x*u*r-f*g*r-x*s*p+n*g*p+f*s*d-n*u*d)*b,t[2]=(a*g*r-x*l*r+x*s*c-n*g*c-a*s*d+n*l*d)*b,t[3]=(f*l*r-a*u*r-f*s*c+n*u*c+a*s*p-n*l*p)*b,t[4]=M*b,t[5]=(h*g*r-m*u*r+m*s*p-e*g*p-h*s*d+e*u*d)*b,t[6]=(m*l*r-o*g*r-m*s*c+e*g*c+o*s*d-e*l*d)*b,t[7]=(o*u*r-h*l*r+h*s*c-e*u*c-o*s*p+e*l*p)*b,t[8]=_*b,t[9]=(m*f*r-h*x*r-m*n*p+e*x*p+h*n*d-e*f*d)*b,t[10]=(o*x*r-m*a*r+m*n*c-e*x*c-o*n*d+e*a*d)*b,t[11]=(h*a*r-o*f*r-h*n*c+e*f*c+o*n*p-e*a*p)*b,t[12]=F*b,t[13]=(h*x*s-m*f*s+m*n*u-e*x*u-h*n*g+e*f*g)*b,t[14]=(m*a*s-o*x*s-m*n*l+e*x*l+o*n*g-e*a*g)*b,t[15]=(o*f*s-h*a*s+h*n*l-e*f*l-o*n*u+e*a*u)*b,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,f=a+a,u=r*c,p=r*h,m=r*f,x=o*h,g=o*f,d=a*f,E=l*c,M=l*h,_=l*f,F=n.x,C=n.y,b=n.z;return s[0]=(1-(x+d))*F,s[1]=(p+_)*F,s[2]=(m-M)*F,s[3]=0,s[4]=(p-_)*C,s[5]=(1-(u+d))*C,s[6]=(g+E)*C,s[7]=0,s[8]=(m+M)*b,s[9]=(g-E)*b,s[10]=(1-(u+x))*b,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=hs.set(s[0],s[1],s[2]).length(),o=hs.set(s[4],s[5],s[6]).length(),a=hs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],qn.copy(this);let c=1/r,h=1/o,f=1/a;return qn.elements[0]*=c,qn.elements[1]*=c,qn.elements[2]*=c,qn.elements[4]*=h,qn.elements[5]*=h,qn.elements[6]*=h,qn.elements[8]*=f,qn.elements[9]*=f,qn.elements[10]*=f,e.setFromRotationMatrix(qn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=pi){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),f=(e+t)/(e-t),u=(n+s)/(n-s),p,m;if(a===pi)p=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===Jr)p=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=pi){let l=this.elements,c=1/(e-t),h=1/(n-s),f=1/(o-r),u=(e+t)*c,p=(n+s)*h,m,x;if(a===pi)m=(o+r)*f,x=-2*f;else if(a===Jr)m=r*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},hs=new O,qn=new Ve,td=new O(0,0,0),ed=new O(1,1,1),bi=new O,Er=new O,Un=new O,qc=new Ve,Yc=new Pi,si=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(dn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-dn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(dn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-dn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(dn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-dn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return qc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(qc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Yc.setFromEuler(this),this.setFromQuaternion(Yc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};si.DEFAULT_ORDER="XYZ";to=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},nd=0,Zc=new O,us=new Pi,ci=new Ve,wr=new O,qs=new O,id=new O,sd=new Pi,$c=new O(1,0,0),Jc=new O(0,1,0),Kc=new O(0,0,1),Qc={type:"added"},rd={type:"removed"},fs={type:"childadded",child:null},sa={type:"childremoved",child:null},sn=class i extends Ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nd++}),this.uuid=Fs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new O,e=new si,n=new Pi,s=new O(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ve},normalMatrix:{value:new _e}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new to,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return us.setFromAxisAngle(t,e),this.quaternion.multiply(us),this}rotateOnWorldAxis(t,e){return us.setFromAxisAngle(t,e),this.quaternion.premultiply(us),this}rotateX(t){return this.rotateOnAxis($c,t)}rotateY(t){return this.rotateOnAxis(Jc,t)}rotateZ(t){return this.rotateOnAxis(Kc,t)}translateOnAxis(t,e){return Zc.copy(t).applyQuaternion(this.quaternion),this.position.add(Zc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis($c,t)}translateY(t){return this.translateOnAxis(Jc,t)}translateZ(t){return this.translateOnAxis(Kc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?wr.copy(t):wr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(qs,wr,this.up):ci.lookAt(wr,qs,this.up),this.quaternion.setFromRotationMatrix(ci),s&&(ci.extractRotation(s.matrixWorld),us.setFromRotationMatrix(ci),this.quaternion.premultiply(us.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Qc),fs.child=t,this.dispatchEvent(fs),fs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(rd),sa.child=t,this.dispatchEvent(sa),sa.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ci.multiply(t.parent.matrixWorld)),t.applyMatrix4(ci),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Qc),fs.child=t,this.dispatchEvent(fs),fs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,t,id),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,sd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),f=o(t.shapes),u=o(t.skeletons),p=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};sn.DEFAULT_UP=new O(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Yn=new O,hi=new O,ra=new O,ui=new O,ds=new O,ps=new O,jc=new O,oa=new O,aa=new O,la=new O,ca=new Je,ha=new Je,ua=new Je,qi=class i{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Yn.subVectors(t,e),s.cross(Yn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Yn.subVectors(s,e),hi.subVectors(n,e),ra.subVectors(t,e);let o=Yn.dot(Yn),a=Yn.dot(hi),l=Yn.dot(ra),c=hi.dot(hi),h=hi.dot(ra),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let u=1/f,p=(c*l-a*h)*u,m=(o*h-a*l)*u;return r.set(1-p-m,m,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ui.x),l.addScaledVector(o,ui.y),l.addScaledVector(a,ui.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return ca.setScalar(0),ha.setScalar(0),ua.setScalar(0),ca.fromBufferAttribute(t,e),ha.fromBufferAttribute(t,n),ua.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ca,r.x),o.addScaledVector(ha,r.y),o.addScaledVector(ua,r.z),o}static isFrontFacing(t,e,n,s){return Yn.subVectors(n,e),hi.subVectors(t,e),Yn.cross(hi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Yn.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),Yn.cross(hi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;ds.subVectors(s,n),ps.subVectors(r,n),oa.subVectors(t,n);let l=ds.dot(oa),c=ps.dot(oa);if(l<=0&&c<=0)return e.copy(n);aa.subVectors(t,s);let h=ds.dot(aa),f=ps.dot(aa);if(h>=0&&f<=h)return e.copy(s);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(ds,o);la.subVectors(t,r);let p=ds.dot(la),m=ps.dot(la);if(m>=0&&p<=m)return e.copy(r);let x=p*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(ps,a);let g=h*m-p*f;if(g<=0&&f-h>=0&&p-m>=0)return jc.subVectors(r,s),a=(f-h)/(f-h+(p-m)),e.copy(s).addScaledVector(jc,a);let d=1/(g+x+u);return o=x*d,a=u*d,e.copy(n).addScaledVector(ds,o).addScaledVector(ps,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},jh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},Tr={h:0,s:0,l:0};se=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=xn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Pe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Pe.workingColorSpace){return this.r=t,this.g=e,this.b=n,Pe.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Pe.workingColorSpace){if(t=qf(t,1),e=dn(e,0,1),n=dn(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=fa(o,r,t+1/3),this.g=fa(o,r,t),this.b=fa(o,r,t-1/3)}return Pe.toWorkingColorSpace(this,s),this}setStyle(t,e=xn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=xn){let n=jh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=mi(t.r),this.g=mi(t.g),this.b=mi(t.b),this}copyLinearToSRGB(t){return this.r=Es(t.r),this.g=Es(t.g),this.b=Es(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=xn){return Pe.fromWorkingColorSpace(gn.copy(this),t),Math.round(dn(gn.r*255,0,255))*65536+Math.round(dn(gn.g*255,0,255))*256+Math.round(dn(gn.b*255,0,255))}getHexString(t=xn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Pe.workingColorSpace){Pe.fromWorkingColorSpace(gn.copy(this),e);let n=gn.r,s=gn.g,r=gn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Pe.workingColorSpace){return Pe.fromWorkingColorSpace(gn.copy(this),e),t.r=gn.r,t.g=gn.g,t.b=gn.b,t}getStyle(t=xn){Pe.fromWorkingColorSpace(gn.copy(this),t);let e=gn.r,n=gn.g,s=gn.b;return t!==xn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ei),this.setHSL(Ei.h+t,Ei.s+e,Ei.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ei),t.getHSL(Tr);let n=$o(Ei.h,Tr.h,e),s=$o(Ei.s,Tr.s,e),r=$o(Ei.l,Tr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},gn=new se;se.NAMES=jh;od=0,Qi=class extends Ii{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:od++}),this.uuid=Fs(),this.name="",this.blending=Ss,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ta,this.blendDst=Aa,this.blendEquation=Xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new se(0,0,0),this.blendAlpha=0,this.depthFunc=Ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rs,this.stencilZFail=rs,this.stencilZPass=rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ss&&(n.blending=this.blending),this.side!==Ci&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ta&&(n.blendSrc=this.blendSrc),this.blendDst!==Aa&&(n.blendDst=this.blendDst),this.blendEquation!==Xi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ts&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==rs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==rs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},tn=class extends Qi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.combine=zh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},je=new O,Ar=new _t,nn=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Oc,this.updateRanges=[],this.gpuType=ei,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ar.fromBufferAttribute(this,e),Ar.applyMatrix3(t),this.setXY(e,Ar.x,Ar.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyMatrix3(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyMatrix4(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyNormalMatrix(t),this.setXYZ(e,je.x,je.y,je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.transformDirection(t),this.setXYZ(e,je.x,je.y,je.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Gs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Gs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Tn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Gs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Tn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Gs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Tn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Gs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Tn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Tn(e,this.array),n=Tn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Tn(e,this.array),n=Tn(n,this.array),s=Tn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Tn(e,this.array),n=Tn(n,this.array),s=Tn(s,this.array),r=Tn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Oc&&(t.usage=this.usage),t}},eo=class extends nn{constructor(t,e,n){super(new Uint16Array(t),e,n)}},no=class extends nn{constructor(t,e,n){super(new Uint32Array(t),e,n)}},Me=class extends nn{constructor(t,e,n){super(new Float32Array(t),e,n)}},ad=0,Hn=new Ve,da=new sn,ms=new O,Nn=new xi,Ys=new xi,un=new O,rn=class i extends Ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ad++}),this.uuid=Fs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Qh(t)?no:eo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new _e().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Hn.makeRotationFromQuaternion(t),this.applyMatrix4(Hn),this}rotateX(t){return Hn.makeRotationX(t),this.applyMatrix4(Hn),this}rotateY(t){return Hn.makeRotationY(t),this.applyMatrix4(Hn),this}rotateZ(t){return Hn.makeRotationZ(t),this.applyMatrix4(Hn),this}translate(t,e,n){return Hn.makeTranslation(t,e,n),this.applyMatrix4(Hn),this}scale(t,e,n){return Hn.makeScale(t,e,n),this.applyMatrix4(Hn),this}lookAt(t){return da.lookAt(t),da.updateMatrix(),this.applyMatrix4(da.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Me(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Nn.setFromBufferAttribute(r),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ki);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){let n=this.boundingSphere.center;if(Nn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Ys.setFromBufferAttribute(a),this.morphTargetsRelative?(un.addVectors(Nn.min,Ys.min),Nn.expandByPoint(un),un.addVectors(Nn.max,Ys.max),Nn.expandByPoint(un)):(Nn.expandByPoint(Ys.min),Nn.expandByPoint(Ys.max))}Nn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)un.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(un));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)un.fromBufferAttribute(a,c),l&&(ms.fromBufferAttribute(t,c),un.add(ms)),s=Math.max(s,n.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nn(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<n.count;L++)a[L]=new O,l[L]=new O;let c=new O,h=new O,f=new O,u=new _t,p=new _t,m=new _t,x=new O,g=new O;function d(L,w,S){c.fromBufferAttribute(n,L),h.fromBufferAttribute(n,w),f.fromBufferAttribute(n,S),u.fromBufferAttribute(r,L),p.fromBufferAttribute(r,w),m.fromBufferAttribute(r,S),h.sub(c),f.sub(c),p.sub(u),m.sub(u);let U=1/(p.x*m.y-m.x*p.y);isFinite(U)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(f,-p.y).multiplyScalar(U),g.copy(f).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(U),a[L].add(x),a[w].add(x),a[S].add(x),l[L].add(g),l[w].add(g),l[S].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let L=0,w=E.length;L<w;++L){let S=E[L],U=S.start,K=S.count;for(let Z=U,j=U+K;Z<j;Z+=3)d(t.getX(Z+0),t.getX(Z+1),t.getX(Z+2))}let M=new O,_=new O,F=new O,C=new O;function b(L){F.fromBufferAttribute(s,L),C.copy(F);let w=a[L];M.copy(w),M.sub(F.multiplyScalar(F.dot(w))).normalize(),_.crossVectors(C,w);let U=_.dot(l[L])<0?-1:1;o.setXYZW(L,M.x,M.y,M.z,U)}for(let L=0,w=E.length;L<w;++L){let S=E[L],U=S.start,K=S.count;for(let Z=U,j=U+K;Z<j;Z+=3)b(t.getX(Z+0)),b(t.getX(Z+1)),b(t.getX(Z+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new nn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);let s=new O,r=new O,o=new O,a=new O,l=new O,c=new O,h=new O,f=new O;if(t)for(let u=0,p=t.count;u<p;u+=3){let m=t.getX(u+0),x=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,g),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,p=e.count;u<p;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)un.fromBufferAttribute(t,e),un.normalize(),t.setXYZ(e,un.x,un.y,un.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,f=a.normalized,u=new c.constructor(l.length*h),p=0,m=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*h;for(let d=0;d<h;d++)u[m++]=c[p++]}return new nn(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){let u=c[h],p=t(u,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let p=c[f];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,p=f.length;u<p;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},th=new Ve,ki=new pl,Rr=new Ki,eh=new O,Cr=new O,Ir=new O,Pr=new O,pa=new O,Lr=new O,nh=new O,Dr=new O,re=class extends sn{constructor(t=new rn,e=new tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Lr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],f=r[l];h!==0&&(pa.fromBufferAttribute(f,t),o?Lr.addScaledVector(pa,h):Lr.addScaledVector(pa.sub(e),h))}e.add(Lr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Rr.copy(n.boundingSphere),Rr.applyMatrix4(r),ki.copy(t.ray).recast(t.near),!(Rr.containsPoint(ki.origin)===!1&&(ki.intersectSphere(Rr,eh)===null||ki.origin.distanceToSquared(eh)>(t.far-t.near)**2))&&(th.copy(r).invert(),ki.copy(t.ray).applyMatrix4(th),!(n.boundingBox!==null&&ki.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ki)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=u.length;m<x;m++){let g=u[m],d=o[g.materialIndex],E=Math.max(g.start,p.start),M=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let _=E,F=M;_<F;_+=3){let C=a.getX(_),b=a.getX(_+1),L=a.getX(_+2);s=Ur(this,d,t,n,c,h,f,C,b,L),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let g=m,d=x;g<d;g+=3){let E=a.getX(g),M=a.getX(g+1),_=a.getX(g+2);s=Ur(this,o,t,n,c,h,f,E,M,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=u.length;m<x;m++){let g=u[m],d=o[g.materialIndex],E=Math.max(g.start,p.start),M=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let _=E,F=M;_<F;_+=3){let C=_,b=_+1,L=_+2;s=Ur(this,d,t,n,c,h,f,C,b,L),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let g=m,d=x;g<d;g+=3){let E=g,M=g+1,_=g+2;s=Ur(this,o,t,n,c,h,f,E,M,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};Ke=class i extends rn{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],f=[],u=0,p=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Me(c,3)),this.setAttribute("normal",new Me(h,3)),this.setAttribute("uv",new Me(f,2));function m(x,g,d,E,M,_,F,C,b,L,w){let S=_/b,U=F/L,K=_/2,Z=F/2,j=C/2,st=b+1,$=L+1,ut=0,nt=0,Et=new O;for(let Pt=0;Pt<$;Pt++){let Bt=Pt*U-Z;for(let te=0;te<st;te++){let we=te*S-K;Et[x]=we*E,Et[g]=Bt*M,Et[d]=j,c.push(Et.x,Et.y,Et.z),Et[x]=0,Et[g]=0,Et[d]=C>0?1:-1,h.push(Et.x,Et.y,Et.z),f.push(te/b),f.push(1-Pt/L),ut+=1}}for(let Pt=0;Pt<L;Pt++)for(let Bt=0;Bt<b;Bt++){let te=u+Bt+st*Pt,we=u+Bt+st*(Pt+1),ot=u+(Bt+1)+st*(Pt+1),Mt=u+(Bt+1)+st*Pt;l.push(te,we,Mt),l.push(we,ot,Mt),nt+=6}a.addGroup(p,nt,w),p+=nt,u+=ut}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};Di={clone:Ls,merge:Mn},hd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ud=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,on=class extends Qi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hd,this.fragmentShader=ud,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ls(t.uniforms),this.uniformsGroups=cd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},io=class extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=pi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},wi=new O,ih=new _t,sh=new _t,Fn=class extends io{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=hl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Zo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return hl*2*Math.atan(Math.tan(Zo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(wi.x,wi.y).multiplyScalar(-t/wi.z),wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wi.x,wi.y).multiplyScalar(-t/wi.z)}getViewSize(t,e){return this.getViewBounds(t,ih,sh),e.subVectors(sh,ih)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Zo*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},gs=-90,xs=1,ml=class extends sn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Fn(gs,xs,t,e);s.layers=this.layers,this.add(s);let r=new Fn(gs,xs,t,e);r.layers=this.layers,this.add(r);let o=new Fn(gs,xs,t,e);o.layers=this.layers,this.add(o);let a=new Fn(gs,xs,t,e);a.layers=this.layers,this.add(a);let l=new Fn(gs,xs,t,e);l.layers=this.layers,this.add(l);let c=new Fn(gs,xs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===pi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Jr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(f,u,p),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},so=class extends Cn{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Rs,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},gl=class extends bn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new so(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ti}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ke(5,5,5),r=new on({name:"CubemapFromEquirect",uniforms:Ls(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Rn,blending:ni});r.uniforms.tEquirect.value=e;let o=new re(s,r),a=e.minFilter;return e.minFilter===$i&&(e.minFilter=ti),new ml(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},ma=new O,fd=new O,dd=new _e,di=class{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=ma.subVectors(n,e).cross(fd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(ma),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||dd.getNormalMatrix(t),s=this.coplanarPoint(ma).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Hi=new Ki,Nr=new O,ir=class{constructor(t=new di,e=new di,n=new di,s=new di,r=new di,o=new di){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=pi){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],f=s[6],u=s[7],p=s[8],m=s[9],x=s[10],g=s[11],d=s[12],E=s[13],M=s[14],_=s[15];if(n[0].setComponents(l-r,u-c,g-p,_-d).normalize(),n[1].setComponents(l+r,u+c,g+p,_+d).normalize(),n[2].setComponents(l+o,u+h,g+m,_+E).normalize(),n[3].setComponents(l-o,u-h,g-m,_-E).normalize(),n[4].setComponents(l-a,u-f,g-x,_-M).normalize(),e===pi)n[5].setComponents(l+a,u+f,g+x,_+M).normalize();else if(e===Jr)n[5].setComponents(a,f,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Hi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Hi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Hi)}intersectsSprite(t){return Hi.center.set(0,0,0),Hi.radius=.7071067811865476,Hi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Hi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Nr.x=s.normal.x>0?t.max.x:t.min.x,Nr.y=s.normal.y>0?t.max.y:t.min.y,Nr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Nr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};En=class i extends rn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,f=t/a,u=e/l,p=[],m=[],x=[],g=[];for(let d=0;d<h;d++){let E=d*u-o;for(let M=0;M<c;M++){let _=M*f-r;m.push(_,-E,0),x.push(0,0,1),g.push(M/a),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let E=0;E<a;E++){let M=E+c*d,_=E+c*(d+1),F=E+1+c*(d+1),C=E+1+c*d;p.push(M,_,C),p.push(_,F,C)}this.setIndex(p),this.setAttribute("position",new Me(m,3)),this.setAttribute("normal",new Me(x,3)),this.setAttribute("uv",new Me(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},md=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gd=`#ifdef USE_ALPHAHASH
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
#endif`,xd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_d=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Md=`#ifdef USE_AOMAP
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
#endif`,Sd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bd=`#ifdef USE_BATCHING
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
#endif`,Ed=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Td=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ad=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Rd=`#ifdef USE_IRIDESCENCE
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
#endif`,Cd=`#ifdef USE_BUMPMAP
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
#endif`,Id=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Pd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ld=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ud=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Nd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Fd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Od=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Bd=`#define PI 3.141592653589793
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
} // validated`,zd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,kd=`vec3 transformedNormal = objectNormal;
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
#endif`,Hd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xd="gl_FragColor = linearToOutputTexel( gl_FragColor );",qd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yd=`#ifdef USE_ENVMAP
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
#endif`,Zd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$d=`#ifdef USE_ENVMAP
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
#endif`,Jd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kd=`#ifdef USE_ENVMAP
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
#endif`,Qd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ep=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,np=`#ifdef USE_GRADIENTMAP
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
}`,ip=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,op=`uniform bool receiveShadow;
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
#endif`,ap=`#ifdef USE_ENVMAP
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
#endif`,lp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,up=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fp=`PhysicalMaterial material;
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
#endif`,dp=`struct PhysicalMaterial {
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
}`,pp=`
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
#endif`,mp=`#if defined( RE_IndirectDiffuse )
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
#endif`,gp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_p=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Mp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ep=`#if defined( USE_POINTS_UV )
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
#endif`,wp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ap=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Rp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ip=`#ifdef USE_MORPHTARGETS
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
#endif`,Pp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Dp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Up=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Np=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Op=`#ifdef USE_NORMALMAP
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
#endif`,Bp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Wp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$p=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jp=`float getShadowMask() {
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
}`,tm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,em=`#ifdef USE_SKINNING
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
#endif`,nm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,im=`#ifdef USE_SKINNING
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
#endif`,sm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,om=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,am=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lm=`#ifdef USE_TRANSMISSION
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
#endif`,cm=`#ifdef USE_TRANSMISSION
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
#endif`,hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,pm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mm=`uniform sampler2D t2D;
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
}`,gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ym=`#include <common>
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
}`,Mm=`#if DEPTH_PACKING == 3200
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
}`,Sm=`#define DISTANCE
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
}`,bm=`#define DISTANCE
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
}`,Em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tm=`uniform float scale;
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
}`,Am=`uniform vec3 diffuse;
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
}`,Rm=`#include <common>
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
}`,Cm=`uniform vec3 diffuse;
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
}`,Im=`#define LAMBERT
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
}`,Pm=`#define LAMBERT
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
}`,Lm=`#define MATCAP
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
}`,Dm=`#define MATCAP
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
}`,Um=`#define NORMAL
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
}`,Nm=`#define NORMAL
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
}`,Fm=`#define PHONG
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
}`,Om=`#define PHONG
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
}`,Bm=`#define STANDARD
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
}`,zm=`#define STANDARD
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
}`,km=`#define TOON
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
}`,Hm=`#define TOON
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
}`,Vm=`uniform float size;
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
}`,Gm=`uniform vec3 diffuse;
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
}`,Wm=`#include <common>
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
}`,Xm=`uniform vec3 color;
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
}`,qm=`uniform float rotation;
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
}`,Ym=`uniform vec3 diffuse;
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
}`,ve={alphahash_fragment:md,alphahash_pars_fragment:gd,alphamap_fragment:xd,alphamap_pars_fragment:_d,alphatest_fragment:vd,alphatest_pars_fragment:yd,aomap_fragment:Md,aomap_pars_fragment:Sd,batching_pars_vertex:bd,batching_vertex:Ed,begin_vertex:wd,beginnormal_vertex:Td,bsdfs:Ad,iridescence_fragment:Rd,bumpmap_pars_fragment:Cd,clipping_planes_fragment:Id,clipping_planes_pars_fragment:Pd,clipping_planes_pars_vertex:Ld,clipping_planes_vertex:Dd,color_fragment:Ud,color_pars_fragment:Nd,color_pars_vertex:Fd,color_vertex:Od,common:Bd,cube_uv_reflection_fragment:zd,defaultnormal_vertex:kd,displacementmap_pars_vertex:Hd,displacementmap_vertex:Vd,emissivemap_fragment:Gd,emissivemap_pars_fragment:Wd,colorspace_fragment:Xd,colorspace_pars_fragment:qd,envmap_fragment:Yd,envmap_common_pars_fragment:Zd,envmap_pars_fragment:$d,envmap_pars_vertex:Jd,envmap_physical_pars_fragment:ap,envmap_vertex:Kd,fog_vertex:Qd,fog_pars_vertex:jd,fog_fragment:tp,fog_pars_fragment:ep,gradientmap_pars_fragment:np,lightmap_pars_fragment:ip,lights_lambert_fragment:sp,lights_lambert_pars_fragment:rp,lights_pars_begin:op,lights_toon_fragment:lp,lights_toon_pars_fragment:cp,lights_phong_fragment:hp,lights_phong_pars_fragment:up,lights_physical_fragment:fp,lights_physical_pars_fragment:dp,lights_fragment_begin:pp,lights_fragment_maps:mp,lights_fragment_end:gp,logdepthbuf_fragment:xp,logdepthbuf_pars_fragment:_p,logdepthbuf_pars_vertex:vp,logdepthbuf_vertex:yp,map_fragment:Mp,map_pars_fragment:Sp,map_particle_fragment:bp,map_particle_pars_fragment:Ep,metalnessmap_fragment:wp,metalnessmap_pars_fragment:Tp,morphinstance_vertex:Ap,morphcolor_vertex:Rp,morphnormal_vertex:Cp,morphtarget_pars_vertex:Ip,morphtarget_vertex:Pp,normal_fragment_begin:Lp,normal_fragment_maps:Dp,normal_pars_fragment:Up,normal_pars_vertex:Np,normal_vertex:Fp,normalmap_pars_fragment:Op,clearcoat_normal_fragment_begin:Bp,clearcoat_normal_fragment_maps:zp,clearcoat_pars_fragment:kp,iridescence_pars_fragment:Hp,opaque_fragment:Vp,packing:Gp,premultiplied_alpha_fragment:Wp,project_vertex:Xp,dithering_fragment:qp,dithering_pars_fragment:Yp,roughnessmap_fragment:Zp,roughnessmap_pars_fragment:$p,shadowmap_pars_fragment:Jp,shadowmap_pars_vertex:Kp,shadowmap_vertex:Qp,shadowmask_pars_fragment:jp,skinbase_vertex:tm,skinning_pars_vertex:em,skinning_vertex:nm,skinnormal_vertex:im,specularmap_fragment:sm,specularmap_pars_fragment:rm,tonemapping_fragment:om,tonemapping_pars_fragment:am,transmission_fragment:lm,transmission_pars_fragment:cm,uv_pars_fragment:hm,uv_pars_vertex:um,uv_vertex:fm,worldpos_vertex:dm,background_vert:pm,background_frag:mm,backgroundCube_vert:gm,backgroundCube_frag:xm,cube_vert:_m,cube_frag:vm,depth_vert:ym,depth_frag:Mm,distanceRGBA_vert:Sm,distanceRGBA_frag:bm,equirect_vert:Em,equirect_frag:wm,linedashed_vert:Tm,linedashed_frag:Am,meshbasic_vert:Rm,meshbasic_frag:Cm,meshlambert_vert:Im,meshlambert_frag:Pm,meshmatcap_vert:Lm,meshmatcap_frag:Dm,meshnormal_vert:Um,meshnormal_frag:Nm,meshphong_vert:Fm,meshphong_frag:Om,meshphysical_vert:Bm,meshphysical_frag:zm,meshtoon_vert:km,meshtoon_frag:Hm,points_vert:Vm,points_frag:Gm,shadow_vert:Wm,shadow_frag:Xm,sprite_vert:qm,sprite_frag:Ym},Ct={common:{diffuse:{value:new se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _e},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _e}},envmap:{envMap:{value:null},envMapRotation:{value:new _e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _e},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0},uvTransform:{value:new _e}},sprite:{diffuse:{value:new se(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _e},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0}}},jn={basic:{uniforms:Mn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.fog]),vertexShader:ve.meshbasic_vert,fragmentShader:ve.meshbasic_frag},lambert:{uniforms:Mn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new se(0)}}]),vertexShader:ve.meshlambert_vert,fragmentShader:ve.meshlambert_frag},phong:{uniforms:Mn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new se(0)},specular:{value:new se(1118481)},shininess:{value:30}}]),vertexShader:ve.meshphong_vert,fragmentShader:ve.meshphong_frag},standard:{uniforms:Mn([Ct.common,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.roughnessmap,Ct.metalnessmap,Ct.fog,Ct.lights,{emissive:{value:new se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag},toon:{uniforms:Mn([Ct.common,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.gradientmap,Ct.fog,Ct.lights,{emissive:{value:new se(0)}}]),vertexShader:ve.meshtoon_vert,fragmentShader:ve.meshtoon_frag},matcap:{uniforms:Mn([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,{matcap:{value:null}}]),vertexShader:ve.meshmatcap_vert,fragmentShader:ve.meshmatcap_frag},points:{uniforms:Mn([Ct.points,Ct.fog]),vertexShader:ve.points_vert,fragmentShader:ve.points_frag},dashed:{uniforms:Mn([Ct.common,Ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ve.linedashed_vert,fragmentShader:ve.linedashed_frag},depth:{uniforms:Mn([Ct.common,Ct.displacementmap]),vertexShader:ve.depth_vert,fragmentShader:ve.depth_frag},normal:{uniforms:Mn([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,{opacity:{value:1}}]),vertexShader:ve.meshnormal_vert,fragmentShader:ve.meshnormal_frag},sprite:{uniforms:Mn([Ct.sprite,Ct.fog]),vertexShader:ve.sprite_vert,fragmentShader:ve.sprite_frag},background:{uniforms:{uvTransform:{value:new _e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ve.background_vert,fragmentShader:ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _e}},vertexShader:ve.backgroundCube_vert,fragmentShader:ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ve.cube_vert,fragmentShader:ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ve.equirect_vert,fragmentShader:ve.equirect_frag},distanceRGBA:{uniforms:Mn([Ct.common,Ct.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ve.distanceRGBA_vert,fragmentShader:ve.distanceRGBA_frag},shadow:{uniforms:Mn([Ct.lights,Ct.fog,{color:{value:new se(0)},opacity:{value:1}}]),vertexShader:ve.shadow_vert,fragmentShader:ve.shadow_frag}};jn.physical={uniforms:Mn([jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _e},clearcoatNormalScale:{value:new _t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _e},sheen:{value:0},sheenColor:{value:new se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _e},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _e},attenuationDistance:{value:0},attenuationColor:{value:new se(0)},specularColor:{value:new se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _e},anisotropyVector:{value:new _t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _e}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag};Fr={r:0,b:0,g:0},Vi=new si,Zm=new Ve;Li=class extends io{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ys=4,rh=[.125,.215,.35,.446,.526,.582],Yi=20,ga=new Li,oh=new se,xa=null,_a=0,va=0,ya=!1,Wi=(1+Math.sqrt(5))/2,_s=1/Wi,ah=[new O(-Wi,_s,0),new O(Wi,_s,0),new O(-_s,0,Wi),new O(_s,0,Wi),new O(0,Wi,-_s),new O(0,Wi,_s),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],ro=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){xa=this._renderer.getRenderTarget(),_a=this._renderer.getActiveCubeFace(),va=this._renderer.getActiveMipmapLevel(),ya=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ch(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(xa,_a,va),this._renderer.xr.enabled=ya,t.scissorTest=!1,Or(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Rs||t.mapping===Cs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),xa=this._renderer.getRenderTarget(),_a=this._renderer.getActiveCubeFace(),va=this._renderer.getActiveMipmapLevel(),ya=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ti,minFilter:ti,generateMipmaps:!1,type:Jn,format:Zn,colorSpace:Ns,depthBuffer:!1},s=lh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=e0(r)),this._blurMaterial=n0(r,t,e)}return s}_compileMaterial(t){let e=new re(this._lodPlanes[0],t);this._renderer.compile(e,ga)}_sceneToCubeUV(t,e,n,s){let a=new Fn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,u=h.toneMapping;h.getClearColor(oh),h.toneMapping=Ai,h.autoClear=!1;let p=new tn({name:"PMREM.Background",side:Rn,depthWrite:!1,depthTest:!1}),m=new re(new Ke,p),x=!1,g=t.background;g?g.isColor&&(p.color.copy(g),t.background=null,x=!0):(p.color.copy(oh),x=!0);for(let d=0;d<6;d++){let E=d%3;E===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):E===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));let M=this._cubeSize;Or(s,E*M,d>2?M:0,M,M),h.setRenderTarget(s),x&&h.render(m,a),h.render(t,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=u,h.autoClear=f,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Rs||t.mapping===Cs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=hh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ch());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new re(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Or(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,ga)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ah[(s-r-1)%ah.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new re(this._lodPlanes[s],c),u=c.uniforms,p=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Yi-1),x=r/m,g=isFinite(r)?1+Math.floor(h*x):Yi;g>Yi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Yi}`);let d=[],E=0;for(let b=0;b<Yi;++b){let L=b/x,w=Math.exp(-L*L/2);d.push(w),b===0?E+=w:b<g&&(E+=2*w)}for(let b=0;b<d.length;b++)d[b]=d[b]/E;u.envMap.value=t.texture,u.samples.value=g,u.weights.value=d,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:M}=this;u.dTheta.value=m,u.mipInt.value=M-n;let _=this._sizeLods[s],F=3*_*(s>M-ys?s-M+ys:0),C=4*(this._cubeSize-_);Or(e,F,C,3*_,2*_),l.setRenderTarget(e),l.render(f,ga)}};oo=class extends Cn{constructor(t,e,n,s,r,o,a,l,c,h=bs){if(h!==bs&&h!==Ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===bs&&(n=Ji),n===void 0&&h===Ps&&(n=Is),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:On,this.minFilter=l!==void 0?l:On,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},nu=new Cn,uh=new oo(1,1),iu=new jr,su=new dl,ru=new so,fh=[],dh=[],ph=new Float32Array(16),mh=new Float32Array(9),gh=new Float32Array(4);xl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=C0(e.type)}},_l=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=$0(e.type)}},vl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Ma=/(\w+)(\])?(\[|\.)?/g;ws=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);J0(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};K0=37297,Q0=0;vh=new _e;Br=new O;ag=/^[ \t]*#include +<([\w\d./]+)>/gm;lg=new Map;hg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;_g=0,Ml=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Sl(t),e.set(t,n)),n}},Sl=class{constructor(t){this.id=_g++,this.code=t,this.usedTimes=0}};wg=0;bl=class extends Qi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ff,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},El=class extends Qi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Cg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ig=`uniform sampler2D shadow_pass;
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
}`;Lg={[Ra]:Ca,[Ia]:As,[Pa]:Da,[Ts]:La,[Ca]:Ra,[As]:Ia,[Da]:Pa,[La]:Ts};wl=class extends Fn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},An=class extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Og={type:"move"},Qs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new An,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new An,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new An,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),d=this._getHandJoint(c,x);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),p=.02,m=.005;c.inputState.pinching&&u>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Og)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new An;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Bg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zg=`
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

}`,Tl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Cn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new on({vertexShader:Bg,fragmentShader:zg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new re(new En(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Al=class extends Ii{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,u=null,p=null,m=null,x=new Tl,g=e.getContextAttributes(),d=null,E=null,M=[],_=[],F=new _t,C=null,b=new Fn;b.viewport=new Je;let L=new Fn;L.viewport=new Je;let w=[b,L],S=new wl,U=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ot){let Mt=M[ot];return Mt===void 0&&(Mt=new Qs,M[ot]=Mt),Mt.getTargetRaySpace()},this.getControllerGrip=function(ot){let Mt=M[ot];return Mt===void 0&&(Mt=new Qs,M[ot]=Mt),Mt.getGripSpace()},this.getHand=function(ot){let Mt=M[ot];return Mt===void 0&&(Mt=new Qs,M[ot]=Mt),Mt.getHandSpace()};function Z(ot){let Mt=_.indexOf(ot.inputSource);if(Mt===-1)return;let Gt=M[Mt];Gt!==void 0&&(Gt.update(ot.inputSource,ot.frame,c||o),Gt.dispatchEvent({type:ot.type,data:ot.inputSource}))}function j(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",st);for(let ot=0;ot<M.length;ot++){let Mt=_[ot];Mt!==null&&(_[ot]=null,M[ot].disconnect(Mt))}U=null,K=null,x.reset(),t.setRenderTarget(d),p=null,u=null,f=null,s=null,E=null,we.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(F.width,F.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ot){r=ot,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ot){a=ot,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ot){c=ot},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return f},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(ot){if(s=ot,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",j),s.addEventListener("inputsourceschange",st),g.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(F),s.renderState.layers===void 0){let Mt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,Mt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new bn(p.framebufferWidth,p.framebufferHeight,{format:Zn,type:gi,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let Mt=null,Gt=null,St=null;g.depth&&(St=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Mt=g.stencil?Ps:bs,Gt=g.stencil?Is:Ji);let Vt={colorFormat:e.RGBA8,depthFormat:St,scaleFactor:r};f=new XRWebGLBinding(s,e),u=f.createProjectionLayer(Vt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),E=new bn(u.textureWidth,u.textureHeight,{format:Zn,type:gi,depthTexture:new oo(u.textureWidth,u.textureHeight,Gt,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),we.setContext(s),we.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function st(ot){for(let Mt=0;Mt<ot.removed.length;Mt++){let Gt=ot.removed[Mt],St=_.indexOf(Gt);St>=0&&(_[St]=null,M[St].disconnect(Gt))}for(let Mt=0;Mt<ot.added.length;Mt++){let Gt=ot.added[Mt],St=_.indexOf(Gt);if(St===-1){for(let jt=0;jt<M.length;jt++)if(jt>=_.length){_.push(Gt),St=jt;break}else if(_[jt]===null){_[jt]=Gt,St=jt;break}if(St===-1)break}let Vt=M[St];Vt&&Vt.connect(Gt)}}let $=new O,ut=new O;function nt(ot,Mt,Gt){$.setFromMatrixPosition(Mt.matrixWorld),ut.setFromMatrixPosition(Gt.matrixWorld);let St=$.distanceTo(ut),Vt=Mt.projectionMatrix.elements,jt=Gt.projectionMatrix.elements,$t=Vt[14]/(Vt[10]-1),fe=Vt[14]/(Vt[10]+1),ct=(Vt[9]+1)/Vt[5],ft=(Vt[9]-1)/Vt[5],P=(Vt[8]-1)/Vt[0],kt=(jt[8]+1)/jt[0],dt=$t*P,Rt=$t*kt,wt=St/(-P+kt),Kt=wt*-P;if(Mt.matrixWorld.decompose(ot.position,ot.quaternion,ot.scale),ot.translateX(Kt),ot.translateZ(wt),ot.matrixWorld.compose(ot.position,ot.quaternion,ot.scale),ot.matrixWorldInverse.copy(ot.matrixWorld).invert(),Vt[10]===-1)ot.projectionMatrix.copy(Mt.projectionMatrix),ot.projectionMatrixInverse.copy(Mt.projectionMatrixInverse);else{let Lt=$t+wt,A=fe+wt,v=dt-Kt,X=Rt+(St-Kt),it=ct*fe/A*Lt,ht=ft*fe/A*Lt;ot.projectionMatrix.makePerspective(v,X,it,ht,Lt,A),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert()}}function Et(ot,Mt){Mt===null?ot.matrixWorld.copy(ot.matrix):ot.matrixWorld.multiplyMatrices(Mt.matrixWorld,ot.matrix),ot.matrixWorldInverse.copy(ot.matrixWorld).invert()}this.updateCamera=function(ot){if(s===null)return;let Mt=ot.near,Gt=ot.far;x.texture!==null&&(x.depthNear>0&&(Mt=x.depthNear),x.depthFar>0&&(Gt=x.depthFar)),S.near=L.near=b.near=Mt,S.far=L.far=b.far=Gt,(U!==S.near||K!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),U=S.near,K=S.far),b.layers.mask=ot.layers.mask|2,L.layers.mask=ot.layers.mask|4,S.layers.mask=b.layers.mask|L.layers.mask;let St=ot.parent,Vt=S.cameras;Et(S,St);for(let jt=0;jt<Vt.length;jt++)Et(Vt[jt],St);Vt.length===2?nt(S,b,L):S.projectionMatrix.copy(b.projectionMatrix),Pt(ot,S,St)};function Pt(ot,Mt,Gt){Gt===null?ot.matrix.copy(Mt.matrixWorld):(ot.matrix.copy(Gt.matrixWorld),ot.matrix.invert(),ot.matrix.multiply(Mt.matrixWorld)),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.updateMatrixWorld(!0),ot.projectionMatrix.copy(Mt.projectionMatrix),ot.projectionMatrixInverse.copy(Mt.projectionMatrixInverse),ot.isPerspectiveCamera&&(ot.fov=hl*2*Math.atan(1/ot.projectionMatrix.elements[5]),ot.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(ot){l=ot,u!==null&&(u.fixedFoveation=ot),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ot)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let Bt=null;function te(ot,Mt){if(h=Mt.getViewerPose(c||o),m=Mt,h!==null){let Gt=h.views;p!==null&&(t.setRenderTargetFramebuffer(E,p.framebuffer),t.setRenderTarget(E));let St=!1;Gt.length!==S.cameras.length&&(S.cameras.length=0,St=!0);for(let jt=0;jt<Gt.length;jt++){let $t=Gt[jt],fe=null;if(p!==null)fe=p.getViewport($t);else{let ft=f.getViewSubImage(u,$t);fe=ft.viewport,jt===0&&(t.setRenderTargetTextures(E,ft.colorTexture,u.ignoreDepthValues?void 0:ft.depthStencilTexture),t.setRenderTarget(E))}let ct=w[jt];ct===void 0&&(ct=new Fn,ct.layers.enable(jt),ct.viewport=new Je,w[jt]=ct),ct.matrix.fromArray($t.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray($t.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(fe.x,fe.y,fe.width,fe.height),jt===0&&(S.matrix.copy(ct.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),St===!0&&S.cameras.push(ct)}let Vt=s.enabledFeatures;if(Vt&&Vt.includes("depth-sensing")){let jt=f.getDepthInformation(Gt[0]);jt&&jt.isValid&&jt.texture&&x.init(t,jt,s.renderState)}}for(let Gt=0;Gt<M.length;Gt++){let St=_[Gt],Vt=M[Gt];St!==null&&Vt!==void 0&&Vt.update(St,Mt,c||o)}Bt&&Bt(ot,Mt),Mt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Mt}),m=null}let we=new eu;we.setAnimationLoop(te),this.setAnimationLoop=function(ot){Bt=ot},this.dispose=function(){}}},Gi=new si,kg=new Ve;ao=class{constructor(t={}){let{canvas:e=Yf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let m=new Uint32Array(4),x=new Int32Array(4),g=null,d=null,E=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=xn,this.toneMapping=Ai,this.toneMappingExposure=1;let _=this,F=!1,C=0,b=0,L=null,w=-1,S=null,U=new Je,K=new Je,Z=null,j=new se(0),st=0,$=e.width,ut=e.height,nt=1,Et=null,Pt=null,Bt=new Je(0,0,$,ut),te=new Je(0,0,$,ut),we=!1,ot=new ir,Mt=!1,Gt=!1,St=new Ve,Vt=new Ve,jt=new O,$t=new Je,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ct=!1;function ft(){return L===null?nt:1}let P=n;function kt(y,B){return e.getContext(y,B)}try{let y={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Jl}`),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",pt,!1),e.addEventListener("webglcontextcreationerror",z,!1),P===null){let B="webgl2";if(P=kt(B,y),P===null)throw kt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let dt,Rt,wt,Kt,Lt,A,v,X,it,ht,rt,Dt,Tt,xt,de,mt,Ot,Qt,T,N,Y,Q,vt,I;function tt(){dt=new s0(P),dt.init(),Q=new Fg(P,dt),Rt=new Qm(P,dt,t,Q),wt=new Dg(P,dt),Rt.reverseDepthBuffer&&u&&wt.buffers.depth.setReversed(!0),Kt=new a0(P),Lt=new yg,A=new Ng(P,dt,wt,Lt,Rt,Q,Kt),v=new t0(_),X=new i0(_),it=new pd(P),vt=new Jm(P,it),ht=new r0(P,it,Kt,vt),rt=new c0(P,ht,it,Kt),T=new l0(P,Rt,A),mt=new jm(Lt),Dt=new vg(_,v,X,dt,Rt,vt,mt),Tt=new Hg(_,Lt),xt=new Sg,de=new Rg(dt),Qt=new $m(_,v,X,wt,rt,p,l),Ot=new Pg(_,rt,Rt),I=new Vg(P,Kt,Rt,wt),N=new Km(P,dt,Kt),Y=new o0(P,dt,Kt),Kt.programs=Dt.programs,_.capabilities=Rt,_.extensions=dt,_.properties=Lt,_.renderLists=xt,_.shadowMap=Ot,_.state=wt,_.info=Kt}tt();let V=new Al(_,P);this.xr=V,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let y=dt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=dt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(y){y!==void 0&&(nt=y,this.setSize($,ut,!1))},this.getSize=function(y){return y.set($,ut)},this.setSize=function(y,B,W=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=y,ut=B,e.width=Math.floor(y*nt),e.height=Math.floor(B*nt),W===!0&&(e.style.width=y+"px",e.style.height=B+"px"),this.setViewport(0,0,y,B)},this.getDrawingBufferSize=function(y){return y.set($*nt,ut*nt).floor()},this.setDrawingBufferSize=function(y,B,W){$=y,ut=B,nt=W,e.width=Math.floor(y*W),e.height=Math.floor(B*W),this.setViewport(0,0,y,B)},this.getCurrentViewport=function(y){return y.copy(U)},this.getViewport=function(y){return y.copy(Bt)},this.setViewport=function(y,B,W,q){y.isVector4?Bt.set(y.x,y.y,y.z,y.w):Bt.set(y,B,W,q),wt.viewport(U.copy(Bt).multiplyScalar(nt).round())},this.getScissor=function(y){return y.copy(te)},this.setScissor=function(y,B,W,q){y.isVector4?te.set(y.x,y.y,y.z,y.w):te.set(y,B,W,q),wt.scissor(K.copy(te).multiplyScalar(nt).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(y){wt.setScissorTest(we=y)},this.setOpaqueSort=function(y){Et=y},this.setTransparentSort=function(y){Pt=y},this.getClearColor=function(y){return y.copy(Qt.getClearColor())},this.setClearColor=function(){Qt.setClearColor.apply(Qt,arguments)},this.getClearAlpha=function(){return Qt.getClearAlpha()},this.setClearAlpha=function(){Qt.setClearAlpha.apply(Qt,arguments)},this.clear=function(y=!0,B=!0,W=!0){let q=0;if(y){let k=!1;if(L!==null){let gt=L.texture.format;k=gt===cc||gt===lc||gt===ac}if(k){let gt=L.texture.type,At=gt===gi||gt===Ji||gt===nr||gt===Is||gt===sc||gt===rc,It=Qt.getClearColor(),Ut=Qt.getClearAlpha(),ae=It.r,pe=It.g,Xt=It.b;At?(m[0]=ae,m[1]=pe,m[2]=Xt,m[3]=Ut,P.clearBufferuiv(P.COLOR,0,m)):(x[0]=ae,x[1]=pe,x[2]=Xt,x[3]=Ut,P.clearBufferiv(P.COLOR,0,x))}else q|=P.COLOR_BUFFER_BIT}B&&(q|=P.DEPTH_BUFFER_BIT),W&&(q|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",pt,!1),e.removeEventListener("webglcontextcreationerror",z,!1),xt.dispose(),de.dispose(),Lt.dispose(),v.dispose(),X.dispose(),rt.dispose(),vt.dispose(),I.dispose(),Dt.dispose(),V.dispose(),V.removeEventListener("sessionstart",H),V.removeEventListener("sessionend",yt),at.stop()};function et(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function pt(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;let y=Kt.autoReset,B=Ot.enabled,W=Ot.autoUpdate,q=Ot.needsUpdate,k=Ot.type;tt(),Kt.autoReset=y,Ot.enabled=B,Ot.autoUpdate=W,Ot.needsUpdate=q,Ot.type=k}function z(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Nt(y){let B=y.target;B.removeEventListener("dispose",Nt),ee(B)}function ee(y){R(y),Lt.remove(y)}function R(y){let B=Lt.get(y).programs;B!==void 0&&(B.forEach(function(W){Dt.releaseProgram(W)}),y.isShaderMaterial&&Dt.releaseShaderCache(y))}this.renderBufferDirect=function(y,B,W,q,k,gt){B===null&&(B=fe);let At=k.isMesh&&k.matrixWorld.determinant()<0,It=ge(y,B,W,q,k);wt.setMaterial(q,At);let Ut=W.index,ae=1;if(q.wireframe===!0){if(Ut=ht.getWireframeAttribute(W),Ut===void 0)return;ae=2}let pe=W.drawRange,Xt=W.attributes.position,Te=pe.start*ae,Ue=(pe.start+pe.count)*ae;gt!==null&&(Te=Math.max(Te,gt.start*ae),Ue=Math.min(Ue,(gt.start+gt.count)*ae)),Ut!==null?(Te=Math.max(Te,0),Ue=Math.min(Ue,Ut.count)):Xt!=null&&(Te=Math.max(Te,0),Ue=Math.min(Ue,Xt.count));let ze=Ue-Te;if(ze<0||ze===1/0)return;vt.setup(k,q,It,W,Ut);let Ae,Ie=N;if(Ut!==null&&(Ae=it.get(Ut),Ie=Y,Ie.setIndex(Ae)),k.isMesh)q.wireframe===!0?(wt.setLineWidth(q.wireframeLinewidth*ft()),Ie.setMode(P.LINES)):Ie.setMode(P.TRIANGLES);else if(k.isLine){let lt=q.linewidth;lt===void 0&&(lt=1),wt.setLineWidth(lt*ft()),k.isLineSegments?Ie.setMode(P.LINES):k.isLineLoop?Ie.setMode(P.LINE_LOOP):Ie.setMode(P.LINE_STRIP)}else k.isPoints?Ie.setMode(P.POINTS):k.isSprite&&Ie.setMode(P.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Ie.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(dt.get("WEBGL_multi_draw"))Ie.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let lt=k._multiDrawStarts,ye=k._multiDrawCounts,Yt=k._multiDrawCount,ke=Ut?it.get(Ut).bytesPerElement:1,qe=Lt.get(q).currentProgram.getUniforms();for(let Ne=0;Ne<Yt;Ne++)qe.setValue(P,"_gl_DrawID",Ne),Ie.render(lt[Ne]/ke,ye[Ne])}else if(k.isInstancedMesh)Ie.renderInstances(Te,ze,k.count);else if(W.isInstancedBufferGeometry){let lt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,ye=Math.min(W.instanceCount,lt);Ie.renderInstances(Te,ze,ye)}else Ie.render(Te,ze)};function D(y,B,W){y.transparent===!0&&y.side===Sn&&y.forceSinglePass===!1?(y.side=Rn,y.needsUpdate=!0,qt(y,B,W),y.side=Ci,y.needsUpdate=!0,qt(y,B,W),y.side=Sn):qt(y,B,W)}this.compile=function(y,B,W=null){W===null&&(W=y),d=de.get(W),d.init(B),M.push(d),W.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(d.pushLight(k),k.castShadow&&d.pushShadow(k))}),y!==W&&y.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(d.pushLight(k),k.castShadow&&d.pushShadow(k))}),d.setupLights();let q=new Set;return y.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let gt=k.material;if(gt)if(Array.isArray(gt))for(let At=0;At<gt.length;At++){let It=gt[At];D(It,W,k),q.add(It)}else D(gt,W,k),q.add(gt)}),M.pop(),d=null,q},this.compileAsync=function(y,B,W=null){let q=this.compile(y,B,W);return new Promise(k=>{function gt(){if(q.forEach(function(At){Lt.get(At).currentProgram.isReady()&&q.delete(At)}),q.size===0){k(y);return}setTimeout(gt,10)}dt.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let J=null;function G(y){J&&J(y)}function H(){at.stop()}function yt(){at.start()}let at=new eu;at.setAnimationLoop(G),typeof self<"u"&&at.setContext(self),this.setAnimationLoop=function(y){J=y,V.setAnimationLoop(y),y===null?at.stop():at.start()},V.addEventListener("sessionstart",H),V.addEventListener("sessionend",yt),this.render=function(y,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(B),B=V.getCamera()),y.isScene===!0&&y.onBeforeRender(_,y,B,L),d=de.get(y,M.length),d.init(B),M.push(d),Vt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),ot.setFromProjectionMatrix(Vt),Gt=this.localClippingEnabled,Mt=mt.init(this.clippingPlanes,Gt),g=xt.get(y,E.length),g.init(),E.push(g),V.enabled===!0&&V.isPresenting===!0){let gt=_.xr.getDepthSensingMesh();gt!==null&&bt(gt,B,-1/0,_.sortObjects)}bt(y,B,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(Et,Pt),ct=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,ct&&Qt.addToRenderList(g,y),this.info.render.frame++,Mt===!0&&mt.beginShadows();let W=d.state.shadowsArray;Ot.render(W,y,B),Mt===!0&&mt.endShadows(),this.info.autoReset===!0&&this.info.reset();let q=g.opaque,k=g.transmissive;if(d.setupLights(),B.isArrayCamera){let gt=B.cameras;if(k.length>0)for(let At=0,It=gt.length;At<It;At++){let Ut=gt[At];zt(q,k,y,Ut)}ct&&Qt.render(y);for(let At=0,It=gt.length;At<It;At++){let Ut=gt[At];oe(g,y,Ut,Ut.viewport)}}else k.length>0&&zt(q,k,y,B),ct&&Qt.render(y),oe(g,y,B);L!==null&&(A.updateMultisampleRenderTarget(L),A.updateRenderTargetMipmap(L)),y.isScene===!0&&y.onAfterRender(_,y,B),vt.resetDefaultState(),w=-1,S=null,M.pop(),M.length>0?(d=M[M.length-1],Mt===!0&&mt.setGlobalState(_.clippingPlanes,d.state.camera)):d=null,E.pop(),E.length>0?g=E[E.length-1]:g=null};function bt(y,B,W,q){if(y.visible===!1)return;if(y.layers.test(B.layers)){if(y.isGroup)W=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(B);else if(y.isLight)d.pushLight(y),y.castShadow&&d.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||ot.intersectsSprite(y)){q&&$t.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Vt);let At=rt.update(y),It=y.material;It.visible&&g.push(y,At,It,W,$t.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||ot.intersectsObject(y))){let At=rt.update(y),It=y.material;if(q&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),$t.copy(y.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),$t.copy(At.boundingSphere.center)),$t.applyMatrix4(y.matrixWorld).applyMatrix4(Vt)),Array.isArray(It)){let Ut=At.groups;for(let ae=0,pe=Ut.length;ae<pe;ae++){let Xt=Ut[ae],Te=It[Xt.materialIndex];Te&&Te.visible&&g.push(y,At,Te,W,$t.z,Xt)}}else It.visible&&g.push(y,At,It,W,$t.z,null)}}let gt=y.children;for(let At=0,It=gt.length;At<It;At++)bt(gt[At],B,W,q)}function oe(y,B,W,q){let k=y.opaque,gt=y.transmissive,At=y.transparent;d.setupLightsView(W),Mt===!0&&mt.setGlobalState(_.clippingPlanes,W),q&&wt.viewport(U.copy(q)),k.length>0&&Wt(k,B,W),gt.length>0&&Wt(gt,B,W),At.length>0&&Wt(At,B,W),wt.buffers.depth.setTest(!0),wt.buffers.depth.setMask(!0),wt.buffers.color.setMask(!0),wt.setPolygonOffset(!1)}function zt(y,B,W,q){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[q.id]===void 0&&(d.state.transmissionRenderTarget[q.id]=new bn(1,1,{generateMipmaps:!0,type:dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float")?Jn:gi,minFilter:$i,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Pe.workingColorSpace}));let gt=d.state.transmissionRenderTarget[q.id],At=q.viewport||U;gt.setSize(At.z,At.w);let It=_.getRenderTarget();_.setRenderTarget(gt),_.getClearColor(j),st=_.getClearAlpha(),st<1&&_.setClearColor(16777215,.5),_.clear(),ct&&Qt.render(W);let Ut=_.toneMapping;_.toneMapping=Ai;let ae=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),d.setupLightsView(q),Mt===!0&&mt.setGlobalState(_.clippingPlanes,q),Wt(y,W,q),A.updateMultisampleRenderTarget(gt),A.updateRenderTargetMipmap(gt),dt.has("WEBGL_multisampled_render_to_texture")===!1){let pe=!1;for(let Xt=0,Te=B.length;Xt<Te;Xt++){let Ue=B[Xt],ze=Ue.object,Ae=Ue.geometry,Ie=Ue.material,lt=Ue.group;if(Ie.side===Sn&&ze.layers.test(q.layers)){let ye=Ie.side;Ie.side=Rn,Ie.needsUpdate=!0,ne(ze,W,q,Ae,Ie,lt),Ie.side=ye,Ie.needsUpdate=!0,pe=!0}}pe===!0&&(A.updateMultisampleRenderTarget(gt),A.updateRenderTargetMipmap(gt))}_.setRenderTarget(It),_.setClearColor(j,st),ae!==void 0&&(q.viewport=ae),_.toneMapping=Ut}function Wt(y,B,W){let q=B.isScene===!0?B.overrideMaterial:null;for(let k=0,gt=y.length;k<gt;k++){let At=y[k],It=At.object,Ut=At.geometry,ae=q===null?At.material:q,pe=At.group;It.layers.test(W.layers)&&ne(It,B,W,Ut,ae,pe)}}function ne(y,B,W,q,k,gt){y.onBeforeRender(_,B,W,q,k,gt),y.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),k.onBeforeRender(_,B,W,q,y,gt),k.transparent===!0&&k.side===Sn&&k.forceSinglePass===!1?(k.side=Rn,k.needsUpdate=!0,_.renderBufferDirect(W,B,q,k,y,gt),k.side=Ci,k.needsUpdate=!0,_.renderBufferDirect(W,B,q,k,y,gt),k.side=Sn):_.renderBufferDirect(W,B,q,k,y,gt),y.onAfterRender(_,B,W,q,k,gt)}function qt(y,B,W){B.isScene!==!0&&(B=fe);let q=Lt.get(y),k=d.state.lights,gt=d.state.shadowsArray,At=k.state.version,It=Dt.getParameters(y,k.state,gt,B,W),Ut=Dt.getProgramCacheKey(It),ae=q.programs;q.environment=y.isMeshStandardMaterial?B.environment:null,q.fog=B.fog,q.envMap=(y.isMeshStandardMaterial?X:v).get(y.envMap||q.environment),q.envMapRotation=q.environment!==null&&y.envMap===null?B.environmentRotation:y.envMapRotation,ae===void 0&&(y.addEventListener("dispose",Nt),ae=new Map,q.programs=ae);let pe=ae.get(Ut);if(pe!==void 0){if(q.currentProgram===pe&&q.lightsStateVersion===At)return Zt(y,It),pe}else It.uniforms=Dt.getUniforms(y),y.onBeforeCompile(It,_),pe=Dt.acquireProgram(It,Ut),ae.set(Ut,pe),q.uniforms=It.uniforms;let Xt=q.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Xt.clippingPlanes=mt.uniform),Zt(y,It),q.needsLights=Be(y),q.lightsStateVersion=At,q.needsLights&&(Xt.ambientLightColor.value=k.state.ambient,Xt.lightProbe.value=k.state.probe,Xt.directionalLights.value=k.state.directional,Xt.directionalLightShadows.value=k.state.directionalShadow,Xt.spotLights.value=k.state.spot,Xt.spotLightShadows.value=k.state.spotShadow,Xt.rectAreaLights.value=k.state.rectArea,Xt.ltc_1.value=k.state.rectAreaLTC1,Xt.ltc_2.value=k.state.rectAreaLTC2,Xt.pointLights.value=k.state.point,Xt.pointLightShadows.value=k.state.pointShadow,Xt.hemisphereLights.value=k.state.hemi,Xt.directionalShadowMap.value=k.state.directionalShadowMap,Xt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Xt.spotShadowMap.value=k.state.spotShadowMap,Xt.spotLightMatrix.value=k.state.spotLightMatrix,Xt.spotLightMap.value=k.state.spotLightMap,Xt.pointShadowMap.value=k.state.pointShadowMap,Xt.pointShadowMatrix.value=k.state.pointShadowMatrix),q.currentProgram=pe,q.uniformsList=null,pe}function Jt(y){if(y.uniformsList===null){let B=y.currentProgram.getUniforms();y.uniformsList=ws.seqWithValue(B.seq,y.uniforms)}return y.uniformsList}function Zt(y,B){let W=Lt.get(y);W.outputColorSpace=B.outputColorSpace,W.batching=B.batching,W.batchingColor=B.batchingColor,W.instancing=B.instancing,W.instancingColor=B.instancingColor,W.instancingMorph=B.instancingMorph,W.skinning=B.skinning,W.morphTargets=B.morphTargets,W.morphNormals=B.morphNormals,W.morphColors=B.morphColors,W.morphTargetsCount=B.morphTargetsCount,W.numClippingPlanes=B.numClippingPlanes,W.numIntersection=B.numClipIntersection,W.vertexAlphas=B.vertexAlphas,W.vertexTangents=B.vertexTangents,W.toneMapping=B.toneMapping}function ge(y,B,W,q,k){B.isScene!==!0&&(B=fe),A.resetTextureUnits();let gt=B.fog,At=q.isMeshStandardMaterial?B.environment:null,It=L===null?_.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Ns,Ut=(q.isMeshStandardMaterial?X:v).get(q.envMap||At),ae=q.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pe=!!W.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Xt=!!W.morphAttributes.position,Te=!!W.morphAttributes.normal,Ue=!!W.morphAttributes.color,ze=Ai;q.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(ze=_.toneMapping);let Ae=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Ie=Ae!==void 0?Ae.length:0,lt=Lt.get(q),ye=d.state.lights;if(Mt===!0&&(Gt===!0||y!==S)){let Re=y===S&&q.id===w;mt.setState(q,y,Re)}let Yt=!1;q.version===lt.__version?(lt.needsLights&&lt.lightsStateVersion!==ye.state.version||lt.outputColorSpace!==It||k.isBatchedMesh&&lt.batching===!1||!k.isBatchedMesh&&lt.batching===!0||k.isBatchedMesh&&lt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&lt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&lt.instancing===!1||!k.isInstancedMesh&&lt.instancing===!0||k.isSkinnedMesh&&lt.skinning===!1||!k.isSkinnedMesh&&lt.skinning===!0||k.isInstancedMesh&&lt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&lt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&lt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&lt.instancingMorph===!1&&k.morphTexture!==null||lt.envMap!==Ut||q.fog===!0&&lt.fog!==gt||lt.numClippingPlanes!==void 0&&(lt.numClippingPlanes!==mt.numPlanes||lt.numIntersection!==mt.numIntersection)||lt.vertexAlphas!==ae||lt.vertexTangents!==pe||lt.morphTargets!==Xt||lt.morphNormals!==Te||lt.morphColors!==Ue||lt.toneMapping!==ze||lt.morphTargetsCount!==Ie)&&(Yt=!0):(Yt=!0,lt.__version=q.version);let ke=lt.currentProgram;Yt===!0&&(ke=qt(q,B,k));let qe=!1,Ne=!1,me=!1,Ht=ke.getUniforms(),Fe=lt.uniforms;if(wt.useProgram(ke.program)&&(qe=!0,Ne=!0,me=!0),q.id!==w&&(w=q.id,Ne=!0),qe||S!==y){wt.buffers.depth.getReversed()?(St.copy(y.projectionMatrix),$f(St),Jf(St),Ht.setValue(P,"projectionMatrix",St)):Ht.setValue(P,"projectionMatrix",y.projectionMatrix),Ht.setValue(P,"viewMatrix",y.matrixWorldInverse);let vn=Ht.map.cameraPosition;vn!==void 0&&vn.setValue(P,jt.setFromMatrixPosition(y.matrixWorld)),Rt.logarithmicDepthBuffer&&Ht.setValue(P,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Ht.setValue(P,"isOrthographic",y.isOrthographicCamera===!0),S!==y&&(S=y,Ne=!0,me=!0)}if(k.isSkinnedMesh){Ht.setOptional(P,k,"bindMatrix"),Ht.setOptional(P,k,"bindMatrixInverse");let Re=k.skeleton;Re&&(Re.boneTexture===null&&Re.computeBoneTexture(),Ht.setValue(P,"boneTexture",Re.boneTexture,A))}k.isBatchedMesh&&(Ht.setOptional(P,k,"batchingTexture"),Ht.setValue(P,"batchingTexture",k._matricesTexture,A),Ht.setOptional(P,k,"batchingIdTexture"),Ht.setValue(P,"batchingIdTexture",k._indirectTexture,A),Ht.setOptional(P,k,"batchingColorTexture"),k._colorsTexture!==null&&Ht.setValue(P,"batchingColorTexture",k._colorsTexture,A));let en=W.morphAttributes;if((en.position!==void 0||en.normal!==void 0||en.color!==void 0)&&T.update(k,W,ke),(Ne||lt.receiveShadow!==k.receiveShadow)&&(lt.receiveShadow=k.receiveShadow,Ht.setValue(P,"receiveShadow",k.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Fe.envMap.value=Ut,Fe.flipEnvMap.value=Ut.isCubeTexture&&Ut.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&B.environment!==null&&(Fe.envMapIntensity.value=B.environmentIntensity),Ne&&(Ht.setValue(P,"toneMappingExposure",_.toneMappingExposure),lt.needsLights&&We(Fe,me),gt&&q.fog===!0&&Tt.refreshFogUniforms(Fe,gt),Tt.refreshMaterialUniforms(Fe,q,nt,ut,d.state.transmissionRenderTarget[y.id]),ws.upload(P,Jt(lt),Fe,A)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(ws.upload(P,Jt(lt),Fe,A),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Ht.setValue(P,"center",k.center),Ht.setValue(P,"modelViewMatrix",k.modelViewMatrix),Ht.setValue(P,"normalMatrix",k.normalMatrix),Ht.setValue(P,"modelMatrix",k.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){let Re=q.uniformsGroups;for(let vn=0,Se=Re.length;vn<Se;vn++){let he=Re[vn];I.update(he,ke),I.bind(he,ke)}}return ke}function We(y,B){y.ambientLightColor.needsUpdate=B,y.lightProbe.needsUpdate=B,y.directionalLights.needsUpdate=B,y.directionalLightShadows.needsUpdate=B,y.pointLights.needsUpdate=B,y.pointLightShadows.needsUpdate=B,y.spotLights.needsUpdate=B,y.spotLightShadows.needsUpdate=B,y.rectAreaLights.needsUpdate=B,y.hemisphereLights.needsUpdate=B}function Be(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(y,B,W){Lt.get(y.texture).__webglTexture=B,Lt.get(y.depthTexture).__webglTexture=W;let q=Lt.get(y);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=W===void 0,q.__autoAllocateDepthBuffer||dt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,B){let W=Lt.get(y);W.__webglFramebuffer=B,W.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(y,B=0,W=0){L=y,C=B,b=W;let q=!0,k=null,gt=!1,At=!1;if(y){let Ut=Lt.get(y);if(Ut.__useDefaultFramebuffer!==void 0)wt.bindFramebuffer(P.FRAMEBUFFER,null),q=!1;else if(Ut.__webglFramebuffer===void 0)A.setupRenderTarget(y);else if(Ut.__hasExternalTextures)A.rebindTextures(y,Lt.get(y.texture).__webglTexture,Lt.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let Xt=y.depthTexture;if(Ut.__boundDepthTexture!==Xt){if(Xt!==null&&Lt.has(Xt)&&(y.width!==Xt.image.width||y.height!==Xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(y)}}let ae=y.texture;(ae.isData3DTexture||ae.isDataArrayTexture||ae.isCompressedArrayTexture)&&(At=!0);let pe=Lt.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(pe[B])?k=pe[B][W]:k=pe[B],gt=!0):y.samples>0&&A.useMultisampledRTT(y)===!1?k=Lt.get(y).__webglMultisampledFramebuffer:Array.isArray(pe)?k=pe[W]:k=pe,U.copy(y.viewport),K.copy(y.scissor),Z=y.scissorTest}else U.copy(Bt).multiplyScalar(nt).floor(),K.copy(te).multiplyScalar(nt).floor(),Z=we;if(wt.bindFramebuffer(P.FRAMEBUFFER,k)&&q&&wt.drawBuffers(y,k),wt.viewport(U),wt.scissor(K),wt.setScissorTest(Z),gt){let Ut=Lt.get(y.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ut.__webglTexture,W)}else if(At){let Ut=Lt.get(y.texture),ae=B||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ut.__webglTexture,W||0,ae)}w=-1},this.readRenderTargetPixels=function(y,B,W,q,k,gt,At){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=Lt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&At!==void 0&&(It=It[At]),It){wt.bindFramebuffer(P.FRAMEBUFFER,It);try{let Ut=y.texture,ae=Ut.format,pe=Ut.type;if(!Rt.textureFormatReadable(ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Rt.textureTypeReadable(pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=y.width-q&&W>=0&&W<=y.height-k&&P.readPixels(B,W,q,k,Q.convert(ae),Q.convert(pe),gt)}finally{let Ut=L!==null?Lt.get(L).__webglFramebuffer:null;wt.bindFramebuffer(P.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(y,B,W,q,k,gt,At){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=Lt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&At!==void 0&&(It=It[At]),It){let Ut=y.texture,ae=Ut.format,pe=Ut.type;if(!Rt.textureFormatReadable(ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Rt.textureTypeReadable(pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=y.width-q&&W>=0&&W<=y.height-k){wt.bindFramebuffer(P.FRAMEBUFFER,It);let Xt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Xt),P.bufferData(P.PIXEL_PACK_BUFFER,gt.byteLength,P.STREAM_READ),P.readPixels(B,W,q,k,Q.convert(ae),Q.convert(pe),0);let Te=L!==null?Lt.get(L).__webglFramebuffer:null;wt.bindFramebuffer(P.FRAMEBUFFER,Te);let Ue=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Zf(P,Ue,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Xt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,gt),P.deleteBuffer(Xt),P.deleteSync(Ue),gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,B=null,W=0){y.isTexture!==!0&&(Js("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,y=arguments[1]);let q=Math.pow(2,-W),k=Math.floor(y.image.width*q),gt=Math.floor(y.image.height*q),At=B!==null?B.x:0,It=B!==null?B.y:0;A.setTexture2D(y,0),P.copyTexSubImage2D(P.TEXTURE_2D,W,0,0,At,It,k,gt),wt.unbindTexture()},this.copyTextureToTexture=function(y,B,W=null,q=null,k=0){y.isTexture!==!0&&(Js("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,y=arguments[1],B=arguments[2],k=arguments[3]||0,W=null);let gt,At,It,Ut,ae,pe,Xt,Te,Ue,ze=y.isCompressedTexture?y.mipmaps[k]:y.image;W!==null?(gt=W.max.x-W.min.x,At=W.max.y-W.min.y,It=W.isBox3?W.max.z-W.min.z:1,Ut=W.min.x,ae=W.min.y,pe=W.isBox3?W.min.z:0):(gt=ze.width,At=ze.height,It=ze.depth||1,Ut=0,ae=0,pe=0),q!==null?(Xt=q.x,Te=q.y,Ue=q.z):(Xt=0,Te=0,Ue=0);let Ae=Q.convert(B.format),Ie=Q.convert(B.type),lt;B.isData3DTexture?(A.setTexture3D(B,0),lt=P.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(A.setTexture2DArray(B,0),lt=P.TEXTURE_2D_ARRAY):(A.setTexture2D(B,0),lt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,B.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,B.unpackAlignment);let ye=P.getParameter(P.UNPACK_ROW_LENGTH),Yt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),ke=P.getParameter(P.UNPACK_SKIP_PIXELS),qe=P.getParameter(P.UNPACK_SKIP_ROWS),Ne=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,ze.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ze.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ut),P.pixelStorei(P.UNPACK_SKIP_ROWS,ae),P.pixelStorei(P.UNPACK_SKIP_IMAGES,pe);let me=y.isDataArrayTexture||y.isData3DTexture,Ht=B.isDataArrayTexture||B.isData3DTexture;if(y.isRenderTargetTexture||y.isDepthTexture){let Fe=Lt.get(y),en=Lt.get(B),Re=Lt.get(Fe.__renderTarget),vn=Lt.get(en.__renderTarget);wt.bindFramebuffer(P.READ_FRAMEBUFFER,Re.__webglFramebuffer),wt.bindFramebuffer(P.DRAW_FRAMEBUFFER,vn.__webglFramebuffer);for(let Se=0;Se<It;Se++)me&&P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Lt.get(y).__webglTexture,k,pe+Se),y.isDepthTexture?(Ht&&P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Lt.get(B).__webglTexture,k,Ue+Se),P.blitFramebuffer(Ut,ae,gt,At,Xt,Te,gt,At,P.DEPTH_BUFFER_BIT,P.NEAREST)):Ht?P.copyTexSubImage3D(lt,k,Xt,Te,Ue+Se,Ut,ae,gt,At):P.copyTexSubImage2D(lt,k,Xt,Te,Ue+Se,Ut,ae,gt,At);wt.bindFramebuffer(P.READ_FRAMEBUFFER,null),wt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Ht?y.isDataTexture||y.isData3DTexture?P.texSubImage3D(lt,k,Xt,Te,Ue,gt,At,It,Ae,Ie,ze.data):B.isCompressedArrayTexture?P.compressedTexSubImage3D(lt,k,Xt,Te,Ue,gt,At,It,Ae,ze.data):P.texSubImage3D(lt,k,Xt,Te,Ue,gt,At,It,Ae,Ie,ze):y.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,k,Xt,Te,gt,At,Ae,Ie,ze.data):y.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,k,Xt,Te,ze.width,ze.height,Ae,ze.data):P.texSubImage2D(P.TEXTURE_2D,k,Xt,Te,gt,At,Ae,Ie,ze);P.pixelStorei(P.UNPACK_ROW_LENGTH,ye),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Yt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ke),P.pixelStorei(P.UNPACK_SKIP_ROWS,qe),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ne),k===0&&B.generateMipmaps&&P.generateMipmap(lt),wt.unbindTexture()},this.copyTextureToTexture3D=function(y,B,W=null,q=null,k=0){return y.isTexture!==!0&&(Js("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,q=arguments[1]||null,y=arguments[2],B=arguments[3],k=arguments[4]||0),Js('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,B,W,q,k)},this.initRenderTarget=function(y){Lt.get(y).__webglFramebuffer===void 0&&A.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?A.setTextureCube(y,0):y.isData3DTexture?A.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?A.setTexture2DArray(y,0):A.setTexture2D(y,0),wt.unbindTexture()},this.resetState=function(){C=0,b=0,L=null,wt.reset(),vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Pe._getDrawingBufferColorSpace(t),e.unpackColorSpace=Pe._getUnpackColorSpace()}},lo=class extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new si,this.environmentIntensity=1,this.environmentRotation=new si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Rl=class extends Cn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=On,h=On,f,u){super(null,o,a,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},sr=class extends nn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},vs=new Ve,Ch=new Ve,zr=[],Ih=new xi,Gg=new Ve,Zs=new re,$s=new Ki,Vn=class extends re{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new sr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Gg)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new xi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,vs),Ih.copy(t.boundingBox).applyMatrix4(vs),this.boundingBox.union(Ih)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ki),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,vs),$s.copy(t.boundingSphere).applyMatrix4(vs),this.boundingSphere.union($s)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Zs.geometry=this.geometry,Zs.material=this.material,Zs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$s.copy(this.boundingSphere),$s.applyMatrix4(n),t.ray.intersectsSphere($s)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,vs),Ch.multiplyMatrices(n,vs),Zs.matrixWorld=Ch,Zs.raycast(t,zr);for(let o=0,a=zr.length;o<a;o++){let l=zr[o];l.instanceId=r,l.object=this,e.push(l)}zr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new sr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Rl(new Float32Array(s*this.count),s,this.count,oc,ei));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}},co=class extends Cn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Gn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],u=n[s+1]-h,p=(o-h)/u;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new _t:new O);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new O,s=[],r=[],o=[],a=new O,l=new Ve;for(let p=0;p<=t;p++){let m=p/t;s[p]=this.getTangentAt(m,new O)}r[0]=new O,o[0]=new O;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(dn(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,m))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(dn(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],p*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},rr=class extends Gn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new _t){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,p=c-this.aY;l=u*h-p*f+this.aX,c=u*f+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Cl=class extends rr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};kr=new O,Sa=new uc,ba=new uc,Ea=new uc,Il=class extends Gn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new O){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(kr.subVectors(s[0],s[1]).add(s[0]),c=kr);let f=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(kr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=kr),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(f),p),x=Math.pow(f.distanceToSquared(u),p),g=Math.pow(u.distanceToSquared(h),p);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),Sa.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,m,x,g),ba.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,m,x,g),Ea.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,m,x,g)}else this.curveType==="catmullrom"&&(Sa.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),ba.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),Ea.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(Sa.calc(l),ba.calc(l),Ea.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new O().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};ho=class extends Gn{constructor(t=new _t,e=new _t,n=new _t,s=new _t){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new _t){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(tr(t,s.x,r.x,o.x,a.x),tr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Pl=class extends Gn{constructor(t=new O,e=new O,n=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new O){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(tr(t,s.x,r.x,o.x,a.x),tr(t,s.y,r.y,o.y,a.y),tr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},uo=class extends Gn{constructor(t=new _t,e=new _t){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new _t){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new _t){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ll=class extends Gn{constructor(t=new O,e=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new O){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new O){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},fo=class extends Gn{constructor(t=new _t,e=new _t,n=new _t){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new _t){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(js(t,s.x,r.x,o.x),js(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Dl=class extends Gn{constructor(t=new O,e=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new O){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(js(t,s.x,r.x,o.x),js(t,s.y,r.y,o.y),js(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},po=class extends Gn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new _t){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(Ph(a,l.x,c.x,h.x,f.x),Ph(a,l.y,c.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new _t().fromArray(s))}return this}},Ul=Object.freeze({__proto__:null,ArcCurve:Cl,CatmullRomCurve3:Il,CubicBezierCurve:ho,CubicBezierCurve3:Pl,EllipseCurve:rr,LineCurve:uo,LineCurve3:Ll,QuadraticBezierCurve:fo,QuadraticBezierCurve3:Dl,SplineCurve:po}),Nl=class extends Gn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ul[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Ul[s.type]().fromJSON(s))}return this}},or=class extends Nl{constructor(t){super(),this.type="Path",this.currentPoint=new _t,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new uo(this.currentPoint.clone(),new _t(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new fo(this.currentPoint.clone(),new _t(t,e),new _t(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new ho(this.currentPoint.clone(),new _t(t,e),new _t(n,s),new _t(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new po(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new rr(t,e,n,s,r,o,a,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ar=class i extends rn{constructor(t=[new _t(0,-.5),new _t(.5,0),new _t(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=dn(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,f=new O,u=new _t,p=new O,m=new O,x=new O,g=0,d=0;for(let E=0;E<=t.length-1;E++)switch(E){case 0:g=t[E+1].x-t[E].x,d=t[E+1].y-t[E].y,p.x=d*1,p.y=-g,p.z=d*0,x.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:g=t[E+1].x-t[E].x,d=t[E+1].y-t[E].y,p.x=d*1,p.y=-g,p.z=d*0,m.copy(p),p.x+=x.x,p.y+=x.y,p.z+=x.z,p.normalize(),l.push(p.x,p.y,p.z),x.copy(m)}for(let E=0;E<=e;E++){let M=n+E*h*s,_=Math.sin(M),F=Math.cos(M);for(let C=0;C<=t.length-1;C++){f.x=t[C].x*_,f.y=t[C].y,f.z=t[C].x*F,o.push(f.x,f.y,f.z),u.x=E/e,u.y=C/(t.length-1),a.push(u.x,u.y);let b=l[3*C+0]*_,L=l[3*C+1],w=l[3*C+0]*F;c.push(b,L,w)}}for(let E=0;E<e;E++)for(let M=0;M<t.length-1;M++){let _=M+E*t.length,F=_,C=_+t.length,b=_+t.length+1,L=_+1;r.push(F,C,L),r.push(b,L,C)}this.setIndex(r),this.setAttribute("position",new Me(o,3)),this.setAttribute("uv",new Me(a,2)),this.setAttribute("normal",new Me(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},mo=class i extends ar{constructor(t=1,e=1,n=4,s=8){let r=new or;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}},go=class i extends rn{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new O,h=new _t;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=e;f++,u+=3){let p=n+f/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,l.push(h.x,h.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Me(o,3)),this.setAttribute("normal",new Me(a,3)),this.setAttribute("uv",new Me(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},cn=class i extends rn{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],p=[],m=0,x=[],g=n/2,d=0;E(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Me(f,3)),this.setAttribute("normal",new Me(u,3)),this.setAttribute("uv",new Me(p,2));function E(){let _=new O,F=new O,C=0,b=(e-t)/n;for(let L=0;L<=r;L++){let w=[],S=L/r,U=S*(e-t)+t;for(let K=0;K<=s;K++){let Z=K/s,j=Z*l+a,st=Math.sin(j),$=Math.cos(j);F.x=U*st,F.y=-S*n+g,F.z=U*$,f.push(F.x,F.y,F.z),_.set(st,b,$).normalize(),u.push(_.x,_.y,_.z),p.push(Z,1-S),w.push(m++)}x.push(w)}for(let L=0;L<s;L++)for(let w=0;w<r;w++){let S=x[w][L],U=x[w+1][L],K=x[w+1][L+1],Z=x[w][L+1];(t>0||w!==0)&&(h.push(S,U,Z),C+=3),(e>0||w!==r-1)&&(h.push(U,K,Z),C+=3)}c.addGroup(d,C,0),d+=C}function M(_){let F=m,C=new _t,b=new O,L=0,w=_===!0?t:e,S=_===!0?1:-1;for(let K=1;K<=s;K++)f.push(0,g*S,0),u.push(0,S,0),p.push(.5,.5),m++;let U=m;for(let K=0;K<=s;K++){let j=K/s*l+a,st=Math.cos(j),$=Math.sin(j);b.x=w*$,b.y=g*S,b.z=w*st,f.push(b.x,b.y,b.z),u.push(0,S,0),C.x=st*.5+.5,C.y=$*.5*S+.5,p.push(C.x,C.y),m++}for(let K=0;K<s;K++){let Z=F+K,j=U+K;_===!0?h.push(j,j+1,Z):h.push(j+1,j,Z),L+=3}c.addGroup(d,L,_===!0?1:2),d+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ji=class extends or{constructor(t){super(t),this.uuid=Fs(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new or().fromJSON(s))}return this}},Kg={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=ou(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,f,u,p;if(n&&(r=nx(i,t,r,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let m=e;m<s;m+=e)f=i[m],u=i[m+1],f<a&&(a=f),u<l&&(l=u),f>c&&(c=f),u>h&&(h=u);p=Math.max(c-a,h-l),p=p!==0?32767/p:0}return lr(r,o,e,a,l,p,0),o}};Ri=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Dh(t),Uh(n,t);let o=t.length;e.forEach(Dh);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Uh(n,e[l]);let a=Kg.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};Ds=class i extends rn{constructor(t=new ji([new _t(.5,.5),new _t(-.5,.5),new _t(-.5,-.5),new _t(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new Me(s,3)),this.setAttribute("uv",new Me(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:p-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,d=e.extrudePath,E=e.UVGenerator!==void 0?e.UVGenerator:px,M,_=!1,F,C,b,L;d&&(M=d.getSpacedPoints(h),_=!0,u=!1,F=d.computeFrenetFrames(h,!1),C=new O,b=new O,L=new O),u||(g=0,p=0,m=0,x=0);let w=a.extractPoints(c),S=w.shape,U=w.holes;if(!Ri.isClockWise(S)){S=S.reverse();for(let ct=0,ft=U.length;ct<ft;ct++){let P=U[ct];Ri.isClockWise(P)&&(U[ct]=P.reverse())}}let Z=Ri.triangulateShape(S,U),j=S;for(let ct=0,ft=U.length;ct<ft;ct++){let P=U[ct];S=S.concat(P)}function st(ct,ft,P){return ft||console.error("THREE.ExtrudeGeometry: vec does not exist"),ct.clone().addScaledVector(ft,P)}let $=S.length,ut=Z.length;function nt(ct,ft,P){let kt,dt,Rt,wt=ct.x-ft.x,Kt=ct.y-ft.y,Lt=P.x-ct.x,A=P.y-ct.y,v=wt*wt+Kt*Kt,X=wt*A-Kt*Lt;if(Math.abs(X)>Number.EPSILON){let it=Math.sqrt(v),ht=Math.sqrt(Lt*Lt+A*A),rt=ft.x-Kt/it,Dt=ft.y+wt/it,Tt=P.x-A/ht,xt=P.y+Lt/ht,de=((Tt-rt)*A-(xt-Dt)*Lt)/(wt*A-Kt*Lt);kt=rt+wt*de-ct.x,dt=Dt+Kt*de-ct.y;let mt=kt*kt+dt*dt;if(mt<=2)return new _t(kt,dt);Rt=Math.sqrt(mt/2)}else{let it=!1;wt>Number.EPSILON?Lt>Number.EPSILON&&(it=!0):wt<-Number.EPSILON?Lt<-Number.EPSILON&&(it=!0):Math.sign(Kt)===Math.sign(A)&&(it=!0),it?(kt=-Kt,dt=wt,Rt=Math.sqrt(v)):(kt=wt,dt=Kt,Rt=Math.sqrt(v/2))}return new _t(kt/Rt,dt/Rt)}let Et=[];for(let ct=0,ft=j.length,P=ft-1,kt=ct+1;ct<ft;ct++,P++,kt++)P===ft&&(P=0),kt===ft&&(kt=0),Et[ct]=nt(j[ct],j[P],j[kt]);let Pt=[],Bt,te=Et.concat();for(let ct=0,ft=U.length;ct<ft;ct++){let P=U[ct];Bt=[];for(let kt=0,dt=P.length,Rt=dt-1,wt=kt+1;kt<dt;kt++,Rt++,wt++)Rt===dt&&(Rt=0),wt===dt&&(wt=0),Bt[kt]=nt(P[kt],P[Rt],P[wt]);Pt.push(Bt),te=te.concat(Bt)}for(let ct=0;ct<g;ct++){let ft=ct/g,P=p*Math.cos(ft*Math.PI/2),kt=m*Math.sin(ft*Math.PI/2)+x;for(let dt=0,Rt=j.length;dt<Rt;dt++){let wt=st(j[dt],Et[dt],kt);St(wt.x,wt.y,-P)}for(let dt=0,Rt=U.length;dt<Rt;dt++){let wt=U[dt];Bt=Pt[dt];for(let Kt=0,Lt=wt.length;Kt<Lt;Kt++){let A=st(wt[Kt],Bt[Kt],kt);St(A.x,A.y,-P)}}}let we=m+x;for(let ct=0;ct<$;ct++){let ft=u?st(S[ct],te[ct],we):S[ct];_?(b.copy(F.normals[0]).multiplyScalar(ft.x),C.copy(F.binormals[0]).multiplyScalar(ft.y),L.copy(M[0]).add(b).add(C),St(L.x,L.y,L.z)):St(ft.x,ft.y,0)}for(let ct=1;ct<=h;ct++)for(let ft=0;ft<$;ft++){let P=u?st(S[ft],te[ft],we):S[ft];_?(b.copy(F.normals[ct]).multiplyScalar(P.x),C.copy(F.binormals[ct]).multiplyScalar(P.y),L.copy(M[ct]).add(b).add(C),St(L.x,L.y,L.z)):St(P.x,P.y,f/h*ct)}for(let ct=g-1;ct>=0;ct--){let ft=ct/g,P=p*Math.cos(ft*Math.PI/2),kt=m*Math.sin(ft*Math.PI/2)+x;for(let dt=0,Rt=j.length;dt<Rt;dt++){let wt=st(j[dt],Et[dt],kt);St(wt.x,wt.y,f+P)}for(let dt=0,Rt=U.length;dt<Rt;dt++){let wt=U[dt];Bt=Pt[dt];for(let Kt=0,Lt=wt.length;Kt<Lt;Kt++){let A=st(wt[Kt],Bt[Kt],kt);_?St(A.x,A.y+M[h-1].y,M[h-1].x+P):St(A.x,A.y,f+P)}}}ot(),Mt();function ot(){let ct=s.length/3;if(u){let ft=0,P=$*ft;for(let kt=0;kt<ut;kt++){let dt=Z[kt];Vt(dt[2]+P,dt[1]+P,dt[0]+P)}ft=h+g*2,P=$*ft;for(let kt=0;kt<ut;kt++){let dt=Z[kt];Vt(dt[0]+P,dt[1]+P,dt[2]+P)}}else{for(let ft=0;ft<ut;ft++){let P=Z[ft];Vt(P[2],P[1],P[0])}for(let ft=0;ft<ut;ft++){let P=Z[ft];Vt(P[0]+$*h,P[1]+$*h,P[2]+$*h)}}n.addGroup(ct,s.length/3-ct,0)}function Mt(){let ct=s.length/3,ft=0;Gt(j,ft),ft+=j.length;for(let P=0,kt=U.length;P<kt;P++){let dt=U[P];Gt(dt,ft),ft+=dt.length}n.addGroup(ct,s.length/3-ct,1)}function Gt(ct,ft){let P=ct.length;for(;--P>=0;){let kt=P,dt=P-1;dt<0&&(dt=ct.length-1);for(let Rt=0,wt=h+g*2;Rt<wt;Rt++){let Kt=$*Rt,Lt=$*(Rt+1),A=ft+kt+Kt,v=ft+dt+Kt,X=ft+dt+Lt,it=ft+kt+Lt;jt(A,v,X,it)}}}function St(ct,ft,P){l.push(ct),l.push(ft),l.push(P)}function Vt(ct,ft,P){$t(ct),$t(ft),$t(P);let kt=s.length/3,dt=E.generateTopUV(n,s,kt-3,kt-2,kt-1);fe(dt[0]),fe(dt[1]),fe(dt[2])}function jt(ct,ft,P,kt){$t(ct),$t(ft),$t(kt),$t(ft),$t(P),$t(kt);let dt=s.length/3,Rt=E.generateSideWallUV(n,s,dt-6,dt-3,dt-2,dt-1);fe(Rt[0]),fe(Rt[1]),fe(Rt[3]),fe(Rt[1]),fe(Rt[2]),fe(Rt[3])}function $t(ct){s.push(l[ct*3+0]),s.push(l[ct*3+1]),s.push(l[ct*3+2])}function fe(ct){r.push(ct.x),r.push(ct.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return mx(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ul[s.type]().fromJSON(s)),new i(n,t.options)}},px={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new _t(r,o),new _t(a,l),new _t(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],f=t[n*3+2],u=t[s*3],p=t[s*3+1],m=t[s*3+2],x=t[r*3],g=t[r*3+1],d=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new _t(o,1-l),new _t(c,1-f),new _t(u,1-m),new _t(x,1-d)]:[new _t(a,1-l),new _t(h,1-f),new _t(p,1-m),new _t(g,1-d)]}};xo=class i extends rn{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],f=t,u=(e-t)/s,p=new O,m=new _t;for(let x=0;x<=s;x++){for(let g=0;g<=n;g++){let d=r+g/n*o;p.x=f*Math.cos(d),p.y=f*Math.sin(d),l.push(p.x,p.y,p.z),c.push(0,0,1),m.x=(p.x/e+1)/2,m.y=(p.y/e+1)/2,h.push(m.x,m.y)}f+=u}for(let x=0;x<s;x++){let g=x*(n+1);for(let d=0;d<n;d++){let E=d+g,M=E,_=E+n+1,F=E+n+2,C=E+1;a.push(M,_,C),a.push(_,F,C)}}this.setIndex(a),this.setAttribute("position",new Me(l,3)),this.setAttribute("normal",new Me(c,3)),this.setAttribute("uv",new Me(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},_i=class i extends rn{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],f=new O,u=new O,p=[],m=[],x=[],g=[];for(let d=0;d<=n;d++){let E=[],M=d/n,_=0;d===0&&o===0?_=.5/e:d===n&&l===Math.PI&&(_=-.5/e);for(let F=0;F<=e;F++){let C=F/e;f.x=-t*Math.cos(s+C*r)*Math.sin(o+M*a),f.y=t*Math.cos(o+M*a),f.z=t*Math.sin(s+C*r)*Math.sin(o+M*a),m.push(f.x,f.y,f.z),u.copy(f).normalize(),x.push(u.x,u.y,u.z),g.push(C+_,1-M),E.push(c++)}h.push(E)}for(let d=0;d<n;d++)for(let E=0;E<e;E++){let M=h[d][E+1],_=h[d][E],F=h[d+1][E],C=h[d+1][E+1];(d!==0||o>0)&&p.push(M,_,C),(d!==n-1||l<Math.PI)&&p.push(_,F,C)}this.setIndex(p),this.setAttribute("position",new Me(m,3)),this.setAttribute("normal",new Me(x,3)),this.setAttribute("uv",new Me(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},_o=class extends on{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}},De=class extends Qi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jh,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};Us=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Bl=class extends Us{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Dc,endingEnd:Dc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Uc:r=t,a=2*e-n;break;case Nc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Uc:o=t,l=2*n-e;break;case Nc:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,p=this._weightNext,m=(n-e)/(s-e),x=m*m,g=x*m,d=-u*g+2*u*x-u*m,E=(1+u)*g+(-1.5-2*u)*x+(-.5+u)*m+1,M=(-1-p)*g+(1.5+p)*x+.5*m,_=p*g-p*x;for(let F=0;F!==a;++F)r[F]=d*o[h+F]+E*o[c+F]+M*o[l+F]+_*o[f+F];return r}},zl=class extends Us{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),f=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*f+o[l+u]*h;return r}},kl=class extends Us{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},$n=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Gr(e,this.TimeBufferType),this.values=Gr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Gr(t.times,Array),values:Gr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new kl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new zl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Bl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case $r:e=this.InterpolantFactoryMethodDiscrete;break;case cl:e=this.InterpolantFactoryMethodLinear;break;case Yo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $r;case this.InterpolantFactoryMethodLinear:return cl;case this.InterpolantFactoryMethodSmooth:return Yo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&gx(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Yo,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let f=a*n,u=f-n,p=f+n;for(let m=0;m!==n;++m){let x=e[f+m];if(x!==e[u+m]||x!==e[p+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let f=a*n,u=o*n;for(let p=0;p!==n;++p)e[u+p]=e[f+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};$n.prototype.TimeBufferType=Float32Array;$n.prototype.ValueBufferType=Float32Array;$n.prototype.DefaultInterpolation=cl;es=class extends $n{constructor(t,e,n){super(t,e,n)}};es.prototype.ValueTypeName="bool";es.prototype.ValueBufferType=Array;es.prototype.DefaultInterpolation=$r;es.prototype.InterpolantFactoryMethodLinear=void 0;es.prototype.InterpolantFactoryMethodSmooth=void 0;Hl=class extends $n{};Hl.prototype.ValueTypeName="color";Vl=class extends $n{};Vl.prototype.ValueTypeName="number";Gl=class extends Us{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Pi.slerpFlat(r,0,o,c-a,o,c,l);return r}},vo=class extends $n{InterpolantFactoryMethodLinear(t){return new Gl(this.times,this.values,this.getValueSize(),t)}};vo.prototype.ValueTypeName="quaternion";vo.prototype.InterpolantFactoryMethodSmooth=void 0;ns=class extends $n{constructor(t,e,n){super(t,e,n)}};ns.prototype.ValueTypeName="string";ns.prototype.ValueBufferType=Array;ns.prototype.DefaultInterpolation=$r;ns.prototype.InterpolantFactoryMethodLinear=void 0;ns.prototype.InterpolantFactoryMethodSmooth=void 0;Wl=class extends $n{};Wl.prototype.ValueTypeName="vector";Xl=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let p=c[f],m=c[f+1];if(p.global&&(p.lastIndex=0),p.test(h))return m}return null}}},xx=new Xl,ql=class{constructor(t){this.manager=t!==void 0?t:xx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};ql.DEFAULT_MATERIAL_NAME="__DEFAULT";yo=class extends sn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new se(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Mo=class extends yo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new se(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},wa=new Ve,Nh=new O,Fh=new O,Yl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _t(512,512),this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ir,this._frameExtents=new _t(1,1),this._viewportCount=1,this._viewports=[new Je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Nh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Nh),Fh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Fh),e.updateMatrixWorld(),wa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(wa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Zl=class extends Yl{constructor(){super(new Li(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},So=class extends yo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.target=new sn,this.shadow=new Zl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},bo=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Oh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Oh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};fc="\\[\\]\\.:\\/",_x=new RegExp("["+fc+"]","g"),dc="[^"+fc+"]",vx="[^"+fc.replace("\\.","")+"]",yx=/((?:WC+[\/:])*)/.source.replace("WC",dc),Mx=/(WCOD+)?/.source.replace("WCOD",vx),Sx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",dc),bx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",dc),Ex=new RegExp("^"+yx+Mx+Sx+bx+"$"),wx=["material","materials","bones","map"],$l=class{constructor(t,e,n){let s=n||Ye.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ye=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(_x,"")}static parseTrackName(t){let e=Ex.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);wx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ye.Composite=$l;Ye.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ye.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ye.prototype.GetterByBindingType=[Ye.prototype._getValue_direct,Ye.prototype._getValue_array,Ye.prototype._getValue_arrayElement,Ye.prototype._getValue_toArray];Ye.prototype.SetterByBindingTypeAndVersioning=[[Ye.prototype._setValue_direct,Ye.prototype._setValue_direct_setNeedsUpdate,Ye.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_array,Ye.prototype._setValue_array_setNeedsUpdate,Ye.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_arrayElement,Ye.prototype._setValue_arrayElement_setNeedsUpdate,Ye.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_fromArray,Ye.prototype._setValue_fromArray_setNeedsUpdate,Ye.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];o_=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jl)});var Co,pc=fn(()=>{Co={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`}});var zn,Tx,mc,Ax,Ui,Bs=fn(()=>{Bn();zn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Tx=new Li(-1,1,1,-1,0,1),mc=class extends rn{constructor(){super(),this.setAttribute("position",new Me([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Me([0,2,0,0,2,0],2))}},Ax=new mc,Ui=class{constructor(t){this._mesh=new re(Ax,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Tx)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}});var Io,cu=fn(()=>{Bn();Bs();Io=class extends zn{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof on?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Di.clone(t.uniforms),this.material=new on({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Ui(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}});var fr,Po,gc=fn(()=>{Bs();fr=class extends zn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Po=class extends zn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}});var Lo,hu=fn(()=>{Bn();pc();cu();gc();gc();Lo=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new _t);this._width=n.width,this._height=n.height,e=new bn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Jn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Io(Co),this.copyPass.material.blending=ni,this.clock=new bo}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}fr!==void 0&&(o instanceof fr?n=!0:o instanceof Po&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new _t);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}});var Do,uu=fn(()=>{Bn();Bs();Do=class extends zn{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new se}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}}});var fu,du=fn(()=>{Bn();fu={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new se(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`}});var zs,pu=fn(()=>{Bn();Bs();pc();du();zs=class i extends zn{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new _t(t.x,t.y):new _t(256,256),this.clearColor=new se(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new bn(r,o,{type:Jn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){let u=new bn(r,o,{type:Jn});u.texture.name="UnrealBloomPass.h"+f,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let p=new bn(r,o,{type:Jn});p.texture.name="UnrealBloomPass.v"+f,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}let a=fu;this.highPassUniforms=Di.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new on({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new _t(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Co;this.copyUniforms=Di.clone(h.uniforms),this.blendMaterial=new on({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:ii,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new se,this.oldClearAlpha=1,this.basic=new tn,this.fsQuad=new Ui(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new _t(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new on({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new _t(.5,.5)},direction:{value:new _t(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new on({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};zs.BlurDirectionX=new _t(1,0);zs.BlurDirectionY=new _t(0,1)});var mu,gu=fn(()=>{mu={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`}});var Uo,xu=fn(()=>{Bn();Bs();gu();Uo=class extends zn{constructor(){super();let t=mu;this.uniforms=Di.clone(t.uniforms),this.material=new _o({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Ui(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Pe.getTransfer(this._outputColorSpace)===He&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ql?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===jl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===tc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ur?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ec?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===nc&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}});function Pn(i){let t=i>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function In(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,e}function pn(i,t=!0,e=!0){let n=new co(i);return t&&(n.colorSpace=xn),e&&(n.wrapS=n.wrapT=er),n.anisotropy=8,n.needsUpdate=!0,n}function is(i,t,e,n,s,r,o=!0){for(let a=0;a<n;a++){let l=r();i.fillStyle=r()<.5?`rgba(0,0,0,${s*l})`:`rgba(255,255,255,${s*l*.6})`;let c=1+r()*2.5;i.fillRect(r()*t,r()*e,c,c)}}function _n(i,t,e,n,s,r="0,0,0",o=.08,a=60){for(let l=0;l<n;l++){let c=s()*t,h=s()*e,f=10+s()*a,u=i.createRadialGradient(c,h,0,c,h,f);u.addColorStop(0,`rgba(${r},${o*s()})`),u.addColorStop(1,`rgba(${r},0)`),i.fillStyle=u,i.fillRect(c-f,h-f,2*f,2*f)}}function vi(i,t,e,n){for(let s of[-t,0,t])for(let r of[-e,0,e])i.save(),i.translate(s,r),n(),i.restore()}function Su(i,t){let e=Pn(t),n=512,s=In(n,n),r=s.getContext("2d"),o=In(n,n),a=o.getContext("2d");if(a.fillStyle="#000",a.fillRect(0,0,n,n),r.fillStyle=i.wall,r.fillRect(0,0,n,n),i.pat==="brick")for(let l=0;l<n;l+=8){let c=l/8%2?0:10;for(let h=-20;h<n;h+=20)r.fillStyle=`rgba(${e()<.5?0:255},${e()<.5?0:200},0,${.05+e()*.07})`,r.fillRect(h+c,l,18,6);r.fillStyle=i.mortar,r.globalAlpha=.55,r.fillRect(0,l+6,n,2),r.globalAlpha=1}if(i.pat==="panel"){r.strokeStyle="rgba(0,0,0,.25)",r.lineWidth=2;for(let l=0;l<n;l+=64)r.beginPath(),r.moveTo(0,l+.5),r.lineTo(n,l+.5),r.stroke();for(let l=0;l<n;l+=128)r.beginPath(),r.moveTo(l+1,0),r.lineTo(l+1,n),r.stroke()}if(is(r,n,n,5e3,.18,e),_n(r,n,n,30,e,"40,30,20",.12),i.pat==="glass"){for(let l=0;l<4;l++){let c=l*128;r.fillStyle="#3b4a4e",r.fillRect(0,c+100,n,28);let h=i.col||32,f=i.gcols||["#2f5866","#4f8090","#1c3a44"];for(let u=0;u<n;u+=h){let p=r.createLinearGradient(u,c,u+h,c+100);p.addColorStop(0,f[0]),p.addColorStop(.5+e()*.3,f[1]),p.addColorStop(1,f[2]),r.fillStyle=p,r.fillRect(u,c+4,h,96)}r.fillStyle=i.frame;for(let u=0;u<=n;u+=h)r.fillRect(u-1.5,c,3,128);if(r.fillRect(0,c+100,n,3),r.fillRect(0,c,n,4),e()<.45){a.fillStyle=e()<.5?"#d9e6ff":"#fff0d0";for(let u=0;u<n;u+=h)e()<.8&&(a.globalAlpha=.5+e()*.5,a.fillRect(u+2,c+6,h-4,92));a.globalAlpha=1}}return{map:pn(s),emi:pn(o)}}for(let l=0;l<4;l++){let c=l*128;if(i.band&&(r.fillStyle=i.band,r.fillRect(0,c+120,n,8),r.fillStyle="rgba(255,255,255,.12)",r.fillRect(0,c+120,n,2)),i.ribbon){let u=c+i.wy,p=i.wh;r.fillStyle=i.frame,r.fillRect(0,u-4,n,p+8);for(let m=0;m<n;m+=64){let x=r.createLinearGradient(m,u,m+64,u+p);x.addColorStop(0,"#3f5868"),x.addColorStop(1,i.glass),r.fillStyle=x,r.fillRect(m+3,u,58,p),e()<.4&&(a.fillStyle=No[e()*No.length|0],a.globalAlpha=.6+e()*.4,a.fillRect(m+3,u,58,p),a.globalAlpha=1,a.fillStyle="rgba(0,0,0,.5)",a.fillRect(m+3+e()*40,u,6,p))}r.fillStyle="rgba(0,0,0,.18)",r.fillRect(0,u+p+4,n,10);continue}let h=i.bays||4,f=n/h;for(let u=0;u<h;u++){let p=c+i.wy,m=i.wh,x=i.pair?i.ww*1.5:i.ww,g=u*f+(f-x)/2;if(i.balc&&(l+u)%2===0){r.fillStyle="rgba(0,0,0,.28)",r.fillRect(g-14,p+m*.55,x+28,m*.45+12),r.fillStyle=i.balc,r.fillRect(g-16,p+m*.55,x+32,6);for(let F=g-14;F<g+x+16;F+=6)r.fillRect(F,p+m*.55,2,m*.45+8);r.fillRect(g-16,p+m+6,x+32,6)}let d=i.pair?[[g,x/2-5],[g+x/2+5,x/2-5]]:[[g,x]],E=e()<.36,M=No[e()*No.length|0],_=e()<.4;for(let[F,C]of d){if(i.orn&&(r.fillStyle="rgba(255,250,235,.55)",r.fillRect(F-10,p-16,C+20,8),r.fillStyle="rgba(0,0,0,.15)",r.fillRect(F-10,p-8,C+20,3)),i.shutter){r.fillStyle=i.shutter,r.fillRect(F-16,p,12,m),r.fillRect(F+C+4,p,12,m),r.fillStyle="rgba(0,0,0,.25)";for(let w=0;w<m;w+=5)r.fillRect(F-16,p+w,12,1),r.fillRect(F+C+4,p+w,12,1)}r.fillStyle=i.frame,r.fillRect(F-4,p-4,C+8,m+8);let b=r.createLinearGradient(F,p,F+C,p+m);b.addColorStop(0,"#5a7488"),b.addColorStop(.35,i.glass),b.addColorStop(.6,"#3d5263"),b.addColorStop(1,"#141c24"),r.fillStyle=b,r.fillRect(F,p,C,m),_&&(r.fillStyle=i.curtain||"rgba(230,225,210,.55)",r.fillRect(F,p,C*.3,m)),r.fillStyle=i.frame,C>34&&r.fillRect(F+C/2-1.5,p,3,m),r.fillRect(F,p+m*.32,C,3),r.fillStyle="rgba(255,255,255,.35)",r.fillRect(F-6,p+m+4,C+12,5);let L=r.createLinearGradient(0,p+m+9,0,p+m+50);L.addColorStop(0,"rgba(0,0,0,.22)"),L.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=L,r.fillRect(F-2,p+m+9,C+4,41),E&&(a.globalAlpha=.75+e()*.25,a.fillStyle=M,a.fillRect(F,p,C,m),a.globalAlpha=1,a.fillStyle="rgba(0,0,0,.6)",C>34&&a.fillRect(F+C/2-1.5,p,3,m),a.fillRect(F,p+m*.32,C,3),_&&(a.fillStyle="rgba(60,30,10,.7)",a.fillRect(F,p,C*.3,m)))}}}for(let l=0;l<14;l++){let c=e()*n,h=4+e()*14,f=r.createLinearGradient(0,0,0,n);f.addColorStop(0,"rgba(0,0,0,0)"),f.addColorStop(1,"rgba(20,15,10,.12)"),r.fillStyle=f,r.fillRect(c,0,h,n)}return{map:pn(s),emi:pn(o)}}function yu(i,t,e,n,s,r){i.lineCap="round";for(let o=0;o<2+t()*3;o++){i.strokeStyle=vu[t()*vu.length|0],i.lineWidth=3+t()*4,i.beginPath();let a=e+t()*s*.3,l=n+r*.3+t()*r*.5;i.moveTo(a,l);for(let c=0;c<6;c++)a+=8+t()*16,l+=(t()-.5)*26,i.quadraticCurveTo(a-6,l-20*t(),a,l);i.stroke()}}function xc(i,t){let e=Pn(i),n=512,s=160,r=In(n,s),o=r.getContext("2d"),a=In(n,s),l=a.getContext("2d");if(l.fillStyle="#000",l.fillRect(0,0,n,s),t==="res"){o.fillStyle=["#8a7d6a","#7a6e62","#958575","#6f6a63"][e()*4|0],o.fillRect(0,0,n,s),is(o,n,s,3e3,.2,e),o.fillStyle="rgba(0,0,0,.25)",o.fillRect(0,s-36,n,36);for(let u=0;u<4;u++){let p=u*128;if(u===1)o.fillStyle="#3a2a1e",o.fillRect(p+40,40,48,s-40),o.fillStyle="#5a4230",o.fillRect(p+44,44,40,s-48),o.fillStyle="#e0c060",o.fillRect(p+76,100,4,4),l.fillStyle="#ffd080",l.fillRect(p+60,30,8,6);else if(o.fillStyle="#e8e0d0",o.fillRect(p+36,40,56,62),o.fillStyle="#24303a",o.fillRect(p+40,44,48,54),e()<.35&&(l.fillStyle="#ffc070",l.fillRect(p+40,44,48,54)),e()<.5){o.fillStyle="#6a6a6a",o.fillRect(p+36,40,56,62),o.fillStyle="rgba(0,0,0,.3)";for(let m=40;m<102;m+=4)o.fillRect(p+36,m,56,1)}}return e()<.8&&yu(o,e,e()*200,50,300,100),_n(o,n,s,20,e,"30,25,20",.18,40),{map:pn(r),emi:pn(a)}}o.fillStyle="#2a2a2c",o.fillRect(0,0,n,s);let c=_u[e()*_u.length|0];o.fillStyle=c,o.fillRect(0,0,n,34),o.fillStyle="rgba(255,255,255,.18)",o.fillRect(0,0,n,4),o.fillStyle="rgba(0,0,0,.35)",o.fillRect(0,30,n,4);let h=e()*4|0,f=e()<.25;for(let u=0;u<4;u++){let p=u*128;o.fillStyle="#4a4c50",o.fillRect(p,34,128,s-34);let m=p+8,x=42,g=112,d=s-50;if(u===h){o.fillStyle="#202428",o.fillRect(p+34,42,60,s-42),o.fillStyle="#5f7f90",o.fillRect(p+40,48,48,s-52),l.fillStyle="#fff2d0",l.fillRect(p+40,48,48,s-52);continue}let E=o.createLinearGradient(m,x,m+g,x+d);E.addColorStop(0,"#7895a8"),E.addColorStop(.5,"#33495a"),E.addColorStop(1,"#1a242c"),o.fillStyle=E,o.fillRect(m,x,g,d);for(let M=0;M<7;M++)o.fillStyle=`hsl(${e()*360},${50+e()*40}%,${35+e()*30}%)`,o.fillRect(m+6+e()*90,x+d-18-e()*50,8+e()*20,10+e()*18);o.fillStyle="rgba(255,255,255,.25)",o.beginPath(),o.moveTo(m+20,x),o.lineTo(m+44,x),o.lineTo(m+10,x+d),o.lineTo(m-14+20,x+d),o.fill(),l.fillStyle=e()<.5?"#ffe9b8":"#fff6e0",l.globalAlpha=.75+e()*.25,l.fillRect(m,x,g,d),l.globalAlpha=1;for(let M=0;M<5;M++)l.fillStyle="rgba(0,0,0,.5)",l.fillRect(m+e()*100,x+d-30-e()*40,10+e()*14,12+e()*16);if(f&&u!==h){o.fillStyle="#8a8c90",o.fillRect(m,x,g,d*.6),o.fillStyle="rgba(0,0,0,.25)";for(let M=x;M<x+d*.6;M+=5)o.fillRect(m,M,g,1.5);l.fillStyle="#000",l.fillRect(m,x,g,d*.6),yu(o,e,m,x,g*.6,d*.5)}}return _n(o,n,s,10,e,"20,20,20",.2,30),{map:pn(r),emi:pn(a)}}function Fo(i,t,e,n,s,r){let o=Pn(s),a=In(n,n),l=a.getContext("2d");return l.fillStyle=i,l.fillRect(0,0,n,n),is(l,n,n,e,t,o),r&&r(l,o,n),pn(a)}function bu(i,t=0){let e=Pn(i),n=512,s=In(n,n),r=s.getContext("2d");if(r.fillStyle="#c4c4c4",r.fillRect(0,0,n,n),t===0){is(r,n,n,26e3,.42,e),vi(r,n,n,()=>{_n(r,n,n,10,e,"0,0,0",.1,120),_n(r,n,n,6,e,"255,255,255",.08,90)}),r.fillStyle="rgba(0,0,0,.22)";for(let o=0;o<n;o+=128)r.fillRect(0,o,n,3)}else if(t===1){for(let o=0;o<n;o+=64){let a=(e()-.5)*30;r.fillStyle=`rgb(${196+a},${196+a},${196+a})`,r.fillRect(o,0,64,n),r.fillStyle="rgba(0,0,0,.35)",r.fillRect(o,0,3,n),r.fillStyle="rgba(255,255,255,.18)",r.fillRect(o+3,0,2,n)}is(r,n,n,9e3,.25,e),vi(r,n,n,()=>_n(r,n,n,8,e,"0,0,0",.14,100));for(let o=0;o<6;o++)r.fillStyle="rgba(0,0,0,.2)",r.fillRect(e()*n,e()*n,20+e()*50,14+e()*30)}else if(t===2){for(let a=0;a<n;a+=64)for(let l=0;l<n;l+=64){let c=(e()-.5)*34;r.fillStyle=`rgb(${200+c},${198+c},${192+c})`,r.fillRect(l,a,64,64)}is(r,n,n,12e3,.25,e),r.fillStyle="rgba(30,30,30,.45)";for(let a=0;a<n;a+=64)r.fillRect(0,a,n,2.5);for(let a=0;a<n;a+=64)r.fillRect(a,0,2.5,n);vi(r,n,n,()=>_n(r,n,n,8,e,"40,50,30",.18,90))}else{for(let o=0;o<n;o+=16){let a=r.createLinearGradient(o,0,o+16,0);a.addColorStop(0,"#9a9a9a"),a.addColorStop(.5,"#e2e2e2"),a.addColorStop(1,"#8a8a8a"),r.fillStyle=a,r.fillRect(o,0,16,n)}r.fillStyle="rgba(0,0,0,.3)";for(let o=0;o<n;o+=170)r.fillRect(0,o,n,2);vi(r,n,n,()=>_n(r,n,n,12,e,"90,50,20",.2,70))}return pn(s)}function Eu(i){return Fo("#4a4b4f",.3,22e3,512,i,(t,e,n)=>{vi(t,n,n,()=>{_n(t,n,n,30,e,"0,0,0",.22,80),_n(t,n,n,12,e,"120,120,120",.15,60)}),t.strokeStyle="rgba(20,20,20,.45)",t.lineWidth=1.2;for(let s=0;s<10;s++){t.beginPath();let r=e()*n,o=e()*n;t.moveTo(r,o);for(let a=0;a<8;a++)r+=(e()-.5)*30,o+=(e()-.5)*30,t.lineTo(r,o);t.stroke()}for(let s=0;s<5;s++){{let r=e()<.5?30:85;t.fillStyle=`rgba(${r},${r},${r+3},.35)`}t.fillRect(e()*n,e()*n,30+e()*80,20+e()*50)}})}function _c(i,t="#8f8b84",e=32,n="rgba(40,35,30,.45)"){return Fo(t,.18,9e3,512,i,(s,r,o)=>{for(let a=0;a<o;a+=e)for(let l=0;l<o;l+=e){let c=(r()-.5)*18;s.fillStyle=`rgba(${c>0?255:0},${c>0?255:0},${c>0?255:0},${Math.abs(c)/120})`,s.fillRect(l,a,e,e)}s.fillStyle=n;for(let a=0;a<o;a+=e)s.fillRect(0,a,o,1.5);for(let a=0;a<o;a+=e)s.fillRect(a,0,1.5,o);vi(s,o,o,()=>_n(s,o,o,14,r,"30,25,20",.22,70));for(let a=0;a<40;a++){s.fillStyle="rgba(30,30,30,.35)";let l=1+r()*2;s.beginPath(),s.arc(r()*o,r()*o,l,0,7),s.fill()}})}function wu(i){return Fo("#a8927a",.18,9e3,512,i,(t,e,n)=>{for(let s=0;s<n;s+=16){let r=s/16%2?0:16;for(let o=-32;o<n;o+=32){let a=e();t.fillStyle=a<.33?"rgba(140,90,70,.35)":a<.66?"rgba(200,180,150,.25)":"rgba(90,80,75,.2)",t.fillRect(o+r,s,31,15)}}t.fillStyle="rgba(50,40,30,.35)";for(let s=0;s<n;s+=16)t.fillRect(0,s,n,1);vi(t,n,n,()=>_n(t,n,n,12,e,"40,30,20",.2,70))})}function Tu(i){return Fo("#4f7a32",.4,26e3,256,i,(t,e,n)=>{vi(t,n,n,()=>{_n(t,n,n,20,e,"30,50,10",.35,40),_n(t,n,n,10,e,"140,150,60",.25,30)})})}function dr(i="rgba(255,210,140,1)"){let t=In(128,128),e=t.getContext("2d"),n=e.createRadialGradient(64,64,0,64,64,64);return n.addColorStop(0,i),n.addColorStop(.35,i.replace(/[\d.]+\)$/,"0.45)")),n.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=n,e.fillRect(0,0,128,128),pn(t,!0,!1)}function Au(){let i=In(64,64),t=i.getContext("2d"),e=t.createRadialGradient(32,32,4,32,32,32);return e.addColorStop(0,"rgba(0,0,0,.75)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),pn(i,!1,!1)}function Ru(){let i=In(64,128),t=i.getContext("2d"),e=t.createLinearGradient(0,128,0,0);return e.addColorStop(0,"rgba(255,240,200,.9)"),e.addColorStop(1,"rgba(255,240,200,0)"),t.fillStyle=e,t.beginPath(),t.moveTo(26,128),t.lineTo(38,128),t.lineTo(64,0),t.lineTo(0,0),t.fill(),pn(i,!0,!1)}function pr(i,t={}){let e=t.w||512,n=t.h||128,s=In(e,n),r=s.getContext("2d"),o=t.bg||"#140d18",a=t.fg||"#ff3fa4",l=t.font||'900 76px "Arial Black", Impact, sans-serif';r.fillStyle=o,r.fillRect(0,0,e,n),r.strokeStyle=t.border||a,r.lineWidth=6,r.strokeRect(5,5,e-10,n-10),r.font=l,r.textAlign="center",r.textBaseline="middle";let c=parseInt(l.match(/(\d+)px/)[1]);for(;r.measureText(i).width>e-40&&c>20;)c-=4,r.font=l.replace(/\d+px/,c+"px");return r.shadowColor=a,r.shadowBlur=t.blur??18,r.fillStyle=t.core||"#fff",r.fillText(i,e/2,n/2+4),r.shadowBlur=0,r.lineWidth=2,r.strokeStyle=a,r.strokeText(i,e/2,n/2+4),t.sub&&(r.font="bold 22px Arial, sans-serif",r.fillStyle=a,r.fillText(t.sub,e/2,n-22)),pn(s,!0,!1)}function Cu(i,t,e,n,s={}){let r=Pn(n),o=1024,a=s.square?1024:288,l=In(o,a),c=l.getContext("2d");if(c.fillStyle=e,c.fillRect(0,0,o,a),s.stripes){c.fillStyle=s.stripes;for(let u=-a;u<o;u+=90)c.beginPath(),c.moveTo(u,0),c.lineTo(u+45,0),c.lineTo(u+45+a,a),c.lineTo(u+a,a),c.fill();c.fillStyle=e,c.fillRect(40,40,o-80,a-80)}c.strokeStyle=t,c.lineWidth=14,c.strokeRect(22,22,o-44,a-44);let h=s.square?620:190,f=u=>`900 ${u}px "Arial Black", Impact, sans-serif`;for(c.font=f(h);c.measureText(i).width>o-120&&h>40;)h-=6,c.font=f(h);c.textAlign="center",c.textBaseline="middle",c.fillStyle="rgba(0,0,0,.25)",c.fillText(i,o/2+8,a/2+14),c.fillStyle=t,c.fillText(i,o/2,a/2+6),s.sub&&(c.font="bold 40px Arial, sans-serif",c.fillStyle=t,c.fillText(s.sub,o/2,a-58)),is(c,o,a,3e4,.35,r),_n(c,o,a,40,r,"0,0,0",.25,140),_n(c,o,a,20,r,"255,255,255",.12,120);for(let u=0;u<60;u++)c.fillStyle=`rgba(${r()<.5?0:255},${r()<.5?0:255},${r()<.5?0:255},.12)`,c.fillRect(r()*o,r()*a,20+r()*120,2+r()*4);return pn(l,!0,!1)}function Iu(){let i=In(64,128),t=i.getContext("2d");t.fillStyle="#16213a",t.fillRect(0,0,64,128),t.fillStyle="#2a3d66";for(let e=0;e<128;e+=16)for(let n=0;n<64;n+=16)t.fillRect(n+1.5,e+1.5,13,13);return t.strokeStyle="#b8c0c8",t.lineWidth=3,t.strokeRect(1.5,1.5,61,125),pn(i,!0,!1)}function Pu(i){let t=Pn(i),e=256,n=In(e,e),s=n.getContext("2d");s.fillStyle="#d4d4d4",s.fillRect(0,0,e,e),vi(s,e,e,()=>{for(let a=0;a<900;a++){let l=t()*e,c=t()*e,h=3+t()*9,f=t();s.fillStyle=f<.4?"rgba(40,40,40,.18)":f<.8?"rgba(255,255,255,.14)":"rgba(0,0,0,.22)",s.beginPath(),s.arc(l,c,h,0,7),s.fill()}});let r=In(e,e),o=r.getContext("2d");o.filter="blur(1.5px)";for(let a of[-e,0,e])for(let l of[-e,0,e])o.drawImage(n,a,l);return pn(r,!0,!0)}var Mu,No,_u,vu,vc=fn(()=>{Bn();Mu=[{id:"altbau_cream",wall:"#d8c49a",pat:"plaster",frame:"#f3ead6",glass:"#2c3b4c",ww:44,wh:66,wy:30,band:"#c4ad80",orn:!0},{id:"brick_red",wall:"#9a4a35",pat:"brick",mortar:"#7a3a2a",frame:"#e8e2d6",glass:"#26323f",ww:42,wh:62,wy:32,band:"#7c3a2a"},{id:"concrete70",wall:"#a7a397",pat:"panel",frame:"#3a3a3a",glass:"#22303a",ribbon:!0,wy:42,wh:44,band:"#8d897e"},{id:"office_glass",wall:"#24424c",pat:"glass",frame:"#90a4a8",glass:"#1d3a46"},{id:"ochre",wall:"#c98d45",pat:"plaster",frame:"#efe4cc",glass:"#28343f",ww:46,wh:60,wy:34,band:"#b07a38",shutter:"#6e4a2a"},{id:"pastel_rose",wall:"#c7928a",pat:"plaster",frame:"#f1ebe4",glass:"#2a3540",ww:40,wh:64,wy:30,band:"#b07c74"},{id:"brick_dark",wall:"#5d3b30",pat:"brick",mortar:"#46302a",frame:"#cfc6b4",glass:"#1f2a33",ww:48,wh:58,wy:36,band:"#4a2e26"},{id:"mint_panel",wall:"#86a093",pat:"panel",frame:"#e6eee8",glass:"#24333b",ww:56,wh:52,wy:40,band:"#6f887b"},{id:"blue_plaster",wall:"#7f97ad",pat:"plaster",frame:"#eef0f2",glass:"#26313b",ww:44,wh:60,wy:34,band:"#6a8398"},{id:"yellow_brick",wall:"#c9b06a",pat:"brick",mortar:"#a8925a",frame:"#3b3b3b",glass:"#25313b",ww:50,wh:56,wy:38,band:"#a68e52"}],No=["#ffcf7a","#ffb862","#ffe3a6","#ffd28c","#a9c8ff","#ffc06e","#fff0c8"];_u=["#b3202a","#1d6b3a","#1f4f9a","#e0b020","#efefe8","#6a2a8a","#d0601a","#202020"],vu=["#e83a8a","#33c4e8","#f4e23a","#7ee05a","#ffffff","#ff7a2a"]});function Wn(i,t,e){let n=!1;for(let s=0,r=e.length-1;s<e.length;r=s++){let o=e[s][0],a=e[s][1],l=e[r][0],c=e[r][1];a>t!=c>t&&i<(l-o)*(t-a)/(c-a)+o&&(n=!n)}return n}function Ni(i,t,e,n,s,r){let o=s-e,a=r-n,l=o*o+a*a,c=l?((i-e)*o+(t-n)*a)/l:0;c=Math.max(0,Math.min(1,c));let h=e+c*o,f=n+c*a;return[Math.hypot(i-h,t-f),h,f,c]}function Nu(i,t,e){let n=Pn(1234),s={grid:new yc,buildings:[],neonMats:[],emiMats:[],shopMats:[],pools:null,roadsDrive:[],junctions:[],signs:[]},r=(R,D,J=0)=>{let G=new se(R),H={};return G.getHSL(H),G.setHSL((H.h+J+1)%1,H.s,Math.max(0,Math.min(1,H.l*D))),"#"+G.getHexString()},o=3,a=Pn(77),l=[];Mu.forEach((R,D)=>{for(let J=0;J<o;J++){let G=R;if(J>0){let H=a;G={...R,wall:r(R.wall,.8+H()*.4,(H()-.5)*.06)},R.pat==="glass"?(G.col=[24,32,48][H()*3|0],G.gcols=[["#2f5866","#4f8090","#1c3a44"],["#3a4a5a","#7a8c9c","#1e2630"],["#2a4a3a","#5a8a70","#16302a"],["#4a3e30","#9a8060","#2a2018"]][H()*4|0],G.frame=["#90a4a8","#c8c8c0","#3a3a3a"][H()*3|0]):R.ribbon?(G.frame=["#3a3a3a","#d0d0c8","#6a2a2a"][H()*3|0],G.wh=Math.round(R.wh*(.8+H()*.5))):(G.ww=Math.round(R.ww*(.75+H()*.45)),G.wh=Math.round(Math.min(78,R.wh*(.85+H()*.3))),G.bays=H()<.35?3:H()<.2?5:4,G.bays===5&&(G.ww=Math.min(G.ww,40)),G.pair=G.bays===3&&H()<.6,G.balc=H()<.3?["#d8d8d0","#3a3a3a","#8a5a3a"][H()*3|0]:null,H()<.3&&(G.band=null),H()<.4&&(G.frame=["#f3ead6","#3b3b3b","#e8e2d6","#6a4a30","#2a4a6a"][H()*5|0]))}l.push({style:D,st:G,seed:100+D*7+J})}});let c=l.map(({st:R,seed:D})=>{let J=Su(R,D),G=new De({map:J.map,emissiveMap:J.emi,emissive:16777215,emissiveIntensity:.5,roughness:R.pat==="glass"?.35:.9,metalness:R.pat==="glass"?.25:0});return s.emiMats.push(G),G}),h=[0,1,2,3,4,5].map(R=>{let D=xc(500+R,"shop"),J=new De({map:D.map,emissiveMap:D.emi,emissive:16777215,emissiveIntensity:.6,roughness:.6});return s.shopMats.push(J),J}),f=[0,1,2].map(R=>{let D=xc(700+R,"res"),J=new De({map:D.map,emissiveMap:D.emi,emissive:16777215,emissiveIntensity:.5,roughness:.95});return s.emiMats.push(J),J}),u=new De({vertexColors:!0,roughness:.9,side:Sn}),p=[0,1,2,3].map(R=>new De({map:bu(9+R,R),vertexColors:!0,roughness:R===3?.6:.95,metalness:R===3?.2:0})),m=c.map(()=>new wn),x=(R,D)=>R*o+(D()*o|0),g=h.map(()=>new wn),d=f.map(()=>new wn),E=new wn,M=[0,1,2,3].map(()=>new wn),_=new Set(["primary","primary_link","secondary","tertiary","residential","unclassified","living_street","service"]),F=[];for(let R of t.roads)if(R.t!=="foot")for(let D=0;D<R.p.length-1;D++)F.push([R.p[D][0],R.p[D][1],R.p[D+1][0],R.p[D+1][1],R.w,R]);let C=new Map,b=30;for(let R of F){let D=Math.floor(Math.min(R[0],R[2])/b)-1,J=Math.floor(Math.max(R[0],R[2])/b)+1,G=Math.floor(Math.min(R[1],R[3])/b)-1,H=Math.floor(Math.max(R[1],R[3])/b)+1;for(let yt=D;yt<=J;yt++)for(let at=G;at<=H;at++){let bt=yt*1009+at;C.has(bt)||C.set(bt,[]),C.get(bt).push(R)}}s.nearRoad=(R,D)=>{let J=null,G=1e9;for(let H of C.get(Math.floor(R/b)*1009+Math.floor(D/b))||[]){let[yt]=Ni(R,D,H[0],H[1],H[2],H[3]),at=yt-H[4]/2;at<G&&(G=at,J=H)}return J?{d:G,road:J[5],w:J[4]}:null};let L=new Map,w=[],S=[],U=[],K=0,Z=[[.34,.5,.32],[.64,.27,.21],[.8,.8,.76],[.32,.42,.58],[.74,.63,.42],[.22,.22,.25],[.55,.58,.36],[.7,.45,.25]];for(let R of t.buildings){let D=R.p,J=D.length,G=R.h,H=Pn(R.r),yt=G>19,at;R.k==="church"?at=1:yt?at=[2,3,2,7,6,3][H()*6|0]:at=[0,0,1,4,5,6,8,9,0,4][H()*10|0];let bt=Lu[H()*Lu.length|0],oe=x(at,H),zt=(H()*4|0)/4,Wt=new se(l[oe].st.wall),ne=[Wt.r*.75,Wt.g*.75,Wt.b*.75],qt=[Math.min(1,Wt.r*1.1+.08),Math.min(1,Wt.g*1.1+.08),Math.min(1,Wt.b*1.1+.08)],Jt=R.k==="shop"||H()<.55,Zt=Math.min(G-.8,Jt?4.2:3.6),ge=G-.6,We=.45,Be=Math.max(1,Math.round((ge-Zt)/Rx)),y=H()*h.length|0,B=H()*f.length|0,W=[],q=[];for(let lt=0;lt<J;lt++){let ye=D[lt],Yt=D[(lt+1)%J],ke=Yt[0]-ye[0],qe=Yt[1]-ye[1],Ne=Math.hypot(ke,qe);if(Ne<.05)continue;let me=qe/Ne,Ht=-ke/Ne,Fe=(ye[0]+Yt[0])/2,en=(ye[1]+Yt[1])/2;Wn(Fe+me*.2,en+Ht*.2,D)&&(me=-me,Ht=-Ht);let Re=Ht,vn=-me,Se=ye,he=Yt;ke*Re+qe*vn<0&&(Se=Yt,he=ye),s.grid.add(ye[0],ye[1],Yt[0],Yt[1]);let Xe=Math.max(1,Math.round(Ne/3.5)),hn=Xe/4,ie=[me,0,Ht],Ft=(xe,Le)=>[xe[0],Le,xe[1]],le=s.nearRoad(Fe+me*3,en+Ht*3),ue=le&&le.d<10;(ue&&Jt?g[y]:d[B]).quad(Ft(Se,0),Ft(he,0),Ft(he,Zt),Ft(Se,Zt),ie,[0,0],[hn,0],[hn,1],[0,1]),ge>Zt+.5&&m[oe].quad(Ft(Se,Zt),Ft(he,Zt),Ft(he,ge),Ft(Se,ge),ie,[zt,0],[zt+hn,0],[zt+hn,Be/4],[zt,Be/4]),E.quad(Ft(Se,Math.max(Zt,ge)),Ft(he,Math.max(Zt,ge)),Ft(he,G+We),Ft(Se,G+We),ie,[0,0],[1,0],[1,1],[0,1],ne),ge>Zt+.5&&(E.quad([Se[0]+me*.12,Zt+.25,Se[1]+Ht*.12],[he[0]+me*.12,Zt+.25,he[1]+Ht*.12],[he[0],Zt+.25,he[1]],[Se[0],Zt+.25,Se[1]],[0,1,0],[0,0],[1,0],[1,1],[0,1],qt),E.quad([Se[0]+me*.12,Zt,Se[1]+Ht*.12],[he[0]+me*.12,Zt,he[1]+Ht*.12],[he[0]+me*.12,Zt+.25,he[1]+Ht*.12],[Se[0]+me*.12,Zt+.25,Se[1]+Ht*.12],ie,[0,0],[1,0],[1,1],[0,1],ne));let be=.35,Ee=[Se[0]-me*be,Se[1]-Ht*be],Oe=[he[0]-me*be,he[1]-Ht*be];E.quad(Ft(Se,G+We),Ft(he,G+We),Ft(Oe,G+We),Ft(Ee,G+We),[0,1,0],[0,0],[1,0],[1,1],[0,1],qt),E.quad(Ft(Oe,G),Ft(Ee,G),Ft(Ee,G+We),Ft(Oe,G+We),[-me,0,-Ht],[0,0],[1,0],[1,1],[0,1],[bt[0]*.8,bt[1]*.8,bt[2]*.8]);{let Le=[bt[0]*.72,bt[1]*.72,bt[2]*.74];q.push([[Se[0],G+.03,Se[1]],[he[0],G+.03,he[1]],[he[0]-me*1.1,G+.03,he[1]-Ht*1.1],[Se[0]-me*1.1,G+.03,Se[1]-Ht*1.1],Le])}W.push({A:Se,B:he,nx:me,nz:Ht,len:Ne,street:ue,mx:Fe,mz:en})}let k=D.map(lt=>new _t(lt[0],lt[1])),gt=[];try{gt=Ri.triangulateShape(k,[])}catch{}let At=W[0]||{A:[0,0],B:[1,0],len:1};for(let lt of W)lt.len>At.len&&(At=lt);let It=(At.B[0]-At.A[0])/At.len,Ut=(At.B[1]-At.A[1])/At.len,ae=R.k==="garage"?3:G>19?[0,2,1,0][H()*4|0]:[0,1,1,2,0][H()*5|0],pe=M[ae],Xt=ae===3?8:11,Te=lt=>[(lt[0]*It+lt[1]*Ut)/Xt,(-lt[0]*Ut+lt[1]*It)/Xt],Ue=(lt,ye,Yt,ke,qe)=>{let Ne=(ye[0]-lt[0])*(Yt[1]-lt[1])-(ye[1]-lt[1])*(Yt[0]-lt[0]),[me,Ht,Fe]=Ne<0?[lt,ye,Yt]:[lt,Yt,ye];pe.tri([me[0],ke,me[1]],[Ht[0],ke,Ht[1]],[Fe[0],ke,Fe[1]],[0,1,0],Te(me),Te(Ht),Te(Fe),qe)};for(let lt of gt)Ue(D[lt[0]],D[lt[1]],D[lt[2]],G,bt);for(let lt of q)Ue([lt[0][0],lt[0][2]],[lt[1][0],lt[1][2]],[lt[2][0],lt[2][2]],G+.03,lt[4]),Ue([lt[0][0],lt[0][2]],[lt[2][0],lt[2][2]],[lt[3][0],lt[3][2]],G+.03,lt[4]);let ze=[],Ae=0;for(let lt=0;lt<J;lt++){let ye=D[lt],Yt=D[(lt+1)%J];Ae+=ye[0]*Yt[1]-Yt[0]*ye[1]}if(Ae=Math.abs(Ae)/2,Ae>350&&R.k!=="church"){let lt=Ae>3e3?6:Ae>1500?4:Ae>700?2:1,ye=0,Yt=0;for(let ke of D)ye+=ke[0],Yt+=ke[1];ye/=J,Yt/=J;for(let ke=0,qe=0;ke<lt&&qe<120;qe++){let Ne=5+H()*Math.min(10,Math.sqrt(Ae)*.25),me=4+H()*Math.min(8,Math.sqrt(Ae)*.2),Ht=2.4+H()*1.6,Fe=ye+(H()-.5)*Math.sqrt(Ae)*.7,en=Yt+(H()-.5)*Math.sqrt(Ae)*.7,Re=[[-Ne/2,-me/2],[Ne/2,-me/2],[Ne/2,me/2],[-Ne/2,me/2]].map(([he,Xe])=>[Fe+he*It-Xe*Ut,en+he*Ut+Xe*It]);if(!Re.every(he=>Wn(he[0],he[1],D))||Re.some(he=>W.some(Xe=>Ni(he[0],he[1],Xe.A[0],Xe.A[1],Xe.B[0],Xe.B[1])[0]<1.5))||ze.some(he=>Math.hypot(he.x-Fe,he.z-en)<he.r+Math.hypot(Ne,me)/2))continue;ze.push({x:Fe,z:en,r:Math.hypot(Ne,me)/2,C:Re,h:G+Ht}),ke++;let vn=[Wt.r*.9,Wt.g*.9,Wt.b*.9];for(let he=0;he<4;he++){let Xe=Re[he],hn=Re[(he+1)%4],ie=hn[0]-Xe[0],Ft=hn[1]-Xe[1],le=Math.hypot(ie,Ft),ue=[Ft/le,0,-ie/le],Ce=Wn((Xe[0]+hn[0])/2+ue[0]*.1,(Xe[1]+hn[1])/2+ue[2]*.1,Re)?[-ue[0],0,-ue[2]]:ue;E.quad([Xe[0],G,Xe[1]],[hn[0],G,hn[1]],[hn[0],G+Ht,hn[1]],[Xe[0],G+Ht,Xe[1]],Ce,[0,0],[1,0],[1,1],[0,1],vn),E.quad([Xe[0],G+Ht,Xe[1]],[hn[0],G+Ht,hn[1]],[hn[0],G+Ht+.3,hn[1]],[Xe[0],G+Ht+.3,Xe[1]],Ce,[0,0],[1,0],[1,1],[0,1],qt)}let Se=[bt[0]*.85,bt[1]*.85,bt[2]*.85];Ue(Re[0],Re[1],Re[2],G+Ht+.3,Se),Ue(Re[0],Re[2],Re[3],G+Ht+.3,Se)}}let Ie=[];if(Ae>260&&R.k!=="church"){let lt=-Ut,ye=It,Yt=1e9,ke=-1e9,qe=1e9,Ne=-1e9;for(let ie of D){let Ft=ie[0]*It+ie[1]*Ut,le=ie[0]*lt+ie[1]*ye;Yt=Math.min(Yt,Ft),ke=Math.max(ke,Ft),qe=Math.min(qe,le),Ne=Math.max(Ne,le)}let me=ke-Yt,Ht=Ne-qe,Fe=ze.map(ie=>{let Ft=ie.x*It+ie.z*Ut,le=ie.x*lt+ie.z*ye;return[Ft-ie.r,Ft+ie.r,le-ie.r,le+ie.r]}),en=(ie,Ft)=>[ie*It+Ft*lt,ie*Ut+Ft*ye],Re=(ie,Ft,le,ue,Ce,be)=>{let Ee=[[ie-le,Ft-ue],[ie+le,Ft-ue],[ie+le,Ft+ue],[ie-le,Ft+ue]],Oe=[];for(let xe=0;xe<4;xe++){let Le=Ee[xe],$e=Ee[(xe+1)%4];for(let yn=0;yn<4;yn++){let Dn=yn/4;Oe.push(en(Le[0]+($e[0]-Le[0])*Dn,Le[1]+($e[1]-Le[1])*Dn))}}return!Oe.every(xe=>Wn(xe[0],xe[1],D))||Oe.some(xe=>W.some(Le=>Ni(xe[0],xe[1],Le.A[0],Le.A[1],Le.B[0],Le.B[1])[0]<Ce))||be&&be.some(xe=>ie+le>xe[0]&&ie-le<xe[1]&&Ft+ue>xe[2]&&Ft-ue<xe[3])?null:Ee.map(xe=>en(xe[0],xe[1]))},vn=(ie,Ft,le,ue,Ce)=>{let be=Oe=>[(Oe[0]*It+Oe[1]*Ut)/Ce,(Oe[0]*lt+Oe[1]*ye)/Ce],Ee=(Oe,xe,Le)=>{let $e=(xe[0]-Oe[0])*(Le[1]-Oe[1])-(xe[1]-Oe[1])*(Le[0]-Oe[0]),[yn,Dn,Qn]=$e<0?[Oe,xe,Le]:[Oe,Le,xe];ie.tri([yn[0],le,yn[1]],[Dn[0],le,Dn[1]],[Qn[0],le,Qn[1]],[0,1,0],be(yn),be(Dn),be(Qn),ue)};Ee(Ft[0],Ft[1],Ft[2]),Ee(Ft[0],Ft[2],Ft[3])},Se=(ie,Ft,le,ue)=>{for(let Ce=0;Ce<4;Ce++){let be=ie[Ce],Ee=ie[(Ce+1)%4],Oe=Ee[0]-be[0],xe=Ee[1]-be[1],Le=Math.hypot(Oe,xe)||1,$e=[xe/Le,0,-Oe/Le];Wn((be[0]+Ee[0])/2+$e[0]*.05,(be[1]+Ee[1])/2+$e[2]*.05,ie)&&($e=[-$e[0],0,-$e[2]]),E.quad([be[0],Ft,be[1]],[Ee[0],Ft,Ee[1]],[Ee[0],le,Ee[1]],[be[0],le,be[1]],$e,[0,0],[1,0],[1,1],[0,1],ue)}},he=Ae>2500?3:Ae>900?2:H()<.6?1:0,Xe=[];for(let ie=0,Ft=0;ie<he&&Ft<40;Ft++){let le=me*(.15+H()*.25),ue=Ht*(.15+H()*.25);if(le<2.5||ue<2.5)continue;let Ce=Yt+le+1.3+H()*Math.max(0,me-2*le-2.6),be=qe+ue+1.3+H()*Math.max(0,Ht-2*ue-2.6),Ee=Re(Ce,be,le,ue,1.2,Fe.concat(Xe));if(!Ee)continue;Xe.push([Ce-le,Ce+le,be-ue,be+ue]),ie++;let Oe=Z[H()*Z.length|0],xe=(ae+1+(H()*2|0))%3,Le=G+.09;vn(M[xe],Ee,Le,Oe,xe===2?6:9),Se(Ee,G,Le,[Oe[0]*.6,Oe[1]*.6,Oe[2]*.6])}if(Ae>800&&H()<.6)for(let ie=0;ie<12;ie++){let Ft=qe+3+H()*(Ht-6),le=Yt+2,ue=ke-2,Ce=Re((le+ue)/2,Ft,(ue-le)/2*.8,.7,1,Fe);if(Ce){vn(M[2],Ce,G+.12,[.86,.84,.8],3);break}}if((Ae>1100||R.k==="garage"&&Ae>500)&&K<18&&H()<.85){let ie=[["KAUFHAUS LINDE","#f4efe0","#2a5a3a"],["KOLA ROT","#ffffff","#b0141c"],["POTT FM 99,1","#14102a","#3fd8e8"],["ELEKTRO BLITZ","#1a1a1a","#f2c200"],["ZECHE SIEBEN","#f2c200","#1c1c22"],["SCHAUM","#7a1010","#ffe03f"],["LINDENKAUF","#ffffff","#1f4f9a"],["NACHTEXPRESS","#f2c200","#111111"],["BACKSTUBE 11","#5a2a10","#f0dcb0"]],Ft=R.k==="garage",le=Ft?["P","#ffffff","#1f4f9a"]:ie[(R.r+K)%ie.length],ue=[[It,Ut],[-It,-Ut],[lt,ye],[-lt,-ye]],Ce=ue[0];for(let Le of ue)Le[1]<Ce[1]&&(Ce=Le);let be=[-Ce[1],Ce[0]],Ee=Math.abs(be[0]*It+be[1]*Ut)>.5,Oe=Ee?me:Ht,xe=Ee?Ht:me;for(let Le=0;Le<25;Le++){let $e=Math.min(Ft?14:30,Oe*(.45+H()*.25)),yn=Ft?$e:$e*.28;if(yn>xe*.6&&(yn=xe*.6,$e=Ft?yn:yn/.28),$e<7)break;let Dn=(Ee?$e:yn)/2,Qn=(Ee?yn:$e)/2,Hs=Yt+Dn+1.5+H()*Math.max(0,me-2*Dn-3),Vs=qe+Qn+1.5+H()*Math.max(0,Ht-2*Qn-3);if(!Re(Hs,Vs,Dn,Qn,1.3,Fe))continue;let Cc=en(Hs,Vs);w.push({x:Cc[0],z:Cc[1],y:G+.15,w:$e,d:yn,ang:Math.atan2(-Ce[0],-Ce[1]),A:le,seed:R.r,sq:Ft}),Ie.push(Re(Hs,Vs,Dn+.6,Qn+.6,0,null)||[]),Fe.push([Hs-Dn,Hs+Dn,Vs-Qn,Vs+Qn]),K++;break}}if(Ae>700&&H()<.5){let ie=4+(H()*6|0),Ft=ie*3.4;for(let le=0;le<15;le++){let ue=Yt+Ft/2+2+H()*Math.max(0,me-Ft-4),Ce=qe+3+H()*Math.max(0,Ht-6);if(Re(ue,Ce,Ft/2,1.6,1.5,Fe)){Fe.push([ue-Ft/2,ue+Ft/2,Ce-1.6,Ce+1.6]),Ie.push(Re(ue,Ce,Ft/2+.8,2.2,0,null)||[]);for(let be=0;be<ie;be++){let Ee=en(ue-Ft/2+1.7+be*3.4,Ce);U.push({x:Ee[0],z:Ee[1],y:G,rot:Math.atan2(lt,ye),s:1})}break}}}if(Ae>300&&Ae<4e3&&H()<.35){let ie=3+(H()*6|0),Ft=1+(H()*3|0),le=ie*.6+.2,ue=Ft*1.1+.2;for(let Ce=0;Ce<15;Ce++){let be=Yt+le+2+H()*Math.max(0,me-2*le-4),Ee=qe+ue+2+H()*Math.max(0,Ht-2*ue-4);if(!Re(be,Ee,le,ue,1.6,Fe))continue;Fe.push([be-le,be+le,Ee-ue,Ee+ue]),Ie.push(Re(be,Ee,le+.6,ue+.6,0,null)||[]);let Oe=ye>0?1:-1;for(let xe=0;xe<ie;xe++)for(let Le=0;Le<Ft;Le++){let $e=en(be-le+.8+xe*1.2,Ee-ue+1.3+Le*2.2);S.push({x:$e[0],z:$e[1],y:G+.55,ang:Math.atan2(It,Ut),tilt:.45*Oe})}break}}}s.buildings.push({b:R,edges:W,h:G,style:at,roofCol:bt,shopish:Jt,annex:ze,area:Ae,clear:Ie})}let j=(R,D,J=!0)=>{if(!R.p.length)return null;let G=new re(R.build(),D);return G.castShadow=J,G.receiveShadow=!0,i.add(G),G};m.forEach((R,D)=>j(R,c[D])),g.forEach((R,D)=>j(R,h[D])),d.forEach((R,D)=>j(R,f[D])),j(E,u),M.forEach((R,D)=>j(R,p[D]));let st={ac:[],vent:[],sky:[],hut:[],tank:[],ant:[],dish:[]};for(let R of s.buildings){let D=R.b,J=D.p,G=Pn(D.r+7),H=1e9,yt=-1e9,at=1e9,bt=-1e9;for(let ne of J)H=Math.min(H,ne[0]),yt=Math.max(yt,ne[0]),at=Math.min(at,ne[1]),bt=Math.max(bt,ne[1]);let oe=(yt-H)*(bt-at),zt=Math.min(45,Math.floor(oe/55)),Wt=[];for(let ne=0;ne<zt*4&&Wt.length<zt;ne++){let qt=H+G()*(yt-H),Jt=at+G()*(bt-at);if(!Wn(qt,Jt,J))continue;let Zt=!0;for(let y of R.edges)if(Ni(qt,Jt,y.A[0],y.A[1],y.B[0],y.B[1])[0]<1.8){Zt=!1;break}if(!Zt||Wt.some(y=>Math.hypot(y[0]-qt,y[1]-Jt)<2.6)||R.annex.some(y=>Wn(qt,Jt,y.C)||Math.hypot(y.x-qt,y.z-Jt)<y.r+.8)||R.clear.some(y=>y.length&&Wn(qt,Jt,y)))continue;Wt.push([qt,Jt]);let ge=G(),We=Math.atan2(R.edges[0]?.nz||0,R.edges[0]?.nx||1),Be={x:qt,z:Jt,y:R.h,rot:We,s:.8+G()*.5};ge<.38?st.ac.push(Be):ge<.55?st.vent.push(Be):ge<.68?st.sky.push(Be):ge<.76&&oe>200?st.hut.push(Be):ge<.84?st.tank.push(Be):ge<.92?st.dish.push(Be):st.ant.push(Be)}}let $=(R,D=.8,J=.1)=>new De({color:R,roughness:D,metalness:J}),ut=(R,D,J,G,H)=>{if(!J.length)return;let yt=new Vn(R,D,J.length),at=new sn;return J.forEach((bt,oe)=>{at.position.set(bt.x,bt.y+G*(bt.s||1),bt.z),at.rotation.set(0,bt.rot,0);let zt=H?H(bt):[bt.s,bt.s,bt.s];at.scale.set(...zt),at.updateMatrix(),yt.setMatrixAt(oe,at.matrix)}),yt.castShadow=!0,yt.receiveShadow=!0,i.add(yt),yt},nt=new Ke(1.4,.9,1);ut(nt,$(12106944,.6,.3),st.ac,.45);let Et=new cn(.35,.35,.06,12);ut(Et,$(2763824),st.ac.map(R=>({...R,x:R.x+Math.cos(R.rot)*.25*R.s,z:R.z-Math.sin(R.rot)*.25*R.s})),.93),ut(new cn(.3,.3,1,10),$(9080208,.5,.5),st.vent,.5),ut(new cn(.42,.3,.25,10),$(6974832,.5,.5),st.vent,1.1),ut(new Ke(1.6,.35,2.4),$(7311264,.2,.4),st.sky,.17);{let R=new Ke(2,.5,2.6);ut(R,$(9087160,.15,.5),U,.25);let D=new Ke(2.3,.2,2.9);ut(D,$(5922402,.6,.3),U,.1)}if(S.length){let R=new Vn(new Ke(1.1,.06,2),new De({map:Iu(),roughness:.25,metalness:.5}),S.length),D=new sn;S.forEach((J,G)=>{D.position.set(J.x,J.y,J.z),D.rotation.set(J.tilt,J.ang,0,"YXZ"),D.updateMatrix(),R.setMatrixAt(G,D.matrix)}),R.castShadow=!0,R.receiveShadow=!0,i.add(R)}for(let R of w){let D=new De({map:Cu(R.A[0],R.A[1],R.A[2],R.seed,{square:R.sq,stripes:R.sq?null:R.seed%3===0?"#e8e0c8":null}),roughness:.95,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),J=new En(R.w,R.d);J.rotateX(-Math.PI/2);let G=new re(J,D);G.rotation.y=R.ang,G.position.set(R.x,R.y,R.z),G.receiveShadow=!0,i.add(G)}ut(new Ke(2.6,2.4,2.8),$(10130054),st.hut,1.2),ut(new cn(.9,.9,1.8,14),$(8018496),st.tank,.9),ut(new cn(1,.9,.15,14),$(4864560),st.tank,1.85),ut(new cn(.04,.04,4,5),$(3355443),st.ant,2);let Pt=new _i(.5,12,6,0,Math.PI*2,0,Math.PI/2.6);Pt.rotateX(-1),ut(Pt,$(14211280,.6,.1),st.dish,.6);let Bt=new re(new En(2400,2400),new De({map:_c(3),roughness:.95}));Bt.rotation.x=-Math.PI/2,Bt.material.map.repeat.set(2400/8,2400/8),Bt.receiveShadow=!0,i.add(Bt);let te={grass:new wn,plaza:new wn,parking:new wn};for(let R of t.areas){let D=R.p.map(yt=>new _t(yt[0],yt[1])),J=[];try{J=Ri.triangulateShape(D,[])}catch{continue}let G={grass:.02,plaza:.012,parking:.03}[R.t],H={grass:6,plaza:8,parking:10}[R.t];for(let yt of J){let at=[R.p[yt[0]],R.p[yt[1]],R.p[yt[2]]],oe=(at[1][0]-at[0][0])*(at[2][1]-at[0][1])-(at[1][1]-at[0][1])*(at[2][0]-at[0][0])<0?[0,1,2]:[0,2,1];te[R.t].tri(...oe.map(zt=>[at[zt][0],G,at[zt][1]]),[0,1,0],...oe.map(zt=>[at[zt][0]/H,at[zt][1]/H]))}}let we=Eu(5),ot=wu(6),Mt=Tu(7),Gt=new De({map:we,roughness:.9,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),St=new De({map:ot,roughness:.95,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),Vt=(R,D)=>{if(!R.p.length)return;let J=new re(R.build(),D);J.receiveShadow=!0,i.add(J)};Vt(te.grass,new De({map:Mt,roughness:1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1})),Vt(te.plaza,St),Vt(te.parking,Gt);let jt=new wn,$t=new wn,fe=new wn,ct=new wn,ft=new wn;function P(R,D,J,G,H,yt){let at=D.length;if(at<2)return;let bt=[],oe=[];for(let zt=0;zt<at;zt++){let Wt=D[Math.max(0,zt-1)],ne=D[Math.min(at-1,zt+1)],qt=ne[0]-Wt[0],Jt=ne[1]-Wt[1],Zt=Math.hypot(qt,Jt)||1;qt/=Zt,Jt/=Zt;let ge=-Jt,We=qt,Be=1;if(zt>0&&zt<at-1){let y=D[zt][0]-D[zt-1][0],B=D[zt][1]-D[zt-1][1],W=Math.hypot(y,B)||1,q=Math.abs(ge*(-B/W)+We*(y/W));Be=1/Math.max(.6,q)}bt.push([D[zt][0]+ge*J/2*Be,D[zt][1]+We*J/2*Be]),oe.push([D[zt][0]-ge*J/2*Be,D[zt][1]-We*J/2*Be])}for(let zt=0;zt<at-1;zt++){let Wt=[bt[zt],oe[zt],oe[zt+1],bt[zt+1]],ne=Wt.map(Zt=>[Zt[0],G,Zt[1]]),qt=Wt.map(Zt=>[Zt[0]/H,Zt[1]/H]);(Wt[1][0]-Wt[0][0])*(Wt[2][1]-Wt[0][1])-(Wt[1][1]-Wt[0][1])*(Wt[2][0]-Wt[0][0])<0?R.quad(ne[0],ne[1],ne[2],ne[3],[0,1,0],qt[0],qt[1],qt[2],qt[3],yt):R.quad(ne[0],ne[3],ne[2],ne[1],[0,1,0],qt[0],qt[3],qt[2],qt[1],yt)}}function kt(R,D,J,G,H,yt){for(let bt=0;bt<14;bt++){let oe=bt/14*Math.PI*2,zt=(bt+1)/14*Math.PI*2,Wt=[D[0],G,D[1]],ne=[D[0]+Math.cos(zt)*J,G,D[1]+Math.sin(zt)*J],qt=[D[0]+Math.cos(oe)*J,G,D[1]+Math.sin(oe)*J];R.tri(Wt,ne,qt,[0,1,0],[Wt[0]/H,Wt[2]/H],[ne[0]/H,ne[2]/H],[qt[0]/H,qt[2]/H],yt)}}let dt=new Map;for(let R of t.roads)(_.has(R.t)||R.t==="pedestrian")&&R.nd.forEach((D,J)=>{dt.has(D)||dt.set(D,{c:0,p:R.p[J]}),dt.get(D).c++});let Rt=[];for(let[R,D]of dt)D.c>=2&&Rt.push(D.p);s.junctions=Rt;let wt=(R,D,J)=>Rt.some(G=>Math.abs(G[0]-R)<J&&Math.abs(G[1]-D)<J&&Math.hypot(G[0]-R,G[1]-D)<J),Kt=[.78,.77,.74];for(let R of t.roads){if(R.t==="foot"){P(ct,R.p,2.4,.025,8);continue}if(R.t==="pedestrian"){P(fe,R.p,12,.014,8),kt(fe,R.p[0],6,.014,8),kt(fe,R.p[R.p.length-1],6,.014,8);continue}let D=R.w;if(P(jt,R.p,D,.04,10),P($t,R.p,D+.7,.035,1,Kt),kt(jt,R.p[0],D/2,.04,10),kt(jt,R.p[R.p.length-1],D/2,.04,10),kt($t,R.p[0],D/2+.35,.035,1,Kt),kt($t,R.p[R.p.length-1],D/2+.35,.035,1,Kt),R.t!=="service"&&s.roadsDrive.push(R),D>=6&&R.t!=="service"&&R.t!=="living_street"){let J=R.ow?Math.max(1,Math.round(D/3.3)):2,G=[];if(R.ow)for(let H=1;H<J;H++)G.push(-D/2+H*D/J);else G.push(0);for(let H of G){let yt=0;for(let at=0;at<R.p.length-1;at++){let bt=R.p[at],oe=R.p[at+1],zt=oe[0]-bt[0],Wt=oe[1]-bt[1],ne=Math.hypot(zt,Wt);if(ne<.1)continue;let qt=zt/ne,Jt=Wt/ne,Zt=-Jt,ge=qt;for(let We=0;We<ne;We+=.5){let Be=(yt+We)%6;if(Be<3&&Be+.5<=3){let y=bt[0]+qt*We+Zt*H,B=bt[1]+Jt*We+ge*H;if(wt(y,B,R.t==="primary"?11:8))continue;let W=.08,q=[y+Zt*W,.05,B+ge*W],k=[y-Zt*W,.05,B-ge*W],gt=[y-Zt*W+qt*.5,.05,B-ge*W+Jt*.5],At=[y+Zt*W+qt*.5,.05,B+ge*W+Jt*.5];ft.quad(q,At,gt,k,[0,1,0],[0,0],[0,0],[0,0],[0,0])}}yt+=ne}}}if(["primary","secondary","tertiary","residential","unclassified"].includes(R.t)&&D>=6)for(let J of[0,1]){let G=J?R.nd[R.nd.length-1]:R.nd[0];if((dt.get(G)?.c||0)<3)continue;let H=J?[...R.p].reverse():R.p,yt=H[0],at=H[1],bt=at[0]-yt[0],oe=at[1]-yt[1],zt=Math.hypot(bt,oe),Wt=R.t==="primary"?9:6.5;if(zt<Wt+4)continue;let ne=bt/zt,qt=oe/zt,Jt=-qt,Zt=ne,ge=yt[0]+ne*Wt,We=yt[1]+qt*Wt;for(let Be=-D/2+.6;Be<D/2-.5;Be+=1){let y=ge+Jt*Be,B=We+Zt*Be,W=.25,q=1.4,k=[y+Jt*W-ne*q,.05,B+Zt*W-qt*q],gt=[y-Jt*W-ne*q,.05,B-Zt*W-qt*q],At=[y-Jt*W+ne*q,.05,B-Zt*W+qt*q],It=[y+Jt*W+ne*q,.05,B+Zt*W+qt*q];ft.quad(k,It,At,gt,[0,1,0],[0,0],[0,0],[0,0],[0,0])}}}Vt($t,new De({vertexColors:!0,roughness:.9,polygonOffset:!0,polygonOffsetFactor:-1.5,polygonOffsetUnits:-1.5})),Vt(ct,new De({map:_c(11,"#9a958c",64),roughness:.95,polygonOffset:!0,polygonOffsetFactor:-1.2,polygonOffsetUnits:-1.2})),Vt(fe,St),Vt(jt,Gt),Vt(ft,new De({color:15262936,roughness:.7,side:Sn,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}));let Lt=[];for(let R of s.roadsDrive){let D=0;for(let J=0;J<R.p.length-1;J++){let G=R.p[J],H=R.p[J+1],yt=Math.hypot(H[0]-G[0],H[1]-G[1]);for(let at=(17-D%17+17)%17;at<yt;at+=23){let bt=at/yt;Lt.push({x:G[0]+(H[0]-G[0])*bt+(Lt.length%3-1)*1.2,z:G[1]+(H[1]-G[1])*bt,y:.055,rot:0})}D+=yt}}let A=new De({color:2763306,roughness:.6,metalness:.4,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}),v=new go(.35,12);v.rotateX(-Math.PI/2),ut(v,A,Lt,0).castShadow=!1;let X=t.trees.filter(R=>!s.buildings.some(D=>Math.abs(D.b.p[0][0]-R[0])<80&&Wn(R[0],R[1],D.b.p))),it=Pn(77),ht=new _i(1,28,16);ht.rotateX(Math.PI/2);{let R=ht.attributes.position,D=[];for(let J=0;J<R.count;J++){let G=R.getX(J),H=R.getY(J),yt=R.getZ(J),at=1+.07*Math.sin(G*5.1+yt*2.3)*Math.cos(yt*4.7-H*3.1)+.05*Math.sin(H*7+G*3);R.setXYZ(J,G*at,H*at*.62,yt*at);let bt=.55+.45*Math.max(0,(H+.3)/1.3);D.push(bt,bt,bt)}ht.setAttribute("color",new Me(D,3)),ht.computeVertexNormals()}let rt=new De({color:16777215,map:Pu(5),vertexColors:!0,roughness:.95});rt.map.repeat.set(3,2);let Dt=new Vn(ht,rt,X.length*3),Tt=new Vn(new cn(.16,.26,4.2,8),new De({color:3811870,roughness:.9}),X.length),xt=new sn,de=new se;X.forEach((R,D)=>{let J=1.7+it()*1;xt.position.set(R[0],2.1,R[1]),xt.rotation.set(0,0,0),xt.scale.set(1,1,1),xt.updateMatrix(),Tt.setMatrixAt(D,xt.matrix);let G=.22+it()*.08,H=.42+it()*.18,yt=.3+it()*.08;xt.position.set(R[0],4.4+J*.25,R[1]),xt.rotation.set(0,it()*6,0),xt.scale.set(J,J,J),xt.updateMatrix(),Dt.setMatrixAt(D*3,xt.matrix),de.setHSL(G,H,yt),Dt.setColorAt(D*3,de);for(let at=1;at<3;at++){let bt=it()*6.28,oe=J*.45,zt=J*(.55+it()*.15);xt.position.set(R[0]+Math.cos(bt)*oe,4.6+J*.3+it()*.4,R[1]+Math.sin(bt)*oe),xt.scale.set(zt,zt,zt),xt.rotation.set(0,it()*6,0),xt.updateMatrix(),Dt.setMatrixAt(D*3+at,xt.matrix),de.setHSL(G+.01*at,H,yt+.03*at),Dt.setColorAt(D*3+at,de)}}),Dt.castShadow=!0,Dt.receiveShadow=!0,Tt.castShadow=!0,i.add(Dt,Tt);let mt=t.lamps.filter(R=>!s.buildings.some(D=>Math.abs(D.b.p[0][0]-R[0])<80&&Wn(R[0],R[1],D.b.p))),Ot=new Vn(new cn(.07,.1,5.5,6),new De({color:3816770,metalness:.5,roughness:.5}),mt.length),Qt=new De({color:5592405,emissive:16767392,emissiveIntensity:1});s.lampHeadMat=Qt;let T=new Vn(new Ke(.5,.18,.5),Qt,mt.length),N=new tn({map:dr("rgba(255,200,120,1)"),transparent:!0,blending:ii,depthWrite:!1,opacity:.5,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-6}),Y=new En(1,1);Y.rotateX(-Math.PI/2);let Q=mt.length,vt=new Vn(Y,N,Q);mt.forEach((R,D)=>{xt.rotation.set(0,0,0),xt.scale.set(1,1,1),xt.position.set(R[0],2.75,R[1]),xt.updateMatrix(),Ot.setMatrixAt(D,xt.matrix),xt.position.set(R[0],5.5,R[1]),xt.updateMatrix(),T.setMatrixAt(D,xt.matrix),xt.position.set(R[0],.07,R[1]),xt.scale.set(13,1,13),xt.updateMatrix(),vt.setMatrixAt(D,xt.matrix)}),Ot.castShadow=!0,i.add(Ot,T,vt),s.poolMat=N,s.lamps=mt;let I=(R,D,J)=>{let G=null,H=J;for(let yt of s.buildings)if(!(Math.abs(yt.b.p[0][0]-R)>90||Math.abs(yt.b.p[0][1]-D)>90))for(let at of yt.edges){let[bt,oe,zt]=Ni(R,D,at.A[0],at.A[1],at.B[0],at.B[1]);bt<H&&at.len>4&&(H=bt,G={B:yt,e:at,cx:oe,cz:zt})}return G};s.facing=I;let tt=new Set,V={},et=(R,D,J,G={})=>{let H=R.e,yt=Math.round(R.cx*2)+"_"+Math.round(R.cz*2);if(tt.has(H))return null;tt.add(H);let at=(H.B[0]-H.A[0])/H.len,bt=(H.B[1]-H.A[1])/H.len;(at<-.3||Math.abs(at)<=.3&&bt>0)&&(at=-at,bt=-bt);let oe=Math.min(G.w||5.5,H.len-.6),zt=oe/4,Wt=Math.min(R.B.h-.8,R.B.shopish?4.2:3.6),ne=new tn({map:pr(D,{fg:J,sub:G.sub}),toneMapped:!1});s.neonMats.push(ne);let qt=new En(oe,zt),Jt=new re(qt,ne),Zt=new O(at,0,bt),ge=new O(bt,0,-at),We=new O().crossVectors(Zt,ge),Be=.42,y=ge.clone().multiplyScalar(Math.cos(Be)).add(new O(0,1,0).multiplyScalar(Math.sin(Be))),B=new O().crossVectors(Zt,y),W=new Ve().makeBasis(Zt,y,B);Jt.quaternion.setFromRotationMatrix(W);let q=zt/2+.25,k=ge.x*H.nx+ge.z*H.nz;Jt.position.set(R.cx+H.nx*q,Wt+.15+(k<0?zt*.5*Math.sin(Be):0),R.cz+H.nz*q),i.add(Jt);let gt=new re(new Ke(oe,.08,zt*.9),new De({color:2236962}));return gt.quaternion.copy(Jt.quaternion),gt.rotateX(-Math.PI/2),gt.position.copy(Jt.position).add(new O(0,-.06,0)),gt.castShadow=!0,i.add(gt),s.signs.push(Jt),Jt},pt=e.hubNear||[0,0],z=t.pois.filter(R=>["fast_food","restaurant"].includes(R.a)&&Math.abs(R.p[0])<300&&Math.abs(R.p[1])<250).map(R=>({p:R,d:Math.hypot(R.p[0]-pt[0],R.p[1]-pt[1])+(R.a==="fast_food"?0:60)+(R.fallback,0)})).sort((R,D)=>R.d-D.d).find(R=>I(R.p.p[0],R.p.p[1],20));for(let R of t.pois){if(R===z?.p)continue;let D=I(R.p[0],R.p[1],14);if(!D)continue;let J=Du[R.a]||Du.fast_food;V[R.a]=(V[R.a]||0)+1,et(D,J[(V[R.a]+n()*3|0)%J.length],Oo[n()*Oo.length|0])}for(let R of s.buildings)if(R.shopish)for(let D of R.edges)D.street&&D.len>7&&n()<.22&&!tt.has(D)&&et({B:R,e:D,cx:D.mx,cz:D.mz},Uu[n()*Uu.length|0],Oo[n()*Oo.length|0],{w:4.5});let Nt=[["SCHAUM","das Feierabendbier","#ffe03f","#7a1010"],["KOLA ROT","eiskalt seit 1987","#ffffff","#b0101a"],["NACHTEXPRESS","Taxi rund um die Uhr","#111111","#f2c200"],["ZAHNARZT DR. KNIRSCH","tut kaum weh","#1a3a6a","#e8f0f8"],["POTT FM 99,1","Radio f\xFCr die Hood","#3ff0ff","#14102a"],["GOLDENE KRONE","Spielothek","#ffd04f","#3a0a3a"]],ee=0;for(let R of s.buildings.filter(D=>D.h>15).sort((D,J)=>D.b.r%97-J.b.r%97).slice(0,10)){let D=R.edges.filter(Zt=>Zt.len>9).sort((Zt,ge)=>ge.nz-Zt.nz)[0];if(!D)continue;let J=Nt[ee++%Nt.length],G=new tn({map:pr(J[0],{fg:J[2],bg:J[3],core:J[2],border:J[2],blur:8,sub:J[1],w:512,h:192,font:'900 80px "Arial Black", Impact, sans-serif'}),toneMapped:!1});s.neonMats.push(G);let H=Math.min(9,D.len*.8),yt=H*.375,at=new re(new En(H,yt),G),bt=(D.B[0]-D.A[0])/D.len,oe=(D.B[1]-D.A[1])/D.len;bt<0&&(bt=-bt,oe=-oe);let zt=new O(bt,0,oe),ne=new O(oe,0,-bt).clone().multiplyScalar(Math.cos(.9)).add(new O(0,Math.sin(.9),0));at.quaternion.setFromRotationMatrix(new Ve().makeBasis(zt,ne,new O().crossVectors(zt,ne)));let qt=[D.mx-D.nx*2.2,D.mz-D.nz*2.2];at.position.set(qt[0],R.h+.45+1.2+yt/2*Math.sin(.9),qt[1]),i.add(at);for(let Zt of[-.4,.4]){let ge=new re(new Ke(.15,1.6+yt*.6,.15),$(2763306));ge.position.set(qt[0]+bt*H*Zt,R.h+.45+(1.6+yt*.6)/2,qt[1]+oe*H*Zt),ge.castShadow=!0,i.add(ge)}let Jt=new re(new En(H,yt),$(3158064));Jt.quaternion.copy(at.quaternion),Jt.rotateY(Math.PI),Jt.position.copy(at.position),Jt.castShadow=!0,i.add(Jt)}return s.hubPoi=z?.p,s.placeSign=et,s.propMat=$,s}var Rx,wn,yc,Lu,Du,Uu,Oo,Fu=fn(()=>{Bn();vc();Rx=3.3;wn=class{constructor(){this.p=[],this.n=[],this.u=[],this.c=[]}tri(t,e,n,s,r,o,a,l){this.p.push(...t,...e,...n);for(let c=0;c<3;c++)this.n.push(...s);if(this.u.push(...r,...o,...a),l)for(let c=0;c<3;c++)this.c.push(...l)}quad(t,e,n,s,r,o,a,l,c,h){this.tri(t,e,n,r,o,a,l,h),this.tri(t,n,s,r,o,l,c,h)}build(){let t=new rn;return t.setAttribute("position",new Me(this.p,3)),t.setAttribute("normal",new Me(this.n,3)),t.setAttribute("uv",new Me(this.u,2)),this.c.length&&t.setAttribute("color",new Me(this.c,3)),t.computeBoundingSphere(),t}},yc=class{constructor(t=16){this.cell=t,this.m=new Map}key(t,e){return t*10007+e}add(t,e,n,s){let r=this.cell,o=Math.floor(Math.min(t,n)/r)-1,a=Math.floor(Math.max(t,n)/r)+1,l=Math.floor(Math.min(e,s)/r)-1,c=Math.floor(Math.max(e,s)/r)+1;for(let h=o;h<=a;h++)for(let f=l;f<=c;f++){let u=this.key(h,f);this.m.has(u)||this.m.set(u,[]),this.m.get(u).push([t,e,n,s])}}near(t,e){return this.m.get(this.key(Math.floor(t/this.cell),Math.floor(e/this.cell)))||[]}resolve(t,e){let n=null;for(let s=0;s<3;s++){let r=!1;for(let o of this.near(t.x,t.z)){let[a,l,c]=Ni(t.x,t.z,o[0],o[1],o[2],o[3]);if(a<e){let h=t.x-l,f=t.z-c,u=Math.hypot(h,f)||1;h/=u,f/=u,t.x=l+h*e,t.z=c+f*e,n={x:h,z:f},r=!0}}if(!r)break}return n}},Lu=[[.46,.44,.4],[.58,.3,.22],[.3,.42,.34],[.7,.62,.46],[.26,.27,.31],[.52,.44,.54],[.32,.44,.56],[.74,.4,.26],[.62,.62,.58],[.34,.26,.22],[.24,.48,.5],[.6,.56,.3]],Du={fast_food:["PIZZA NOTTE","BURGER BUDE","CURRY ECK","FALAFEL HOUSE","IMBISS ROSI","H\xC4HNCHEN HEINZ","WOK STATION 9","KUMPIR K\xD6NIG","B\xD6REK BOX","POMMES POTT"],restaurant:["TRATTORIA LUNA","TAVERNA DELFI","ASIA GARDEN","STEAKHAUS RUHR","LA CANTINA","BALKAN GRILL","SUSHI KAZE","PHO SAIGON","GASTHAUS KRONE"],cafe:["CAF\xC9 KORN","KAFFEEKLATSCH","BACKSTUBE 11","ESPRESSO 44","CAF\xC9 ZUCKER"],bar:["BAR NOIR","LUCKY 13","BLAUE STUNDE","EXIT BAR","COCKTAIL CLUB"],pub:["ZUM HENKEL","KNEIPE 7","ZUR ECKE","PILS-STUBE","SCHICHT-ENDE"]},Uu=["KIOSK","SPIELHALLE","WETTB\xDCRO","HANDY DOC","SHISHA LOUNGE","SALON SCHNITT","ORIENT MARKT","PFANDHAUS","TATTOO INK","SP\xC4TI 24","GOLD ANKAUF","NAGEL STUDIO","REISEB\xDCRO SONNE","APOTHEKE AM ECK"],Oo=["#ff3fa4","#3ff0ff","#ffe03f","#7dff5a","#ff6a2a","#b46bff","#ff2a3a"]});function Fi(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new rn,c=0;for(let h=0;h<i.length;++h){let f=i[h],u=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in f.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(f.attributes[p]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in f.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(f.morphAttributes[p])}if(t){let p;if(e)p=f.index.count;else if(f.attributes.position!==void 0)p=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(e){let h=0,f=[];for(let u=0;u<i.length;++u){let p=i[u].index;for(let m=0;m<p.count;++m)f.push(p.getX(m)+h);h+=i[u].attributes.position.count}l.setIndex(f)}for(let h in r){let f=Ou(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(let h in o){let f=o[h][0].length;if(f===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<f;++u){let p=[];for(let x=0;x<o[h].length;++x)p.push(o[h][x][u]);let m=Ou(p);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}return l}function Ou(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new nn(o,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let f=l/e;for(let u=0,p=h.count;u<p;u++)for(let m=0;m<e;m++){let x=h.getComponent(u,m);a.setComponent(u+f,m,x)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var Mc=fn(()=>{Bn()});function Hu(i){i=i.index?i.toNonIndexed():i;for(let t of Object.keys(i.attributes))["position","normal","uv"].includes(t)||i.deleteAttribute(t);return i.attributes.uv||i.setAttribute("uv",new nn(new Float32Array(i.attributes.position.count*2),2)),i.clearGroups(),i}function Ge(i,t){i=Hu(i);let e=i.attributes.position.count,n=new Float32Array(e*3);for(let s=0;s<e;s++)n[s*3]=t[0],n[s*3+1]=t[1],n[s*3+2]=t[2];return i.setAttribute("color",new nn(n,3)),i}function Bu(i,t){i=Hu(i);let e=i.attributes.position,n=e.count,s=new Float32Array(n*3),r=new O,o=new O,a=new O,l=new O;for(let c=0;c<n;c+=3){r.fromBufferAttribute(e,c),o.fromBufferAttribute(e,c+1),a.fromBufferAttribute(e,c+2),l.subVectors(a,o).cross(o.clone().sub(r)).normalize(),l.lengthSq()<.5&&l.set(0,1,0);let h=(r.y+o.y+a.y)/3,f=(r.z+o.z+a.z)/3,u=t(-l.x,-l.y,-l.z,h,f);for(let p=0;p<3;p++)s[(c+p)*3]=u[0],s[(c+p)*3+1]=u[1],s[(c+p)*3+2]=u[2]}return i.setAttribute("color",new nn(s,3)),i}function zu(i,t,e=.06){let n=new ji;n.moveTo(i[0][0],i[0][1]);for(let o=1;o<i.length;o++)n.lineTo(i[o][0],i[o][1]);let s=Math.max(.02,t-2*e),r=new Ds(n,{depth:s,bevelEnabled:!0,bevelThickness:e,bevelSize:e,bevelSegments:2,curveSegments:1});return r.translate(0,0,-s/2),r.rotateY(-Math.PI/2),r}function Dx(i,t=[1,1,1]){let e=ss[i],n=[],{L:s,W:r,hb:o,hr:a}=e,l=.34,c=.06,h=t,f=[h[0]*.8,h[1]*.8,h[2]*.8],u=s/2-e.hood,p=u-e.ws,m=p-e.roof,x=m-e.rw,g=s/2-c,d=-s/2+c,E=e.van?[[g,o-.32],[g-.2,o-.12]]:[[g,o-.24],[g-.14,o-.1]],M=zu([[d,l],[g,l],...E,[u,o-c],[x,o-c],[d+.14,o-c-.02],[d,o-c-.14]],r,c);n.push(Bu(M,(b,L,w,S)=>S<.42?Oi:L>.6?h:f));let _=zu([[x,o-.02],[u,o-.02],[p,o+a-c],[m,o+a-c]],r-.16,c);{let b=_.attributes.position;for(let L=0;L<b.count;L++){let w=b.getY(L),S=1-.13*Math.max(0,Math.min(1,(w-o)/a));b.setX(L,b.getX(L)*S)}_.computeVertexNormals()}n.push(Bu(_,(b,L,w,S,U)=>L>.8&&S>o+a-.08?h:L>.25&&U>p-.05?Ix:Cx));let F=(p+m)/2-(e.van?.4:.05);for(let b of[-1,1])n.push(Ge(Qe(.06,a-.08,.12,b*((r-.16)/2*.935),o+a/2,F),h));let C=[s/2-.82-(e.van?.05:0),-s/2+.78];for(let b of[-1,1])for(let L of C){let w=new cn(.34,.34,.25,14);w.rotateZ(Math.PI/2),w.translate(b*(r/2-.1),.34,L),n.push(Ge(w,Px));let S=new cn(.17,.17,.02,10);S.rotateZ(Math.PI/2),S.translate(b*(r/2+.03),.34,L),n.push(Ge(S,Lx)),n.push(Ge(Qe(.09,.1,1,b*(r/2+.005),.74,L),Oi))}if(n.push(Ge(Qe(r-.12,.2,.14,0,l+.08,s/2-.02),Oi),Ge(Qe(r-.12,.2,.14,0,l+.08,-s/2+.02),Oi)),n.push(Ge(Qe(r*.46,.12,.04,0,o-.27,s/2+.005),Oi)),n.push(Ge(Qe(r-.42,.03,.09,0,o+.005,u+.06),Oi)),!e.van)for(let b of[-1,1])n.push(Ge(Qe(.035,.02,e.hood-.45,b*.43,o-.01,u+(e.hood-.45)/2+.12),[h[0]*.72,h[1]*.72,h[2]*.72]));e.rw>.3&&n.push(Ge(Qe(r-.5,.02,.05,0,o-.01,x-.12),[h[0]*.7,h[1]*.7,h[2]*.7]));for(let b of[-1,1])n.push(Ge(Qe(.18,.1,.1,b*(r/2+.07),o+.06,u-.12),h));if(e.stripe)for(let b of[-1,1]){let L=[.95,.95,.92];n.push(Ge(Qe(.13,.02,e.hood-.2,b*.17,o-.015,u+(e.hood-.2)/2),L),Ge(Qe(.13,.02,e.roof+.1,b*.17*.87,o+a+.005,(p+m)/2),L),Ge(Qe(.13,.02,x-d-.15,b*.17,o-.04,(x+d)/2+.05),L))}if(e.rails)for(let b of[-1,1])n.push(Ge(Qe(.05,.05,e.roof*.85,b*(r/2-.08-.13*r/2),o+a+.02,(p+m)/2),Oi));return e.taxi&&n.push(Ge(Qe(.62,.17,.24,0,o+a+.08,(p+m)/2),[1,.93,.55])),e.van&&n.push(Ge(Qe(.02,.5,.03,r/2+.002,o-.1,m+.9),Oi)),Fi(n)}function Ux(i){let t=ss[i],e=[],n=[],{L:s,W:r,hb:o}=t;for(let a of[-1,1])e.push(Qe(.42,.13,.16,a*(r/2-.3),o-(t.van?.2:.14),s/2-.06)),n.push(Qe(.4,.12,.12,a*(r/2-.28),o-.1,-s/2+.05));return{front:Fi(e),rear:Fi(n)}}function Vu(i,t,e){let n=new An,s=new se(t),r=Dx(i,[s.r,s.g,s.b]),o=new re(r,Nx);o.castShadow=!0,o.receiveShadow=!0,n.add(o);let a=Ux(i),l=new re(a.front,e.head),c=new re(a.rear,e.tail);n.add(l,c);let h=ss[i],f=new re(e.blobGeo,e.blob);f.scale.set(h.W+.9,1,h.L+.9),f.position.y=.06,n.add(f);let u=new re(e.coneGeo,e.cone);return u.position.set(0,.07,h.L/2+7.5),n.add(u),n.userData={type:i,T:h,cone:u,body:o,hf:l,hr:c},n}function Gu(i,t){let e=s=>{let r=Math.sin(i*91.7+s*13.3)*43758.5453;return r-Math.floor(r)},n=(s,r)=>s[e(r)*s.length|0];return{skin:t?.skin||n(Fx,1),hair:t?.hair||n(Ox,2),jacket:t?.jacket||n(Bx,3),shirt:t?.shirt||n(zx,4),pants:t?.pants||n(kx,5),shoes:t?.shoes||n(Hx,6),open:t?.open??e(7)<.45,long:t?.long??e(8)<.3,beanie:t?.beanie??e(10)<.12,coat:t?.coat??e(11)<.18}}function Vx(i,t){let e=Gu(i,t),n=[];return n.push(Ge(Bo(.16,e.coat?.5:.32,0,e.coat?1.1:1.18,0,1.32,.78),e.jacket)),n.push(Ge(Bo(.1,.34,0,1.41,0,1,1.15,Math.PI/2),e.jacket)),e.open&&n.push(Ge(Qe(.13,.42,.03,0,1.2,.125),e.shirt)),n.push(Ge(Qe(.16,.06,.2,0,1.5,-.01),e.jacket)),n.push(Ge(new cn(.05,.055,.1,8).translate(0,1.53,0),e.skin)),n.push(Ge(Sc(.115,0,1.66,.01,.92,1.05,1),e.skin)),n.push(Ge(Sc(.123,0,1.675,-.012,.95,1,1.02,14,8,Math.PI*.52),e.beanie?e.jacket:e.hair)),e.long&&n.push(Ge(Qe(.2,.24,.07,0,1.55,-.095),e.hair)),n.push(Ge(Bo(.13,.16,0,.92,0,1,.85,Math.PI/2),e.pants)),Fi(n)}function ku(i,t,e,n,s){let r=Ge(Bo(i,t,0,-(t/2+i),0),e);return Fi([r,Ge(n,s)])}function bc(i,t,e,n=1.3){let s=new An,r=m=>{let x=Math.sin(i*51.7+m*7.3)*43758.5453;return x-Math.floor(x)},o=Gu(i,e),a=new An;a.scale.setScalar(n),s.add(a);let l=new re(Vx(i,e),t.ped);l.castShadow=!0,a.add(l);let c=ku(.075,.68,o.pants,Qe(.12,.08,.25,0,-.86,.04),o.shoes),h=ku(.055,.44,o.jacket,Sc(.052,0,-.6,.01),o.skin),f=[],u=[];for(let m of[-1,1]){let x=new An;x.position.set(m*.095,.9,0);let g=new re(c,t.ped);g.castShadow=!0,x.add(g),a.add(x),f.push(x);let d=new An;d.position.set(m*.27,1.43,0),d.rotation.z=m*.06;let E=new re(h,t.ped);E.castShadow=!0,d.add(E),a.add(d),u.push(d)}let p=new re(t.blobGeo,t.blob);return p.scale.set(1,1,.72),p.position.y=.065,a.add(p),s.userData={legs:f,arms:u,phase:r(9)*6},s}function Ec(i,t,e){let n=i.userData;n.phase+=e*t*5.5;let s=Math.min(1,t/1.5)*.6,r=Math.sin(n.phase)*s;n.legs[0].rotation.x=r,n.legs[1].rotation.x=-r,n.arms[0].rotation.x=-r*.8,n.arms[1].rotation.x=r*.8}var Qe,Cx,Ix,Px,Oi,Lx,ss,mr,Nx,Fx,Ox,Bx,zx,kx,Hx,Bo,Sc,Wu=fn(()=>{Bn();Mc();Qe=(i,t,e,n,s,r)=>{let o=new Ke(i,t,e);return o.translate(n,s,r),o},Cx=[.07,.09,.12],Ix=[.16,.22,.3],Px=[.05,.05,.055],Oi=[.11,.11,.12],Lx=[.6,.62,.64],ss={sedan:{L:4.4,W:1.8,hb:.86,hr:.5,hood:1.25,ws:.75,roof:1.2,rw:.6},hatch:{L:3.9,W:1.72,hb:.86,hr:.52,hood:1,ws:.7,roof:1.42,rw:.42},kombi:{L:4.7,W:1.82,hb:.88,hr:.52,hood:1.25,ws:.75,roof:2.1,rw:.25,rails:!0},van:{L:4.9,W:1.95,hb:1,hr:.88,hood:.95,ws:.85,roof:2.85,rw:.12,rails:!0,van:!0},taxi:{L:4.5,W:1.82,hb:.86,hr:.5,hood:1.28,ws:.75,roof:1.25,rw:.6,taxi:!0},coupe:{L:4.5,W:1.86,hb:.8,hr:.42,hood:1.6,ws:.85,roof:.8,rw:.8,stripe:!0}};mr=[10100516,2310526,13216058,2776892,13619142,2236966,8028038,6169682,12081696,3832462,5126700,14606046,4872762,9054746],Nx=new De({vertexColors:!0,roughness:.32,metalness:.28});Fx=[[.9,.72,.58],[.78,.57,.42],[.56,.38,.26],[.36,.25,.18],[.95,.8,.68]],Ox=[[.07,.05,.04],[.3,.19,.1],[.62,.48,.26],[.18,.18,.18],[.45,.14,.08],[.75,.72,.68]],Bx=[[.1,.1,.12],[.16,.2,.3],[.3,.31,.33],[.28,.3,.19],[.38,.13,.13],[.58,.5,.38],[.26,.33,.46],[.48,.2,.12],[.18,.24,.22],[.62,.62,.6],[.66,.3,.14],[.22,.16,.12]],zx=[[.82,.8,.75],[.15,.15,.16],[.6,.62,.66],[.55,.16,.16],[.7,.62,.45]],kx=[[.17,.22,.36],[.1,.1,.11],[.26,.31,.44],[.34,.31,.26],[.36,.36,.38],[.14,.18,.28]],Hx=[[.06,.06,.06],[.85,.85,.82],[.28,.18,.1]],Bo=(i,t,e,n,s,r=1,o=1,a=0)=>{let l=new mo(i,t,4,12);return a&&l.rotateZ(a),l.scale(r,1,o),l.translate(e,n,s),l},Sc=(i,t,e,n,s=1,r=1,o=1,a=14,l=10,c=Math.PI)=>{let h=new _i(i,a,l,0,Math.PI*2,0,c);return h.scale(s,r,o),h.translate(t,e,n),h}});function qu(i,t={}){let e=t.mobile??matchMedia("(pointer:coarse)").matches,n=t.touch||{active:!1,x:0,y:0,mag:0,hbrake:!1},s=new ao({antialias:!0,preserveDrawingBuffer:zo});s.setPixelRatio(zo?1:Math.min(2,e?Math.max(1,devicePixelRatio*.75):devicePixelRatio)),s.setSize(innerWidth,innerHeight),s.shadowMap.enabled=!0,s.shadowMap.type=Kl,s.toneMapping=ur,s.outputColorSpace=xn,document.getElementById("game").appendChild(s.domElement);let r=new lo,o=new Li(-1,1,1,-1,1,1600),a=600;function l(T){let N=innerWidth/innerHeight,Y=T*N,Q=T;N<1&&(Y=T*.78,Q=Y/N),o.left=-Y,o.right=Y,o.top=Q,o.bottom=-Q,o.updateProjectionMatrix()}let c=new Mo(16777215,4473924,1);r.add(c);let h=new So(16777215,2);h.castShadow=!0;let f=zo&&!e?4096:2048;h.shadow.mapSize.set(f,f);let u=e?62:85;Object.assign(h.shadow.camera,{left:-u,right:u,top:u,bottom:-u,near:1,far:600}),h.shadow.bias=-6e-4,h.shadow.normalBias=.04,r.add(h,h.target);let p=t.hubNear||[0,0],m=Nu(r,i,{hubNear:p});(function(){let Y=[];r.traverse(tt=>{if(tt.isInstancedMesh&&tt.count>=48){let V=tt.geometry;(V.index?V.index.count:V.attributes.position.count)/3*tt.count>3e4&&Y.push(tt)}});let Q=new Ve,vt=new O,I=new se;for(let tt of Y){let V=new Map;for(let pt=0;pt<tt.count;pt++){tt.getMatrixAt(pt,Q),vt.setFromMatrixPosition(Q);let z=Math.floor(vt.x/120)+","+Math.floor(vt.z/120);V.has(z)||V.set(z,[]),V.get(z).push(pt)}if(V.size<2)continue;let et=tt.parent;for(let pt of V.values()){let z=new Vn(tt.geometry,tt.material,pt.length);pt.forEach((Nt,ee)=>{tt.getMatrixAt(Nt,Q),z.setMatrixAt(ee,Q),tt.instanceColor&&(tt.getColorAt(Nt,I),z.setColorAt(ee,I))}),z.castShadow=tt.castShadow,z.receiveShadow=tt.receiveShadow,z.renderOrder=tt.renderOrder,z.position.copy(tt.position),z.quaternion.copy(tt.quaternion),z.scale.copy(tt.scale),z.computeBoundingSphere(),et.add(z)}et.remove(tt)}})();let x=new En(1,1);x.rotateX(-Math.PI/2);let g=new En(6,14);g.rotateX(-Math.PI/2),g.rotateY(Math.PI);let d={blob:new tn({map:Au(),transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-8,polygonOffsetUnits:-8}),blobGeo:x,coneGeo:g,cone:new tn({map:Ru(),transparent:!0,blending:ii,depthWrite:!1,opacity:.5,polygonOffset:!0,polygonOffsetFactor:-7,polygonOffsetUnits:-7}),headOff:new De({color:14211280,roughness:.3}),tailOff:new De({color:6950928,roughness:.4}),head:new De({color:16774877,emissive:16773832,emissiveIntensity:1.5}),tail:new De({color:8912896,emissive:16718362,emissiveIntensity:1.2}),ped:new De({vertexColors:!0,roughness:.85}),legGeo:new Ke(.15,.9,.17),armGeo:new Ke(.11,.6,.13)},E=null;if(m.hubPoi){let T=m.facing(m.hubPoi.p[0],m.hubPoi.p[1],20);if(T){let N=T.e,Y=m.placeSign(T,"SULTAN GRILL","#ffd23f",{w:7,sub:"D\xD6NER \xB7 PIZZA \xB7 AUFTR\xC4GE"}),Q={x:T.cx+N.nx*2.5,z:T.cz+N.nz*2.5},vt=new re(new xo(1.1,1.5,40),new tn({color:6160234,transparent:!0,opacity:.85,toneMapped:!1,side:Sn,depthWrite:!1}));vt.rotation.x=-Math.PI/2,vt.position.set(Q.x,.09,Q.z),r.add(vt);let I=new ji;I.moveTo(0,0),I.lineTo(.9,1.1),I.lineTo(.35,1.1),I.lineTo(.35,2.2),I.lineTo(-.35,2.2),I.lineTo(-.35,1.1),I.lineTo(-.9,1.1),I.closePath();let tt=new re(new Ds(I,{depth:.25,bevelEnabled:!1}),new tn({color:6160234,toneMapped:!1}));tt.position.set(Q.x,6,Q.z),r.add(tt);let V=new re(x,new tn({map:dr("rgba(255,210,80,1)"),transparent:!0,blending:ii,depthWrite:!1,opacity:.6}));V.scale.set(10,1,10),V.position.set(Q.x,.08,Q.z),r.add(V);let et=(()=>{let ee=[];for(let yt=0;yt<=10;yt++){let at=yt/10;ee.push(new _t(1.75*at,.42*(1-Math.pow(at,1.7))+0))}ee.push(new _t(1.75*.995,-.08));let D=new ar(ee,32).toNonIndexed(),J=D.attributes.position,G=[];for(let yt=0;yt<J.count;yt+=3){let at=0,bt=0;for(let Wt=0;Wt<3;Wt++)at+=J.getX(yt+Wt),bt+=J.getZ(yt+Wt);let zt=Math.floor((Math.atan2(bt,at)+Math.PI)/(Math.PI*2)*8)%8%2?[.92,.9,.84]:[.72,.1,.12];for(let Wt=0;Wt<3;Wt++)G.push(...zt)}D.setAttribute("color",new Me(G,3)),D.computeVertexNormals();let H=new _i(.09,8,6).toNonIndexed();return H.translate(0,.45,0),H.setAttribute("color",new Me(new Array(H.attributes.position.count*3).fill(.3),3)),H.deleteAttribute("uv"),D.deleteAttribute("uv"),Fi([D,H])})(),pt=new De({vertexColors:!0,roughness:.8,side:Sn}),z=m.propMat(14606046,.5,.3),Nt=new De({color:13115434,roughness:.7});for(let ee of[-1,1]){let R=T.cx+N.nx*4.8+(N.B[0]-N.A[0])/N.len*ee*3.2,D=T.cz+N.nz*4.8+(N.B[1]-N.A[1])/N.len*ee*3.2,J=new re(new cn(.4,.4,.75,10),z);J.position.set(R,.37,D),J.castShadow=!0,r.add(J);let G=new re(et,pt);G.position.set(R,2.3,D),G.rotation.y=ee*.2,G.castShadow=!0,G.receiveShadow=!0,r.add(G);let H=new re(new cn(.035,.035,2.35,6),z);H.position.set(R,1.17,D),H.castShadow=!0,r.add(H);for(let yt of[0,2.1,4.2]){let at=new re(new cn(.22,.22,.06,12),m.propMat(3815998,.6,.3));at.position.set(R+Math.cos(yt)*.85,.45,D+Math.sin(yt)*.85),at.castShadow=!0,r.add(at)}}{let ee=T.B,R=new An,D=new tn({map:pr("SULTAN GRILL",{fg:"#ffd23f",sub:"D\xD6NER \xB7 PIZZA \xB7 AUFTR\xC4GE"}),toneMapped:!1});m.neonMats.push(D);let J=new re(new En(10,2.5),D);J.rotation.x=-.95,J.position.y=2.2,R.add(J);let G=new re(new Ke(10.4,2.9,.25),m.propMat(2763310));G.rotation.x=-.95,G.position.set(0,2.2-Math.sin(.95)*.2,-Math.cos(.95)*.2),R.add(G);for(let bt of[-4,4]){let oe=new re(new Ke(.2,2.2,.2),m.propMat(3815994,.5,.6));oe.position.set(bt,1.1,-.6),R.add(oe)}let H=T.cx-N.nx*2.5,yt=T.cz-N.nz*2.5;R.position.set(H,ee.h+.45,yt),r.add(R);let at=new re(x,new tn({map:dr("rgba(255,200,60,1)"),transparent:!0,blending:ii,depthWrite:!1,opacity:.5}));at.scale.set(14,1,8),at.position.set(H,ee.h+.5,yt+1),r.add(at)}E={door:Q,ring:vt,arrow:tt,pool:V,sign:Y}}}let M=bc(7,d,{jacket:[.24,.15,.09],shirt:[.78,.76,.7],pants:[.17,.24,.4],hair:[.06,.045,.035],skin:[.84,.63,.48],shoes:[.85,.85,.82],open:!0,long:!1,beanie:!1,coat:!1},1.4);r.add(M);let _=new tn({color:15249978,depthWrite:!1,depthFunc:As,fog:!1,toneMapped:!1});function F(T,N){if(!T.userData.ghosts){let Y=[],Q=[];T.traverse(vt=>{vt.isMesh&&!vt.userData.isGhost&&!(vt.material&&(vt.material.transparent||vt.material.isMeshBasicMaterial))&&Q.push(vt)});for(let vt of Q){let I=new re(vt.geometry,_);I.userData.isGhost=!0,I.renderOrder=1,I.castShadow=I.receiveShadow=!1,I.raycast=()=>{},vt.add(I),Y.push(I),vt.userData.ro0=vt.renderOrder}T.userData.ghosts=Y,T.userData.ghostSrc=Q}for(let Y of T.userData.ghosts)Y.visible=N;for(let Y of T.userData.ghostSrc)Y.renderOrder=N?2:Y.userData.ro0}F(M,!0);let C=null;{let T=new tn({color:16765503,transparent:!0,opacity:.5,depthWrite:!1,depthFunc:As,toneMapped:!1}),N=[];M.traverse(Y=>{Y.isMesh&&Y.material!==d.blob&&N.push(Y)});for(let Y of N){let Q=new re(Y.geometry,T);Q.renderOrder=10,Y.add(Q),Y.material=Y.material.clone(),Y.material.transparent=!0,Y.material.opacity=1,Y.renderOrder=20}}let b={x:E?E.door.x+2.2:0,z:E?E.door.z+4.5:0,rot:Math.PI,vx:0,vz:0,car:null};M.position.set(b.x,0,b.z);let L=Pn(4242),w=[],S=Object.keys(ss);function U(T,N){T.g.userData.cone.visible=N,T.g.userData.hf.material=N?d.head:d.headOff,T.g.userData.hr.material=N?d.tail:d.tailOff}function K(T,N,Y,Q,vt,I){let tt=Vu(T,N,d);tt.position.set(Y,0,Q),tt.rotation.y=vt,r.add(tt);let V={g:tt,type:T,x:Y,z:Q,rot:vt,speed:0,steer:0,ai:I,driven:!1};return w.push(V),U(V,!!I),V}let Z=(T,N,Y)=>{for(let Q of m.grid.near(T,N))if(Ni(T,N,Q[0],Q[1],Q[2],Q[3])[0]<Y)return!1;for(let Q of m.buildings)if(Math.abs(Q.b.p[0][0]-T)<70&&Math.abs(Q.b.p[0][1]-N)<70&&Wn(T,N,Q.b.p))return!1;return!0},j=(T,N,Y)=>m.junctions.some(Q=>Math.hypot(Q[0]-T,Q[1]-N)<Y),st=[];for(let T of m.roadsDrive)if(["residential","unclassified","living_street","tertiary"].includes(T.t))for(let N of[-1,1]){let Y=0;for(let Q=0;Q<T.p.length-1;Q++){let vt=T.p[Q],I=T.p[Q+1],tt=Math.hypot(I[0]-vt[0],I[1]-vt[1]);if(tt<1)continue;let V=(I[0]-vt[0])/tt,et=(I[1]-vt[1])/tt,pt=-et,z=V;for(let Nt=3;Nt<tt-3;Nt+=5.6){if(L()<.4)continue;let ee=T.w/2-1.15,R=vt[0]+V*Nt+pt*ee*N,D=vt[1]+et*Nt+z*ee*N;j(R,D,12)||Z(R,D,1.6)&&(st.some(J=>Math.hypot(J.x-R,J.z-D)<4.8)||st.push({x:R,z:D,rot:Math.atan2(V,et)+(N>0?0:Math.PI)+(L()-.5)*.06}))}}}for(let T of st.slice(0,e?90:140)){let N=["sedan","hatch","kombi","sedan","van","coupe","taxi","hatch","kombi"][L()*9|0];K(N,N==="taxi"?15909376:mr[L()*mr.length|0],T.x,T.z,T.rot,!1)}let $=null;{let T=null,N=1e9;for(let Y of w){let Q=Math.hypot(Y.x-b.x,Y.z-b.z);Q<N&&(N=Q,T=Y)}if(T&&N<40){r.remove(T.g);let Y=K("coupe",13115434,T.x,T.z,T.rot,!1);w.splice(w.indexOf(T),1),$=Y}else{let Y=m.nearRoad(b.x,b.z);$=K("coupe",13115434,b.x+4,b.z+3,0,!1)}}let ut=new Map;m.roadsDrive.forEach((T,N)=>{if(T.t!=="service")for(let Y of[0,1]){let Q=Y?T.nd[T.nd.length-1]:T.nd[0];ut.has(Q)||ut.set(Q,[]),ut.get(Q).push({i:N,e:Y})}});function nt(T,N,Y){let Q=m.roadsDrive[N],vt=Q.p.slice();Y&&vt.reverse(),T.route={ri:N,pts:vt,k:1,rev:Y,ow:Q.ow,w:Q.w}}let Et=m.roadsDrive.map((T,N)=>N).filter(T=>["primary","residential","unclassified","secondary","tertiary","living_street"].includes(m.roadsDrive[T].t)&&m.roadsDrive[T].p.length>=2);for(let T=0;T<(e?16:26)&&Et.length;T++){let N=Et[L()*Et.length|0],Q=!m.roadsDrive[N].ow&&L()<.5,vt=["sedan","hatch","van","taxi","kombi","coupe"][L()*6|0],I=K(vt,vt==="taxi"?15909376:mr[L()*mr.length|0],0,0,0,!0);nt(I,N,Q);let tt=I.route.pts[0];I.x=tt[0],I.z=tt[1],I.speed=6+L()*4,I.max=7+L()*5}function Pt(T){let N=T.route;return N.ow?0:Math.min(N.w/4,2.2)}function Bt(T,N){let Y=T.route;if(!Y)return;let Q=Y.pts[Y.k],vt=Y.pts[Y.k-1],I=Q[0]-vt[0],tt=Q[1]-vt[1],V=Math.hypot(I,tt)||1,et=tt/V,pt=-I/V,z=Pt(T),Nt=Q[0]+et*z,ee=Q[1]+pt*z,R=Nt-T.x,D=ee-T.z;if(Math.hypot(R,D)<2.5){if(Y.k++,Y.k>=Y.pts.length){let Wt=m.roadsDrive[Y.ri],ne=Y.rev?Wt.nd[0]:Wt.nd[Wt.nd.length-1],qt=(ut.get(ne)||[]).filter(Jt=>Jt.i!==Y.ri&&(!m.roadsDrive[Jt.i].ow||Jt.e===0));if(qt.length){let Jt=qt[Math.random()*qt.length|0];nt(T,Jt.i,Jt.e===1)}else if(!Wt.ow)nt(T,Y.ri,!Y.rev);else{let Jt=Et[Math.random()*Et.length|0];nt(T,Jt,!1),T.x=T.route.pts[0][0],T.z=T.route.pts[0][1]}}return}let H=Math.atan2(R,D)-T.rot;for(;H>Math.PI;)H-=2*Math.PI;for(;H<-Math.PI;)H+=2*Math.PI;T.rot+=Math.max(-2*N,Math.min(2*N,H))*(Math.min(1,T.speed/4)+.3);let yt=!1,at=Math.sin(T.rot),bt=Math.cos(T.rot),oe=(Wt,ne)=>{let qt=Wt-T.x,Jt=ne-T.z,Zt=qt*at+Jt*bt,ge=Math.abs(qt*bt-Jt*at);return Zt>0&&Zt<9&&ge<1.8};oe(b.x,b.z)&&(yt=!0);for(let Wt of w)if(Wt!==T&&oe(Wt.x,Wt.z)){yt=!0;break}let zt=yt?0:Math.abs(H)>.6?T.max*.45:T.max;T.speed+=Math.sign(zt-T.speed)*Math.min(Math.abs(zt-T.speed),(yt?14:4)*N),T.x+=Math.sin(T.rot)*T.speed*N,T.z+=Math.cos(T.rot)*T.speed*N}let te=[],we=[];for(let T of i.roads)if(T.t==="pedestrian"||T.t==="foot")we.push({pts:T.p,lat:T.t==="pedestrian"?4.5:.6});else if(["residential","primary","unclassified","tertiary","living_street"].includes(T.t))for(let N of[-1,1])we.push({pts:T.p,off:(T.w/2+1.6)*N,lat:.4});let ot=we.filter(T=>{let N=T.pts[0];return Math.abs(N[0])<300&&Math.abs(N[1])<250});for(let T=0;T<(e?50:90);T++){let N=ot[L()*ot.length|0];if(!N)break;let Y=bc(100+T,d);r.add(Y);let Q={g:Y,path:N,k:1,dir:1,lat:(L()-.5)*2*N.lat,speed:1.1+L()*.6,t:L()},vt=Math.floor(L()*(N.pts.length-1));Q.k=vt+1;let I=N.pts[vt],tt=N.pts[vt+1],V=Mt(N,I,tt,Q.lat,Q.t);if(Q.x=V[0],Q.z=V[1],!Z(Q.x,Q.z,.4)){r.remove(Y);continue}te.push(Q)}function Mt(T,N,Y,Q,vt){let I=Y[0]-N[0],tt=Y[1]-N[1],V=Math.hypot(I,tt)||1,et=-tt/V,pt=I/V,z=(T.off||0)+Q;return[N[0]+I*vt+et*z,N[1]+tt*vt+pt*z]}function Gt(T,N){let Y=T.path,Q=T.dir>0?T.k-1:T.k,vt=Y.pts[T.dir>0?T.k-1:T.k],I=Y.pts[T.dir>0?T.k:T.k-1],tt=Math.hypot(I[0]-vt[0],I[1]-vt[1])||1;T.t+=T.speed*N/tt,T.t>=1&&(T.t=0,T.k+=T.dir,(T.k>=Y.pts.length||T.k<=0)&&(T.dir*=-1,T.k=Math.max(1,Math.min(Y.pts.length-1,T.k))));let V=Y.pts[T.dir>0?T.k-1:T.k],et=Y.pts[T.dir>0?T.k:T.k-1],pt=(Y.off||0)*(T.dir>0?1:-1),z=Mt({off:pt},V,et,T.lat*(T.dir>0?1:-1),T.t),Nt=z[0]-T.x,ee=z[1]-T.z,R={x:z[0],z:z[1]};m.grid.resolve(R,.35),Math.hypot(Nt,ee)>.001&&(T.g.rotation.y=Math.atan2(Nt,ee)),T.x=R.x,T.z=R.z,T.g.position.set(T.x,0,T.z),Ec(T.g,T.speed,N)}let St={afternoon:{sun:16769720,si:2.6,el:34,az:235,sky:12110048,gnd:6970956,hi:1.05,win:.05,shop:.25,neon:.85,pool:0,lamp:.2,bg:9413560,exp:1,bloom:.15,cone:0},dusk:{sun:16756848,si:2.5,el:20,az:250,sky:10528972,gnd:5918792,hi:1.1,win:.7,shop:.75,neon:1.4,pool:.4,lamp:1.2,bg:3813456,exp:1.12,bloom:.55,cone:.35},night:{sun:9414112,si:.8,el:55,az:200,sky:5267616,gnd:2236972,hi:1,win:1.1,shop:.9,neon:1.8,pool:1,lamp:2.5,bg:790042,exp:1.2,bloom:.6,cone:.75}},Vt=Xu.get("time")||t.time||"dusk";function jt(T){St[T]||(T="dusk"),Vt=T;let N=St[T];h.color.setHex(N.sun),h.intensity=N.si,c.color.setHex(N.sky),c.groundColor.setHex(N.gnd),c.intensity=N.hi,r.background=new se(N.bg),r.fog=null;for(let I of m.emiMats)I.emissiveIntensity=N.win;for(let I of m.shopMats)I.emissiveIntensity=N.shop;for(let I of m.neonMats)I.color.setScalar(N.neon);m.poolMat.opacity=N.pool,m.lampHeadMat.emissiveIntensity=N.lamp,d.cone.opacity=N.cone,d.head.emissiveIntensity=T==="afternoon"?.3:1.6,s.toneMappingExposure=N.exp,ct&&(ct.strength=N.bloom);let Y=N.el*Math.PI/180,Q=N.az*Math.PI/180;$t.set(Math.sin(Q)*Math.cos(Y),Math.sin(Y),Math.cos(Q)*Math.cos(Y)*-1).normalize();let vt=document.getElementById("time");vt&&(vt.textContent={afternoon:"NACHMITTAG",dusk:"D\xC4MMERUNG",night:"NACHT"}[T])}let $t=new O,fe=new Lo(s);fe.addPass(new Do(r,o));let ct=new zs(new _t(innerWidth,innerHeight),.5,.5,.82);fe.addPass(ct),fe.addPass(new Uo),jt(Vt);let ft={};addEventListener("keydown",T=>{if(ft[T.code]=!0,T.code==="KeyE"&&dt(),T.code==="KeyT"){let N=Object.keys(St);jt(N[(N.indexOf(Vt)+1)%N.length])}T.code==="KeyB"&&(kt=!kt),(T.code.startsWith("Arrow")||T.code==="Space")&&T.preventDefault()}),addEventListener("keyup",T=>{ft[T.code]=!1});let P=t.zoom||1;addEventListener("wheel",T=>{P=Math.max(.6,Math.min(1.8,P*(T.deltaY>0?1.08:1/1.08)))},{passive:!0});let kt=!0;function dt(){if(b.car){let Y=b.car,Q=Math.cos(Y.rot),vt=-Math.sin(Y.rot),I=Y.x-Q*1.6,tt=Y.z-vt*1.6;b.x=I,b.z=tt,b.car.driven=!1,U(b.car,!1),b.car=null,M.visible=!0;return}let T=null,N=3.6;for(let Y of w){let Q=Math.hypot(Y.x-b.x,Y.z-b.z);Q<N&&(N=Q,T=Y)}T&&(T.ai=!1,T.route=null,T.driven=!0,U(T,!0),b.car=T,M.visible=!1)}let Rt={x:0,z:0},wt=T=>{for(;T>Math.PI;)T-=2*Math.PI;for(;T<-Math.PI;)T+=2*Math.PI;return T};function Kt(T){b.car!==C&&(C&&F(C.g,!1),b.car&&F(b.car.g,!0),C=b.car);let N=ft.KeyW||ft.ArrowUp,Y=ft.KeyS||ft.ArrowDown,Q=ft.KeyA||ft.ArrowLeft,vt=ft.KeyD||ft.ArrowRight,I=n.active&&n.mag>.18;if(b.car){let z=b.car,Nt=ss[z.type],ee=N?9:0,R=Y?z.speed>.5?16:6:0,D=(Q?1:0)-(vt?1:0);if(I){let G=Math.atan2(n.x,n.y),H=wt(G-z.rot),yt=Math.abs(H)>2.3;if(yt)z.speed>.5?(z.speed-=16*T,z.backT=0):(z.backT=(z.backT||0)+T,z.backT>.45||z.speed<-.5?(z.speed-=6*T,D=-Math.max(-1,Math.min(1,wt(G-(z.rot+Math.PI))*2.2))):z.speed*=Math.pow(.1,T));else{let at=24*Math.min(1,n.mag)*(Math.abs(H)>1.1?.55:1);z.speed<at?z.speed+=9*Math.min(1,n.mag+.2)*T:z.speed*=Math.pow(.6,T),z.speed<-.3&&(z.speed+=16*T),D=Math.max(-1,Math.min(1,H*2.2))}yt||(z.backT=0)}else N&&(z.speed+=ee*T),Y&&(z.speed-=R*T),!N&&!Y&&(z.speed*=Math.pow(.55,T));z.speed=Math.max(-6,Math.min(24,z.speed)),(ft.Space||n.hbrake)&&(z.speed*=Math.pow(.05,T)),z.steer+=(D*.6-z.steer)*Math.min(1,T*8),z.rot+=z.steer*z.speed/(Nt.L*.62)*T,z.x+=Math.sin(z.rot)*z.speed*T,z.z+=Math.cos(z.rot)*z.speed*T;let J=!1;for(let G of[-1,1]){let H=Math.sin(z.rot)*G*(Nt.L/2-.9),yt=Math.cos(z.rot)*G*(Nt.L/2-.9);Rt.x=z.x+H,Rt.z=z.z+yt,m.grid.resolve(Rt,Nt.W/2+.05)&&(z.x=Rt.x-H,z.z=Rt.z-yt,J=!0)}for(let G of w){if(G===z)continue;let H=Math.hypot(G.x-z.x,G.z-z.z);if(H<Nt.L*.75){let yt=(z.x-G.x)/H,at=(z.z-G.z)/H;z.x+=yt*(Nt.L*.75-H),z.z+=at*(Nt.L*.75-H),J=!0}}J&&(z.speed*=-.25),b.x=z.x,b.z=z.z;return}let tt=(vt?1:0)-(Q?1:0),V=(Y?1:0)-(N?1:0),et=ft.ShiftLeft?6.2:3.6;I&&(tt=n.x,V=n.y,et=n.mag>.85?6.2:2+n.mag*2.4);let pt=Math.hypot(tt,V);if(pt>0){tt/=pt,V/=pt,b.x+=tt*et*T,b.z+=V*et*T;let z=Math.atan2(tt,V)-b.rot;for(;z>Math.PI;)z-=2*Math.PI;for(;z<-Math.PI;)z+=2*Math.PI;b.rot+=z*Math.min(1,T*14)}Rt.x=b.x,Rt.z=b.z,m.grid.resolve(Rt,.32),b.x=Rt.x,b.z=Rt.z;for(let z of w){let Nt=ss[z.type],ee=(b.x-z.x)*Math.cos(z.rot)-(b.z-z.z)*Math.sin(z.rot),R=(b.x-z.x)*Math.sin(z.rot)+(b.z-z.z)*Math.cos(z.rot);if(Math.abs(ee)<Nt.W/2+.3&&Math.abs(R)<Nt.L/2+.3){let D=Nt.W/2+.3-Math.abs(ee),J=Nt.L/2+.3-Math.abs(R),G=0,H=0;D<J?G=Math.sign(ee)*D:H=Math.sign(R)*J,b.x+=G*Math.cos(z.rot)+H*Math.sin(z.rot),b.z+=-G*Math.sin(z.rot)+H*Math.cos(z.rot)}}b.x=Math.max(-370,Math.min(370,b.x)),b.z=Math.max(-290,Math.min(290,b.z)),M.position.set(b.x,0,b.z),M.rotation.y=b.rot,Ec(M,pt>0?et:0,T),pt===0&&(M.userData.legs.forEach(z=>z.rotation.x*=.8),M.userData.arms.forEach(z=>z.rotation.x*=.8))}let Lt=14*Math.PI/180,A={x:b.x,z:b.z,h:13};function v(T,N){let Y=b.car?Math.abs(b.car.speed):0,Q=b.car?{x:Math.sin(b.car.rot)*Y*.6,z:Math.cos(b.car.rot)*Y*.6}:{x:0,z:0},vt=b.x+Q.x,I=b.z+Q.z,tt=(b.car?17+Y*.45:13)*P,V=N?1:Math.min(1,T*3.2);A.x+=(vt-A.x)*V,A.z+=(I-A.z)*V,A.h+=(tt-A.h)*(N?1:Math.min(1,T*1.5)),l(A.h),o.position.set(A.x,a*Math.cos(Lt),A.z+a*Math.sin(Lt)),o.lookAt(A.x,0,A.z);let et=2*u/h.shadow.mapSize.x,pt=Math.round(A.x/et)*et,z=Math.round(A.z/et)*et;h.target.position.set(pt,0,z),h.position.set(pt+$t.x*250,$t.y*250,z+$t.z*250)}let X=document.getElementById("street"),it=document.getElementById("prompt"),ht="";function rt(){let T=m.nearRoad(b.x,b.z),N="";T&&T.d<25&&(N=T.road.n||""),N&&N!==ht&&(ht=N,X.textContent=N.toUpperCase(),X.classList.remove("pop"),X.offsetWidth,X.classList.add("pop"));let Y="";if(b.car)Dt.nearCar=!1,Y="";else{let Q=w.some(vt=>Math.hypot(vt.x-b.x,vt.z-b.z)<3.6);Dt.nearCar=Q,Q&&(Y="Auto in der N\xE4he \u2014 EINSTEIGEN tippen"),E&&Math.hypot(E.door.x-b.x,E.door.z-b.z)<3&&(Y="SULTAN GRILL \u2014 Auftr\xE4ge gibt's hier bald")}Dt.inCar=!!b.car,it.textContent=Y,it.style.opacity=Y?1:0,t.onState&&t.onState(Dt)}let Dt={inCar:!1,nearCar:!1},Tt=0;function xt(T){Tt+=T,Kt(T);for(let N of w)N.ai&&Bt(N,T),N.g.position.set(N.x,0,N.z),N.g.rotation.y=N.rot;for(let N of te)Math.hypot(N.x-b.x,N.z-b.z)<160&&Gt(N,T);E&&(E.arrow.position.y=5.5+Math.sin(Tt*3)*.6,E.arrow.rotation.set(Math.PI,Tt*1.5,0),E.ring.material.opacity=.55+.35*Math.sin(Tt*4),E.ring.scale.setScalar(1+.08*Math.sin(Tt*4))),v(T)}function de(){kt?fe.render():s.render(r,o)}v(0,!0);let mt=performance.now();function Ot(T){let N=Math.min(.05,(T-mt)/1e3);mt=T,xt(N),rt(),de(),requestAnimationFrame(Ot)}zo||requestAnimationFrame(Ot);let Qt=()=>{l(A.h),s.setSize(innerWidth,innerHeight),fe.setSize(innerWidth,innerHeight)};return addEventListener("resize",Qt),addEventListener("orientationchange",()=>setTimeout(Qt,250)),window.hood={P:b,cars:w,peds:te,city:m,camera:o,scene:r,renderer:s,keys:ft,hub:E,myCar:$,state:Dt,toggleCar:dt,getTime:()=>Vt,getZoom:()=>P,touch:n,setTime:jt,setZoom:T=>{P=T},place(T,N,Y){b.x=T,b.z=N,Y!=null&&(b.rot=Y),M.position.set(T,0,N),v(0,!0),rt()},placeCar(T,N,Y){let Q=$;Q.x=T,Q.z=N,Q.rot=Y,Q.g.position.set(T,0,N),Q.g.rotation.y=Y},enter(){if(!b.car){let T=$;b.x=T.x,b.z=T.z,T.ai=!1,T.driven=!0,U(T,!0),b.car=T,M.visible=!1}},step(T,N=1){let Y=T/N;for(let Q=0;Q<N;Q++)xt(Y);rt()},snap(){v(0,!0)},lineup(T,N,Y=0){let Q=[13115434,2771578,14210248,3824186,14725152,2105380];S.forEach((vt,I)=>K(vt,Q[I%6],T+I*3.2,N,Y,!1))},hidePlayer(T){M.visible=!T},render:de,drawCalls(){s.info.autoReset=!1,s.info.reset(),fe.render();let T={calls:s.info.render.calls,tris:s.info.render.triangles};return s.info.autoReset=!0,T},info(){return{buildings:m.buildings.length,cars:w.length,peds:te.length,P:{x:b.x,z:b.z},hub:E&&E.door,calls:s.info.render.calls,tris:s.info.render.triangles}}},window.hood}var Xu,zo,Yu=fn(()=>{Bn();hu();uu();pu();xu();Fu();Mc();Wu();vc();Xu=new URLSearchParams(location.search),zo=Xu.has("shot")});function Gx(i){let t=2166136261,e=String(i);for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619)>>>0;return t^=t>>>13,t=Math.imul(t,1540483477)>>>0,t^=t>>>15,t>>>0}function ko(i){if(i==null)return null;let t=parseFloat(String(i).replace("m","").replace(",",".").split(";")[0].trim());return isFinite(t)?t:null}function Zu(i){let t=0;for(let e=0;e<i.length;e++){let[n,s]=i[e],[r,o]=i[(e+1)%i.length];t+=n*o-r*s}return t/2}function Wx(i,t){let e=111320*Math.cos(i*Math.PI/180),n=110574,s=460/e,r=380/n,o=`${(i-r).toFixed(6)},${(t-s).toFixed(6)},${(i+r).toFixed(6)},${(t+s).toFixed(6)}`;return`[out:json][timeout:40];(way["building"](${o});relation["building"](${o});way["highway"](${o});way["landuse"](${o});way["leisure"](${o});way["amenity"="parking"](${o});node["natural"="tree"](${o});node["highway"="street_lamp"](${o});node["amenity"~"^(restaurant|fast_food|cafe|bar|pub)$"](${o}););out body;>;out skel qt;`}async function Tc(i,t,e){let n=new AbortController,s=setTimeout(()=>n.abort(),e);try{return await fetch(i,{...t,signal:n.signal})}finally{clearTimeout(s)}}async function $u(i,t,e){let n=Wx(i,t),s=null,r=Date.now(),o=[0,3e3,8e3];for(let l=0;l<o.length;l++){if(o[l])for(let c=o[l]/1e3;c>0;c--)e&&e(`Kartenserver ausgelastet \u2013 neuer Versuch in ${c} s \u2026`),await new Promise(h=>setTimeout(h,1e3));for(let c=0;c<wc.length;c++){let h=wc[c];if(Date.now()-r>15e4)break;try{e&&e(l||c?`Lade Karte \u2013 Server ${c+1}/${wc.length}, Versuch ${l+1} \u2026`:"Lade Stra\xDFen und H\xE4user aus OpenStreetMap \u2026");let f=await Tc(h,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"data="+encodeURIComponent(n)},c===0?4e4:35e3);if(!f.ok){s=new Error("HTTP "+f.status);continue}e&&e("Karte empfangen, lese Daten \u2026");let u=await f.json();if(!u.elements){s=new Error("leere Antwort");continue}if(u.remark&&/timed out|runtime error/i.test(u.remark)&&u.elements.length<50){s=new Error(u.remark);continue}return u.elements}catch(f){s=f}}}let a=new Error("overpass");throw a.cause=s,a.timeout=!!(s&&s.name==="AbortError"),a}function Ju(i,t,e){let n=111320*Math.cos(t*Math.PI/180),s=110574,r=(m,x)=>[Math.round((x-e)*n*100)/100,Math.round(-(m-t)*s*100)/100],o=m=>Math.abs(m[0])<380&&Math.abs(m[1])<300,a=new Map,l=new Map;for(let m of i)m.type==="node"&&m.lat!=null?a.set(m.id,[m.lat,m.lon]):m.type==="way"&&l.set(m.id,m);for(let m of i)m.type==="way"&&m.tags&&l.set(m.id,m);let c={buildings:[],roads:[],areas:[],trees:[],lamps:[],pois:[]},h=new Set;function f(m,x,g){if(h.has(m))return;h.add(m);let d=x.filter(K=>a.has(K)).map(K=>r(...a.get(K)));if(d.length>1&&d[0][0]===d[d.length-1][0]&&d[0][1]===d[d.length-1][1]&&(d=d.slice(0,-1)),d.length<3)return;let E=0,M=0;for(let K of d)E+=K[0],M+=K[1];if(E/=d.length,M/=d.length,!o([E,M]))return;let _=Zu(d);_<0&&d.reverse();let F=Math.abs(_);if(F<6)return;let C=g.building||"yes";if(["roof","carport","construction","ruins"].includes(C)||g["building:part"])return;let b=ko(g["building:levels"]),L=ko(g.height),w=Gx(m);b==null&&(["garage","garages","shed","kiosk","hut"].includes(C)?b=1:F<40?b=2:F<120?b=3+w%2:b=4+w%3);let S=ko(g["roof:levels"])||0;L==null&&(L=b*3.3+(b>1?1:.4)+S*1.8),L=Math.max(L,3.2),L>160&&(L=160);let U="res";(["retail","commercial","office","supermarket","department_store","hotel"].includes(C)||g.shop||g.amenity)&&(U="shop"),["church","cathedral","chapel"].includes(C)&&(U="church"),["garage","garages","parking"].includes(C)&&(U="garage"),c.buildings.push({id:m,p:d,h:Math.round(L*10)/10,lv:Math.max(1,Math.round(b+S*.5)),k:U,r:w,n:g.name||""})}for(let m of l.values()){let x=m.tags||{};x.building&&m.nodes&&m.nodes[0]===m.nodes[m.nodes.length-1]&&f(m.id,m.nodes,x)}for(let m of i){if(m.type!=="relation"||!m.tags||!m.tags.building)continue;let x=m.members.filter(d=>d.type==="way"&&d.role==="outer"&&l.has(d.ref)).map(d=>l.get(d.ref).nodes.slice()),g=[];for(;x.length;){let d=x.shift(),E=!0;for(;d[0]!==d[d.length-1]&&E;){E=!1;for(let M=0;M<x.length;M++){let _=x[M];if(_[0]===d[d.length-1]){d=d.concat(_.slice(1)),x.splice(M,1),E=!0;break}if(_[_.length-1]===d[d.length-1]){d=d.concat(_.slice().reverse().slice(1)),x.splice(M,1),E=!0;break}}}d[0]===d[d.length-1]&&g.push(d)}g.forEach((d,E)=>f(m.id*10+E,d,m.tags))}let u={primary:12,primary_link:7,secondary:10,secondary_link:7,tertiary:9,tertiary_link:7,residential:7,unclassified:7,living_street:6,service:4.5,pedestrian:0,trunk:13,trunk_link:7},p={trunk:"primary",trunk_link:"primary_link",secondary_link:"secondary",tertiary_link:"tertiary"};for(let m of l.values()){let x=m.tags||{},g=x.highway;if(!g||!m.nodes)continue;let d=m.nodes.filter(_=>a.has(_)),E=d.map(_=>r(...a.get(_)));if(E.length<2||!E.some(o))continue;let M=m.nodes[0]===m.nodes[m.nodes.length-1];if(g==="pedestrian"&&(x.area==="yes"||M&&x.area!=="no")){c.areas.push({t:"plaza",p:E.slice(0,-1)});continue}if(g in u){let _=u[g],F=p[g]||g;F==="primary"&&x.oneway==="yes"&&(_=8);let C=ko(x.lanes);if(C&&g!=="pedestrian"&&(_=Math.min(Math.max(_,C*3.2),20)),g==="pedestrian"&&(_=8),g==="service"&&x.service==="parking_aisle"&&(_=5),x.tunnel==="yes"||String(x.layer||"0").startsWith("-")||x.area==="yes")continue;c.roads.push({t:F,w:_,p:E,n:x.name||"",ow:x.oneway==="yes",nd:d})}else if(["footway","path","cycleway","steps"].includes(g)&&!["sidewalk","crossing"].includes(x.footway)){if(x.tunnel==="yes")continue;c.roads.push({t:"foot",w:3,p:E,n:"",ow:!1,nd:d})}}for(let m of l.values()){let x=m.tags||{},g=x.landuse||x.leisure||(x.amenity==="parking"?"parking":null);if(g&&m.nodes&&m.nodes[0]===m.nodes[m.nodes.length-1]){let d=m.nodes.slice(0,-1).filter(M=>a.has(M)).map(M=>r(...a.get(M)));if(d.length<3||!d.some(o))continue;let E=["grass","village_green","park","garden","flowerbed","playground","dog_park","meadow","recreation_ground","cemetery"].includes(g)?"grass":g==="parking"?"parking":null;E&&c.areas.push({t:E,p:d})}}for(let m of i){if(m.type!=="node"||!m.tags)continue;let x=m.tags,g=r(m.lat,m.lon);o(g)&&(x.natural==="tree"?c.trees.push(g):x.highway==="street_lamp"?c.lamps.push(g):["restaurant","fast_food","cafe","bar","pub"].includes(x.amenity)&&c.pois.push({p:g,a:x.amenity,c:x.cuisine||""}))}if(c.lamps.length<25)for(let m of c.roads){if(!["residential","primary","secondary","tertiary","unclassified","living_street"].includes(m.t))continue;let x=13;for(let g=0;g<m.p.length-1;g++){let d=m.p[g],E=m.p[g+1],M=Math.hypot(E[0]-d[0],E[1]-d[1]);if(M<1)continue;let _=(E[0]-d[0])/M,F=(E[1]-d[1])/M;for(;x<M;){let C=c.lamps.length%2?1:-1,b=d[0]+_*x-F*(m.w/2+1.2)*C,L=d[1]+F*x+_*(m.w/2+1.2)*C;o([b,L])&&c.lamps.push([Math.round(b*100)/100,Math.round(L*100)/100]),x+=28}x-=M}}return c.fallbackHub=Yx(c),c}function Xx(i,t,e){let n=!1;for(let s=0,r=e.length-1;s<e.length;r=s++){let o=e[s],a=e[r];o[1]>t!=a[1]>t&&i<(a[0]-o[0])*(t-o[1])/(a[1]-o[1])+o[0]&&(n=!n)}return n}function Ku(i,t,e,n,s,r){let o=s-e,a=r-n,l=o*o+a*a||1,c=((i-e)*o+(t-n)*a)/l;return c=Math.max(0,Math.min(1,c)),Math.hypot(i-e-o*c,t-n-a*c)}function qx(i,t,e,n){for(let s of i.buildings){let r=s.p;if(!(Math.abs(r[0][0]-t)>120||Math.abs(r[0][1]-e)>120))for(let o=0;o<r.length;o++){let a=r[o],l=r[(o+1)%r.length];if(Ku(t,e,a[0],a[1],l[0],l[1])<n)return!0}}return!1}function Yx(i){if(i.pois.some(r=>["fast_food","restaurant"].includes(r.a)&&Math.abs(r.p[0])<300&&Math.abs(r.p[1])<250&&qx(i,r.p[0],r.p[1],18)))return null;let e=new Set(["primary","secondary","tertiary","residential","unclassified","living_street","pedestrian"]),n=[];for(let r of i.roads)if(e.has(r.t))for(let o=0;o<r.p.length-1;o++){let a=r.p[o],l=r.p[o+1],c=Math.hypot(l[0]-a[0],l[1]-a[1]);if(!(c<12))for(let h of[.3,.5,.7]){let f=a[0]+(l[0]-a[0])*h,u=a[1]+(l[1]-a[1])*h;Math.abs(f)>250||Math.abs(u)>200||n.push({x:f,z:u,tx:(l[0]-a[0])/c,tz:(l[1]-a[1])/c,w:r.w||7,d:Math.hypot(f,u)})}}n.sort((r,o)=>r.d-o.d);let s=[];for(let r of i.roads)if(r.t!=="foot")for(let o=0;o<r.p.length-1;o++)s.push([r.p[o],r.p[o+1],r.w||5]);for(let r of n.slice(0,400))for(let o of[1,-1]){let a=-r.tz*o,l=r.tx*o,c=r.w/2+5.5,h=r.x+a*c,f=r.z+l*c,u=3.6,p=2.6,m=[[-u,-p],[u,-p],[u,p],[-u,p]].map(([M,_])=>[h+r.tx*M+a*_,f+r.tz*M+l*_]),x=m.concat([[h,f]]),g=!1;for(let M of x){for(let _ of i.buildings)if(!(Math.abs(_.p[0][0]-M[0])>150||Math.abs(_.p[0][1]-M[1])>150)&&Xx(M[0],M[1],_.p)){g=!0;break}if(g)break;for(let _ of s)if(Ku(M[0],M[1],_[0][0],_[0][1],_[1][0],_[1][1])<_[2]/2+1.2){g=!0;break}if(g)break}if(g)continue;Zu(m)<0&&m.reverse(),i.buildings.push({id:-777,p:m.map(M=>[Math.round(M[0]*100)/100,Math.round(M[1]*100)/100]),h:3.8,lv:1,k:"shop",r:777123,n:"Kiosk"});let d=h-a*(p+.3),E=f-l*(p+.3);return i.pois.push({p:[d,E],a:"fast_food",c:"kebab",fallback:!0}),{x:h,z:f}}return i.buildings.push({id:-777,p:[[-3.6,-2.6],[3.6,-2.6],[3.6,2.6],[-3.6,2.6]],h:3.8,lv:1,k:"shop",r:777123,n:"Kiosk"}),i.pois.push({p:[0,2.9],a:"fast_food",c:"kebab",fallback:!0}),{x:0,z:0}}async function Qu(i){let t="https://nominatim.openstreetmap.org/search?format=jsonv2&limit=8&accept-language=de&q="+encodeURIComponent(i),e=await Tc(t,{headers:{Accept:"application/json"}},15e3);if(!e.ok)throw new Error("HTTP "+e.status);return(await e.json()).map(s=>({name:s.display_name,short:s.name||s.display_name.split(",")[0],lat:+s.lat,lon:+s.lon,type:s.type}))}async function ju(i,t){try{let s=(await(await Tc(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&zoom=16&accept-language=de&lat=${i}&lon=${t}`,{},1e4)).json()).address||{};return[s.suburb||s.neighbourhood||s.road,s.city||s.town||s.village].filter(Boolean).join(", ")||"Mein Standort"}catch{return"Mein Standort"}}var wc,tf=fn(()=>{wc=["https://overpass-api.de/api/interpreter","https://maps.mail.ru/osm/tools/overpass/api/interpreter","https://overpass.private.coffee/api/interpreter"]});var s_=uf(()=>{Yu();tf();var ce=i=>document.getElementById(i),Ho=new URLSearchParams(location.search),Vo=Ho.has("shot"),Ln={get(i,t){try{let e=localStorage.getItem("hood."+i);return e==null?t:JSON.parse(e)}catch{return t}},set(i,t){try{return localStorage.setItem("hood."+i,JSON.stringify(t)),!0}catch{return!1}},del(i){try{localStorage.removeItem("hood."+i)}catch{}}},Zx={name:"Dortmund-Innenstadt",lat:51.514,lon:7.46225,builtin:!0},kn={active:!1,x:0,y:0,mag:0,hbrake:!1},Kn=null;function Go(i){ce("loading").classList.remove("hidden","error"),ce("loadMsg").textContent=i,ce("loadBtns").innerHTML=""}function $x(i,t){ce("loading").classList.remove("hidden"),ce("loading").classList.add("error"),ce("loadMsg").textContent=i;let e=ce("loadBtns");e.innerHTML="";for(let[n,s]of t){let r=document.createElement("button");r.className="btn",r.textContent=n,r.onclick=s,e.appendChild(r)}}function ef(){ce("loading").classList.add("hidden")}var rf=()=>new Promise(i=>requestAnimationFrame(()=>requestAnimationFrame(i)));function Jx(i){return new Promise((t,e)=>{let n=document.createElement("script");n.src=i,n.onload=t,n.onerror=e,document.head.appendChild(n)})}var nf=i=>i.lat.toFixed(5)+","+i.lon.toFixed(5);async function Kx(i){if(i.builtin)return window.HOOD_DATA||(Go("Lade Dortmund \u2026"),await Jx("data.js?v="+(window.HOOD_V||""))),window.HOOD_DATA;let t=Ln.get("cache",null);if(t&&t.key===nf(i)&&t.data)return t.data;Go("Lade \u201E"+i.name+"\u201C aus OpenStreetMap \u2026");let e=await $u(i.lat,i.lon,s=>{ce("loadMsg").textContent=s});ce("loadMsg").textContent="Rechne Grundrisse und Stra\xDFen um \u2026",await rf();let n=Ju(e,i.lat,i.lon);if(n.buildings.length<8&&n.roads.length<6){let s=new Error("empty");throw s.empty=!0,s}return Ln.set("cache",{key:nf(i),data:n})||Ln.del("cache"),n}async function Qx(){let i=Ln.get("city",null),t=Ho.get("lat"),e=Ho.get("lon");t&&e&&(i={name:Ho.get("name")||"Ort",lat:+t,lon:+e}),(!i||!isFinite(i.lat))&&(i=Zx);let n;try{n=await Kx(i)}catch(s){console.warn(s);let r=s.empty?"Rund um \u201E"+i.name+"\u201C gibt es in OpenStreetMap kaum H\xE4user oder Stra\xDFen. Such dir einen Ort mit mehr Stadt.":(s.timeout?"Zeit\xFCberschreitung: Der Kartenserver (Overpass) hat zu lange gebraucht.":"Der Kartenserver (OpenStreetMap / Overpass) antwortet gerade nicht oder ist \xFCberlastet.")+" Bitte gleich nochmal versuchen \u2013 oder erst mal in Dortmund spielen.";$x(r,[["Nochmal versuchen",()=>location.reload()],["Andere Stadt suchen",()=>{ef(),Wo(!0)}],["Zur\xFCck nach Dortmund",()=>{Ln.del("city"),location.href=location.pathname+location.search.replace(/[?&](lat|lon|name)=[^&]*/g,"")}]]);return}Go("Baue "+i.name+" ("+n.buildings.length+" H\xE4user) \u2026"),await rf(),Kn=qu(n,{touch:kn,hubNear:i.builtin?[-146.9,-38.7]:[0,0],time:Ln.get("time","dusk"),zoom:Ln.get("zoom",matchMedia("(pointer:coarse)").matches?.8:1),onState:n_}),ce("cityName").textContent=i.name,ce("curCity").textContent=i.name,ef(),!Ln.get("seen",!1)&&!Vo?Wo(!0):Vo||hf(),lf(),cf()}function Wo(i){ce("menu").classList.remove("hidden"),ce("menu").classList.toggle("start",!!i),ce("resList").innerHTML="",ce("searchMsg").textContent="",xr()}function of(){ce("menu").classList.add("hidden"),Ln.set("seen",!0),hf(),jx()}function jx(){if(Vo)return;let i=document.documentElement;try{!document.fullscreenElement&&i.requestFullscreen&&matchMedia("(pointer:coarse)").matches&&i.requestFullscreen({navigationUI:"hide"}).then(()=>{try{screen.orientation.lock("landscape").catch(()=>{})}catch{}}).catch(()=>{})}catch{}}function Rc(i){Ln.set("city",{name:i.name,lat:i.lat,lon:i.lon}),Ln.set("seen",!0),Go("Lade \u201E"+i.name+"\u201C \u2026");let t=new URL(location.href);["lat","lon","name"].forEach(e=>t.searchParams.delete(e)),location.href=t.toString()}var Ac=!1;async function af(i){i&&i.preventDefault();let t=ce("searchIn").value.trim();if(!(t.length<2||Ac)){Ac=!0,ce("searchMsg").textContent="Suche \u2026",ce("resList").innerHTML="",ce("searchIn").blur();try{let e=await Qu(t);if(!e.length)ce("searchMsg").textContent="Keine Treffer f\xFCr \u201E"+t+"\u201C. Versuch es mit Stadt und Stadtteil, z. B. \u201ELeipzig Connewitz\u201C.";else{ce("searchMsg").textContent="Tippe auf einen Ort:";for(let n of e){let s=document.createElement("button");s.className="res",s.innerHTML="<b></b><span></span>",s.querySelector("b").textContent=n.short,s.querySelector("span").textContent=n.name,s.onclick=()=>Rc({name:n.short,lat:n.lat,lon:n.lon}),ce("resList").appendChild(s)}}}catch{ce("searchMsg").textContent="Suche gerade nicht erreichbar (keine Verbindung?). Bitte nochmal versuchen."}Ac=!1}}function t_(){if(!navigator.geolocation){ce("searchMsg").textContent="Standort wird von diesem Browser nicht unterst\xFCtzt \u2014 nutz einfach die Suche.";return}ce("searchMsg").textContent="Frage Standort ab \u2026",navigator.geolocation.getCurrentPosition(async i=>{let t=i.coords.latitude,e=i.coords.longitude;ce("searchMsg").textContent="Standort gefunden \u2026";let n=await ju(t,e);Rc({name:n,lat:t,lon:e})},()=>{ce("searchMsg").textContent="Standort nicht freigegeben oder nicht verf\xFCgbar \u2014 nutz einfach die Suche."},{enableHighAccuracy:!1,timeout:12e3,maximumAge:6e5})}function lf(){let i=Kn?Kn.getTime():"dusk";document.querySelectorAll("[data-time]").forEach(t=>t.classList.toggle("on",t.dataset.time===i))}function cf(){let i=Kn?Kn.getZoom():.8;document.querySelectorAll("[data-zoom]").forEach(t=>t.classList.toggle("on",Math.abs(+t.dataset.zoom-i)<.01))}var ks=null,ri=0,oi=0,gr=58;function Xo(i,t){let e=i-ri,n=t-oi,s=Math.hypot(e,n);s>gr&&(ri+=e*(1-gr/s),oi+=n*(1-gr/s),e=i-ri,n=t-oi,s=gr),kn.x=s?e/s:0,kn.y=s?n/s:0,kn.mag=s/gr,kn.active=!0,ce("stickBase").style.transform=`translate(${ri}px,${oi}px)`,ce("stickKnob").style.transform=`translate(${ri+e}px,${oi+n}px)`}function xr(){ks=null,kn.active=!1,kn.mag=0,kn.x=kn.y=0,ce("stick").classList.remove("live")}function e_(){let i=ce("stickZone");i.addEventListener("pointerdown",e=>{if(ks===null){ks=e.pointerId;try{i.setPointerCapture(e.pointerId)}catch{}ri=e.clientX,oi=e.clientY,ce("stick").classList.add("live"),ce("hint").classList.add("hidden"),Xo(e.clientX,e.clientY),e.preventDefault()}}),i.addEventListener("pointermove",e=>{e.pointerId===ks&&(Xo(e.clientX,e.clientY),e.preventDefault())});for(let e of["pointerup","pointercancel","lostpointercapture"])i.addEventListener(e,n=>{n.pointerId===ks&&xr()});addEventListener("blur",xr),document.addEventListener("visibilitychange",()=>{document.hidden&&(xr(),kn.hbrake=!1)});let t=()=>{if(ks!==null)return;let e=i.getBoundingClientRect();ri=e.left+Math.min(130,e.width*.35),oi=e.bottom-Math.min(120,e.height*.3),ce("stickBase").style.transform=`translate(${ri}px,${oi}px)`,ce("stickKnob").style.transform=`translate(${ri}px,${oi}px)`};t(),addEventListener("resize",t),i.addEventListener("pointerup",()=>setTimeout(t,0)),window.__stickPlace=t}function n_(i){let t=ce("btnCar");t.textContent=i.inCar?"AUSSTEIGEN":"EINSTEIGEN",t.classList.toggle("dim",!i.inCar&&!i.nearCar),ce("btnBrake").classList.toggle("hidden",!i.inCar),document.body.classList.toggle("incar",i.inCar)}function i_(){ce("btnCar").addEventListener("pointerdown",t=>{if(t.preventDefault(),Kn&&Kn.toggleCar(),navigator.vibrate)try{navigator.vibrate(15)}catch{}});let i=ce("btnBrake");i.addEventListener("pointerdown",t=>{t.preventDefault();try{i.setPointerCapture(t.pointerId)}catch{}kn.hbrake=!0,i.classList.add("down")});for(let t of["pointerup","pointercancel","lostpointercapture"])i.addEventListener(t,()=>{kn.hbrake=!1,i.classList.remove("down")});ce("menuBtn").addEventListener("click",()=>Wo(!1)),ce("playBtn").addEventListener("click",of),ce("searchForm").addEventListener("submit",af),ce("locBtn").addEventListener("click",t_),document.querySelectorAll("[data-time]").forEach(t=>t.addEventListener("click",()=>{Kn&&Kn.setTime(t.dataset.time),Ln.set("time",t.dataset.time),lf()})),document.querySelectorAll("[data-zoom]").forEach(t=>t.addEventListener("click",()=>{Kn&&Kn.setZoom(+t.dataset.zoom),Ln.set("zoom",+t.dataset.zoom),cf()}));for(let t of["gesturestart","dblclick"])document.addEventListener(t,e=>e.preventDefault());document.addEventListener("contextmenu",t=>{t.target.closest("input")||t.preventDefault()})}var sf=0;function hf(){let i=ce("hint");i.classList.remove("hidden"),clearTimeout(sf),sf=setTimeout(()=>i.classList.add("hidden"),6e3)}Vo&&document.body.classList.add("shot");e_();i_();Qx();window.hoodApp={TOUCH:kn,openMenu:Wo,closeMenu:of,stickUpdate:(i,t)=>Xo(i,t),stickStart:(i,t)=>{ri=i,oi=t,ce("stick").classList.add("live"),Xo(i,t)},releaseStick:xr,chooseCity:Rc,doSearch:af,LS:Ln}});s_();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
