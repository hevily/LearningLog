import fromReact from 'react';

const Example = () => {
  // Declare a new state variable, which we'll call "count"
  // const [count, setCount] = useState(0);
  console.log('fromReact----', fromReact);
  return (
    <div>
      {/* <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button> */}
    </div>
  );
};

export default Example;
