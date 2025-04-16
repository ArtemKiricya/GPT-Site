<script type="text/babel">
    const StarField = () => {
        React.useEffect(() => {
            const canvas = document.createElement('canvas');
            document.body.appendChild(canvas);
            const ctx = canvas.getContext('2d');
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            const stars = [];
            for (let i = 0; i < 200; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 2,
                    speed: Math.random() * 0.5 + 0.2
                });
            }

            const animate = () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                stars.forEach(star => {
                    ctx.beginPath();
                    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
                    ctx.fill();
                    star.y += star.speed;
                    if (star.y > canvas.height) star.y = 0;
                });
                requestAnimationFrame(animate);
            };
            animate();

            window.addEventListener('resize', () => {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            });

            return () => document.body.removeChild(canvas);
        }, []);

        return null;
    };

    const NebulaCard = ({ title, description }) => (
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 m-4 transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold mb-2">{title}</h3>
            <p className="text-gray-300">{description}</p>
        </div>
    );

    const App = () => {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center relative">
                <StarField />
                <header className="text-center mb-12">
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                            Звездный Космос
                        </span>
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                        Отправьтесь в путешествие по загадкам вселенной, где звезды шепчут тайны, а туманности раскрашивают небо.
                    </p>
                </header>
                <main className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <NebulaCard 
                        title="Галактические Чудеса"
                        description="Откройте захватывающую красоту далеких галактик, от спиральных рукавов до эллиптических шедевров."
                    />
                    <NebulaCard 
                        title="Космические Явления"
                        description="Исследуйте черные дыры, сверхновые и другие загадочные события, формирующие космос."
                    />
                    <NebulaCard 
                        title="Звездные Истории"
                        description="Раскройте мифы и науку, стоящие за созвездиями, освещающими наше ночное небо."
                    />
                </main>
                <footer className="mt-16 text-gray-400 text-center">
                    <p>© 2025 Звездный Космос. Все права защищены.</p>
                </footer>
            </div>
        );
    };

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<App />);
</script>