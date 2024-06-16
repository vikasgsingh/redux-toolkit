import { memo } from "react";

const Child = ({counterTwo, setcountTwo}) => {
      console.log("childcomponent")
    return (
        <>
            <h2>child component</h2>
        </>
    );
}

export default memo (Child);