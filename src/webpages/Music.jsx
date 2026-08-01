import DomeGallery from '../components/DomeGallery';
import { siteContent } from '../content/siteContent';
import './Music.css';

const albumImages = import.meta.glob('../assets/album-cover/*.png', { 
    eager: true,
    import: 'default', 
});

const formattedAlbumImages = Object.entries(albumImages).map(([path, image]) => {
    const title = path.split('/').pop().split('.')[0].replace(/-/g, ' ');
    return { src: image, alt: title };
});

function Music() {
  const { intro } = siteContent.music;

  return (
    <div className="album-gallery">
      <p className="artist-music-intro">{intro}</p>
      <div className="album-gallery__stage">
        <DomeGallery
          images={formattedAlbumImages}
          fit={0.5}
          fitBasis='max'
          minRadius={280}
          maxRadius={760}
          maxVerticalRotationDeg={0}
          imageBorderRadius='5px'
          segments={30}
          dragDampening={3}
          grayscale={false}
          openedImageWidth='clamp(240px, 42vw, 460px)'
          openedImageHeight='clamp(240px, 42vw, 460px)'
          openedImageBorderRadius='10px'
        />
      </div>
    </div>
  );
}
export default Music;