module.exports = {
    app: {
        px: 'XXX',
        token: 'NzMwNzI4NTQxOTY4MTM4MjUx.Xwbt_A.RYyR5lgcZ8JANtg65XKto9sXzxs',
        playing: 'by Zerio ❤️'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
