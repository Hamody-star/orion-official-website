(function(){
const $=(s,r=document)=>r.querySelector(s);
const langButton=$(".lang");
let lang=localStorage.getItem("orion-language")==="en"?"en":"ar";
function setLanguage(next){lang=next;localStorage.setItem("orion-language",lang);document.documentElement.lang=lang;document.documentElement.dir=lang==="ar"?"rtl":"ltr";document.querySelectorAll("[data-ar][data-en]").forEach(el=>{el.textContent=el.dataset[lang]});if(langButton)langButton.textContent=lang==="ar"?"English":"عربي";}
if(langButton)langButton.addEventListener("click",()=>setLanguage(lang==="ar"?"en":"ar"));setLanguage(lang);
document.querySelectorAll(".show-pass").forEach(btn=>btn.addEventListener("click",()=>{const field=document.getElementById(btn.dataset.target);if(!field)return;const show=field.type==="password";field.type=show?"text":"password";btn.textContent=lang==="ar"?(show?"إخفاء":"إظهار"):(show?"Hide":"Show");}));
const message=$("#formMessage");
const login=$("#loginForm");
if(login)login.addEventListener("submit",e=>{e.preventDefault();if(!login.reportValidity())return;if(message)message.textContent=lang==="ar"?"واجهة تسجيل الدخول جاهزة. يلزم ربط خدمة المصادقة الآمنة قبل قبول الحسابات.":"The sign-in interface is ready. A secure authentication service must be connected before accounts can sign in.";});
const signup=$("#signupForm");
if(signup)signup.addEventListener("submit",e=>{e.preventDefault();if(!signup.reportValidity())return;const p=$("#newPassword"),c=$("#confirmPassword");if(p&&c&&p.value!==c.value){c.setCustomValidity(lang==="ar"?"كلمتا المرور غير متطابقتين":"Passwords do not match");c.reportValidity();c.setCustomValidity("");return;}if(message)message.textContent=lang==="ar"?"تم التحقق من المدخلات في الواجهة. إنشاء الحساب الفعلي ينتظر ربط Backend آمن والتحقق من البريد أو الهاتف.":"Form validation passed. Live account creation is pending secure backend integration and email/phone verification.";});
const recovery=$("#forgotForm");if(recovery)recovery.addEventListener("submit",e=>{e.preventDefault();if(!recovery.reportValidity())return;if(message)message.textContent=lang==="ar"?"تم فحص البريد في الواجهة. إرسال رابط الاستعادة سيتاح بعد ربط خدمة البريد وBackend آمن.":"Email format validated. Recovery delivery will be available after a secure backend and email provider are connected.";});
})();