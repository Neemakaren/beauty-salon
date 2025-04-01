import Button from "./Button";

const Recommended = ({ handleClick }) => {
  
  return (
    <div className="">
      <h2 className="text-center my-4">Recommended</h2>
      <div className="container mx-auto text-center mb-7 py-12 space-y-6">
        <Button onClickHandler={handleClick} value="" title="All Products" />
        <Button
          onClickHandler={handleClick}
          value="lipstick"
          title="lipstick"
        />
        <Button onClickHandler={handleClick} value="liquid" title="liquid" />
        <Button onClickHandler={handleClick} value="powder" title="powder" />
        <Button
          onClickHandler={handleClick}
          value="lip_gloss"
          title="lip_gloss"
        />
        <Button onClickHandler={handleClick} value="gel" title="gel" />
        <Button onClickHandler={handleClick} value="cream" title="cream" />
        <Button onClickHandler={handleClick} value="palette" title="palette" />
        <Button
          onClickHandler={handleClick}
          value="concealer"
          title="concealer"
        />
        <Button
          onClickHandler={handleClick}
          value="highlighter"
          title="highlighter"
        />
        <Button onClickHandler={handleClick} value="contour" title="contour" />
        <Button onClickHandler={handleClick} value="bb_cc" title="bb_cc" />
        <Button
          onClickHandler={handleClick}
          value="lip_stain"
          title="lip_stain"
        />
        <Button onClickHandler={handleClick} value="mineral" title="mineral" />
      </div>
    </div>
  );
};

export default Recommended;
