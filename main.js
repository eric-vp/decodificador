const textarea = document.getElementById("textarea");
const text = document.getElementById("text");
const encryptBtn = document.getElementById("encrypt");
const decryptBtn = document.getElementById("decrypt");
const copyBtn = document.getElementById("copy");

encryptBtn.addEventListener("click", () => {
    const chars = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    }
    const encryptedText = textarea.value.replaceAll(/[eiaou]/g, m => chars[m]);
    verifyText(encryptedText);
});

decryptBtn.addEventListener("click", () => {
    const chars = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    }
    const regex = /(enter|imes|ai|ober|ufat)/g;
    const decryptedText = textarea.value.replaceAll(regex, m => chars[m]);
    verifyText(decryptedText);
});

copyBtn.addEventListener("click", async () => {
    await navigator.clipboard.writeText(text.innerText);
    alert("Mensagem copiada");
});

function verifyText(t) {
    if (t.replace(/\s/g, '') == '') {
        text.innerHTML = `
            <img src="./assets/High quality products 1 1.png" alt="Garota observando um diamante através de uma lupa">
            <span class="text-bold">Nenhuma mensagem encontrada</span>
            <span>Digite um texto que você deseja criptografar ou descriptografar.</span>
        `
        copyBtn.classList.add('btn-hidden');
        return;
    }
    text.innerHTML = t;
    copyBtn.classList.remove('btn-hidden');
}

function refreshPage() {
    textarea.value = '';
}

refreshPage();
