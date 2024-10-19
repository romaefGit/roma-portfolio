/**
 * determines whether a given element is fully or partially in view within a specified container.
 * @param container
 * @param element
 * @param partial
 * @returns The function returns true if the element is fully or partially in view; otherwise, it returns false.
 */
export function checkInView(
  container: HTMLElement,
  element: HTMLElement,
  partial: boolean,
) {
  // Get container properties
  const cLeft = container.scrollLeft;
  const cRight = cLeft + container.clientWidth;

  /**
   * It checks whether the element is fully in view by ensuring its left boundary is greater than or equal to the container's left boundary,
   *  and its right boundary is less than or equal to the container's right boundary.
   */
  // Get element properties
  const eLeft = element.offsetLeft;
  const eRight = eLeft + element.clientWidth;

  // Check if in view
  const isTotal = eLeft >= cLeft && eRight <= cRight;
  const isPartial =
    partial &&
    ((eLeft < cLeft && eRight > cLeft) || (eRight > cRight && eLeft < cRight));

  // Return outcome
  return isTotal || isPartial;
}
