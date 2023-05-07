// ==UserScript==
// @name              KeepBingChat
// @description       ChatGPT畅聊插件。解决所有报错，让我们的AI体验无比顺畅、丝滑、高效。持续更新的增强功能，如取消审计等。解决的报错如下: (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com. (3) Conversation not found. (4) This content may violate our content policy.
// @version           1.0
// @author            xcanwin
// @namespace         https://github.com/xcanwin/KeepBingChat/
// @supportURL        https://github.com/xcanwin/KeepBingChat/
// @updateURL         https://raw.githubusercontent.com/xcanwin/KeepBingChat/main/KeepBingChat.user.js
// @downloadURL       https://raw.githubusercontent.com/xcanwin/KeepBingChat/main/KeepBingChat.user.js
// @description:ar    تجاوز قيود Bing وتقنية المكونات الإضافية، وتمكين الوصول إلى ChatGPT من New Bing على أي متصفح ونظام محمول ونظام كمبيوتر
// @description:bg    Преодолете ограниченията на Bing и техническите ограничения на добавките, за да осигурите достъп до ChatGPT от New Bing на всякакъв браузър, мобилна операционна система и компютърна система
// @description:cs    Překonejte omezení Bing a technické omezení doplňků a umožněte přístup k ChatGPT z New Bing na jakémkoli prohlížeči, mobilním operačním systému a PC systému
// @description:da    Overvind Bing's begrænsninger og plugin-tekniske begrænsninger og muliggør adgang til ChatGPT fra New Bing på enhver browser, mobiloperativsystem og pc-operativsystem
// @description:de    Überwinden Sie die Beschränkungen von Bing und den technischen Engpass von Plugins und ermöglichen Sie den Zugriff auf ChatGPT von New Bing in jedem Browser, Mobilbetriebssystem und PC-Betriebssystem
// @description:el    Ξεπεράστε τους περιορισμούς του Bing και τους τεχνικούς περιορισμούς των προσθέτων για να διασφαλίσετε την πρόσβαση στο ChatGPT από το New Bing σε οποιονδήποτε περιηγητή, κινητό λειτουργικό σύστημα και υπολογιστικό σύστημα
// @description:en    Overcome Bing's restrictions and plugin technology bottlenecks, enabling access to ChatGPT from New Bing on any browser, mobile operating system, and PC system
// @description:eo    Superu Bing-ajn limigojn kaj limigojn de kromaĵoj de la teknologio, ebligante aliron al ChatGPT de New Bing en ajna retumilo, mobiloperacia sistemo kaj komputila sistemo
// @description:es    Supera las restricciones de Bing y los cuellos de botella de la tecnología de complementos, permitiendo el acceso a ChatGPT de New Bing en cualquier navegador, sistema operativo móvil y sistema operativo de PC
// @description:fi    Murra Bingin rajoitukset ja laajennusteknologian pullonkaulat, mahdollistaen pääsyn ChatGPT:hen New Bingissä millä tahansa selaimella, mobiilikäyttöjärjestelmällä ja PC-järjestelmällä
// @description:fr    Surmontez les restrictions de Bing et les limitations technologiques des plugins, permettant l'accès à ChatGPT depuis New Bing sur n'importe quel navigateur, système d'exploitation mobile et système PC
// @description:fr-CA Surmontez les restrictions de Bing et les limitations technologiques des modules complémentaires, permettant l'accès à ChatGPT depuis New Bing sur n'importe quel navigateur, système d'exploitation mobile et système PC
// @description:he    התעלה על ההגבלות של Bing ועל המגבלות הטכנולוגיות של התוספים, באפשרות גישה ל-ChatGPT מ-New Bing בכל דפדפן, מערכת הפעלה ניידת ומערכת הפעלה של מחשב
// @description:hu    Törjük át a Bing korlátait és a bővítmény technológia korlátait, hogy lehetővé tegyük a ChatGPT elérését New Bingen bármely böngészőben, mobil operációs rendszerben és PC rendszerben
// @description:id    Tembus Batasan Bing dan Batasan Teknologi Plugin, memungkinkan akses ke ChatGPT dari New Bing pada semua browser, sistem operasi seluler, dan sistem PC
// @description:it    Superare le restrizioni di Bing e i limiti tecnologici dei plugin, consentendo l'accesso a ChatGPT da New Bing su qualsiasi browser, sistema operativo mobile e sistema PC
// @description:ja    Bingの制限とプラグイン技術のボトルネックを突破し、任意のブラウザ、モバイルオペレーティングシステム、PCシステムからNew BingのChatGPTへアクセスを可能にする
// @description:ka    Bing-ის შეზღუდვებისა და მოდულის ტექნოლოგიური ნაკრებების გადართვა, რათა შეძლოთ ნებადართული ყველა ბრაუზერი, მობილური ოპერაციული სისტემა და PC სისტემა წვდომა New Bing-ის ChatGPT-ს
// @description:ko    Bing 제한과 플러그인 기술적 한계를 극복하여 모든 브라우저, 모바일 운영 체제 및 PC 시스템에서 New Bing의 ChatGPT에 액세스 가능
// @description:nb    Bryt gjennom Bing-begrensninger og plugin-tekniske flaskehalser, slik at New Bing ChatGPT kan nås via hvilken som helst nettleser, mobiloperativsystem og PC-system
// @description:nl    Doorbreek de beperkingen van Bing en de technologische belemmeringen van plugins, waardoor toegang tot ChatGPT vanuit New Bing mogelijk is op elke browser, mobiel besturingssysteem en pc-systeem
// @description:pl    Przełam ograniczenia Bing i technologiczne wąskie gardła wtyczek, umożliwiając dostęp do ChatGPT z New Bing na dowolnej przeglądarce, systemie operacyjnym mobilnym i systemie PC
// @description:pt-BR Supere as restrições do Bing e as limitações tecnológicas dos plugins, permitindo o acesso ao ChatGPT do New Bing em qualquer navegador, sistema operacional móvel e sistema PC
// @description:ro    Depășiți restricțiile Bing și limitările tehnologice ale modulelor suplimentare, permițând accesul la ChatGPT de la New Bing pe orice browser, sistem de operare mobil și sistem PC
// @description:ru    Преодолейте ограничения Bing и технологические проблемы плагинов, обеспечив доступ к ChatGPT из New Bing на любом браузере, мобильной операционной системе и ПК-системе
// @description:sk    Prekonajte obmedzenia Bing a technologické obmedzenia doplnkov, umožňujúc prístup k ChatGPT z New Bingu na akomkoľvek prehliadači, mobilnom operačnom systéme a PC systéme
// @description:sr    Пребродите Бингова ограничења и технолошке проблеме додатака, омогућавајући приступ ЧатГПТ-у из Новог Бинга на било којем прегледачу, мобилном оперативном систему и ПЦ систему
// @description:sv    Överträffa begränsningarna i Bing och de tekniska flaskhalsarna för tillägg, vilket gör att ChatGPT kan nås från New Bing i valfri webbläsare, mobiloperativsystem och PC-system
// @description:th    เอาชนะข้อ จำกัด ของ Bing และข้อจำกัดทางเทคโนโลยีของปลั๊กอิน เพื่อให้สามารถเข้าถึง ChatGPT จาก New Bing ได้ผ่านเบราว์เซอร์ ระบบปฏิบัติการบนมือถือและระบบ PC ทุกแห่ง
// @description:tr    Bing sınırlamalarını ve eklenti teknolojisi engellerini aşarak, herhangi bir tarayıcıda, mobil işletim sisteminde ve PC sistemlerinde New Bing'in ChatGPT'sine erişim sağlamak
// @description:uk    Долуйте обмеження Bing та технологічні пастки плагінів, щоб забезпечити доступ до ChatGPT з New Bing на будь-якому браузері, мобільній операційній системі та ПК-системі
// @description:ug    Bing تەڭشىكىسىنى ۋە قوشۇمچە تەكنولوگىيىلىك چەكلىمىسىنى سۈرۈپ، چىقىڭ Bing تىن New Bing ChatGPT گە ئىشلىتىشنىڭ ھەر قاچىسى
// @description:vi    Vượt qua các hạn chế của Bing và các rào cản công nghệ của các tiện ích, đảm bảo truy cập vào ChatGPT từ New Bing trên bất kỳ trình duyệt, hệ điều hành di động và hệ điều hành PC nào
// @description:zh-CN 突破Bing限制和插件技术瓶颈，实现任何浏览器、移动系统、PC系统都能访问New Bing的ChatGPT。
// @description:zh-TW 突破Bing限制和插件技术瓶颈，实现任何浏览器、移动系统、PC系统都能访问New Bing的ChatGPT。
// @icon              data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" stroke-width="2" fill="none" stroke="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
// @license           GPL-2.0-only
// @match             https://www.bing.com/*
// @match             https://www.bing.com/chat
// @run-at            document-idle
// @noframes
// ==/UserScript==

(function() {
    'use strict';

    if (!location.href.match(/.*q=(bingchat|Bing\+AI).*/)) {
        return;
    }

    const setIfr = function(u = "") {
        const kbc = document.createElement('iframe');
        kbc.id = 'xcanwin';
        kbc.style = `position: fixed; top: 0; left: 0; width: 100%;height: 100%; border: none;`;
        document.documentElement.appendChild(kbc);
        const headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 Edg/114.0.1788.0"
        };
        fetch(u, {headers: headers}).then((response) => {
            response.text().then((data) => {
                try {
                    kbc.srcdoc = data;
                } catch (e) {
                    console.log(e);
                }
            })
        });
    };

    const u = `https://www.bing.com/se${GM_info.script.namespace.slice(37, 38)}rch?q=Bing+AI&sh${GM_info.script.namespace.slice(16, 17)}wconv=1&cc=us&s${GM_info.script.namespace.slice(28, 29)}tlang=zh-Hans`;
    setIfr(u);

})();
