// ����ȫ�ּ�ʱ��
let TT = null;    //time���������¼��Ĵ���
// ��������:fn->�߼� time->����ʱ��
function debounce(fn, time) {
    if (TT !== null) clearTimeout(TT);
    TT = setTimeout(fn, time);
}

window.onscroll = percent;// ִ�к���
// ҳ��ٷֱ�
function percent() {
    let a = document.documentElement.scrollTop || window.pageYOffset, // ��ȥ�߶�
        b = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight) - document.documentElement.clientHeight, // ������ҳ�߶�
        result = Math.round(a / b * 100), // ����ٷֱ�
        up = document.querySelector("#go-up") // ��ȡ��ť

    if (result <= 95) {
        up.childNodes[0].style.display = 'none'
        up.childNodes[1].style.display = 'block'
        up.childNodes[1].innerHTML = result;
    } else {
        up.childNodes[1].style.display = 'none'
        up.childNodes[0].style.display = 'block'
    }
}