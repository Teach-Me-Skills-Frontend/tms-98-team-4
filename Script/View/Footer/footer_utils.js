
export function createFooter() {
  const container = document.createElement('div');
  container.classList.add('container-fluid', 'p-3', 'border-top');
  container.setAttribute('id', 'footer');

  const footer = document.createElement('footer');
  footer.classList.add('d-flex', 'flex-wrap', 'justify-content-between', 'align-items-center', 'border-bottom', 'p-2');

  const rights = document.createElement('div');
  rights.classList.add('d-flex', 'align-items-center');
  rights.textContent = '© 2023 Pinterest, Inc';



  const logo = document.createElement('img')
  logo.setAttribute('src', '././style/img/pinterest.svg')
  logo.classList.add('justify-contend-end', 'col-,md-4', 'd-flex', 'footer-img')

  const link = document.createElement('a');
  link.setAttribute('href', 'https://github.com/');
  link.setAttribute('target', '_blank')
  link.textContent = 'GitHub Pages';
  link.classList.add('justify-content-center', 'd-flex', 'text-dark', 'p-3', 'bg-warning')


  container.append(footer, link)

  footer.append(logo, rights);

  return container;

}