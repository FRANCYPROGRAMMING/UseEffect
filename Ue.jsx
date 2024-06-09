const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timerId);
  }, []);

  return (
    <div>
      <h2>{currentTime.toLocaleTimeString()}</h2>
    </div>
  );
};

export default Clock;