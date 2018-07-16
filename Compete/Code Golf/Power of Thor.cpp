#include<iostream>

using namespace std;

int main() {
  int x,y,X,Y;
  cin>>x>>y>>X>>Y; cin.ignore();
  while(1) {
    int remainingTurns;
    cin >> remainingTurns; cin.ignore();
    cout << (y>Y?(Y++,"S"):y<Y?(Y--,"N"):"") << (x>X?(X++,"E"):x<X?(X--,"W"):"") << endl;
  }
}
