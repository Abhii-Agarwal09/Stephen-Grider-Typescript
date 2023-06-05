import { Child, ChildAsFC } from './Child';

const Parent = () => {
  return (
    <>
      <Child color='Red' onClick={() => console.log('clicked')}>asd</Child>
      <ChildAsFC
        color='Green'
        onClick={() => console.log('clicked')}>asd</ChildAsFC>
    </>
  );
};

export default Parent;
