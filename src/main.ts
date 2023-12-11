import { ICON_MINUS, ICON_PLUS } from './icon';

const accordionList: HTMLUListElement =
  document.querySelector('.accordion-list')!;
const accordionBtn: NodeListOf<HTMLButtonElement> = document.querySelectorAll(
  '[data-accordion="question"]'
);

accordionBtn.forEach((btn, idx) => {
  btn.addEventListener('click', handleEvent);
  let para = btn.nextElementSibling as HTMLParagraphElement;
  //@ts-ignore
  para.style.viewTransitionName = `accord-${++idx}`;
});

function handleEvent(evt: MouseEvent) {
  const listItem = (evt.currentTarget as HTMLButtonElement)
    .parentNode as HTMLLIElement;
  if (listItem.classList.contains('active')) return;
  closeAccordion();
  openAccordion(evt.currentTarget);
}

function closeAccordion() {
  const activeListItem: HTMLLIElement = accordionList.querySelector('.active')!;
  if (activeListItem) {
    activeListItem.classList.remove('active');
    let iconSpan = activeListItem.querySelector('span') as HTMLSpanElement;
    iconSpan.innerHTML = ICON_PLUS;
    //@ts-ignore
    if (!document.startViewTransition) {
      activeListItem.querySelector('p')?.setAttribute('hidden', '');
    }
    //@ts-ignore
    document.startViewTransition(() => {
      activeListItem.querySelector('p')?.setAttribute('hidden', '');
    });
  }
}

function openAccordion(btn: EventTarget | null) {
  if (!btn) return;
  const listItem = (btn as HTMLButtonElement).parentNode as HTMLLIElement;

  listItem.classList.add('active');
  let iconSpan = listItem.querySelector('span') as HTMLSpanElement;
  iconSpan.innerHTML = ICON_MINUS;
  //@ts-ignore
  if (!document.startViewTransition) {
    listItem.querySelector('p')?.removeAttribute('hidden');
  }
  //@ts-ignore
  document.startViewTransition(() => {
    listItem.querySelector('p')?.removeAttribute('hidden');
  });
}
