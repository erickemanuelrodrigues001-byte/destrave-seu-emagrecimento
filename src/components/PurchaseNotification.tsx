import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, MapPin } from "lucide-react";

const purchases = [
  { name: "Ana M.", city: "São Paulo, SP" },
  { name: "Carlos R.", city: "Rio de Janeiro, RJ" },
  { name: "Fernanda L.", city: "Belo Horizonte, MG" },
  { name: "João P.", city: "Curitiba, PR" },
  { name: "Mariana S.", city: "Salvador, BA" },
  { name: "Pedro H.", city: "Brasília, DF" },
  { name: "Juliana C.", city: "Fortaleza, CE" },
  { name: "Rafael A.", city: "Porto Alegre, RS" },
  { name: "Camila T.", city: "Recife, PE" },
  { name: "Lucas F.", city: "Goiânia, GO" },
  { name: "Beatriz O.", city: "Manaus, AM" },
  { name: "Thiago N.", city: "Florianópolis, SC" },
  { name: "Larissa D.", city: "Campinas, SP" },
  { name: "Gustavo B.", city: "Vitória, ES" },
  { name: "Patrícia V.", city: "Belém, PA" },
];

const getTimeAgo = () => {
  const minutes = Math.floor(Math.random() * 15) + 1;
  return `há ${minutes} min`;
};

const PurchaseNotification = () => {
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState(0);
  const [timeAgo, setTimeAgo] = useState(getTimeAgo());

  useEffect(() => {
    const showFirst = setTimeout(() => {
      setVisible(true);
    }, 3000);

    return () => clearTimeout(showFirst);
  }, []);

  useEffect(() => {
    if (!visible) return;

    const hideTimer = setTimeout(() => {
      setVisible(false);
    }, 6000);

    const nextTimer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % purchases.length);
      setTimeAgo(getTimeAgo());
      setVisible(true);
    }, 10000);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(nextTimer);
    };
  }, [visible, current]);

  const purchase = purchases[current];

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, x: -100, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="flex items-center gap-3 bg-card/95 backdrop-blur-md border border-border rounded-xl px-4 py-3 shadow-xl max-w-xs"
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
              <ShoppingBag className="w-5 h-5 text-accent" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-heading font-bold text-foreground truncate">
                {purchase.name}
              </p>
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {purchase.city}
              </p>
              <p className="text-xs text-accent font-semibold">
                Adquiriu o curso · {timeAgo}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PurchaseNotification;
