import React, {
  FC,
  memo,
  MouseEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import classNames from "classnames";
import urlImg from "./ss.png";

export type ZoomPhotoType = "danger" | "link";
interface BaseZoomPhotoProps {
  className?: string;
  size?: number;
  imgurl?: string;
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
  let [maxSize, setMaxSize] = useState<Size>({
    w: 0,
    h: 0,
  });
  let [imgPos, setImgPos] = useState<Pos>({
    x: 0,
    y: 0,
  });
  let [multiple, setMultiple] = useState<number>(100);
  let [imgClass, setImgClass] = useState<string>("");
  const imgRef = useRef<any>();

  const { className, children, ...restProps } = props;
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
      const maxVisibleWidth = (w + imgEl.offsetWidth * size) / 2 - 40;
      const maxVisibleHeight = (h + imgEl.offsetHeight * size) / 2 - 40;
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
      console.log(1224, multiple);
      let tempMultiple: number = 0;
      setMultiple((i) => (tempMultiple = i));
      console.log()
      if (e.deltaY > 0 && tempMultiple < 300) {
        console.log(1122);
        setMultiple((multiple) => multiple + 10);
      } else if (e.deltaY < 0 && tempMultiple > 100) {
        console.log(333);
        setMultiple((multiple) => multiple - 10);
      }
    };
  };
  const mouseLeave = () => {
    const imgEl = imgRef.current;
    imgEl.onmousewheel = null;
  };
  const { size, imgurl } = props;
  console.log(333, multiple);
  return (
    <div
      style={{
        width: size,
        height: size,
      }}
      className={classes}
      {...restProps}
    >
      <div
        className="templateImg"
        style={{ width: size, height: size }}
        onMouseDown={dragImgStart}
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
      >
        <img
          src={urlImg}
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
  );
};

ZoomPhoto.defaultProps = {
  className: "",
};

export default memo(ZoomPhoto);
