function processTikTok(){
  const url = document.getElementById("tiktokUrl").value;
  const result = document.getElementById("result");

  if(!url || !url.includes("tiktok.com")){
    result.innerHTML = "<p style='color:#ef4444'>Enlace no válido</p>";
    return;
  }

  result.innerHTML = `
    <p style="color:#22c55e;font-weight:600;">
      Video detectado correctamente
    </p>
    <p class="subtitle">
      (Función de descarga se añadirá más adelante)
    </p>
  `;
}