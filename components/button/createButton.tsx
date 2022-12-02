import Plus from 'components/svgs/plus.svg';

type Text = '습관 생성하기' | '습관 추가하기' | '회고 추가하기';
type Props = {
  text?: Text;
  handleClick?: () => void;
};

const CreateButton = ({ text = '습관 생성하기', handleClick }: Props) => {
  return (
    <button
      className="flex h-14 w-full items-center justify-center gap-2 rounded-lg bg-main-blue text-white"
      onClick={handleClick}
    >
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-main-black-40">
        <Plus width="25px" height="25px" fill="#808080" />
      </div>
      <p>{text}</p>
    </button>
  );
};

export default CreateButton;
