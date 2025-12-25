import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

const Index = () => {
  const { toast } = useToast();
  const serverIP = 'MrYut3TopKanal.aternos.me:59728';
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(serverIP);
    setCopied(true);
    toast({
      title: 'Скопировано!',
      description: 'IP сервера скопирован в буфер обмена',
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background bg-grid relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-neon-green/5 via-transparent to-neon-purple/5 pointer-events-none" />
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        <header className="text-center py-16 animate-fade-in">
          <div className="inline-block mb-6 animate-float">
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-neon-green to-neon-cyan rounded-2xl flex items-center justify-center shadow-2xl glow-box border-2 border-neon-green/30">
              <span className="text-6xl">⛏️</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-4 glow text-neon-green animate-pulse-glow">
            MrYut3TopKanal
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Майнкрафт сервер выживания
          </p>

          <Card className="max-w-2xl mx-auto p-8 bg-card/50 backdrop-blur-lg border-2 border-neon-cyan/30 shadow-2xl">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between gap-4 p-4 bg-muted/50 rounded-lg border border-neon-green/20">
                <div className="flex items-center gap-3 flex-1">
                  <Icon name="Server" className="text-neon-cyan" size={24} />
                  <span className="text-lg font-mono font-semibold text-foreground break-all">
                    {serverIP}
                  </span>
                </div>
              </div>
              
              <Button
                onClick={copyToClipboard}
                size="lg"
                className="w-full text-lg font-bold bg-gradient-to-r from-neon-green to-neon-cyan hover:from-neon-cyan hover:to-neon-green text-background transition-all duration-300 shadow-lg hover:shadow-neon-green/50 glow-box border-2 border-neon-green/50"
              >
                {copied ? (
                  <>
                    <Icon name="Check" className="mr-2" size={24} />
                    Скопировано!
                  </>
                ) : (
                  <>
                    <Icon name="Copy" className="mr-2" size={24} />
                    Скопировать IP
                  </>
                )}
              </Button>
            </div>
          </Card>
        </header>

        <section className="max-w-4xl mx-auto mt-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 glow text-neon-cyan">
            О сервере
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-card/50 backdrop-blur-lg border-2 border-neon-purple/30 hover:border-neon-purple/60 transition-all duration-300 hover:shadow-2xl hover:shadow-neon-purple/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-neon-purple to-neon-pink rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Gamepad2" className="text-background" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-neon-purple">Режим игры</h3>
                  <p className="text-muted-foreground">Классическое выживание в ванильном Minecraft без модификаций</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-lg border-2 border-neon-green/30 hover:border-neon-green/60 transition-all duration-300 hover:shadow-2xl hover:shadow-neon-green/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-neon-green to-neon-cyan rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Users" className="text-background" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-neon-green">Сообщество</h3>
                  <p className="text-muted-foreground">Дружелюбное комьюнити игроков, готовых помочь новичкам</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-lg border-2 border-neon-cyan/30 hover:border-neon-cyan/60 transition-all duration-300 hover:shadow-2xl hover:shadow-neon-cyan/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-neon-cyan to-neon-green rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Zap" className="text-background" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-neon-cyan">Без модов</h3>
                  <p className="text-muted-foreground">Чистая игра без дополнительных модификаций и плагинов</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-lg border-2 border-neon-pink/30 hover:border-neon-pink/60 transition-all duration-300 hover:shadow-2xl hover:shadow-neon-pink/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-neon-pink to-neon-purple rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Shield" className="text-background" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-neon-pink">Стабильность</h3>
                  <p className="text-muted-foreground">Надежный хостинг с минимальными лагами и высоким аптаймом</p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section className="max-w-2xl mx-auto mt-16 text-center pb-16 animate-fade-in">
          <Card className="p-8 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-lg border-2 border-neon-green/40 shadow-2xl">
            <h3 className="text-2xl font-bold mb-4 text-neon-green glow">
              Готовы начать приключение?
            </h3>
            <p className="text-muted-foreground mb-6">
              Скопируйте IP сервера выше и подключайтесь прямо сейчас!
            </p>
            <div className="flex justify-center gap-4 text-4xl">
              <span className="animate-float">⚔️</span>
              <span className="animate-float" style={{ animationDelay: '0.3s' }}>🏰</span>
              <span className="animate-float" style={{ animationDelay: '0.6s' }}>💎</span>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Index;
