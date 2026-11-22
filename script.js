const tabs=document.querySelectorAll('.tab');
const screens=document.querySelectorAll('.screen');
tabs.forEach(tab=>tab.addEventListener('click',()=>{
  tabs.forEach(t=>t.classList.toggle('active',t===tab));
  tabs.forEach(t=>t.setAttribute('aria-selected',String(t===tab)));
  screens.forEach(s=>s.classList.toggle('active',s.id==='screen-'+tab.dataset.screen));
}));
document.querySelectorAll('.accordion').forEach(button=>button.addEventListener('click',()=>{
  const open=button.getAttribute('aria-expanded')==='true';
  button.setAttribute('aria-expanded',String(!open));
  document.getElementById(button.getAttribute('aria-controls')).hidden=open;
  button.querySelector('.arrow').textContent=open?'⌄':'⌃';
}));
const toast=document.querySelector('.toast');
document.querySelectorAll('[data-choice]').forEach(button=>button.addEventListener('click',()=>{
  const group=button.closest('.options');
  if(group)group.querySelectorAll('[data-choice]').forEach(item=>item.classList.remove('selected'));
  button.classList.add('selected');
  toast.textContent='Opção selecionada: '+button.dataset.choice;
  toast.classList.add('show');
  clearTimeout(window.ciatoxToastTimer);
  window.ciatoxToastTimer=setTimeout(()=>toast.classList.remove('show'),1700);
}));
// Não foram implementados cálculos, campos ou respostas clínicas: esses detalhes
// não aparecem nas informações fornecidas para esta seção.
