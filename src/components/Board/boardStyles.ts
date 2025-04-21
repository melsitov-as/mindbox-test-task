export type GenericStyle = Record<string, string | number>;

export const listStyles: GenericStyle = {
  width: '574px',
  margin: '0 auto',
  background: '#ffffff',
  border: '1px solid #dedede',
  boxSizing: 'border-box',
};

export const inputStyles: GenericStyle = {
  border: 'none',
  marginLeft: '20px',
  paddingLeft: 0,
  paddingBottom: '2px',
  width: '500px',
  fontFamily: 'Arial, sans-serif',
  fontStyle: 'italic',
  fontWeight: '300',
  fontSize: '25px',
};

export const boardTextStyles: GenericStyle = {
  // paddingTop: '6px',
  marginLeft: '20px',
  width: '500px',
  fontFamily: 'Arial, sans-serif',
  fontStyle: 'normal',
  fontWeight: '300',
  fontSize: '25px',
};
