// base : https://tools.typo-wimmer.at/hervis/printer/
const storeId = 8403,
  userName = 'hervis_hu',
  passWord = 'HERVIS_PRICES',
  urlLog = 'hervis/printer',
  urlWork = 'hervis/printer/hu/admin/search';

const idF = (i) => {
    return document.getElementById(i);
  },
  clF = (c) => {
    return document.getElementsByClassName(c);
  },
  tgF = (t) => {
    return document.getElementsByTagName(t);
  },
  nmF = (n) => {
    return document.getElementsByName(n);
  };


(() => {
  'use strict';
  if (location.href.includes(urlWork)) {
    document.title = 'Címkenyomtatás :)';
    document.getElementsByTagName('H1')[0].innerHTML = 'Hervis címkenyomtatás';
    clF('content_section')[0].style.background = '#400';
    //clF('content_box text-center')[0].style.background = '#000';
    tgF('FORM')[0].children[0].innerHTML = 'Bevitel';
    clF('growable')[0].placeholder = 'Bevitel cikkszám vagy vonalkód alapján';
    clF('expanded image_number_import')[0].innerHTML = 'Beolvas';
    tgF('FORM')[0].children[2].innerHTML = 'Boltkód';
    idF('store_id').value = storeId;
    nmF('typo_details_date_from')[0].placeholder = 'Akciós időszaktól';
    nmF('typo_details_date_to')[0].placeholder = 'Akciós időszakig';
    clF('formtable_heading')[0].children[0].innerHTML = 'EAN / Cikk';
    clF('formtable_heading')[0].children[0].style.textAlign = 'center';
    clF('formtable_heading')[0].children[1].innerHTML = 'Márka';
    clF('formtable_heading')[0].children[2].innerHTML = 'Név';
    clF('formtable_heading')[0].children[3].innerHTML = 'Termék';
    clF('formtable_heading')[0].children[4].innerHTML = 'Leértékelt ár 2';
    clF('formtable_heading')[0].children[5].innerHTML = 'Leértékelt ár';
    clF('formtable_heading')[0].children[6].innerHTML = 'Eredeti ár';
    clF('formtable_heading')[0].children[7].innerHTML = 'Leírás';
    clF('formtable_heading')[0].children[8].innerHTML = 'Eszközök';
    clF('add_item')[0].style.zoom = 1.2;
    tgF('FORM')[0].children[5].innerHTML = 'Sablon méretek';
    nmF('pdf_template')[0].children[0].innerHTML = 'A4 teljes lap **';
    nmF('pdf_template')[0].children[1].innerHTML = 'A4 / 8 felosztás ***';
    nmF('pdf_template')[0].children[2].innerHTML = 'A4 / 14 felosztás';
    nmF('pdf_template')[0].children[3].innerHTML = 'A5 fekvő - ketté osztott A4';
    nmF('pdf_template')[0].children[4].innerHTML = 'A6 felosztás - A4 lap 4-felé osztva';
    nmF('pdf_template')[0].children[5].innerHTML = 'A4 - sílap 4 függőleges';
    document.querySelector('label[for="preview_chkbx"]').innerHTML = 'Háttérgrafika nyomtatása';
    nmF('typo_submit')[0].innerHTML = 'Nyomtatás megtekintése';
    nmF('typo_submit')[0].value = 'Nyomtatás megtekintése';
    nmF('typo_submit')[0].style.background = '#090';

    
    window.setInterval(() => {
      let checking = nmF('pdf_template')[0].value,
          q,
          txtar = nmF('typo_details_product_images[description][]'),
          txtarLen = txtar.length;
      switch (checking) {
        case 'a4-aktion-omnibus': q = false;
          break;
        case 'a6-radpreisplakat-omnibus' : q = false;
          break;
        case 'a4-ski-preisauszeichnung-omnibus' : q = false;
          break;
        default:
          q = true;
      }
      for (let x = 0; x < txtarLen; x++) {
        if (q === true) {
          txtar[x].disabled = true;
        } else {
          txtar[x].disabled = false;
        }
      }
    }, 500);

  } else if (location.href.includes(urlLog)) {
    idF('user_login').value = userName;
    idF('user_pass').value = passWord;
    idF('wp-submit').click();
  }
})();
// Molnár István 2022.11.16 04:16
console.log('%c Loaded successfully', 'font-size:32px; color:orange;');
