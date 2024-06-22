import {Svg, Path, Defs, LinearGradient, Stop} from 'react-native-svg';
import {Palette} from '../constants/palette';

export const ArrowBackSvg = ({width, height, fill}: SvgProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Defs>
        <LinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <Stop offset="0%" stopColor={Palette.Pink} stopOpacity="1" />
          <Stop offset="100%" stopColor={Palette.Purple} stopOpacity="1" />
        </LinearGradient>
      </Defs>
      <Path
        d="M8.82001 12L16.535 19.715C16.6817 19.863 16.7543 20.0397 16.753 20.245C16.751 20.4497 16.6763 20.6257 16.529 20.773C16.3817 20.9203 16.2053 20.994 16 20.994C15.7947 20.994 15.6183 20.9207 15.471 20.774L7.83001 13.136C7.66868 12.974 7.55068 12.794 7.47601 12.596C7.40135 12.3967 7.36401 12.1977 7.36401 11.999C7.36401 11.8003 7.40135 11.6017 7.47601 11.403C7.55068 11.2043 7.66868 11.0243 7.83001 10.863L15.47 3.21999C15.6173 3.07266 15.7947 2.99999 16.002 3.00199C16.2087 3.00399 16.386 3.07866 16.534 3.22599C16.682 3.37333 16.7553 3.54966 16.754 3.75499C16.754 3.95966 16.6807 4.13599 16.534 4.28399L8.82001 12Z"
        fill={fill === Palette.GradientPurplePink ? 'url(#grad)' : fill}
      />
    </Svg>
  );
};
