# Linux/Network
## L3
`ip addr`
`ip addr show dev enp0s25`
`ip addr add dev enp0s25 192.168.1.2/24`
`ip addr del dev enp0s25 192.168.1.2/24`

### IPを確認する
`ip address show [dev enp0s25] [master virbr0] [type veth] [up]`
#### コマンド解説

### IPを設定する
`ip address add dev enp0s25 192.168.1.2/24 [valid_lft 300 label]`
#### コマンド解説
* `address`, `a`
  - L3アドレスへのコマンドであることを指定するサブコマンド
* `add`, `a`
  - IPアドレスの追加を行うことを指定するサブコマンド
* `dev enp0s25`
  - 指定したIPアドレスをどのデバイスに割り当てるか指定するサブコマンド
  - サブコマンドの後にデバイス名(例: enp0s25, eth0, wlan0)を指定する
* `valid_lft 300`
  - そのIPが有効な時間を秒で指定する
  - この時間が過ぎると設定されたIPアドレスは消失する
  - `forever`指定で自動で消失しないようにできる
* `label`
  - このIPをメインで使用するIPとして指定する
  - `ifconfig`のような「デバイスごとのIPを一つしか表示できないアプリケーション」で表示されるIPを指定するのに使う

## Sublinks