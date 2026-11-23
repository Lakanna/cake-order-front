export const createCakeDescription = (order) => {
  const parts = [];

  if (order.size) {
    parts.push({ text: order.size, bold: true });
  }

  if (order.sponge && order.sponge !== 'Biscuit') {
    parts.push({
      text: ` ${order.sponge.toLowerCase()} sponge cake`,
      bold: true,
    });
  }

  if (order.sponge && order.sponge === 'Biscuit') {
    parts.push({
      text: ` ${order.sponge} cake`,
      bold: true,
    });
  }

  if (order.icing) {
    parts.push({ text: ` with ${order.icing.toLowerCase()}` });
  }

  if (order.jam) {
    parts.push({ text: ' and jam filling' });
  }

  if (order.extraFilling?.length) {
    parts.push({
      text: ` and extra ${order.extraFilling.join(', ').toLowerCase()} filling`,
    });
  }

  return parts;
};

const formatIcing = (type, colour) => {
  if (type === 'Fresh Cream') return 'Fresh cream';
  if (type === 'White Buttercream') return 'White buttercream';
  if (type === 'Coloured Buttercream') {
    return `${colour || 'Сoloured'} buttercream`;
  }
  return '';
};

export const createDecorationDescription = (order) => {
  const top = formatIcing(order.topIcing, order.colourButtercreamOnTop);

  const sides = formatIcing(order.sidesIcing, order.colourButtercreamOnSides);

  const parts = [];

  if (top) parts.push(`${top} on top`);
  if (sides) parts.push(`${sides} on the sides`);

  if (order.sides && parts.length > 0)
    parts.push(`${order.sides.toLowerCase()}`);
  if (order.sides && parts.length === 0) {
    parts.push(`${order.sides} on the sides`);
  }

  if (order.decorations?.length) {
    parts.push(`decorated with ${order.decorations.join(', ')} on top edges`);
  }

  return parts.join(', ') + '.';
};

export const createTopDescription = (order) => {
  const parts = [];

  if (order.photo) {
    parts.push('With a customer-provided image for printing');
  } else if (order.descriptionCharacter?.trim()) {
    parts.push(`With an image of ${order.descriptionCharacter} for printing`);
  }

  if (order.writingOnTop?.trim()) {
    const colour =
      order.colourOfWriting === 'Custom'
        ? order.customWritingColour
        : order.colourOfWriting;

    parts.push(
      `"${order.writingOnTop}" written in ${colour?.toLowerCase() || 'chocolate'}`,
    );
  }

  return parts.join(', ');
};

export const createCollectionDescription = (order) => {
  const date = order.collectionDate
    ? new Date(order.collectionDate).toLocaleDateString('en-IE')
    : '';

  const time = order.collectionTime || '';

  if (!date && !time) return '';

  return [
    { text: 'Collection: ', bold: true },
    { text: `${date}${time ? ` at ${time}` : ''}.` },
  ];
};

export const createCustomerNameDescription = (order) => {
  const parts = [];

  if (order.customerFullName?.trim()) {
    parts.push({ text: 'Name: ', bold: true });
    parts.push({ text: order.customerFullName });
  }

  return parts;
};
export const createCustomerPhoneDescription = (order) => {
  const parts = [];

  if (order.customerPhone?.trim()) {
    parts.push({ text: 'Phone: ', bold: true });
    parts.push({ text: order.customerPhone });
  }

  return parts;
};

export const createAdditionalNotes = (order) => {
  if (!order.additionalNotes?.trim()) return [];

  return [
    { text: 'Additional notes: ', bold: true },
    { text: order.additionalNotes },
  ];
};
