import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { Part3 } from '../component/itemDetails/itemPart3';
import { Part2 } from '../component/itemDetails/itemPart2';
import { Part1 } from '../component/itemDetails/itemPart1';
import { BigImg } from '../component/itemDetails/bigImage';

export const Item = () => {
  const { id } = useParams();
  const {
    data: item,
    error,
    isPending,
  } = useFetch('https://dummyjson.com/products/' + id);

  return (
    <div>
      {isPending && <div>loading...</div>}
      {error && <div>{error}</div>}
      {item && (
        <div>
          {/* Flex-box starts from here*/}

          <div className='partition-box'>
            {/* First slice */}
            <div className='partition1'>
              <Part1 item={item} />
            </div>
            {/* Second Slice */}
            <div className='partition2'>
              <Part2 item={item} />
            </div>
            {/* Third Slice */}
            <div className='partition3'>
              <Part3 item={item} />
            </div>
          </div>

          {/* Flex-box end from here     Big image part starts*/}
          <BigImg item={item} />
        </div>
      )}
    </div>
  );
};
