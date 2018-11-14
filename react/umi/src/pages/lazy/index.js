const Lazy = () => {
  return [
    <div key={1}>
      <h1>Lazy组件</h1>
    </div>,
    <div key={2}>Lazy组件222</div>,
  ];
};
console.log('Lazy----', Lazy.toString());
export default Lazy;
