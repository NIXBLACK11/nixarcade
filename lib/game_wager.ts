/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/game_wager.json`.
 */
export type GameWager = {
  "address": "2bTvcg86gf1M8QbGaF9Xqtx3YCyNQzYCeGjMeNXaTF2q",
  "metadata": {
    "name": "gameWager",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Created with Anchor"
  },
  "instructions": [
    {
      "name": "endGame",
      "discriminator": [
        224,
        135,
        245,
        99,
        67,
        175,
        121,
        252
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "winner",
          "writable": true
        },
        {
          "name": "gameAccount",
          "writable": true
        },
        {
          "name": "firstPlayer",
          "writable": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "gameCode",
          "type": "u8"
        },
        {
          "name": "gameType",
          "type": "u8"
        },
        {
          "name": "winner",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "initializeGame",
      "discriminator": [
        44,
        62,
        102,
        247,
        126,
        208,
        130,
        215
      ],
      "accounts": [
        {
          "name": "firstPlayer",
          "writable": true,
          "signer": true
        },
        {
          "name": "gameAccount",
          "writable": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "gameCode",
          "type": "u8"
        },
        {
          "name": "gameType",
          "type": "u8"
        },
        {
          "name": "wager",
          "type": "u64"
        },
        {
          "name": "numPlayers",
          "type": "u8"
        }
      ]
    },
    {
      "name": "joinGame",
      "discriminator": [
        107,
        112,
        18,
        38,
        56,
        173,
        60,
        128
      ],
      "accounts": [
        {
          "name": "player",
          "writable": true,
          "signer": true
        },
        {
          "name": "gameAccount",
          "writable": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "gameCode",
          "type": "u8"
        },
        {
          "name": "gameType",
          "type": "u8"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "game",
      "discriminator": [
        27,
        90,
        166,
        125,
        74,
        100,
        121,
        18
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "invalidAmount",
      "msg": "Invalid amount"
    },
    {
      "code": 6001,
      "name": "gameAlreadyFull",
      "msg": "Game is already full"
    },
    {
      "code": 6002,
      "name": "playerAlreadyJoined",
      "msg": "Player has already joined this game"
    },
    {
      "code": 6003,
      "name": "invalidGameType",
      "msg": "Invalid game type"
    },
    {
      "code": 6004,
      "name": "invalidWinner",
      "msg": "Invalid winner"
    },
    {
      "code": 6005,
      "name": "gameDataMismatch",
      "msg": "Invalid game data provided in final instruction"
    },
    {
      "code": 6006,
      "name": "invaildNumberPlayers",
      "msg": "Invalid number of players"
    },
    {
      "code": 6007,
      "name": "firstPlayerMismatch",
      "msg": "First player account does not match game creator"
    },
    {
      "code": 6008,
      "name": "notAuthorized",
      "msg": "This account is not authorized to close the game"
    }
  ],
  "types": [
    {
      "name": "game",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "playerIndex",
            "type": "u8"
          },
          {
            "name": "numPlayers",
            "type": "u8"
          },
          {
            "name": "players",
            "type": {
              "array": [
                "pubkey",
                4
              ]
            }
          },
          {
            "name": "wager",
            "type": "u64"
          },
          {
            "name": "gameType",
            "type": "u8"
          },
          {
            "name": "gameCode",
            "type": "u8"
          }
        ]
      }
    }
  ]
};
