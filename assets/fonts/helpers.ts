export const getFontFamily = (baseFont = 'Quicksand', weight = '400') => {
    switch (weight) {
      case '100':
        return `${baseFont}-Thin`;
      case '200':
        return `${baseFont}_28pt-ExtraLight`;
      case '300':
        return `${baseFont}_28pt-Light`;
      case 'normal':
      case '400':
        return `${baseFont}_28pt-Regular`;
      case '500':
        return `${baseFont}-Medium`;
      case '600':
        return `${baseFont}_28pt-SemiBold`;
      case 'bold':
      case '700':
        return `${baseFont}-Bold`;
      case '800':
        return `${baseFont}_28pt-ExtraBold`;
      case '900':
        return `${baseFont}_28pt-Black`;
      default:
        return `${baseFont}-Black`;
    }
  };