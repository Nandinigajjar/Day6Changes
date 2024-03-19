class TV {
    protected brand: string;
    protected channel: number;
    protected price: number;
    protected inches: number;
    protected isOn: boolean;
    protected volume: number;

    constructor(brand: string, channel: number = 1, volume: number = 50) {
        this.brand = brand;
        this.channel = channel;
        this.volume = Math.max(0, Math.min(volume, 100)); 
        this.isOn = false;
        this.price = 0;
        this.inches = 0;
    }

    increaseVolume(): void {
        if (this.volume < 100) {
            this.volume++;
        }
    }

    decreaseVolume(): void {
        if (this.volume > 0) {
            this.volume--;
        }
    }

    setChannel(channel: number): void {
        if (channel >= 1 && channel <= 50) {
            this.channel = channel;
        }
    }

    resetTV(): void {
        this.channel = 1;
        this.volume = 50;
    }

    getStatus(): string {
        return `${this.brand} at channel ${this.channel}, volume ${this.volume}`;
    }
}

class LedTV extends TV {
    screenThickness: number;
    energyUsage: string;
    lifespan: number;
    refreshRate: number;

    constructor(brand: string, screenThickness: number, energyUsage: string, lifespan: number, refreshRate: number) {
        super(brand);
        this.screenThickness = screenThickness;
        this.energyUsage = energyUsage;
        this.lifespan = lifespan;
        this.refreshRate = refreshRate;
    }

    displayDetails(): string {
        return `Brand: ${this.brand}, Screen Thickness: ${this.screenThickness}mm, Energy Usage: ${this.energyUsage}, Lifespan: ${this.lifespan} years, Refresh Rate: ${this.refreshRate}Hz`;
    }
}

class PlasmaTV extends TV {
    viewingAngle: string;
    backlight: boolean;

    constructor(brand: string, viewingAngle: string, backlight: boolean) {
        super(brand);
        this.viewingAngle = viewingAngle;
        this.backlight = backlight;
    }

    displayDetails(): string {
        return `Brand: ${this.brand}, Viewing Angle: ${this.viewingAngle}, Backlight: ${this.backlight ? 'Yes' : 'No'}`;
    }
}

const ledTV = new LedTV("Sony", 10, "High", 5, 120);
console.log(ledTV.displayDetails()); 
ledTV.setChannel(12);
ledTV.increaseVolume();
console.log(ledTV.getStatus()); 

const plasmaTV = new PlasmaTV("LG", "Wide", true);
console.log(plasmaTV.displayDetails()); 
plasmaTV.decreaseVolume();
console.log(plasmaTV.getStatus()); 
