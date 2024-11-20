import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          width: "100%",
          height: 10,
          backgroundColor: "#e0e0e0",
          borderRadius: 5,
          overflow: "hidden",
          marginTop: 20,
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            backgroundColor: "#303234",
            transition: "width 0.3s ease",
          }}
        ></div>
      </div>
      <p
        style={{
          fontSize: 25,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 10,
        }}
      >
        {progress !== 0 ? `${progress.toFixed(0)}%` : "Loading..."}
      </p>
    </Html>
  );
};

export default CanvasLoader;
