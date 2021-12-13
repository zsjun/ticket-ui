import React, {
  FC,
  memo,
  MouseEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import classNames from "classnames";
import noImg from "./noImg.js";
import zoomInPng from "./zoom-in.png";
import zoomOutPng from "./zoom-out.png";

export type ZoomPhotoType = "danger" | "link";
interface BaseZoomPhotoProps {
  className?: string;
  size?: number;
  imgurl?: string;
  width?: number;
  height?: number;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
interface Size {
  w: number;
  h: number;
}
interface Pos {
  x: number;
  y: number;
}
export type defaultZoomPhotoProps = BaseZoomPhotoProps;
/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互
 * ### 引用方法
 *
 * ~~~js
 * import { ZoomPhoto } from 'stonewise-ui'
 * ~~~
 */
export const ZoomPhoto: FC<BaseZoomPhotoProps> = (props) => {
  const [maxSize, setMaxSize] = useState<Size>({
    w: 0,
    h: 0,
  });

  const [imgPos, setImgPos] = useState<Pos>({
    x: 0,
    y: 0,
  });

  const [multiple, setMultiple] = useState<number>(100);
  const [imgClass, setImgClass] = useState<string>("");
  const imgRef = useRef<any>();

  const { className = "", children, ...restProps } = props;

  const classes = classNames("zoomPhoto-wrap", className, {
    [`zoomPhoto`]: false,
  });

  useEffect(() => {
    const imgEl = imgRef.current;
    if (imgEl) {
      const nowImgClass =
        imgEl.offsetWidth > imgEl.offsetHeight ? "fullWidth" : "fullHeight";
      if (imgClass !== nowImgClass) {
        setImgClass(nowImgClass);
      }
    }
  }, [imgRef, imgClass, setImgClass]);

  const zoomOutPhoto = () => {
    if (multiple < 300) {
      setMultiple((multiple) => multiple + 10);
    }
  };

  const zoomInPhoto = () => {
    if (multiple > 100) {
      setMultiple((multiple) => multiple - 10);
    }
  };

  const handleInit = () => {
    setMaxSize({
      w: 0,
      h: 0,
    });
    setImgClass("");
    setImgPos({
      x: 0,
      y: 0,
    });
  };

  const dragImgStart = (event: MouseEvent) => {
    event.preventDefault();
    const firstX = event.clientX;
    const firstY = event.clientY;
    let moveX: number;
    let moveY: number;
    let newX: number;
    let newY: number;
    const { x, y } = imgPos;
    const { w, h } = maxSize;
    const imgEl: any = imgRef.current;

    document.onmousemove = (ev): any => {
      const size = multiple / 100;
      moveX = ev.clientX - firstX;
      moveY = ev.clientY - firstY;
      newX = x + moveX;
      newY = y + moveY;
      const maxVisibleWidth = (w + imgEl.offsetWidth * size) / 2;
      const maxVisibleHeight = (h + imgEl.offsetHeight * size) / 2;
      if (
        Math.abs(newX) < maxVisibleWidth &&
        Math.abs(newY) < maxVisibleHeight
      ) {
        setImgPos({
          x: newX,
          y: newY,
        });
      } else if (
        Math.abs(newX) < maxVisibleWidth &&
        Math.abs(newY) > maxVisibleHeight
      ) {
        setImgPos({
          x: newX,
          y: newY > 0 ? maxVisibleHeight : -maxVisibleHeight,
        });
      } else if (
        Math.abs(newX) > maxVisibleWidth &&
        Math.abs(newY) < maxVisibleHeight
      ) {
        setImgPos({
          x: newX > 0 ? maxVisibleWidth : -maxVisibleWidth,
          y: newY,
        });
      } else if (
        Math.abs(newX) > maxVisibleWidth &&
        Math.abs(newY) > maxVisibleHeight
      ) {
        setImgPos({
          x: newX > 0 ? maxVisibleWidth : -maxVisibleWidth,
          y: newY > 0 ? maxVisibleHeight : -maxVisibleHeight,
        });
      }
    };
    document.onmouseup = () => {
      document.onmousemove = null;
    };
    document.onmouseleave = () => {
      document.onmousemove = null;
    };
  };
  const mouseEnter = () => {
    const imgEl = imgRef.current;
    imgEl.onmousewheel = (e: any) => {
      let tempMultiple: number = 0;
      setMultiple((i) => (tempMultiple = i));
      if (e.deltaY > 0 && tempMultiple < 300) {
        setMultiple((multiple) => multiple + 10);
      } else if (e.deltaY < 0 && tempMultiple > 100) {
        setMultiple((multiple) => multiple - 10);
      }
    };
  };
  const mouseLeave = () => {
    const imgEl = imgRef.current;
    imgEl.onmousewheel = null;
  };
  const { width = 200, height = 200, imgurl } = props;
  return (
    <div
      className={classes}
      style={{
        width: width,
        height: height,
      }}
    >
      <div className="transform-scale">
        <img
          src={zoomInPng}
          alt="缩小"
          className="transform-btn-left"
          onClick={zoomInPhoto}
        />
        &nbsp;&nbsp;
        <p>{multiple}%</p>
        &nbsp;&nbsp;
        <img
          src={zoomOutPng}
          alt="放大"
          className="transform-btn-right"
          onClick={zoomOutPhoto}
        />
      </div>
      <div
        style={{
          width: width - 20,
          height,
        }}
        className="templateImg-wrap"
        {...restProps}
      >
        <div
          className="templateImg"
          style={{ width: "100%", height }}
          onMouseDown={dragImgStart}
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
        >
          <img
            src={imgurl || noImg}
            alt=""
            style={{
              transform: `scale(${multiple * 0.01})`,
              left: imgPos.x,
              top: imgPos.y,
            }}
            className={`previewImg ${imgClass}`}
            ref={imgRef}
          />
        </div>
      </div>
    </div>
  );
};

// ZoomPhoto.defaultProps = {
//   className: "",
// };

export default memo(ZoomPhoto);
