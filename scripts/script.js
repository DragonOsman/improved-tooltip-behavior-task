"use strict";
let tooltip;
document.addEventListener("mouseover", event => {
  const target = event.target.closest("[data-tooltip]");

  if (!target) {
    return;
  }

  tooltip = showTooltip(target, target.dataset.tooltip);
});

document.addEventListener("mouseout", () => {
  if (tooltip) {
    tooltip.style.display = "none";
    tooltip = false;
  }
});

function showTooltip(elem, tooltipHtml) {
  const tooltipElem = document.createElement("div");
  tooltipElem.className = "tooltip";
  tooltipElem.textContent = tooltipHtml;
  document.body.append(tooltipElem);

  const coords = elem.getBoundingClientRect();
  let top = coords.top - tooltipElem.offsetHeight - 5;
  if (top < 0) {
    top = coords.top + elem.offsetHeight + 5;
  }

  let left = coords.left + (elem.offsetWidth - tooltipElem.offsetWidth) / 2;
  if (left < 0) {
    left = 0;
  }

  tooltipElem.style.left = `${left}px`;
  tooltipElem.style.top = `${top}px`;

  return tooltipElem;
}
