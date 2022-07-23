import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export const Dropdown = (props) => {
  const data = props.data;
  const [isOpen, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(
    props.item.quantity ? props.item.quantity - 1 : null
  );
  const ref = useRef();
  const toggleDropdown = () => setOpen(!isOpen);

  const handleItemClick = (target, target2) => {
    const newTarget = parseInt(target);

    selectedItem == target2.id
      ? setSelectedItem(null)
      : setSelectedItem(target2.id);

    toggleDropdown();

    if (props.setQty) {
      props.setQty({ ...props.item, quantity: newTarget });
    } else {
      props.increase(props.item, newTarget);
    }
  };

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (isOpen && ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', checkIfClickedOutside);
    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [isOpen]);

  return (
    <>
      <div className={'dropdown'} ref={ref}>
        <div className='dropdown-header' onClick={toggleDropdown}>
          QTY :{' '}
          {selectedItem
            ? data.find((item) => item.id == selectedItem).label
            : '  1'}
          <FontAwesomeIcon
            icon={faChevronRight}
            className={` icon ${isOpen && 'open'}`}
          ></FontAwesomeIcon>
        </div>
        <div className={`dropdown-body ${isOpen && 'open'}`}>
          {data.map((item) => (
            <div
              className={`dropdown-item ${
                item.id == selectedItem && 'selected'
              }`}
              onClick={(e) =>
                handleItemClick(
                  e.target.attributes.getNamedItem('value').value,
                  e.target
                )
              }
              id={item.id}
              key={item.id}
              value={item.label}
            >
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
