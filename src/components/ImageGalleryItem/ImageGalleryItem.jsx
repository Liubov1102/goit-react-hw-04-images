import PropTypes from 'prop-types';
import { GalleryItem, GalleryImg } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ url, preview, alt, toggleModal }) => {
    return (
        <GalleryItem onClick={() => {
            toggleModal({ url, alt });
        }}>
            <GalleryImg alt={alt} src={preview} />
        </GalleryItem>
    );
};

ImageGalleryItem.propTypes = {
    url: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    toggleModal: PropTypes.func.isRequired,    
};


