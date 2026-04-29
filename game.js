        let game = {
          score: null,
          totalClicks: 0,
          autoBuyEnabled: false,
          numberUnitEnabled: false,
          goldUpgrades: {},
          specialUpgrades: {},
          specialUpgrades: {
            cursor: { bronze: { purchased: false, unlocked: false, cost: 500 }, silver: { purchased: false, unlocked: false, cost: 2000 }, gold: { purchased: false, unlocked: false, cost: 10000 } },
            handMiner: { bronze: { purchased: false, unlocked: false, cost: 800 }, silver: { purchased: false, unlocked: false, cost: 3000 }, gold: { purchased: false, unlocked: false, cost: 15000 } },
            laserDrill: { bronze: { purchased: false, unlocked: false, cost: 3000 }, silver: { purchased: false, unlocked: false, cost: 10000 }, gold: { purchased: false, unlocked: false, cost: 50000 } },
            autoDrill: { bronze: { purchased: false, unlocked: false, cost: 12000 }, silver: { purchased: false, unlocked: false, cost: 40000 }, gold: { purchased: false, unlocked: false, cost: 200000 } },
            drillBot: { bronze: { purchased: false, unlocked: false, cost: 30000 }, silver: { purchased: false, unlocked: false, cost: 100000 }, gold: { purchased: false, unlocked: false, cost: 500000 } },
            factory: { bronze: { purchased: false, unlocked: false, cost: 75000 }, silver: { purchased: false, unlocked: false, cost: 250000 }, gold: { purchased: false, unlocked: false, cost: 1200000 } },
            miningShip: { bronze: { purchased: false, unlocked: false, cost: 180000 }, silver: { purchased: false, unlocked: false, cost: 600000 }, gold: { purchased: false, unlocked: false, cost: 3000000 } },
            droneSwarm: { bronze: { purchased: false, unlocked: false, cost: 450000 }, silver: { purchased: false, unlocked: false, cost: 1500000 }, gold: { purchased: false, unlocked: false, cost: 7500000 } },
            ship: { bronze: { purchased: false, unlocked: false, cost: 1000000 }, silver: { purchased: false, unlocked: false, cost: 3500000 }, gold: { purchased: false, unlocked: false, cost: 17000000 } },
            orbitalPlatform: { bronze: { purchased: false, unlocked: false, cost: 3000000 }, silver: { purchased: false, unlocked: false, cost: 10000000 }, gold: { purchased: false, unlocked: false, cost: 50000000 } },
            station: { bronze: { purchased: false, unlocked: false, cost: 9000000 }, silver: { purchased: false, unlocked: false, cost: 30000000 }, gold: { purchased: false, unlocked: false, cost: 150000000 } },
            asteroidBase: { bronze: { purchased: false, unlocked: false, cost: 24000000 }, silver: { purchased: false, unlocked: false, cost: 80000000 }, gold: { purchased: false, unlocked: false, cost: 400000000 } },
            dyson: { bronze: { purchased: false, unlocked: false, cost: 60000000 }, silver: { purchased: false, unlocked: false, cost: 200000000 }, gold: { purchased: false, unlocked: false, cost: 1000000000 } },
            quantumMiner: { bronze: { purchased: false, unlocked: false, cost: 240000000 }, silver: { purchased: false, unlocked: false, cost: 800000000 }, gold: { purchased: false, unlocked: false, cost: 4000000000 } },
            starForge: { bronze: { purchased: false, unlocked: false, cost: 750000000 }, silver: { purchased: false, unlocked: false, cost: 2500000000 }, gold: { purchased: false, unlocked: false, cost: 12000000000 } },
            blackHole: { bronze: { purchased: false, unlocked: false, cost: 2400000000 }, silver: { purchased: false, unlocked: false, cost: 8000000000 }, gold: { purchased: false, unlocked: false, cost: 40000000000 } },
            galaxyCore: { bronze: { purchased: false, unlocked: false, cost: 7500000000 }, silver: { purchased: false, unlocked: false, cost: 25000000000 }, gold: { purchased: false, unlocked: false, cost: 120000000000 } },
            universeForge: { bronze: { purchased: false, unlocked: false, cost: 24000000000 }, silver: { purchased: false, unlocked: false, cost: 80000000000 }, gold: { purchased: false, unlocked: false, cost: 400000000000 } },
            multiverseMiner: { bronze: { purchased: false, unlocked: false, cost: 75000000000 }, silver: { purchased: false, unlocked: false, cost: 250000000000 }, gold: { purchased: false, unlocked: false, cost: 1200000000000 } },
            realityEngine: { bronze: { purchased: false, unlocked: false, cost: 240000000000 }, silver: { purchased: false, unlocked: false, cost: 800000000000 }, gold: { purchased: false, unlocked: false, cost: 4000000000000 } },
            timeDilation: { bronze: { purchased: false, unlocked: false, cost: 750000000000 }, silver: { purchased: false, unlocked: false, cost: 2500000000000 }, gold: { purchased: false, unlocked: false, cost: 12000000000000 } },
            omegaPoint: { bronze: { purchased: false, unlocked: false, cost: 2400000000000 }, silver: { purchased: false, unlocked: false, cost: 8000000000000 }, gold: { purchased: false, unlocked: false, cost: 40000000000000 } },
            anywhereDoor: { bronze: { purchased: false, unlocked: false, cost: 9000000000000 }, silver: { purchased: false, unlocked: false, cost: 30000000000000 }, gold: { purchased: false, unlocked: false, cost: 150000000000000 } },
            spiralCore: { bronze: { purchased: false, unlocked: false, cost: 30000000000000 }, silver: { purchased: false, unlocked: false, cost: 100000000000000 }, gold: { purchased: false, unlocked: false, cost: 500000000000000 } },
            moonCell: { bronze: { purchased: false, unlocked: false, cost: 96000000000000 }, silver: { purchased: false, unlocked: false, cost: 320000000000000 }, gold: { purchased: false, unlocked: false, cost: 1600000000000000 } },
            evaExcavator: { bronze: { purchased: false, unlocked: false, cost: 300000000000000 }, silver: { purchased: false, unlocked: false, cost: 1000000000000000 }, gold: { purchased: false, unlocked: false, cost: 5000000000000000 } },
            infinityForge: { bronze: { purchased: false, unlocked: false, cost: 1050000000000000 }, silver: { purchased: false, unlocked: false, cost: 3500000000000000 }, gold: { purchased: false, unlocked: false, cost: 17500000000000000 } },
            akashicPrinter: { bronze: { purchased: false, unlocked: false, cost: 3900000000000000 }, silver: { purchased: false, unlocked: false, cost: 13000000000000000 }, gold: { purchased: false, unlocked: false, cost: 65000000000000000 } }
          },
          goldUpgrades: {},
                  upgrades: {
                cursor: { id: 'cursor', name: '游標礦工', icon: '🖱️', baseCost: 15, baseBonus: 0.5, count: 0, desc: '一隻滑鼠，一個夢想，外加無限點點點。', orbitRadius: 82, speed: 2, goldThreshold: 10, shopUnlocked: true },
                handMiner: { id: 'handMiner', name: '手動礦工', icon: '🧤', baseCost: 32, baseBonus: 1, count: 0, desc: 'KPI 靠雙手，效率靠意志，HR 看了先搖頭。', orbitRadius: 70, speed: 1.8, goldThreshold: 10, shopUnlocked: false },
                laserDrill: { id: 'laserDrill', name: '雷射鑽機', icon: '🔦', baseCost: 100, baseBonus: 3, count: 0, desc: '不是手電筒，是把石頭照到懷疑人生。', orbitRadius: 80, speed: 1.6, goldThreshold: 10, shopUnlocked: false },
                autoDrill: { id: 'autoDrill', name: '自動鑽機', icon: '⚙️', baseCost: 400, baseBonus: 8, count: 0, desc: '你睡你的，它卷它的，24 小時在線內卷。', orbitRadius: 90, speed: 1.4, goldThreshold: 10, shopUnlocked: false },
                drillBot: { id: 'drillBot', name: '鑽探機器人', icon: '🤖', baseCost: 1000, baseBonus: 15, count: 0, desc: 'AI 還沒統治世界，先幫你把礦挖完。', orbitRadius: 100, speed: 1.3, goldThreshold: 10, shopUnlocked: false },
                factory: { id: 'factory', name: '採礦工廠', icon: '🏭', baseCost: 2500, baseBonus: 35, count: 0, desc: '把手作副業直接做成宇宙級量產地獄。', orbitRadius: 110, speed: 1.2, goldThreshold: 10, shopUnlocked: false },
                miningShip: { id: 'miningShip', name: '採礦飛船', icon: '🚀', baseCost: 6000, baseBonus: 70, count: 0, desc: '地表太擠了，直接飛去隔壁隕石帶搶業績。', orbitRadius: 120, speed: 1.1, goldThreshold: 10, shopUnlocked: false },
                droneSwarm: { id: 'droneSwarm', name: '無人機群', icon: '🛸', baseCost: 15000, baseBonus: 150, count: 0, desc: '一台叫方便，一群叫天上突然很有壓力。', orbitRadius: 130, speed: 1.0, goldThreshold: 10, shopUnlocked: false },
                ship: { id: 'ship', name: '星際母艦', icon: '🛰️', baseCost: 35000, baseBonus: 300, count: 0, desc: '這不是船，這是把預算表直接開成旗艦版。', orbitRadius: 140, speed: 0.9, goldThreshold: 10, shopUnlocked: false },
                orbitalPlatform: { id: 'orbitalPlatform', name: '軌道平台', icon: '🪐', baseCost: 100000, baseBonus: 650, count: 0, desc: '在星球頭上蓋工地，主打一個沒有鄰居抗議。', orbitRadius: 150, speed: 0.8, goldThreshold: 10, shopUnlocked: false },
                station: { id: 'station', name: '太空站', icon: '🛰', baseCost: 300000, baseBonus: 1500, count: 0, desc: '把臨時據點住成豪華總部，物流和野心一起升級。', orbitRadius: 160, speed: 0.7, goldThreshold: 10, shopUnlocked: false },
                asteroidBase: { id: 'asteroidBase', name: '小行星基地', icon: '☄️', baseCost: 800000, baseBonus: 3500, count: 0, desc: '別人看到危機，你看到房地產與礦權雙贏。', orbitRadius: 170, speed: 0.6, goldThreshold: 10, shopUnlocked: false },
                dyson: { id: 'dyson', name: '戴森環', icon: '🌞', baseCost: 2000000, baseBonus: 8000, count: 0, desc: '把太陽包起來用，能源部門直接原地封神。', orbitRadius: 180, speed: 0.5, goldThreshold: 10, shopUnlocked: false },
                quantumMiner: { id: 'quantumMiner', name: '量子礦機', icon: '⚛️', baseCost: 8000000, baseBonus: 20000, count: 0, desc: '同時在挖與沒挖之間，直到收益被你觀測。', orbitRadius: 190, speed: 0.4, goldThreshold: 10, shopUnlocked: false },
                starForge: { id: 'starForge', name: '恆星熔爐', icon: '⭐', baseCost: 25000000, baseBonus: 60000, count: 0, desc: '把恆星當鍋爐，這已經不是熱血，是熱核。', orbitRadius: 200, speed: 0.35, goldThreshold: 10, shopUnlocked: false },
                blackHole: { id: 'blackHole', name: '黑洞提取器', icon: '🕳️', baseCost: 85000000, baseBonus: 200000, count: 0, desc: '從黑洞嘴邊搶飯吃，風險管理看了直接登出。', orbitRadius: 220, speed: 0.25, goldThreshold: 10, shopUnlocked: false },
                galaxyCore: { id: 'galaxyCore', name: '銀河核心', icon: '🌌', baseCost: 250000000, baseBonus: 500000, count: 0, desc: '不是接管市場，是接管整條銀河的電表。', orbitRadius: 240, speed: 0.2, goldThreshold: 10, shopUnlocked: false },
                universeForge: { id: 'universeForge', name: '宇宙熔爐', icon: '🌠', baseCost: 800000000, baseBonus: 1500000, count: 0, desc: '把宇宙當材料庫，工藝部門徹底無法下班。', orbitRadius: 260, speed: 0.15, goldThreshold: 10, shopUnlocked: false },
                multiverseMiner: { id: 'multiverseMiner', name: '多元礦機', icon: '🪄', baseCost: 2700000000, baseBonus: 5000000, count: 0, desc: '這個宇宙挖不夠？那就去隔壁宇宙借產能。', orbitRadius: 280, speed: 0.1, goldThreshold: 10, shopUnlocked: false },
                realityEngine: { id: 'realityEngine', name: '現實引擎', icon: '🧠', baseCost: 8200000000, baseBonus: 15000000, count: 0, desc: '當現實不夠賺，就重寫現實，聽起來非常合理。', orbitRadius: 300, speed: 0.08, goldThreshold: 10, shopUnlocked: false },
                timeDilation: { id: 'timeDilation', name: '時間膨脹器', icon: '⏳', baseCost: 27500000000, baseBonus: 50000000, count: 0, desc: '別人一天 24 小時，你的礦工一天 240 小時。', orbitRadius: 320, speed: 0.05, goldThreshold: 10, shopUnlocked: false },
                omegaPoint: { id: 'omegaPoint', name: '歐米伽點', icon: '🔱', baseCost: 112000000000, baseBonus: 200000000, count: 0, desc: '版本答案本人，宇宙看到你都要先說一聲大佬。', orbitRadius: 350, speed: 0.03, goldThreshold: 10, shopUnlocked: false },
                anywhereDoor: { id: 'anywhereDoor', name: '任意門礦倉', icon: '🚪', baseCost: 360000000000, baseBonus: 600000000, count: 0, desc: '今天挖這顆，明天挖隔壁宇宙，物流部門已經無法理解。', orbitRadius: 380, speed: 0.025, goldThreshold: 10, shopUnlocked: false },
                spiralCore: { id: 'spiralCore', name: '天元螺旋核心', icon: '🌀', baseCost: 1200000000000, baseBonus: 1800000000, count: 0, desc: '相信你的礦機，相信相信礦機的你，然後直接鑽穿維度。', orbitRadius: 410, speed: 0.022, goldThreshold: 10, shopUnlocked: false },
                moonCell: { id: 'moonCell', name: '月靈髓主機', icon: '🌙', baseCost: 4000000000000, baseBonus: 5600000000, count: 0, desc: '把月球變成伺服器，順便把算力拿去算哪裡還有礦。', orbitRadius: 440, speed: 0.019, goldThreshold: 10, shopUnlocked: false },
                evaExcavator: { id: 'evaExcavator', name: '初號機採掘體', icon: '🧬', baseCost: 14000000000000, baseBonus: 18000000000, count: 0, desc: '暴走模式一開，礦脈和員工手冊都一起撕開。', orbitRadius: 470, speed: 0.016, goldThreshold: 10, shopUnlocked: false },
                infinityForge: { id: 'infinityForge', name: '無限手套熔爐', icon: '💍', baseCost: 50000000000000, baseBonus: 60000000000, count: 0, desc: '打個響指不是消失一半人口，是帳面收益直接翻頁。', orbitRadius: 500, speed: 0.013, goldThreshold: 10, shopUnlocked: false },
                akashicPrinter: { id: 'akashicPrinter', name: '阿卡西記錄印鈔機', icon: '📚', baseCost: 180000000000000, baseBonus: 200000000000, count: 0, desc: '把宇宙所有已發生與未發生的礦權都先列印成你的。', orbitRadius: 540, speed: 0.01, goldThreshold: 10, shopUnlocked: false }
            }
        };
        const scoreEl = document.getElementById('score');
        const gpsEl = document.getElementById('gps');
        const planetBtn = document.getElementById('planetBtn');
        const upgradesList = document.getElementById('upgrades-list');
        const orbitContainer = document.getElementById('orbitContainer');
        const shopTooltip = document.createElement('div');
        shopTooltip.className = 'shop-tooltip';
        document.body.appendChild(shopTooltip);

        let orbitAngles = {};
        let orbitItems = [];
        let displayedScore = 0;
        let displayedGPS = 0;
        let lastResourceRenderAt = 0;
        const largeNumberUnits = ['', '萬', '億', '兆', '京', '垓', '秭', '穰', '溝', '澗', '正', '載', '極'];
        const FAST_RESOURCE_RENDER_INTERVAL_MS = 50;
        const SLOW_RESOURCE_RENDER_INTERVAL_MS = 100;
        const UI_STATE_REFRESH_INTERVAL_MS = 500;
        const SPECIAL_TIERS = [
            { tier: 'bronze', label: '銅', threshold: 10, color: '#cd7f32', glow: 'drop-shadow(0 0 12px #cd7f32) drop-shadow(0 0 24px rgba(205, 127, 50, 0.95)) brightness(1.6)' },
            { tier: 'silver', label: '銀', threshold: 30, color: '#dfe6eb', glow: 'drop-shadow(0 0 14px #dfe6eb) drop-shadow(0 0 28px rgba(223, 230, 235, 0.98)) brightness(1.7)' },
            { tier: 'gold', label: '金', threshold: 50, color: '#ffd700', glow: 'drop-shadow(0 0 16px #ffd700) drop-shadow(0 0 32px rgba(255, 215, 0, 1)) brightness(1.8)' },
            { tier: 'diamond', label: '鑽石', threshold: 70, color: '#7df9ff', glow: 'drop-shadow(0 0 16px #7df9ff) drop-shadow(0 0 34px rgba(125, 249, 255, 1)) brightness(1.95)' }
        ];
        const BALANCE_SETTINGS = {
            startingEfficiency: 0.033,
            efficiencyDecay: 0.955,
            fullSetBonusMultiplier: 2,
            earlyItemCount: 3,
            lateGameBonusPenaltyPerTier: 0.05,
            costOverrides: {
                handMiner: 32,
                laserDrill: 100,
                drillBot: 550,
                factory: 1335,
                miningShip: 2800,
                droneSwarm: 6300,
                orbitalPlatform: 30000,
                asteroidBase: 176000,
                starForge: 3460000,
                blackHole: 12100000,
                realityEngine: 1090000000,
                omegaPoint: 15938000000,
                spiralCore: 157280000000,
                evaExcavator: 1724540000000
            },
            specialCostMultipliers: {
                bronze: 20,
                silver: 70,
                gold: 250,
                diamond: 900
            }
        };

        class BigNum {
            constructor(mantissa = 0, exponent = 0) {
                this.mantissa = mantissa;
                this.exponent = exponent;
                this.normalize();
            }

            static zero() {
                return new BigNum(0, 0);
            }

            static one() {
                return new BigNum(1, 0);
            }

            static from(value) {
                if (value instanceof BigNum) return value.clone();
                if (typeof value === 'number') return BigNum.fromNumber(value);
                if (typeof value === 'string') return BigNum.fromNumber(Number(value));
                if (value && typeof value === 'object') {
                    if (typeof value.mantissa === 'number' && typeof value.exponent === 'number') {
                        return new BigNum(value.mantissa, value.exponent);
                    }
                    if (typeof value.m === 'number' && typeof value.e === 'number') {
                        return new BigNum(value.m, value.e);
                    }
                }
                return BigNum.zero();
            }

            static fromNumber(value) {
                if (!Number.isFinite(value) || value === 0) return BigNum.zero();
                const exponent = Math.floor(Math.log10(Math.abs(value)));
                const mantissa = value / Math.pow(10, exponent);
                return new BigNum(mantissa, exponent);
            }

            static fromLog10(log10Value) {
                if (!Number.isFinite(log10Value)) return BigNum.zero();
                const exponent = Math.floor(log10Value);
                const mantissa = Math.pow(10, log10Value - exponent);
                return new BigNum(mantissa, exponent);
            }

            static pow(base, exponent) {
                if (base <= 0) return BigNum.zero();
                if (exponent === 0) return BigNum.one();
                return BigNum.fromLog10(Math.log10(base) * exponent);
            }

            clone() {
                return new BigNum(this.mantissa, this.exponent);
            }

            normalize() {
                if (!Number.isFinite(this.mantissa) || this.mantissa === 0) {
                    this.mantissa = 0;
                    this.exponent = 0;
                    return this;
                }

                const sign = this.mantissa < 0 ? -1 : 1;
                let absMantissa = Math.abs(this.mantissa);
                const expAdjust = Math.floor(Math.log10(absMantissa));
                absMantissa /= Math.pow(10, expAdjust);
                this.mantissa = absMantissa * sign;
                this.exponent += expAdjust;

                while (Math.abs(this.mantissa) >= 10) {
                    this.mantissa /= 10;
                    this.exponent += 1;
                }
                while (Math.abs(this.mantissa) < 1 && this.mantissa !== 0) {
                    this.mantissa *= 10;
                    this.exponent -= 1;
                }
                return this;
            }

            isZero() {
                return this.mantissa === 0;
            }

            abs() {
                return new BigNum(Math.abs(this.mantissa), this.exponent);
            }

            toNumber() {
                if (this.isZero()) return 0;
                if (this.exponent > 308) return this.mantissa > 0 ? Infinity : -Infinity;
                return this.mantissa * Math.pow(10, this.exponent);
            }

            toExponential(fractionDigits = 2) {
                if (this.isZero()) return '0';
                return `${this.mantissa.toFixed(fractionDigits)}e+${this.exponent}`;
            }

            shift10(power) {
                if (this.isZero()) return BigNum.zero();
                return new BigNum(this.mantissa, this.exponent + power);
            }

            compare(other) {
                const b = BigNum.from(other);
                if (this.isZero() && b.isZero()) return 0;
                if (this.mantissa < 0 && b.mantissa >= 0) return -1;
                if (this.mantissa >= 0 && b.mantissa < 0) return 1;

                const sign = this.mantissa < 0 ? -1 : 1;
                if (this.exponent !== b.exponent) {
                    return this.exponent > b.exponent ? sign : -sign;
                }
                if (this.mantissa === b.mantissa) return 0;
                return this.mantissa > b.mantissa ? sign : -sign;
            }

            gte(other) {
                return this.compare(other) >= 0;
            }

            gt(other) {
                return this.compare(other) > 0;
            }

            add(other) {
                const b = BigNum.from(other);
                if (this.isZero()) return b;
                if (b.isZero()) return this.clone();

                const expDiff = this.exponent - b.exponent;
                if (expDiff > 15) return this.clone();
                if (expDiff < -15) return b;

                const alignedMantissa = b.mantissa * Math.pow(10, -expDiff);
                return new BigNum(this.mantissa + alignedMantissa, this.exponent);
            }

            subtract(other) {
                const b = BigNum.from(other);
                return this.add(new BigNum(-b.mantissa, b.exponent));
            }

            multiply(other) {
                const b = BigNum.from(other);
                if (this.isZero() || b.isZero()) return BigNum.zero();
                return new BigNum(this.mantissa * b.mantissa, this.exponent + b.exponent);
            }

            multiplyNumber(num) {
                return this.multiply(BigNum.fromNumber(num));
            }

            divide(other) {
                const b = BigNum.from(other);
                if (b.isZero()) return BigNum.zero();
                if (this.isZero()) return BigNum.zero();
                return new BigNum(this.mantissa / b.mantissa, this.exponent - b.exponent);
            }

            roundToInteger() {
                if (this.isZero()) return BigNum.zero();
                if (this.exponent < 0) return BigNum.zero();
                if (this.exponent >= 15) return this.clone();
                return BigNum.fromNumber(Math.round(this.toNumber()));
            }

            toJSON() {
                return { mantissa: this.mantissa, exponent: this.exponent };
            }
        }

        function toBigNum(value) {
            return BigNum.from(value);
        }

        function toApproxNumber(value) {
            if (value instanceof BigNum) return value.toNumber();
            if (value && typeof value === 'object' && typeof value.mantissa === 'number' && typeof value.exponent === 'number') {
                return BigNum.from(value).toNumber();
            }
            return Number(value);
        }

        function ensureSpecialTierShape() {
            syncUpgradeBalance();
            for (let key in game.specialUpgrades) {
                const special = game.specialUpgrades[key];
                if (!special) continue;
                SPECIAL_TIERS.forEach((config) => {
                    if (!special[config.tier]) {
                        special[config.tier] = {
                            purchased: false,
                            unlocked: false,
                            cost: 0
                        };
                    }
                    special[config.tier].cost = Math.max(
                        1,
                        Math.round(game.upgrades[key].baseCost * BALANCE_SETTINGS.specialCostMultipliers[config.tier])
                    );
                });
            }
        }

        function roundDownToNiceCost(value) {
            const num = Math.max(1, Math.floor(value));
            if (num < 100) return num;

            const digits = Math.floor(Math.log10(num)) + 1;
            const step = Math.pow(10, Math.max(1, digits - 2));
            return Math.floor(num / step) * step;
        }

        function syncUpgradeBalance() {
            let efficiency = BALANCE_SETTINGS.startingEfficiency;
            const upgradeEntries = Object.entries(game.upgrades);
            let previousNakedEfficiency = Infinity;
            upgradeEntries.forEach(([key, item], index) => {
                const baseCost = BALANCE_SETTINGS.costOverrides[key]
                    || roundDownToNiceCost(item.baseBonus / efficiency);
                const penaltyTier = Math.max(0, index - BALANCE_SETTINGS.earlyItemCount + 1);
                const bonusPenaltyMultiplier = penaltyTier > 0
                    ? 1 + penaltyTier * BALANCE_SETTINGS.lateGameBonusPenaltyPerTier
                    : 1;

                item.baseBonusRaw = item.baseBonusRaw || item.baseBonus;
                item.baseCost = baseCost;
                const adjustedBonus = item.baseBonusRaw / bonusPenaltyMultiplier;
                let nextBonus = adjustedBonus < 1 ? item.baseBonusRaw : Math.floor(adjustedBonus);
                if (Number.isFinite(previousNakedEfficiency) && nextBonus >= 1) {
                    const maxAllowedBonus = Math.floor((previousNakedEfficiency * baseCost) - 1e-9);
                    if (maxAllowedBonus >= 1) {
                        nextBonus = Math.min(nextBonus, maxAllowedBonus);
                    }
                }
                item.baseBonus = nextBonus;
                previousNakedEfficiency = item.baseBonus / item.baseCost;
                efficiency *= BALANCE_SETTINGS.efficiencyDecay;
            });
        }

        game.score = BigNum.zero();
        ensureSpecialTierShape();

        function toggleGoldShop() {
            const container = document.getElementById('goldShopContainer');
            const toggleBtn = document.getElementById('goldToggle');
            if (container.classList.contains('hidden')) {
                container.classList.remove('hidden');
                toggleBtn.textContent = '收合';
                toggleBtn.classList.add('active');
            } else {
                container.classList.add('hidden');
                toggleBtn.textContent = '展開';
                toggleBtn.classList.remove('active');
            }
        }

        function formatNumber(value) {
            if (value instanceof BigNum || (value && typeof value === 'object' && typeof value.mantissa === 'number' && typeof value.exponent === 'number')) {
                const big = toBigNum(value);
                if (big.isZero()) return '0';
                if (big.exponent >= 12) return big.toExponential(2);
            }
            const num = toApproxNumber(value);
            if (!Number.isFinite(num)) return '0';
            if (Math.abs(num) >= 1e12) return num.toExponential(2);
            if (Math.abs(num) >= 1e6) return num.toLocaleString(undefined, { maximumFractionDigits: 1 });
            if (Math.abs(num) >= 1e3) return num.toLocaleString(undefined, { maximumFractionDigits: 0 });
            if (Math.abs(num) >= 10) return num.toFixed(1).replace(/\.0$/, '');
            return num.toFixed(2).replace(/0+$/, '').replace(/\.$/, '');
        }

        function formatScore(value) {
            const big = toBigNum(value);
            if (big.isZero()) return '0';
            if (game.numberUnitEnabled) return formatUnitNumber(big, true, { minUnitIndex: getDisplayFloorUnitIndex() });
            const num = big.toNumber();
            if (!Number.isFinite(num) || big.exponent >= 12) return big.toExponential(2);
            return Math.floor(num).toLocaleString();
        }

        function formatGps(value) {
            const big = toBigNum(value);
            if (big.isZero()) return '0';
            const num = big.toNumber();
            if (Number.isFinite(num) && Math.abs(num) < 0.001) return '0';
            if (game.numberUnitEnabled) return formatUnitNumber(big, false, { minUnitIndex: getDisplayFloorUnitIndex() });
            return formatNumber(big);
        }

        function formatCostDisplay(value) {
            return game.numberUnitEnabled ? formatUnitNumber(value, true) : formatNumber(value);
        }

        function getDisplayFloorUnitIndex() {
            const gps = getGPS();
            if (gps.isZero()) return 0;
            const highestIndex = Math.floor(gps.abs().exponent / 4);
            return highestIndex >= 2 ? highestIndex - 1 : 0;
        }

        function getResourceRenderIntervalMs() {
            const gps = getGPS();
            return gps.exponent >= 8 ? SLOW_RESOURCE_RENDER_INTERVAL_MS : FAST_RESOURCE_RENDER_INTERVAL_MS;
        }

        function formatUnitNumber(value, integerOnly = false, options = {}) {
            const big = toBigNum(value);
            if (big.isZero()) return '0';

            const sign = big.mantissa < 0 ? '-' : '';
            const absBig = big.abs();
            const highestIndex = Math.floor(absBig.exponent / 4);
            if (highestIndex >= largeNumberUnits.length) {
                return `${sign}${absBig.toExponential(2)}`;
            }

            const minUnitIndex = Math.min(options.minUnitIndex || 0, highestIndex);
            if (highestIndex === 0) {
                const baseValue = absBig.toNumber();
                const baseText = integerOnly ? Math.floor(baseValue).toLocaleString() : formatNumber(baseValue);
                return `${sign}${baseText}`;
            }

            const topUnitPow = highestIndex * 4;
            const leadValue = absBig.shift10(-topUnitPow).toNumber();
            const normalizedLead = Math.max(0, leadValue + 1e-10);
            let primaryChunk = Math.floor(normalizedLead);
            const secondaryUnitIndex = highestIndex - 1;
            let secondaryChunk = secondaryUnitIndex >= 0
                ? Math.floor(((normalizedLead - primaryChunk) * 10000) + 1e-6)
                : 0;

            if (secondaryChunk >= 10000) {
                primaryChunk += 1;
                secondaryChunk = 0;
            }
            const parts = [`${primaryChunk}${largeNumberUnits[highestIndex]}`];

            if (secondaryUnitIndex >= minUnitIndex && secondaryChunk > 0) {
                const secondaryLabel = secondaryUnitIndex === 0 ? '' : largeNumberUnits[secondaryUnitIndex];
                parts.push(`${secondaryChunk}${secondaryLabel}`);
            }

            return `${sign}${parts.join(' ')}`;
        }

        function positionShopTooltip(event) {
            const offset = 14;
            const rect = shopTooltip.getBoundingClientRect();
            let left = event.clientX + offset;
            let top = event.clientY + offset;

            if (left + rect.width > window.innerWidth - 8) {
                left = event.clientX - rect.width - offset;
            }
            if (top + rect.height > window.innerHeight - 8) {
                top = event.clientY - rect.height - offset;
            }

            shopTooltip.style.left = `${Math.max(8, left)}px`;
            shopTooltip.style.top = `${Math.max(8, top)}px`;
        }

        function hideShopTooltip() {
            shopTooltip.classList.remove('visible');
        }

        function bindShopTooltip(el, content) {
            el.removeAttribute('title');
            el.addEventListener('mouseenter', (event) => {
                shopTooltip.innerHTML = content;
                shopTooltip.classList.add('visible');
                positionShopTooltip(event);
            });
            el.addEventListener('mousemove', positionShopTooltip);
            el.addEventListener('mouseleave', hideShopTooltip);
            el.addEventListener('blur', hideShopTooltip);
        }

        function refreshSpecialShopAffordability() {
            const items = document.querySelectorAll('.gold-shop-item[data-special-shop="true"]');
            items.forEach((el) => {
                if (el.dataset.purchased === 'true') {
                    el.classList.remove('disabled');
                    return;
                }
                const cost = el._cost ? toBigNum(el._cost) : BigNum.from(el.dataset.cost || 0);
                el.classList.toggle('disabled', !game.score.gte(cost));
            });
        }

        function init() {
            console.log("遊戲初始化開始");
            loadGame();
            if (game.upgrades.cursor) {
                game.upgrades.cursor.shopUnlocked = true;
            }
            for (let key in game.upgrades) {
                checkSpecialUnlock(key);
            }
            checkShopUnlocks();
            console.log("商店初始化完成");
            renderUpgrades();
            console.log(`商店中有 ${upgradesList.children.length} 個道具`);
            updateOrbits();
            updateGoldShop();
            updateResourceDisplay();
            refreshUiState();
            setInterval(saveGame, 10000);
            let lastTime = performance.now();
            function gameLoop(currentTime) {
                const deltaTime = (currentTime - lastTime) / 1000;
                lastTime = currentTime;
                const gps = getGPS();
                if (!gps.isZero()) {
                    addScore(gps.multiplyNumber(deltaTime));
                }
                maybeRenderResourceDisplay(currentTime);
                requestAnimationFrame(gameLoop);
            }
            requestAnimationFrame(gameLoop);
            setInterval(() => {
                refreshUiState();
                updateOrbitAnimation();
                if (checkAllSpecialUnlocks()) {
                    updateGoldShop();
                }
                if (checkShopUnlocks()) {
                    renderUpgrades();
                }
                if (game.autoBuyEnabled) {
                    autoBuyBestItem();
                }
            }, UI_STATE_REFRESH_INTERVAL_MS);
            console.log("遊戲初始化完成");
        }

        function getGPS() {
          let gps = BigNum.zero();
          for (let key in game.upgrades) {
            const item = game.upgrades[key];
            const multiplier = getSpecialMultiplier(key);

            if (item.count > 0 && item.baseBonus > 0) {
                gps = gps.add(BigNum.fromNumber(item.baseBonus * multiplier).multiplyNumber(item.count));
            }
          }
          return gps;
        }

        function getPurchasedSpecialTiers(id) {
          const special = game.specialUpgrades[id];
          if (!special) return [];

          const tiers = [];
          SPECIAL_TIERS.forEach(({ tier, label }) => {
              if (special[tier] && special[tier].purchased) tiers.push(label);
          });
          return tiers;
        }

        function calculateSpecialMultiplierFromState(special, pendingTier = null) {
          let multiplier = 1;
          let purchasedCount = 0;

          SPECIAL_TIERS.forEach(({ tier }) => {
              const purchased = special[tier] && (special[tier].purchased || tier === pendingTier);
              if (purchased) {
                  multiplier *= 2;
                  purchasedCount++;
              }
          });

          if (purchasedCount === SPECIAL_TIERS.length) {
              multiplier *= BALANCE_SETTINGS.fullSetBonusMultiplier;
          }
          return multiplier;
        }

        function getSpecialMultiplier(id) {
          const special = game.specialUpgrades[id];
          if (!special) return 1;
          return calculateSpecialMultiplierFromState(special);
        }

        function getHighestSpecialTier(id) {
          const special = game.specialUpgrades[id];
          if (!special) return null;
          for (let i = SPECIAL_TIERS.length - 1; i >= 0; i--) {
              const tier = SPECIAL_TIERS[i].tier;
              if (special[tier] && special[tier].purchased) return tier;
          }
          return null;
        }

        function getSpecialGlowFilter(id) {
          const highestTier = getHighestSpecialTier(id);
          const tierConfig = SPECIAL_TIERS.find((config) => config.tier === highestTier);
          if (tierConfig) return tierConfig.glow;
          return '';
        }

        function checkSpecialUnlock(id) {
          const item = game.upgrades[id];
          const special = game.specialUpgrades[id];
          if (!item || !special) return false;

          let changed = false;
          SPECIAL_TIERS.forEach(({ tier, threshold }) => {
              if (special[tier] && item.count >= threshold && !special[tier].unlocked) {
                  special[tier].unlocked = true;
                  changed = true;
              }
          });
          return changed;
        }

        function checkAllSpecialUnlocks() {
          let changed = false;
          for (let key in game.upgrades) {
            if (checkSpecialUnlock(key)) {
              changed = true;
            } 
          }
          return changed;
        }

        function getClickPower() {
          const cursorCount = game.upgrades.cursor.count;
          const multiplier = getSpecialMultiplier('cursor');
  
          return (1 + cursorCount * 0.5) * multiplier;
        }

        function getCost(id) {
            const item = game.upgrades[id];
            const count = Number.isFinite(item.count) ? item.count : 0;
            const rawCost = BigNum.fromNumber(item.baseCost).multiply(BigNum.pow(1.15, count));
            return rawCost.roundToInteger();
        }

        function addScore(amount) {
            game.score = game.score.add(amount);
        }

        planetBtn.addEventListener('mousedown', (e) => {
            const power = getClickPower();
            addScore(power);
            game.totalClicks++;
            const planet = planetBtn.querySelector('.planet');
            planet.classList.remove('planet-flash');
            void planet.offsetWidth;
            planet.classList.add('planet-flash');
            planetBtn.classList.add('clicked');
            setTimeout(() => planetBtn.classList.remove('clicked'), 100);
            createClickParticle(e.clientX, e.clientY, `+${formatNumber(power)}`);
        });

        function createClickParticle(x, y, text) {
            const el = document.createElement('div');
            el.className = 'click-particle';
            el.textContent = text;
            el.style.left = `${x}px`;
            el.style.top = `${y}px`;
            const randomX = (Math.random() - 0.5) * 60;
            const randomY = (Math.random() - 0.5) * 30;
            el.style.transform = `translate(${randomX}px, ${randomY}px)`;
            document.body.appendChild(el);
            setTimeout(() => { el.remove(); }, 800);
        }

        function checkShopUnlocks() {
            let changed = false;
            for (let key in game.upgrades) {
                const item = game.upgrades[key];
                if (item.shopUnlocked) continue;
                const threshold = BigNum.fromNumber(item.baseCost * 0.5);
                if (game.score.gte(threshold)) {
                    item.shopUnlocked = true;
                    changed = true;
                    console.log(`解鎖新道具：${item.name}（需要 ${formatNumber(threshold)} 星能，目前 ${formatNumber(game.score)}）`);
                }
            }
            return changed;
        }

        function getUpgradeSelectionMetrics(key) {
            const item = game.upgrades[key];
            const cost = getCost(key);
            const bonusPerSec = item.baseBonus * getSpecialMultiplier(key);
            const costApprox = cost.toNumber();
            const cpValue = bonusPerSec > 0 ? bonusPerSec / costApprox : 0;
            const deficit = game.score.gte(cost) ? BigNum.zero() : cost.subtract(game.score);
            const currentGps = getGPS();
            const currentGpsApprox = currentGps.toNumber();
            const waitTime = deficit.isZero() ? 0 : (currentGpsApprox > 0 ? deficit.toNumber() / currentGpsApprox : Infinity);
            const paybackTime = bonusPerSec > 0 ? costApprox / bonusPerSec : Infinity;
            const totalTime = waitTime + paybackTime;

            return {
                cost,
                costApprox,
                bonusPerSec,
                cpValue,
                waitTime,
                paybackTime,
                totalTime
            };
        }

        function getSpecialUpgradeSelectionMetrics(key, tier) {
            const special = game.specialUpgrades[key];
            const item = game.upgrades[key];
            if (!special || !item || !special[tier] || special[tier].purchased || !special[tier].unlocked) {
                return null;
            }

            const cost = BigNum.fromNumber(special[tier].cost);
            const currentMultiplier = calculateSpecialMultiplierFromState(special);
            const nextMultiplier = calculateSpecialMultiplierFromState(special, tier);
            const bonusPerSec = item.count > 0
                ? item.count * item.baseBonus * (nextMultiplier - currentMultiplier)
                : 0;
            const cpValue = bonusPerSec > 0 ? bonusPerSec / cost.toNumber() : 0;
            const deficit = game.score.gte(cost) ? BigNum.zero() : cost.subtract(game.score);
            const currentGps = getGPS();
            const currentGpsApprox = currentGps.toNumber();
            const waitTime = deficit.isZero() ? 0 : (currentGpsApprox > 0 ? deficit.toNumber() / currentGpsApprox : Infinity);
            const paybackTime = bonusPerSec > 0 ? cost.toNumber() / bonusPerSec : Infinity;
            const totalTime = waitTime + paybackTime;

            return {
                type: 'special',
                key,
                tier,
                cost,
                costApprox: cost.toNumber(),
                bonusPerSec,
                cpValue,
                waitTime,
                paybackTime,
                totalTime
            };
        }

        function getBestPurchaseCandidate() {
            let bestCandidate = null;
            let bestTotalTime = Infinity;

            for (let key in game.upgrades) {
                const item = game.upgrades[key];
                if (!item.shopUnlocked) continue;

                const upgradeMetrics = getUpgradeSelectionMetrics(key);
                if (upgradeMetrics.totalTime < bestTotalTime) {
                    bestTotalTime = upgradeMetrics.totalTime;
                    bestCandidate = { type: 'upgrade', key, metrics: upgradeMetrics };
                }

                SPECIAL_TIERS.forEach(({ tier }) => {
                    const specialMetrics = getSpecialUpgradeSelectionMetrics(key, tier);
                    if (specialMetrics && specialMetrics.totalTime < bestTotalTime) {
                        bestTotalTime = specialMetrics.totalTime;
                        bestCandidate = { type: 'special', key, tier, metrics: specialMetrics };
                    }
                });
            }

            return bestCandidate;
        }

        function renderUpgrades() {
            checkShopUnlocks();
            upgradesList.innerHTML = '';
            let hasItems = false;
            const bestCandidate = getBestPurchaseCandidate();
            const bestKey = bestCandidate && bestCandidate.type === 'upgrade' ? bestCandidate.key : null;
            const bestTotalTime = bestCandidate ? bestCandidate.metrics.totalTime : Infinity;

            for (let key in game.upgrades) {
                const item = game.upgrades[key];
                if (!item.shopUnlocked) continue;
                hasItems = true;
                const div = document.createElement('div');
                div.className = 'upgrade-item';
                if (key === bestKey && Number.isFinite(bestTotalTime)) {
                    div.classList.add('best-cp');
                }
                div.id = `upgrade-${key}`;
                div.onclick = () => buyUpgrade(key);

                const metrics = getUpgradeSelectionMetrics(key);
                const specialMultiplier = getSpecialMultiplier(key);
                const glowFilter = getSpecialGlowFilter(key);
                const currentBonus = metrics.bonusPerSec;
                const currentCostDisplay = formatCostDisplay(metrics.cost);
                const specialTiers = getPurchasedSpecialTiers(key);
                const specialInfo = specialTiers.length > 0
                  ? `<br><span style="color: #ffd700;">特殊強化：${specialTiers.join(' / ')}（總倍率 x${specialMultiplier}）</span>`
                  : '';
                const showCpInfo = game.autoBuyEnabled;
                const waitInfo = showCpInfo && metrics.waitTime > 0 && Number.isFinite(metrics.waitTime)
                  ? `<br><span style="color: #74b9ff;">預估等待：${formatNumber(metrics.waitTime)} 秒</span>`
                  : '';
                const totalInfo = showCpInfo && Number.isFinite(metrics.totalTime)
                  ? `<br><span style="color: #ffeaa7;">總評估時間：${formatNumber(metrics.totalTime)} 秒</span>`
                  : '';
                const bestChoiceInfo = showCpInfo && key === bestKey
                  ? '<br><span style="color: #ff4757; font-weight: bold;">目前最佳購買選擇</span>'
                  : '';
                const tooltipHtml = `
                    <strong>${item.name}</strong><br>
                    ${item.desc}<br>
                    <span style="color: #55efc4;">目前單體效果：+${formatNumber(currentBonus)} 星能/秒</span><br>
                    <span style="color: #fab1a0;">當前數量：${item.count}</span>${specialInfo}${waitInfo}${totalInfo}${bestChoiceInfo}
                `;

                div.innerHTML = `
                  <div class="icon" style="${glowFilter ? `filter: ${glowFilter};` : ''}">${item.icon}</div>
                  <div class="info">
                    <span class="name">${item.name}</span>
                    <span class="cost">價格: <span id="cost-${key}">${currentCostDisplay}</span></span>
                    <span class="bonus">+${formatNumber(currentBonus)} / 秒${specialMultiplier > 1 ? ' *' : ''}</span>
                  </div>
                  <div class="count-badge" id="count-badge-${key}">0</div>
                `;
                upgradesList.appendChild(div);
                bindShopTooltip(div, tooltipHtml);
            }

            if (!hasItems) {
                console.warn('目前沒有已解鎖的道具可顯示');
            }
        }

        function buyUpgrade(id) {
          const cost = getCost(id);
          if (game.score.gte(cost)) {
            game.score = game.score.subtract(cost);
            game.upgrades[id].count++;
            const specialUnlockedNow = checkSpecialUnlock(id);
            updateDisplay();
            renderUpgrades();
            if (specialUnlockedNow) {
              updateGoldShop();
            }
            updateOrbits();
            updateSideItems();
          }
        }

        function buyGoldUpgrade(id) {
          const goldUpgrade = game.goldUpgrades[id];
          const cost = BigNum.fromNumber(goldUpgrade.cost);
          if (game.score.gte(cost) && !goldUpgrade.purchased) {
            game.score = game.score.subtract(cost);
            goldUpgrade.purchased = true;
            updateDisplay();
            renderUpgrades();
            updateGoldShop();
            updateOrbits();
          }
        }

        function buyGoldUpgrade(id) {
            const goldUpgrade = game.goldUpgrades[id];
            const cost = BigNum.fromNumber(goldUpgrade.cost);
            if (game.score.gte(cost) && !goldUpgrade.purchased) {
                game.score = game.score.subtract(cost);
                goldUpgrade.purchased = true;
                updateDisplay();
                renderUpgrades();
                updateGoldShop();
                updateOrbits();
            }
        }

        function buySpecialUpgrade(id, tier) {
          const special = game.specialUpgrades[id];
          if (!special || special[tier].purchased) return;
  
          const cost = special[tier].cost;
          const tierConfig = SPECIAL_TIERS.find((config) => config.tier === tier);
          if (game.score.gte(BigNum.fromNumber(cost))) {
            game.score = game.score.subtract(BigNum.fromNumber(cost));
            special[tier].purchased = true;
            console.log(`購買 ${game.upgrades[id].name} ${tierConfig ? tierConfig.label : tier} 特殊強化`);
            updateDisplay();
            renderUpgrades();
            updateGoldShop();
            updateSideItems();
          }
        }

        function multiplyScoreByTen() {
          game.score = game.score.multiplyNumber(10);
          updateDisplay();
          renderUpgrades();
          updateGoldShop();
        }

        function updateGoldShop() {
          const goldShopContainer = document.getElementById('goldShopContainer');
          const goldControl = document.querySelector('.gold-control');
          goldShopContainer.innerHTML = '';
          let hasAnyItem = false;
          const bestCandidate = getBestPurchaseCandidate();

          for (let key in game.specialUpgrades) {
            const special = game.specialUpgrades[key];
            const item = game.upgrades[key];
            SPECIAL_TIERS.forEach(({ tier, label, color, threshold, glow }) => {
              const tierState = special[tier];
              if (!tierState) return;
              const cost = tierState.cost;
              if (!special[tier].unlocked) return;
              hasAnyItem = true;
              const el = document.createElement('div');
              el.className = special[tier].purchased ? 'gold-shop-item purchased' : 'gold-shop-item';
              if (
                bestCandidate &&
                bestCandidate.type === 'special' &&
                bestCandidate.key === key &&
                bestCandidate.tier === tier &&
                Number.isFinite(bestCandidate.metrics.totalTime)
              ) {
                el.classList.add('best-cp');
              }
              el.dataset.specialShop = 'true';
              el.dataset.key = key;
              el.dataset.tier = tier;
              el.dataset.cost = String(cost);
              el.dataset.purchased = special[tier].purchased ? 'true' : 'false';
              el._cost = BigNum.fromNumber(cost);
              el.style.borderColor = color;
              const rgb = tier === 'bronze'
                ? '205, 127, 50'
                : tier === 'silver'
                  ? '223, 230, 235'
                  : tier === 'gold'
                    ? '255, 215, 0'
                    : '125, 249, 255';
              el.style.background = `rgba(${rgb}, 0.18)`;
              el.style.boxShadow = `0 0 18px rgba(${rgb}, 0.32)`;
              if (special[tier].purchased) {
                el.innerHTML = `
                  <span class="gold-icon" style="filter: ${glow};">${item.icon}</span>
                  <span class="gold-shop-check">✓</span>
                `;
                bindShopTooltip(el, `${item.name} ${label}特殊強化已購買（效果 x2）`);
              } else {
                if (!game.score.gte(BigNum.fromNumber(cost))) el.classList.add('disabled');
                el.onclick = () => buySpecialUpgrade(key, tier);
                const metrics = getSpecialUpgradeSelectionMetrics(key, tier);
                const showCpInfo = game.autoBuyEnabled && metrics;
                const waitInfo = showCpInfo && metrics.waitTime > 0 && Number.isFinite(metrics.waitTime)
                  ? `<br><span style="color: #74b9ff;">預估等待：${formatNumber(metrics.waitTime)} 秒</span>`
                  : '';
                const totalInfo = showCpInfo && Number.isFinite(metrics.totalTime)
                  ? `<br><span style="color: #ffeaa7;">總評估時間：${formatNumber(metrics.totalTime)} 秒</span>`
                  : '';
                const bestChoiceInfo = showCpInfo && bestCandidate && bestCandidate.type === 'special' && bestCandidate.key === key && bestCandidate.tier === tier
                  ? '<br><span style="color: #ff4757; font-weight: bold;">目前最佳購買選擇</span>'
                  : '';
                el.innerHTML = `
                  <span class="gold-icon" style="filter: ${glow};">${item.icon}</span>
                  <div class="gold-cost" style="color: ${color};">💰 ${formatCostDisplay(cost)}</div>
                `;
                bindShopTooltip(
                  el,
                  `${item.name} ${label}特殊強化（${threshold} 個解鎖，購買後效果 x2）` +
                  `${showCpInfo ? `<br><span style="color: #55efc4;">額外提升：+${formatNumber(metrics.bonusPerSec)} 星能/秒</span>` : ''}` +
                  `${waitInfo}${totalInfo}${bestChoiceInfo}`
                );
              }
              goldShopContainer.appendChild(el);
            });
          }

          goldControl.style.display = hasAnyItem ? 'flex' : 'none';
          goldShopContainer.style.display = hasAnyItem ? 'flex' : 'none';
        }

        function updateResourceDisplay() {
          displayedScore = game.score.toNumber();
          displayedGPS = getGPS().toNumber();
          scoreEl.textContent = formatScore(displayedScore);
          gpsEl.textContent = formatGps(displayedGPS);
        }

        function maybeRenderResourceDisplay(currentTime = performance.now()) {
          if (currentTime - lastResourceRenderAt < getResourceRenderIntervalMs()) return;
          lastResourceRenderAt = currentTime;
          updateResourceDisplay();
        }

        function refreshUiState() {
          checkButtons();
          refreshSpecialShopAffordability();
        }

        function updateDisplay() {
          updateResourceDisplay();
          refreshUiState();
        }

        function checkButtons() {
          for (let key in game.upgrades) {
            const el = document.getElementById(`upgrade-${key}`);
            if (!el) continue;
            const affordable = game.score.gte(getCost(key));
            el.classList.toggle('disabled', !affordable);
            const costEl = document.getElementById(`cost-${key}`);
            if (costEl) costEl.textContent = formatCostDisplay(getCost(key));
            const countBadge = document.getElementById(`count-badge-${key}`);
            if (countBadge) countBadge.textContent = game.upgrades[key].count;
          }
        }

        function updateOrbits() {
          orbitContainer.innerHTML = '';
          orbitItems = [];
          orbitAngles = {};
          const cursorItem = game.upgrades.cursor;
          const glowFilter = getSpecialGlowFilter('cursor');
          if (cursorItem.count > 0) {
            const itemsPerRing = 30;
            for (let i = 0; i < cursorItem.count; i++) {
              const el = document.createElement('div');
              el.className = 'orbit-item appear';
              el.textContent = cursorItem.icon;
              if (glowFilter) {
                el.style.filter = glowFilter;
              }

              const ringIndex = Math.floor(i / itemsPerRing);
              const indexInRing = i % itemsPerRing;
              const itemsInThisRing = Math.min(itemsPerRing, cursorItem.count - ringIndex * itemsPerRing);
              const baseAngle = (Math.PI * 2 * indexInRing) / itemsInThisRing;
              const radius = cursorItem.orbitRadius + ringIndex * 38;
              const itemKey = `cursor_${i}`;
              orbitAngles[itemKey] = baseAngle;

              orbitItems.push({
                el,
                radius,
                itemKey,
                speed: cursorItem.speed * 0.005
              });
              orbitContainer.appendChild(el);
            }
          }
          updateOrbitAnimation();
          updateSideItems();
        }

        function updateOrbitAnimation() {
          const containerWidth = orbitContainer.offsetWidth || 0;
          const containerHeight = orbitContainer.offsetHeight || 0;
          const centerX = containerWidth / 2;
          const centerY = containerHeight / 2;
          orbitItems.forEach((item) => {
            orbitAngles[item.itemKey] += item.speed;
            const x = centerX + Math.cos(orbitAngles[item.itemKey]) * item.radius;
            const y = centerY + Math.sin(orbitAngles[item.itemKey]) * item.radius;
            const rotationAngle = orbitAngles[item.itemKey] * (180 / Math.PI) + 90;
            item.el.style.left = `${x - 17.5}px`;
            item.el.style.top = `${y - 17.5}px`;
            item.el.style.transform = `rotate(${rotationAngle}deg)`;
          });
        }

        function updateSideItems() {
          const container = document.getElementById('sideItemsContainer');
          container.innerHTML = '';
          let hasVisibleItems = false;

          for (let key in game.upgrades) {
            const item = game.upgrades[key];
            if (key === 'cursor') continue;
            const glowFilter = getSpecialGlowFilter(key);
            if (item.count > 0) {
              hasVisibleItems = true;
              const group = document.createElement('div');
              group.className = 'side-item-group';
              const title = document.createElement('div');
              title.style.cssText = 'width: 100%; font-size: 12px; color: #a29bfe; margin-bottom: 4px; text-align: center;';
              title.textContent = `${item.icon} ${item.name} (${item.count})`;
              group.appendChild(title);
              for (let i = 0; i < item.count; i++) {
                const el = document.createElement('div');
                el.className = 'side-item';
                el.textContent = item.icon;
                if (glowFilter) {
                  el.style.filter = glowFilter;
                }
                el.title = `${item.name} x${item.count}`;
                group.appendChild(el);
              }
              container.appendChild(group);
            }
          }

          container.style.display = hasVisibleItems ? 'flex' : 'none';
        }

        function saveGame() {
          const saveData = {
            score: game.score,
            totalClicks: game.totalClicks,
            autoBuyEnabled: game.autoBuyEnabled,
            numberUnitEnabled: game.numberUnitEnabled,
            upgrades: {},
            goldUpgrades: {},
            specialUpgrades: {}
          };

          for (let key in game.upgrades) {
            saveData.upgrades[key] = {
              count: game.upgrades[key].count,
              shopUnlocked: game.upgrades[key].shopUnlocked
            };
          }

          for (let key in game.goldUpgrades) {
            saveData.goldUpgrades[key] = {
              purchased: game.goldUpgrades[key].purchased,
              unlocked: game.goldUpgrades[key].unlocked
            };
          }

          for (let key in game.specialUpgrades) {
            saveData.specialUpgrades[key] = {};
            SPECIAL_TIERS.forEach(({ tier }) => {
              if (!game.specialUpgrades[key][tier]) return;
              saveData.specialUpgrades[key][tier] = {
                purchased: game.specialUpgrades[key][tier].purchased,
                unlocked: game.specialUpgrades[key][tier].unlocked
              };
            });
          }

          localStorage.setItem('spaceMinerSave', JSON.stringify(saveData));
        }

        function loadGame() {
          const saved = localStorage.getItem('spaceMinerSave');
          if (!saved) {
            resetGameData();
            return;
          }

          try {
            const parsed = JSON.parse(saved);
            game.score = parsed.score ? BigNum.from(parsed.score) : BigNum.zero();
            game.totalClicks = parsed.totalClicks || 0;
            game.autoBuyEnabled = !!parsed.autoBuyEnabled;
            game.numberUnitEnabled = !!parsed.numberUnitEnabled;

            if (parsed.goldUpgrades) {
              for (let key in game.goldUpgrades) {
                if (!parsed.goldUpgrades[key]) continue;
                game.goldUpgrades[key].purchased = !!parsed.goldUpgrades[key].purchased;
                game.goldUpgrades[key].unlocked = !!parsed.goldUpgrades[key].unlocked;
              }
            }

            if (parsed.specialUpgrades) {
              for (let key in game.specialUpgrades) {
                if (!parsed.specialUpgrades[key]) continue;
                const savedSpecial = parsed.specialUpgrades[key];
                SPECIAL_TIERS.forEach(({ tier }) => {
                  if (!game.specialUpgrades[key][tier]) return;
                  const savedTier = savedSpecial[tier];
                  game.specialUpgrades[key][tier].purchased = typeof savedTier === 'object' ? !!savedTier.purchased : !!savedTier;
                  game.specialUpgrades[key][tier].unlocked = !!(savedTier && typeof savedTier === 'object' && savedTier.unlocked);
                });
              }
            }

            if (parsed.upgrades) {
              for (let key in game.upgrades) {
                if (!parsed.upgrades[key]) continue;
                const savedCount = Number(parsed.upgrades[key].count);
                game.upgrades[key].count = Number.isFinite(savedCount) && savedCount >= 0 ? savedCount : 0;
                if (parsed.upgrades[key].shopUnlocked !== undefined) {
                  game.upgrades[key].shopUnlocked = parsed.upgrades[key].shopUnlocked;
                }
                checkSpecialUnlock(key);
              }
            }
          } catch (error) {
            console.error('讀取存檔失敗', error);
            resetGameData();
          }

          const checkbox = document.getElementById('autoBuyCheckbox');
          if (checkbox) checkbox.checked = game.autoBuyEnabled;
          const unitCheckbox = document.getElementById('numberUnitCheckbox');
          if (unitCheckbox) unitCheckbox.checked = game.numberUnitEnabled;
        }

        function resetGameData() {
          game.score = BigNum.zero();
          game.totalClicks = 0;
          game.autoBuyEnabled = false;
          game.numberUnitEnabled = false;
          for (let key in game.goldUpgrades) {
            game.goldUpgrades[key].purchased = false;
            game.goldUpgrades[key].unlocked = false;
          }
          for (let key in game.specialUpgrades) {
            SPECIAL_TIERS.forEach(({ tier }) => {
              if (!game.specialUpgrades[key][tier]) return;
              game.specialUpgrades[key][tier].purchased = false;
              game.specialUpgrades[key][tier].unlocked = false;
            });
          }
          for (let key in game.upgrades) {
            game.upgrades[key].count = 0;
            game.upgrades[key].shopUnlocked = key === 'cursor';
          }
        }

        function toggleAutoBuy() {
            const checkbox = document.getElementById('autoBuyCheckbox');
            game.autoBuyEnabled = checkbox.checked;
            console.log(`自動購買已${game.autoBuyEnabled ? '開啟' : '關閉'}`);
            hideShopTooltip();
            renderUpgrades();
            updateDisplay();
            saveGame();
        }

        function toggleNumberUnits() {
            const checkbox = document.getElementById('numberUnitCheckbox');
            game.numberUnitEnabled = checkbox.checked;
            console.log(`星能單位顯示已${game.numberUnitEnabled ? '開啟' : '關閉'}`);
            hideShopTooltip();
            renderUpgrades();
            updateGoldShop();
            updateDisplay();
            saveGame();
        }

        function autoBuyBestItem() {
            if (!game.autoBuyEnabled) return;
            const bestCandidate = getBestPurchaseCandidate();
            if (!bestCandidate) return;

            if (bestCandidate.type === 'upgrade' && game.score.gte(getCost(bestCandidate.key))) {
                buyUpgrade(bestCandidate.key);
                console.log(`自動購買：${game.upgrades[bestCandidate.key].name}`);
            }

            if (bestCandidate.type === 'special') {
                const specialCost = BigNum.fromNumber(game.specialUpgrades[bestCandidate.key][bestCandidate.tier].cost);
                if (game.score.gte(specialCost)) {
                    buySpecialUpgrade(bestCandidate.key, bestCandidate.tier);
                    const tierConfig = SPECIAL_TIERS.find((config) => config.tier === bestCandidate.tier);
                    console.log(`自動購買：${game.upgrades[bestCandidate.key].name} ${tierConfig ? tierConfig.label : bestCandidate.tier}特殊強化`);
                }
            }
        }

        function resetGame() {
            if (confirm("確定要重置遊戲嗎？這會清除目前的進度。")) {
                localStorage.removeItem('spaceMinerSave');
                location.reload();
            }
        }

        init();
