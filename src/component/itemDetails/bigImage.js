export const BigImg = (props) => {
  const { images } = props.item;
  return (
    <>
      <div className='line'>
        <hr />
      </div>
      <div className='big-img-box' style={{ marginBottom: '40px' }}>
        <h3 style={{ alignSelf: 'start', fontSize: '24px' }}>
          Product Description
        </h3>
        {images.map((img, index) => {
          return (
            <img
              src={img}
              className='item-big-img'
              alt='description'
              key={index}
            />
          );
        })}
      </div>
    </>
  );
};
