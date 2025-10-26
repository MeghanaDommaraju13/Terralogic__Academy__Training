// ChildComponent.tsx
function ChildComponent(props: any) {
    return (
        <button onClick={props.onButtonclick}>Click me to alert parent</button>
    );
}

export default ChildComponent;