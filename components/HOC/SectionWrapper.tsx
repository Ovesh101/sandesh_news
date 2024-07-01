

const SectionWrapper = (Component, idName) => function HOC() {
    return (
        <section
            className={` max-w-[100vw] relative z-0`}
        >
            {/* <span className="hash-span" id={idName}>
                &nbsp;
            </span> */}
            <Component />
        </section>
    );
}

export default SectionWrapper;