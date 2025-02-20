```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const handleTitleChange = () => {
      document.title = `You clicked ${count} times`;
    };
    handleTitleChange(); //Initial update
    return () => {
      // Cleanup function: Remove the effect
      //Could be empty if there are no effects
      console.log('cleanup')
    };
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```