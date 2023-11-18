import { Block, Arrow } from "@components";
const Visual = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="grid grid-cols-5 gap-3">
        <Block span={3}>
          <>{`{`}</>
        </Block>
        <Block>
          <>{`{`}</>
        </Block>
        <Block color="text-[#ea6161]">
          <Arrow />
        </Block>
        <Block color="text-[#ea6161]">
          <Arrow />
        </Block>
        <Block>
          <Arrow />
        </Block>
        <Block span={2} color="text-[#f7bd46]">
          <>{`  😎  `}</>
        </Block>
        <Block color="text-[#65babb]">""</Block>
        <Block span={3}>wowowow</Block>
        <Block>
          <>{`}`}</>
        </Block>
        <Block color="text-[#f7bd46]">
          <Arrow />
        </Block>

        <Block color="text-[#65babb]">;</Block>
        <Block span={2} color="text-[#ea6161]">
          🔥
        </Block>
        <Block>
          <Arrow />
        </Block>
        <Block>
          <Arrow />
        </Block>

        <Block span={4} color="text-[#c188c1]">
          👻
        </Block>
        <Block color="text-[#65babb]">X</Block>
      </div>
    </div>
  );
};

export default Visual;
