import PropTypes from 'prop-types';
import { ImageGalleryItem } from './ImageGalleryItem';
import { Gallery } from './ImageGallery.styled'

export const ImageGallery = ({ items, toggleModal, setActiveIndex }) => {
    
    return (
        <Gallery>
            {items.map((item, index) => (
      
                <ImageGalleryItem
                    item={item}
              key={item.id}
              onClick={() => {
                toggleModal();
                setActiveIndex(index);
              }}
                />
            )
            )}
        </Gallery>
    );
};
ImageGallery.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape).isRequired,
    toggleModal: PropTypes.func.isRequired,
};

