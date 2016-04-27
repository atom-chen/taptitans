var skins;
(function (skins) {
    var components;
    (function (components) {
        var GuildShopToggleBtnSkin = (function (_super) {
            __extends(GuildShopToggleBtnSkin, _super);
            function GuildShopToggleBtnSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [50, 90]);
                this.elementsContent = [];
                this.disabledAndSelectSkin_i();
                this.downAndSelectedSkin_i();
                this.upAndSelectedSkin_i();
                this.disabledSkin_i();
                this.downSkin_i();
                this.upSkin_i();
                this.states = [
                    new egret.gui.State("up", [
                        new egret.gui.AddItems("upSkin", "", "last", "")
                    ]),
                    new egret.gui.State("down", [
                        new egret.gui.AddItems("downSkin", "", "last", "")
                    ]),
                    new egret.gui.State("disabled", [
                        new egret.gui.AddItems("disabledSkin", "", "last", "")
                    ]),
                    new egret.gui.State("upAndSelected", [
                        new egret.gui.AddItems("upAndSelectedSkin", "", "last", "")
                    ]),
                    new egret.gui.State("downAndSelected", [
                        new egret.gui.AddItems("downAndSelectedSkin", "", "last", "")
                    ]),
                    new egret.gui.State("disabledAndSelected", [
                        new egret.gui.AddItems("disabledAndSelectSkin", "", "last", "")
                    ])
                ];
            }
            var __egretProto__ = GuildShopToggleBtnSkin.prototype;
            Object.defineProperty(__egretProto__, "skinParts", {
                get: function () {
                    return GuildShopToggleBtnSkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            __egretProto__.disabledSkin_i = function () {
                var t = new egret.gui.UIAsset();
                this.disabledSkin = t;
                this.__s(t, ["percentHeight", "horizontalCenter", "source", "verticalCenter", "percentWidth"], [100, 0, "guild_tab_shop_off", 0, 100]);
                return t;
            };
            __egretProto__.downAndSelectedSkin_i = function () {
                var t = new egret.gui.UIAsset();
                this.downAndSelectedSkin = t;
                this.__s(t, ["percentHeight", "horizontalCenter", "source", "verticalCenter", "percentWidth"], [100, 0, "guild_tab_shop_on", 0, 100]);
                return t;
            };
            __egretProto__.downSkin_i = function () {
                var t = new egret.gui.UIAsset();
                this.downSkin = t;
                this.__s(t, ["percentHeight", "horizontalCenter", "source", "verticalCenter", "percentWidth"], [100, 0, "guild_tab_shop_on", 0, 100]);
                return t;
            };
            __egretProto__.disabledAndSelectSkin_i = function () {
                var t = new egret.gui.UIAsset();
                this.disabledAndSelectSkin = t;
                this.__s(t, ["percentHeight", "horizontalCenter", "source", "verticalCenter", "percentWidth"], [100, 0, "guild_tab_shop_on", 0, 100]);
                return t;
            };
            __egretProto__.upAndSelectedSkin_i = function () {
                var t = new egret.gui.UIAsset();
                this.upAndSelectedSkin = t;
                this.__s(t, ["percentHeight", "horizontalCenter", "source", "verticalCenter", "percentWidth", "x", "y"], [100, 0, "guild_tab_shop_on", 0, 100, 10, 10]);
                return t;
            };
            __egretProto__.upSkin_i = function () {
                var t = new egret.gui.UIAsset();
                this.upSkin = t;
                this.__s(t, ["percentHeight", "horizontalCenter", "source", "verticalCenter", "percentWidth"], [100, 0, "guild_tab_shop_off", 0, 100]);
                return t;
            };
            GuildShopToggleBtnSkin._skinParts = ["disabledAndSelectSkin", "downAndSelectedSkin", "upAndSelectedSkin", "disabledSkin", "downSkin", "upSkin"];
            return GuildShopToggleBtnSkin;
        })(egret.gui.Skin);
        components.GuildShopToggleBtnSkin = GuildShopToggleBtnSkin;
        GuildShopToggleBtnSkin.prototype.__class__ = "skins.components.GuildShopToggleBtnSkin";
    })(components = skins.components || (skins.components = {}));
})(skins || (skins = {}));